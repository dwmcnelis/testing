import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, act } from '@testing-library/react'
import JWKS from './JWKS'

// describe() defines a suite of tests
//
describe('JWKS', () => {
  const server = setupServer(
    // capture "GET https://example.com/jwks" requests
    http.get('https://example.com/jwks', () => {
      // mock response as JSON body
      return HttpResponse.json({
        keys: [
          {
            alg: 'RS256',
            kid: '1',
            kty: 'RSA',
            e: 'AQAB',
            n: 'mocked1...',
            use: 'sig'
          },
          {
            alg: 'RS256',
            kid: '2',
            kty: 'RSA',
            e: 'AQAB',
            n: 'mocked2...',
            use: 'sig'
          }
        ]
      })
    })
  )

  // beforeAll() - establish request mocking before suite tests
  beforeAll(() => server.listen())

  // afterEach() - reset request handers after each test
  afterEach(() => server.resetHandlers())

  // afterAll() - close mock server after suite tests
  afterAll(() => server.close())

  // it() defines a test in the suite
  //
  it('handles server fetch', async () => {
    await act(async () => {
      render(<JWKS uri="https://example.com/jwks" />)
    })

    const label = screen.getByText(/Keys:/)
    expect(label).toBeTruthy()

    const li1 = screen.getByText(/mocked1.../)
    expect(li1).toBeTruthy()

    const li2 = screen.getByText(/mocked2.../)
    expect(li2).toBeTruthy()
  })

  it('handles server error', async () => {
    server.use(
      // override the initial "GET https://example.com/jwks" request handler
      // to return a 500 Server Error
      http.get('https://example.com/jwks', () => {
        return new HttpResponse(null, { status: 500 })
      })
    )

    await act(async () => {
      render(<JWKS uri="https://example.com/jwks" />)
    })

    const p = screen.getByText(/Error:/)
    expect(p).toBeTruthy()
  })
})
