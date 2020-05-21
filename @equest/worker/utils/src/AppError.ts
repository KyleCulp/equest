export class AppError extends Error {
  /**
   * Handle fullstack error messages, allows pg/sql errors to reach the client
   *
   * @param name - The first input number
   * @param code - Magic error code numbers defined in docs/errors.md
   */
  public readonly name: string;
  public readonly code: string;

  // You have to set the __proto__ to Error, and use
  // Object.setPrototypeOf in order to have a proper custom error type in JS.
  // Because JS/TS are dumb sometimes, and all three are needed to make this
  // work in all browsers.
  __proto__ = Error;
  constructor(name: string, code: string, description: string) {
    super(description);
    Object.setPrototypeOf(this, AppError.prototype); // restore prototype chain

    this.name = name;
    this.code = code;

    Error.captureStackTrace(this);
  }
}
