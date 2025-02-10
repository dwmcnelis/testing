import CheckboxWithLabel from './CheckboxWithLabel'
import JWKS from './JWKS'

export const App = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>SPA</h1>
      </div>
      <div>Hello</div>
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
      <JWKS uri="https://www.googleapis.com/oauth2/v3/certs" />
    </>
  )
}

export default App
