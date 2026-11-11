//array
const myArr = [0, 1, 2, 3, 4, 5, true, "Tushar"]
//different tyoes of arrays
const myHeroes = ["shaktimaan", "Mr. X"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[6])

//Array methods

myArr.push(6)
myArr.pop()
myArr.unshift(0)
myArr.shift(0)
//myArr.reverse()
console.log(myArr)
console.log(myArr.includes(-1))
const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)

//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
// Pro Tip: Calling .slice() with no arguments clones the whole array
const clone = colors.slice();
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
const items = ['apple', 'banana', 'cherry'];
// At index 1, delete 1 item ('banana'), and insert 'grape' and 'kiwi'
items.splice(1, 1, 'grape', 'kiwi'); 

console.log(items);        // Output: ['apple', 'grape', 'kiwi', 'cherry']
console.log("C ", myArr)