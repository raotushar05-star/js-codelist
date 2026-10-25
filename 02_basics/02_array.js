const marvel_heroes = ["Thor", "Ironman", "Hulk"]
const dc_heroes = ["Batman", "Superman", "Flash"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)

const spread_all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(spread_all_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Tushar"))
console.log(Array.from("ACID"))
console.log(Array.from(1234)) //gives []
console.log(Array.from({ name: "Tushar" })) //interesting | gives []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))