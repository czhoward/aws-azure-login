interface ErrorConstructor {
  captureStackTrace(thisArg: any, func: any): void;
}

export class CLIError extends Error {
  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, CLIError);
  }
}
