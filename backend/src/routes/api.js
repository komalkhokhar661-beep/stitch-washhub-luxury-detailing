import { Router } from 'express';
import { getHealth } from '../controllers/healthController.js';
import { createBooking, getBookings } from '../controllers/bookingController.js';
import { getServices, getPackages } from '../controllers/catalogController.js';

const router = Router();

// Health check endpoint (Strict requirement)
router.get('/health', getHealth);

// Booking endpoints
router.post('/bookings', createBooking);
router.get('/bookings', getBookings);

// Catalog endpoints
router.get('/services', getServices);
router.get('/packages', getPackages);

export default router;
