import { Db } from './db'

// describe() defines a suite of tests
//
describe('db', () => {
  let db: Db

  // beforeEach runs before each test in suite
  beforeEach(async () => {
    db = new Db('postgres://postgres:123456@127.0.0.1:5432/dummy')
    await db.connect()
  })

  // it() defines a test in the suite
  //
  it('should find record using mocked select method', async () => {
    // jest.fn() mocks the select method of db instance with a test double implementation
    db.select = jest.fn(
      (): Promise<Record<string, unknown>[]> => Promise.resolve([{ id: '1', email: 'someone@example.com' }])
    )

    // expect() defines an expectation
    // resolves promise
    // toStrictEqual() is one of many matchers provided by expect, true if object deep equal
    await expect(db.findById('users', '1')).resolves.toStrictEqual({
      id: '1',
      email: 'someone@example.com'
    })
  })

  it('should find no record when select method not mocked', async () => {
    // expect() defines an expectation
    // resolves promise
    // toBeUndefined() is one of many matchers provided by expect, true if undefined
    await expect(db.findById('users', '1')).resolves.toBeUndefined()
  })
})
