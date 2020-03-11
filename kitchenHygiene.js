const startingShift = false
const cutVegetables = true
const cleanedFish = false
const cutChicken = true

const shouldWashHands = startingShift && cutChicken && cutVegetables && cleanedFish
const noNeedToWashHands = startingShift && cutChicken && cutVegetables && cleanedFish

console.log(`Should I wash my hands? ${shouldWashHands}`)
console.log(`Can I do without washing? ${noNeedToWashHands}`)