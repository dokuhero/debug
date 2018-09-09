# Debug

Simple Javascript debug utility to display log (like console.log) in Node environment as long as `process.env.NODE_ENV` is set to `true`. Inspired by https://github.com/visionmedia/debug.

## Installation

Using npm:

```
npm i -S @dokuhero/debug
```

or yarn:

```
yarn add @dokuhero/debug
```

## Usage

```javascript
import { Debug } from '@dokuhero/debug'

// create new debug instance
const debug = Debug('foo')

// use debug to display log message
debug('the log message here...')
```

## License

MIT
