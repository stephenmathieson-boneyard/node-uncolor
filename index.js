
/**
 * Module dependencies.
 */

var Transform = require('stream').Transform
  || require('readable-stream').Transform;

exports = module.exports = uncolor;
exports.expr = /\x1B\[\??\d+(;\d+){0,2}[mlhABCDEFGK]/g;

/**
 * Remove ANSI escape codes from the given `String`,
 * or `Buffer`.
 *
 * @api public
 * @param {String|Buffer} [data]
 * @return {String}
 */

function uncolor(data) {
  if (!arguments.length) return transformer();
  return String(data).replace(exports.expr, '');
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
