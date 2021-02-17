const [, , ...w] = process.argv
let newString = []
let ll, lf
for (let i of w) {
  i.toLowerCase()
  i.split('')
  for (let ii of i) {
    if (ii == '1' ||
      ii == '2' ||
      ii == '3' ||
      ii == '4' ||
      ii == '5' ||
      ii == '6' ||
      ii == '7' ||
      ii == '8' ||
      ii == '9' ||
      ii == '0') {
      return;
    }
    if (i.length >= 10 && w.length > 1) {
      lf = i[0]
      ll = i[i.length - 1]
      newString.push(`${lf}${i.length - 2}${ll}`)

      if (newString.length > w.length - 1) {
        console.log(newString.join(' '));
        return;
      }
    }
  }
  newString.push(i)
}
console.log(newString.join(' '));