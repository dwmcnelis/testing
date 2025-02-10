export const promise = (message: string, reject = false, fail = false): Promise<string> => {
  if (reject) {
    return Promise.reject(`${message} failed`)
  } else if (fail) {
    throw new Error(`${message} failed`)
  } else {
    return Promise.resolve(message)
  }
}
