import { ValidationError } from 'express-validator';

class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Extending a built in class:
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}

export default RequestValidationError;
