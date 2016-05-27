'use strict'

var randomHexColor = require('random-hex-color')
var getContrast = require('get-contrast')

module.exports = function randomA11yCombo () {
  var colorOne = randomHexColor()
  var colorTwo = randomHexColor()

  while (!getContrast.isAccessible(colorOne, colorTwo)) {
    colorTwo = randomHexColor()
  }

  return [colorOne, colorTwo]
}
