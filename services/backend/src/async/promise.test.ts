import { promise } from './promise'

// describe() defines a suite of tests
//
describe('promise', () => {
  // it() defines a test in the suite
  //
  it('should return async message "fetched"', () => {
    // return promise
    return promise('fetched').then((data) => {
      // expect() defines an expectation
      //
      // toBe() is one of many matchers provided by expect
      expect(data).toBe('fetched')
    })
  })

  it('should return async message "fetched"', async () => {
    // expect() defines an expectation
    // await promise
    // toBe() is one of many matchers provided by expect
    expect(await promise('fetched')).toBe('fetched')
  })

  it('should fail with an error', async () => {
    // expect 1 assertion
    expect.assertions(1)
    try {
      await promise('fetched', false, true)
    } catch (error) {
      // expect() defines an expectation
      //
      // toBeInstanceOf() is one of many matchers provided by expect, true if instances of class
      expect(error).toBeInstanceOf(Error)
    }
  })

  it('should return async message "fetched"', async () => {
    // expect() defines an expectation
    // resolves promise
    // toBe() is one of many matchers provided by expect
    await expect(promise('fetched')).resolves.toBe('fetched')
  })

  it('should reject with "fetched failed"', () => {
    // expect 1 assertion
    expect.assertions(1)
    return promise('fetched', true).catch((error) =>
      // expect() defines an expectation
      //
      // toBe() is one of many matchers provided by expect
      expect(error).toBe('fetched failed')
    )
  })
})

/* output from runner:


*/
