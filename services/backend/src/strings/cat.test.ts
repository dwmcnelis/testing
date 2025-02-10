import { cat } from './cat'

// describe() defines a suite of tests
//
describe('cat', () => {
  // it() defines a test in the suite
  //
  it('should cat two strings', () => {
    // expect() defines an expectation
    //
    // toBe() is one of many matchers provided by expect
    expect(cat('the', ' quick')).toBe('the quick')
  })

  it('should cat three strings', () => {
    expect(cat('the', ' quick', ' brown')).toBe('the quick brown')
  })

  it('should cat numbers and strings', () => {
    // cast to pass none number, this should fail
    expect(cat('the', 2 as unknown as string)).toBe('the 2 brown')
  })

  // skip() marks test to be skipped
  it.skip('should skip this test (for now)', () => {
    expect(cat('the', ' quick', ' brown', ' fox')).toBe('the quick brown fox')
  })

  it('should cat no-empty/empty strings', () => {
    expect(cat('the', '', 'fox')).toBe('thefox')
  })
})

/* output from runner:

 FAIL   testing  src/cat.test.ts
  ● cat › should cat numbers and strings

    expect(received).toBe(expected) // Object.is equality

    Expected: "the 2 brown"
    Received: "the2"

      19 |   it('should cat numbers and strings', () => {
      20 |     // cast to pass none number, this should fail
    > 21 |     expect(cat('the', 2 as unknown as string)).toBe('the 2 brown');
         |                                                ^
      22 |   });
      23 |
      24 |   // skip() marks test to be skipped

      at Object.<anonymous> (src/cat.test.ts:21:48)

Test Suites: 1 failed, 1 skipped, 1 of 2 total
Tests:       1 failed, 6 skipped, 3 passed, 10 total
Snapshots:   0 total
Time:        0.32 s, estimated 1 s
Ran all test suites.

*/
