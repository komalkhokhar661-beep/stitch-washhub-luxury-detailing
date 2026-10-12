import mongoose from 'mongoose';
import { Booking } from '../models/Booking.js';

// Local memory store for fallback when MongoDB Atlas is connecting or not yet configured
const inMemoryBookings = [];

// Helper to generate bespoke atelier reference codes
const generateReferenceCode = () => {
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `WH-${timestamp}-${randomStr}`;
};

export const createBooking = async (req, res, next) => {
  // Always guarantee JSON content type header
  res.setHeader('Content-Type', 'application/json');

  try {
    const {
      fullName,
      phoneNumber,
      carModel,
      serviceTier,
      preferredDate,
      custodyShift,
      specialRequirements,
    } = req.body || {};

    // Strict backend validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Full name is required',
      });
    }

    if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.trim().length < 7) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'A valid phone number is required (minimum 7 digits)',
      });
    }

    if (!carModel || typeof carModel !== 'string' || carModel.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Vehicle specification is required (e.g. Porsche 911 GT3 / BMW M4)',
      });
    }

    const validTiers = [
      'premium-wash',
      'interior-deep',
      'car-detailing',
      'ceramic-coating',
      'paint-protection',
      'multi-stage-polishing',
      'essential-care-pkg',
      'premium-care-pkg',
      'luxury-detailing-pkg',
    ];
    if (!serviceTier || typeof serviceTier !== 'string' || !validTiers.includes(serviceTier)) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'A valid preservation service tier is required',
      });
    }

    if (!preferredDate) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Preferred intake date is required',
      });
    }

    const referenceCode = generateReferenceCode();
    const parsedDate = new Date(preferredDate);

    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Preferred intake date is not a valid date format',
      });
    }

    const validShifts = ['morning', 'evening', 'full-day'];
    const resolvedShift = validShifts.includes(custodyShift) ? custodyShift : 'morning';

    const bookingPayload = {
      referenceCode,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      carModel: carModel.trim(),
      serviceTier,
      preferredDate: parsedDate,
      custodyShift: resolvedShift,
      specialRequirements: specialRequirements ? String(specialRequirements).trim() : '',
      status: 'provisionally_locked',
      studioLocation: 'Samalkha Atelier, Panipat 132101',
    };

    let savedBooking = null;

    // Check MongoDB connection status: 1 = connected, 2 = connecting
    const isMongoConnected = mongoose.connection.readyState === 1;
    const isMongoConnecting = mongoose.connection.readyState === 2;

    if (isMongoConnected || (isMongoConnecting && process.env.MONGODB_URI)) {
      try {
        const bookingDoc = new Booking(bookingPayload);
        savedBooking = await bookingDoc.save();
      } catch (dbError) {
        console.error('[WashHub API] MongoDB save error:', dbError);
        // Requirement 3: Do NOT hide the real backend error
        if (dbError.name === 'ValidationError') {
          const messages = Object.values(dbError.errors || {}).map((val) => val.message);
          return res.status(400).json({
            success: false,
            error: 'Validation Error',
            message: messages.join(', ') || dbError.message,
          });
        }
        if (dbError.code === 11000) {
          return res.status(409).json({
            success: false,
            error: 'Duplicate Key Error',
            message: 'A reservation with this reference code already exists. Please submit again.',
          });
        }
        return res.status(500).json({
          success: false,
          error: dbError.name || 'Database Error',
          message: `Database booking persistence failed: ${dbError.message}`,
        });
      }
    } else if (!process.env.MONGODB_URI) {
      // Local development fallback store when MONGODB_URI is not configured
      const inMemoryDoc = {
        ...bookingPayload,
        _id: 'mem_' + Date.now(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      inMemoryBookings.unshift(inMemoryDoc);
      savedBooking = inMemoryDoc;
    } else {
      // MONGODB_URI was configured, but connection is disconnected
      console.warn('[WashHub API] MONGODB_URI is configured but database connection is disconnected');
      return res.status(503).json({
        success: false,
        error: 'Database Unavailable',
        message: 'Database connection is temporarily unavailable. Please retry shortly.',
      });
    }

    if (!savedBooking) {
      return res.status(500).json({
        success: false,
        error: 'Booking Persistence Error',
        message: 'Unable to commit reservation bay allocation.',
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Bay slot provisionally locked',
      data: {
        referenceCode: savedBooking.referenceCode,
        fullName: savedBooking.fullName,
        carModel: savedBooking.carModel,
        serviceTier: savedBooking.serviceTier,
        preferredDate: savedBooking.preferredDate,
        custodyShift: savedBooking.custodyShift,
        status: savedBooking.status,
        studioLocation: savedBooking.studioLocation,
        createdAt: savedBooking.createdAt,
      },
    });
  } catch (error) {
    console.error('[WashHub API] createBooking unexpected error:', error);
    // Requirement 1: Make POST /api/bookings endpoint ALWAYS return a valid JSON response
    // Requirement 3: Do NOT hide the real backend error
    res.setHeader('Content-Type', 'application/json');
    return res.status(error.statusCode || error.status || 500).json({
      success: false,
      error: error.name || 'Server Error',
      message: error.message || 'An unexpected error occurred while processing reservation.',
    });
  }
};

export const getBookings = async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    if (mongoose.connection.readyState === 1) {
      const bookings = await Booking.find()
        .sort({ createdAt: -1 })
        .limit(20)
        .select('referenceCode fullName carModel serviceTier preferredDate custodyShift status createdAt');
      return res.json({
        success: true,
        count: bookings.length,
        data: bookings,
      });
    }

    return res.json({
      success: true,
      count: inMemoryBookings.length,
      data: inMemoryBookings.slice(0, 20),
    });
  } catch (error) {
    console.error('[WashHub API] getBookings error:', error);
    res.setHeader('Content-Type', 'application/json');
    return res.status(error.status || 500).json({
      success: false,
      error: error.name || 'Server Error',
      message: error.message || 'Failed to retrieve bookings',
    });
  }
};
