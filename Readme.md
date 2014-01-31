
# uncolor

  Remove ANSI escape codes from strings, buffers and streams.

[![Build Status](https://travis-ci.org/stephenmathieson/node-uncolor.png?branch=master)](https://travis-ci.org/stephenmathieson/node-uncolor)

## Installation

    $ npm install uncolor

## API

### uncolor(str)
 
  Remove ANSI escape codes from the given `str`.

### uncolor(buf)
  
  Remove ANSI escape codes from the given `buf`.

### uncolor()

  Create a `Transform` stream, which removes ANSI escape codes from all data.


## Examples

  Uncolor a `String` or `Buffer`:

```js
var uncolor = require('uncolor')

uncolor('\033[1mhello world\033[00m')
// => 'hello world'
```

  Uncolor a `Readable` stream:

```js
var uncolor = require('uncolor');

var readable = getReadableStream();

readable.pipe(uncolor()).pipe(process.stdout);
```

## CLI Usage (npm install -g uncolor)

```sh
$ echo -e "\033[1mhello world\033[00m" | uncolor
hello world
```

## License 

(The MIT License)

Copyright (c) 2014 stephen mathieson &lt;me@stephenmathieson.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
