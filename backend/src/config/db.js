import mongoose from 'mongoose';

// Connection lifecycle event listeners
mongoose.connection.on('connected', () => {
  console.log('[WashHub DB] Mongoose connection established.');
});

mongoose.connection.on('error', (err) => {
  console.error('[WashHub DB] Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('[WashHub DB] Mongoose connection disconnected.');
});

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('[WashHub DB] MONGODB_URI not provided. Running in resilient local in-memory persistence mode.');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[WashHub DB] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`[WashHub DB] Connection warning: ${error.message}. Running with fallback memory store.`);
    return false;
  }
};
