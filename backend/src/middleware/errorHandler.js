export const errorHandler = (err, req, res, next) => {
  console.error('[WashHub API Error]:', err);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: messages.join(', '),
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      error: 'Duplicate Key Error',
      message: 'A record with this identifier already exists',
    });
  }

  // CastError (invalid ObjectId / date)
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      error: 'Cast Error',
      message: `Invalid format for field: ${err.path}`,
    });
  }

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    error: err.name || 'Server Error',
    message: err.message || 'Internal atelier server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
