const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
const checkA = val + 2;
const checkB = func(val)
return checkA.value === checkB.value ? func(val) :'inconsistent results'

}

console.log(checkConsistentOutput(addTwo, 10));
