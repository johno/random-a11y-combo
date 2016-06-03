'use strict'

var randomHexColor = require('random-hex-color')
var getContrast = require('get-contrast')

module.exports = function (colorOne) {
  colorOne = colorOne || randomHexColor()
  var colorTwo = randomHexColor()

  while (!getContrast.isAccessible(colorOne, colorTwo)) {
    colorTwo = randomHexColor()
  }

  return [colorOne, colorTwo]
}
