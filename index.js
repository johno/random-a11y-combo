'use strict'

const randomHexColor = require('random-hex-color')
const getContrast = require('get-contrast')

module.exports = () => {
  const colorOne = randomHexColor()
  let colorTwo = randomHexColor()

  while (!getContrast.isAccessible(colorOne, colorTwo)) {
    colorTwo = randomHexColor()
  }

  return [colorOne, colorTwo]
}
