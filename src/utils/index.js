
export function randomiser(range, usedArr) {
  let num
  do {
    num = Math.floor((Math.random() * range) + 1) - 1
  } while (usedArr.indexOf(num) !== -1);
  return num
}