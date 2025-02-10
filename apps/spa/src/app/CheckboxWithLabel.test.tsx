import { cleanup, fireEvent, render } from '@testing-library/react'
import CheckboxWithLabel from './CheckboxWithLabel'

// describe() defines a suite of tests
//
describe('CheckboxWithLabel', () => {
  // afterEach runs after each test in suite
  afterEach(cleanup)

  // it() defines a test in the suite
  //
  it('changes the text after click', () => {
    // render() - renders components in testing dom
    const { queryByLabelText, getByLabelText } = render(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

    // expect() defines an expectation
    // queryByLabelText() query testing dom element by label text(matcher)
    // toBeTruthy() is one of many matchers provided by expect, true if truthy
    expect(queryByLabelText(/off/i)).toBeTruthy()

    // fireEvent.click() fires a click event on element in the testing dom
    fireEvent.click(getByLabelText(/off/i))

    // expect() defines an expectation
    // queryByLabelText() query testing dom element by label text(matcher)
    // toBeTruthy() is one of many matchers provided by expect, true if truthy
    expect(queryByLabelText(/on/i)).toBeTruthy()
  })
})
