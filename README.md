# intensify.js
Make it true, make it false!
Intensifies it's argument:
Makes Truthy stuff true, and Falsy stuff False

Todo: Add casual mode, and intense mode (default)

**Install**
```bash
$ npm i -S intensify
```
```js
import {intensify} from 'intensify';

intensify({})
=> false
intensify('')
=> false
intensify(undefined)
=> false

//and so on! Very good 
```