const Os = require('os')
const Path = require('path')
const globby = require('globby')


exports.path = function coercePath(base, value) {
  if (typeof value !== 'string') {
    return value
  }

  if (base[0] === '~') {
    base = Path.join(Os.homedir(), base.slice(1))
  }

  if (value[0] === '~') {
    value = Path.join(Os.homedir(), value.slice(1))
  }

  return Path.resolve(base, value)
}

exports.glob = function coerceGlob(base, value) {
  return globby.sync(value, {
    cwd: base,
    absolute: true,
  })
}
