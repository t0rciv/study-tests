/* export default number => {
  let factorial = 1

  for (let i = number; i >= 1; i--) {
    factorial = factorial * i
  }

  return factorial
}
 */

// CÓDIGO REFATORADO

const getFactorial = number => {
  if (number === 1) {
    return 1
  }

  return number * getFactorial(number - 1)
}

export default getFactorial
