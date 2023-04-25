class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export class RateLimitError extends HttpError {
  constructor(message: string) {
    super(429, message);
  }
}
