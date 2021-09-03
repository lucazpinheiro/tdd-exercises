const assert = require('assert')
const convert = require('./convert')

describe('Roman numerals converter', () => {
  it('Should convert I to 1', () => {

    const convertedNumber = convert('I')

    assert.strictEqual(convertedNumber, 1)
  })

  it('Should convert V to 5', () => {
    const convertedNumber = convert('V')

    assert.strictEqual(convertedNumber, 5)
  })

  it('Should convert two numbers like XX', () => {
    const convertedNumber = convert('XX')

    assert.strictEqual(convertedNumber, 20)
  })

  it('Should convert four numbers like XXII', () => {
    const convertedNumber = convert('XXII')

    assert.strictEqual(convertedNumber, 22)
  })

  it('Should convert numbers like IX', () => {
    const convertedNumber = convert('IX')

    assert.strictEqual(convertedNumber, 9)
  })

  it('Should convert complex numbers like XIV', () => {
    const convertedNumber = convert('XIV')

    assert.strictEqual(convertedNumber, 14)
  })
})