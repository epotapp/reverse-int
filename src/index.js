module.exports = function reverse (n) {
  let arr = n.toString().split('').reverse()
  if (arr.includes('-')) {
      arr.pop(); return arr.join('')
    } else return arr.join('') 
}

