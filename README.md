# tact-js
Haptic Device

### Prerequisite
bHaptics Player has to be installed (window)

### Examples
```
# Open public/index.html directory in browser (Example code)
```

### How to use

You can import the generated bundle to use the whole library generated by this starter:

```javascript
import HapticPlayer from 'tact-js'

HapticPlayer.submit();
```

Additionally, you can import the transpiled modules from `dist/lib` in case you have a modular library:

```javascript

HapticPlayer.on('change', function(msg) {
    if (msg.status === 'Connected') {
        console.log('connected');
    }
});

var points = [{
    Index : 10,
    Intensity : 100
}];
HapticPlayer.submitDot('dot', 'Left', points, 1000);
```

### NPM scripts

 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### FAQ

#### `Array.prototype.from`, `Promise`, `Map`... is undefined?

TypeScript or Babel only provides down-emits on syntactical features (`class`, `let`, `async/await`...), but not on functional features (`Array.prototype.find`, `Set`, `Promise`...), . For that, you need Polyfills, such as [`core-js`](https://github.com/zloirock/core-js) or [`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/) (which extends `core-js`).

For a library, `core-js` plays very nicely, since you can import just the polyfills you need:

```javascript
import "core-js/fn/array/find"
import "core-js/fn/string/includes"
import "core-js/fn/promise"
```
