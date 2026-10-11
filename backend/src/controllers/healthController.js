import mongoose from 'mongoose';

export const getHealth = (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'standalone_resilient';

  return res.status(200).json({
    status: 'ok',
    service: 'WashHub Luxury Detailing & Paint Protection Atelier API',
    location: 'Samalkha, Panipat, Haryana 132101',
    environment: process.env.NODE_ENV || 'development',
    database: dbStatus,
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
  });
};
