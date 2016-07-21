# argshift

argshift generates a fucntion with arguments shifted one to the left, into context

## installation

```
npm install argshift
```

## usage

An explanatory example
```
var capitalize = String.prototype.toUpperCase
console.log(capitalize('loud noises'))

// -> throws:
//      TypeError: String.prototype.toUpperCase called on null or undefined

var capitalize = String.prototype.toUpperCase.call
console.log(capitalize('loud noises'))

// -> throws:
//      TypeError: capitalize is not a function

var capitalize = String.prototype.toUpperCase.call.bind(String.prototype.toUpperCase)
console.log(capitalize('loud noises'))

// -> prints:
//      LOUD NOISES

// and yes, this works, but its crazy long and odd to reason about
// so instead you can now

var capitalize = argshift(String.prototype.toUpperCase)
console.log(capitalize('loud noises!!!'))

//      LOUD NOISES!!!
```

A more examply example

```
var argshift = require('argshift')
var reduce = argshift(Array.prototype.reduce)

// now reduce works on both arrays and strings!
reduce([1,2,3], (a,b) => a+b)
> reduce('asdf', (a,b) => b+a)
'fdsa'
```

## license

MIT
