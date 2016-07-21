'use strict'
var argshift = require('./argshift')
  , reduce = argshift(Array.prototype.reduce)
  , capitalize = argshift(String.prototype.toUpperCase)
  , bPlusA = (a, b) => b + a


if(
  reduce([1,2,3,4], bPlusA) !== 10
) { throw new Error('should equal 10') }
if(
  reduce('potato', bPlusA) !== 'otatop'
) { throw new Error('should reverse word') }
if(
  capitalize('potato') !== 'POTATO'
) { throw new Error('should capitalize') }

console.log('pass')
