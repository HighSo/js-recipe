const number = 100
let n = 0
while (n < number) {
  if (n % 3 === 0) {
    console.log("fizz")
  } else if (n % 5 === 0) {
    console.log("buzz")
  } else if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizzbuzz")
  } else {
    console.log(n)
  }
  n++
}
