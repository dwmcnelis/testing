export class SomeError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'SomeError'
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class OtherError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'SomeError'
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export const boom = (message: string, type = '', fail = true): void => {
  if (fail) {
    if (type === 'SomeError') {
      throw new SomeError(message)
    } else if (type === 'OtherError') {
      throw new OtherError(message)
    } else {
      throw new Error(message)
    }
  }
}
