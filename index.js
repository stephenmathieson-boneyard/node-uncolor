
/**
 * Remove ANSI escape codes from the given `str`
 *
 * @api public
 * @param {String} str
 * @return {String}
 */
exports = module.exports = function uncolor(str) {
  return str.replace(exports.expr, '');
};

/**
 * Expose the regex
 *
 * @api private
 * @type {RegExp}
 */
exports.expr = /\x1B\[\d+m/g;
