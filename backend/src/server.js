import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import apiRoutes from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Database connection
connectDB();

// Security Headers
app.use(helmet());

// CORS configuration
const configuredOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''))
  .filter(Boolean);

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  ...configuredOrigins,
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman, render health check)
      if (!origin) return callback(null, true);
      const cleanOrigin = origin.replace(/\/$/, '');
      if (
        process.env.NODE_ENV === 'development' ||
        !process.env.FRONTEND_URL ||
        allowedOrigins.includes(cleanOrigin) ||
        cleanOrigin.endsWith('.pages.dev') ||
        cleanOrigin.endsWith('.onrender.com')
      ) {
        return callback(null, true);
      }
      return callback(null, false);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
  })
);

// Request Logging
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 200 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(429).json({
      success: false,
      error: 'Rate Limit Exceeded',
      message: 'Too many requests from this IP. Please try again after 15 minutes.',
    });
  },
});
app.use('/api', limiter);

// Body parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Mount API routes
app.use('/api', apiRoutes);

// Root fallback
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    service: 'WashHub Luxury Detailing & Paint Protection Atelier API',
    location: 'Samalkha, Panipat, Haryana 132101',
    status: 'online',
    endpoints: {
      health: '/api/health',
      bookings: '/api/bookings',
      services: '/api/services',
      packages: '/api/packages',
    },
  });
});

// 404 handler for undefined API routes or any unmatched route - ALWAYS return valid JSON
app.use((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: `API route ${req.method} ${req.originalUrl} does not exist`,
  });
});

// Centralized error handling middleware
app.use(errorHandler);

// Start server
const HOST = process.env.HOST || '0.0.0.0';
const server = app.listen(PORT, HOST, () => {
  console.log(`[WashHub Backend] Server active in ${NODE_ENV} mode at http://${HOST}:${PORT}`);
  console.log(`[WashHub Backend] Health endpoint available at http://localhost:${PORT}/api/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('[WashHub Backend] SIGTERM received. Gracefully closing HTTP server...');
  server.close(() => {
    console.log('[WashHub Backend] Server closed.');
    process.exit(0);
  });
});

export default app;
