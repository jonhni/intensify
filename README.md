# intensify.js
Make it true, make it false!
Intensifies it's argument:
falsy stuff to false, truthy stuff to true

Todo: Add intense mode that makes it as false as possible! (empty objects, empty arrays, functions that returns falsy stuff)

**Install**
```bash
$ npm i -S intensify
```
```js
import {intensify} from 'intensify';

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