import { useState, useEffect } from 'react'

// Get https://www.googleapis.com/oauth2/v3/certs
interface JWK {
  kty: string // Key type (e.g., "RSA", "EC", "oct")
  alg?: string // Algorithm (e.g., "RS256", "ES256") - Optional
  use?: string // Key use (e.g., "sig", "enc") - Optional
  kid?: string // Key ID - Optional
  x5u?: string // X.509 URL - Optional
  x5c?: string[] // X.509 certificate chain - Optional
  x5t?: string // X.509 certificate SHA-1 thumbprint - Optional
  'x5t#S256'?: string // X.509 certificate SHA-256 thumbprint - Optional
  n?: string // Modulus for RSA keys
  e?: string // Exponent for RSA keys
  d?: string // Private exponent for RSA/EC keys - Optional
  p?: string // First prime factor for RSA keys - Optional
  q?: string // Second prime factor for RSA keys - Optional
  dp?: string // RSA CRT exponent of first factor - Optional
  dq?: string // RSA CRT exponent of second factor - Optional
  qi?: string // RSA CRT coefficient - Optional
  crv?: string // Curve for EC keys (e.g., "P-256", "P-384", "P-521")
  x?: string // X coordinate for EC keys
  y?: string // Y coordinate for EC keys
  k?: string // Symmetric key - Optional
}

interface Error {
  code?: number
  message?: string
  stack?: string[]
}

interface JWKSProps {
  uri: string
}

export default function JWKS({ uri }: JWKSProps) {
  const [keys, setKeys] = useState<JWK[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      if (uri) {
        try {
          const response = await fetch(uri)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const json = await response.json()
          setKeys(json?.keys)
          setError(null)
        } catch (e) {
          setError(e as Error)
          setKeys(null)
        } finally {
          setLoading(false)
        }
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <label>Keys:</label>
      {keys && (
        <ul>
          {keys.map((key: JWK) => (
            <li key={key.kid}>{JSON.stringify(key, null, '\t')}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
