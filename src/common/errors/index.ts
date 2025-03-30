export class ResponseError extends Error {
  name: string;
  message: string;
  code: number;
  constructor(code: number, name: string, message: string) {
    super();
    this.code = code;
    this.name = name;
    this.message = message;
  }
}

export class BadRequestError extends ResponseError {
  detail: any;
  constructor(message: string, detail?: any) {
    super(400, 'BadRequest', message);
    this.detail = detail;
  }
}

export class AuthError extends ResponseError {
  constructor(message: string) {
    super(401, 'AuthError', message);
  }
}

export class NotFoundError extends ResponseError {
  constructor(message: string) {
    super(404, 'NotFound', message);
  }
}

export class InternalServerError extends ResponseError {
  constructor(message: string) {
    super(500, 'ServerError', message);
  }
}
