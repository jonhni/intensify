const test = require('ava');
const intensify = require('./index.js');

// returns false
test("intensify(false) => false", t => {
  t.is(intensify(false), false);
});

test("intensify('') => false", t => {
  t.is(intensify(''), false);
});

test("intensify(undefined) => false", t => {
  t.is(intensify(undefined), false);
});

test("intensify(0) => false", t => {
  t.is(intensify(0), false);
});

test("intensify(null) => false", t => {
  t.is(intensify(null), false);
});

test("intensify(NaN) => false", t => {
  t.is(intensify(NaN), false);
});

// all other cases return true
