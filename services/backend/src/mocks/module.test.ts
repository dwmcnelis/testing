import axios from 'axios'

// Mocks entire imported module
jest.mock('axios')

// describe() defines a suite of tests
//
describe('module', () => {
  // it() defines a test in the suite
  //
  it('should find record using mocked select method', async () => {
    const users = [{ name: 'Bob' }]

    // mockImplementation() mocks get method
    ;(axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(() => Promise.resolve({ data: users }))

    return axios.get('https:/example.com/api/users').then(({ data }) => expect(data).toEqual(users))
  })
})
