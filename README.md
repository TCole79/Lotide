# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. It was published as part of the Week 1 learning tasks.

## Usage

**Install it:**

`npm install @tristancole/lotide`

**Require it:**

`const _ = require('@tristancole/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function(eqArrays)`: eqArrays takes in two arrays and returns true or false, based on a perfect match.
* `function(assertEqual)`: assertEqual compares two values and asserts if they are equal or not.
* `function(assertArraysEqual)`: will take in two arrays and console.log an appropriate message to the console.
* `function(head)`: description returns index item 0 of an array.
* `function(tail)`: description slices index 0 out of an arrayy, returning what is remaining.
* `function(middle)`: description which will take in an array and return the middle-most element(s) of the given array.