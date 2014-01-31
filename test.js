
var uncolor = require('./index');
var Readable = require('stream').Readable
  || require('readable-stream').Readable;

describe('uncolor', function () {
  it('should expose its regexp', function () {
    uncolor.expr.should.be.an.instanceof(RegExp);
  });

  describe('given a string', function () {
    it('should remove ANSI escape codes', function () {
      uncolor('\x1B[31mhello world\x1B[39m').should.be.equal('hello world');
    });

    it('should remove octal literal escape codes', function () {
      uncolor('\033[31mhello world\033[31m').should.be.equal('hello world');
    });

    it('should handle line removal codes', function () {
      uncolor('\u001b[2Khello world').should.be.equal('hello world');
    });

    it('should handle hiding/showing the cursor', function () {
      // hide
      uncolor('\u001b[?25lhello world').should.be.equal('hello world');
      // show
      uncolor('\u001b[?25hhello world').should.be.equal('hello world');
    });

    it('should handle cursor movement', function () {
      // beginning of line
      uncolor('\u001b[0Ghello world').should.be.equal('hello world');
      // up
      uncolor('\u001b[0Ahello world').should.be.equal('hello world');
      // down
      uncolor('\u001b[0Bhello world').should.be.equal('hello world');
      // forward
      uncolor('\u001b[0Chello world').should.be.equal('hello world');
      // back
      uncolor('\u001b[0Dhello world').should.be.equal('hello world');
      // next line
      uncolor('\u001b[0Ehello world').should.be.equal('hello world');
    });
  });

  describe('given a buffer', function () {
    it('should remove all ANSI escape stuff', function () {
      var b = new Buffer('\u001b[31mhello world\u001b[0m');
      uncolor(b).should.be.equal('hello world');
    });
  });

  describe('given a stream', function () {
    it('should remove all ANSI escape stuff', function (done) {
      var rs = new Readable;
      rs.push('\u001b[31mhello world\u001b[0m');
      rs.push(null);
      rs.pipe(uncolor()).on('data', function (chunk) {
        String(chunk).should.be.equal('hello world');
        done();
      });
    });
  });
});
