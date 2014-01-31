
/**
 * Module dependencies.
 */

var Transform = require('stream').Transform
  || require('readable-stream').Transform;

exports = module.exports = uncolor;
exports.expr = /\x1B\[\??\d+[mlhABCDEFGK]/g;

/**
 * Remove ANSI escape codes from the given `str`
 * or `Readable` stream.
 *
 * @api public
 * @param {String|Readable} [str]
 * @return {String}
 */

function uncolor(str) {
  if (!arguments.length) return transformer();
  return String(str).replace(exports.expr, '');
}

/**
 * Simple Transform stream for removing ANSI stuff
 * from streams.
 *
 * @api private
 * @return {Transform}
 */

function transformer() {
  var transform = new Transform;
  transform._transform = function (chunk, encoding, done) {
    done(null, uncolor(chunk));
  };
  return transform;
}
