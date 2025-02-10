import { boom, SomeError, OtherError } from './boom'

// describe() defines a suite of tests
//
describe('boom', () => {
  // it() defines a test in the suite
  //
  it('should throw any error, like SomeError', () => {
    // expect() defines an expectation
    //
    // toThrow() is one of many matchers provided by expect, true if any error thrown
    expect(() => boom('failed', 'SomeError')).toThrow()
  })

  it('should throw any error, like OtherError', () => {
    // expect() defines an expectation
    //
    // toThrow() is one of many matchers provided by expect, true if any error thrown
    expect(() => boom('failed', 'OtherError')).toThrow()
  })

  it('should throw SomeError error', () => {
    // expect() defines an expectation
    //
    // toThrow(SomeError) is one of many matchers provided by expect, true if SomeError thrown
    expect(() => boom('failed', 'SomeError')).toThrow(SomeError)
  })

  it('should throw OtherError error', () => {
    // expect() defines an expectation
    //
    // toThrow(OtherError) is one of many matchers provided by expect, true if OtherError thrown
    expect(() => boom('failed', 'OtherError')).toThrow()
  })

  it('should not throw any error, like SomeError', () => {
    // expect() defines an expectation
    //
    // not reverses matcher
    // toThrow() is one of many matchers provided by expect, true if any error thrown
    expect(() => boom('failed', 'SomeError', false)).not.toThrow()
  })

  it('should not throw any error, like OtherError', () => {
    // expect() defines an expectation
    //
    // not reverses matcher
    // toThrow() is one of many matchers provided by expect, true if any error thrown
    expect(() => boom('failed', 'OtherError', false)).not.toThrow()
  })

  it('should not throw any error, like SomeError', () => {
    // expect() defines an expectation
    //
    // not reverses matcher
    // toThrow(SomeError) is one of many matchers provided by expect, true if SomeError thrown
    expect(() => boom('failed', 'SomeError')).not.toThrow(SomeError)
  })

  it('should not throw any error, like OtherError', () => {
    // expect() defines an expectation
    //
    // not reverses matcher
    // toThrow(OtherError) is one of many matchers provided by expect, true if OtherError thrown
    expect(() => boom('failed', 'SomeError')).not.toThrow(OtherError)
  })
})

/* output from runner:

 FAIL   testing  src/errors/boom.test.ts
  ● boom › should not throw any error, like SomeError

    expect(received).not.toThrow(expected)

    Expected constructor: not SomeError

    Received message: "failed"

          18 |   if (fail) {
          19 |     if (type === 'SomeError') {
        > 20 |       throw new SomeError(message);
             |             ^
          21 |     } else if (type === 'OtherError') {
          22 |       throw new OtherError(message);
          23 |     } else {

          at boom (src/errors/boom.ts:20:13)
          at src/errors/boom.test.ts:57:22
          at Object.<anonymous> (../../node_modules/expect/build/toThrowMatchers.js:74:11)
          at Object.throwingMatcher [as toThrow] (../../node_modules/expect/build/index.js:320:21)
          at Object.<anonymous> (src/errors/boom.test.ts:57:51)

      55 |     // not reverses matcher
      56 |     // toThrow(SomeError) is one of many matchers provided by expect, true if SomeError thrown
    > 57 |     expect(() => boom('failed', 'SomeError')).not.toThrow(SomeError);
         |                                                   ^
      58 |   });
      59 |
      60 |   it('should not throw any error, like OtherError', () => {

      at Object.<anonymous> (src/errors/boom.test.ts:57:51)


Test Suites: 1 failed, 2 skipped, 1 of 3 total
Tests:       1 failed, 10 skipped, 7 passed, 18 total
Snapshots:   0 total
Time:        0.336 s, estimated 1 s
Ran all test suites.

*/
