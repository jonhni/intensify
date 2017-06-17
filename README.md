# intensify.js

Intensifies it's argument:
falsy stuff to false, truthy stuff to true

**Install**
```bash
$ npm i -S intensify
```
```js

const intensify = require('intensify');

intensify(0)
=> false
intensify(null)
=> false
intensify('')
=> false
intensify(undefined)
=> false

//and so on! Very good 
```