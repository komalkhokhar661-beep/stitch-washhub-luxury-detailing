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
  try {
    const {
      fullName,
      phoneNumber,
      carModel,
      serviceTier,
      preferredDate,
      custodyShift,
      specialRequirements,
    } = req.body;

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
        message: 'A valid phone number is required',
      });
    }

    if (!carModel || typeof carModel !== 'string' || carModel.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Vehicle specification is required (e.g. Porsche 911 GT3 / BMW M4)',
      });
    }

    if (!serviceTier || typeof serviceTier !== 'string') {
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

    const bookingPayload = {
      referenceCode,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      carModel: carModel.trim(),
      serviceTier,
      preferredDate: parsedDate,
      custodyShift: custodyShift || 'morning',
      specialRequirements: specialRequirements ? specialRequirements.trim() : '',
      status: 'provisionally_locked',
      studioLocation: 'Samalkha Atelier, Panipat 132101',
    };

    let savedBooking = null;

    // Save to MongoDB if connected
    if (mongoose.connection.readyState === 1) {
      const bookingDoc = new Booking(bookingPayload);
      savedBooking = await bookingDoc.save();
    } else {
      // In-memory fallback
      const inMemoryDoc = {
        ...bookingPayload,
        _id: 'mem_' + Date.now(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      inMemoryBookings.unshift(inMemoryDoc);
      savedBooking = inMemoryDoc;
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
    next(error);
  }
};

export const getBookings = async (req, res, next) => {
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
    next(error);
  }
};
