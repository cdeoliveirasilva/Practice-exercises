/* Body Mass Index = weightInKg / (heightInM * heightInM) */

const weightInKg = 65
const heightInM = 1.64
const bmi = weightInKg / ( heightInM * heightInM)
const age = 25
const gender = 'f'
const exerciseDaily = 'yes' // 'yes/no' OR 'true/false'


console.log(bmi)

/* idealWeight = 22.5 * (heightInM * heightInM) */

const idealWeight = 22.5 * (heightInM * heightInM)

console.log(idealWeight)

// bmr woman = 10 * weightInKg + 6.25 * (heightInM * 100) - 5 * age + 5
// bmr man = 10 * weightInKg + 6.25 * (heightInM * 100) - 5 * age - 161



let genderModifier              // or:  let genderModifier = gender === "m" ? 5 : - 161;
if (gender === 'm') {
    genderModifier = -161
} else {
    genderModifier = 5   
}


const bmr =  10 * weightInKg + 6.25 * (heightInM * 100) - 5 * age + genderModifier

console.log(bmr)

// Calories per day = bmr * exerciseModifier
// Exercise daily? = true or false --> if true = 1.5, if false = 1.2
// Expectation: if true -> 1505 * 1.5 = 2257.5, if false -> 1505 * 1.2 = 1806

let exerciseModifier
if (exerciseDaily === 'yes') { // or "true"
    exerciseModifier = 1.5
} else {
    exerciseModifier = 1.2
}

console.log(exerciseModifier)

const caloriesPerDay = bmr * exerciseModifier // 
console.log(caloriesPerDay)

// 5. Diet plan

/* 
Weight loss:  -500 calories per day = -500 grams per week
Weight gain: +500 calories per day = +500 grams per week
*/

const weightDifferenceToIdealWeight = idealWeight - weightInKg // -4
console.log(weightDifferenceToIdealWeight) // -4

dietWeeks = weightDifferenceToIdealWeight / 0.5  // -8
console.log(dietWeeks)  // -8 (negative number!)

dietWeeks = Math.abs(weightDifferenceToIdealWeight / 0.5)  // 8
console.log(dietWeeks)  // 8 (positive number now with Math.abs),, Math.round rounds up floats

// if number is negative -> create an 'absolute value', in other words: make it a positive number
// if dietWeeks is -12, you need 12 weeks to lose weight

const dietCaloriesPerDay = 
    weightDifferenceToIdealWeight > 0 
    ? caloriesPerDay + 500 
    : caloriesPerDay - 500 

    console.log(dietCaloriesPerDay)

// FINISHED PRODUCT: 

console.log(`

*** BMI CALCULATOR ***

age: ${age}
gender: ${gender}
weight: ${Math.round(weightInKg)}
height: ${heightInM}
Do you exercise daily? ${exerciseDaily}

*** DIET PLAN ***

Your bmi is ${weightInKg / ( heightInM * heightInM)}
Your ideal weight should be at around ${Math.round(idealWeight)} kg
Your BMR is ${Math.round(bmr)} calories
Your calorie intake is ${Math.round(caloriesPerDay)} with/without exercise 
To reach your ideal weight, you should eat ${Math.round(dietCaloriesPerDay)} calories a day for ${Math.round(dietWeeks)} weeks
`)
