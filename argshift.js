"use strict"
module.exports = function argshift(cb) { return cb.call.bind(cb) }
