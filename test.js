
var uncolor = require('./index');

describe('uncolor()', function () {

  it('should remove ANSI escape codes', function () {
    uncolor('\x1B[31mhello world\x1B[39m').should.be.equal('hello world');
  });

  it('should remove octal literal escape codes', function () {
    uncolor('\033[31mhello world\033[31m').should.be.equal('hello world');
  });

  it('should expose its regexp', function () {
    uncolor.expr.should.be.an.instanceof(RegExp);
  });
});
