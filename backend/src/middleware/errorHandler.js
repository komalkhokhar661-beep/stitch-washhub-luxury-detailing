export const errorHandler = (err, req, res, next) => {
  console.error('[WashHub API Error]:', err);

  if (res.headersSent) {
    return next(err);
  }

  // Ensure JSON response header
  res.setHeader('Content-Type', 'application/json');

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors || {}).map((val) => val.message);
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: messages.join(', ') || err.message,
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(409).json({
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

  // Body parser JSON SyntaxError
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({
      success: false,
      error: 'Invalid JSON',
      message: 'Request payload contains malformed JSON',
    });
  }

  const statusCode = err.statusCode || err.status || (res.statusCode >= 400 ? res.statusCode : 500);
  return res.status(statusCode).json({
    success: false,
    error: err.name || 'Server Error',
    message: err.message || 'Internal atelier server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
