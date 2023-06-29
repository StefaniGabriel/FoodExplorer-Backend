class AppError extends Error {
  constructor(message, statusCode) {
    super(message.string || message);
    this.name = 'AppError';
    this.statusCode = statusCode || 400;
    this.isOperational = true;
  }
}
module.exports = AppError;