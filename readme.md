# argshift

argshift takes a function, and returns the same function but with its arguments shifted one to the left, and into context

## installation

```bash
npm install argshift
```

## usage

An explanatory example
```js

// using a builtin method sucks.

var capitalize = String.prototype.toUpperCase
capitalize('loud noises')

// -> throws: TypeError: String.prototype.toUpperCase called on null or undefined

var capitalize = String.prototype.toUpperCase.call
capitalize('loud noises')

// -> throws: TypeError: capitalize is not a function

var capitalize = String.prototype.toUpperCase.call.bind(String.prototype.toUpperCase)
capitalize('loud noises')

// -> LOUD NOISES

// and yes, this works
// but its crazy long and odd to reason about
// so instead you can just..

var capitalize = argshift(String.prototype.toUpperCase)
capitalize('loud noises!!!')

// -> LOUD NOISES!!!
```

A more examply example

```js
var argshift = require('argshift')
var reduce = argshift(Array.prototype.reduce)

// now reduce works on both arrays and strings!
reduce([1,2,3,4], (a,b) => a+b)
// -> 10
reduce('asdf', (a,b) => b+a)
// -> 'fdsa'
```

## license

MIT
