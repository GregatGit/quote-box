
export function randomiser(range, usedArr, lastIndex) {
  let noInfiniteLoop = 8000 // this function can never go forever
  let num
  do {
    num = Math.floor(Math.random() * range)
    noInfiniteLoop--
    if (noInfiniteLoop === 0){
      return 1
    }
  } while (usedArr.indexOf(num) !== -1 || lastIndex === num)
  return num
}