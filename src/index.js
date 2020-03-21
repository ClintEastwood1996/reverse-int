module.exports = function reverse (n) {
  return Number.parseInt(n.toString(10).replace(/-/,"").split("").reverse().join(""))
}

