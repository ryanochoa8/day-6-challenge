let snack = {
  color: "blue",
  title: "Welch's",
  flavor: "mixed fruit",
  weight: ".9 oz",
  packaging: "plastic",
  serving: "one pouch",
  barcode: "3485600175",
  shape: "square",
  type: "gummy",
  preservatives: false,
  americasFavoriteFruitSnack: true,
  fatFree: true,
  glutenFree: true,
  nutritionFacts: {
    servingsPerContainer: 1,
    totalFat: 0,
    sodium: 10,
    totalCarbohydrates: 20,
    protein: 0
  },
  ingredients: [
    {
      name: "fruit puree"
    },
    {
      name: "corn syrup"
    },
    {
      name: "sugar"
    },
    {
      name: "modified corn starch"
    },
    {
      name: "gelatin"
    }
  ]
}


// breaker breaker breaker

let fruit = "apple"
let orangeCount = 0

switch (fruit) {
  case "orange":
    orangeCount++
    console.log("You found an orange!")
    break;
  case "apple":
    console.log("You found an Apple!")
    break;
  case "banana":
    console.log("You found a Banana?")
    break;
  default:
    console.log("you found an unknown fruit!")
}

// breaker breaker breaker

let count = 1

while (count <= 10) {
  console.log(count)
  count++
}

// breaker breaker breaker

// let the user interact with the function

function sumOfTwoNumbers(num1, num2) {
  console.log(num1 + num2)
}

let number1 = prompt("You are adding two numbers. What is your first number?")
let number2 = prompt("What is your second number?")

sumOfTwoNumbers(number1, number2)


// breaker breaker breaker


let numbers = [23, 52, 67, 91, 200]


for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}



// breaker breaker breaker



let people = [
  {
    name: "Mark"
  },
  {
    myName: "Ryan"
  },
  {
    theirName: "Kenny"
  }
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i])
}




// breaker breaker breaker

let people = [
  {
    name: "Mark"
  },
  {
    name: "Ryan"
  },
  {
    name: "Kenny"
  }
]


for (let index = 0; index < people.length; index++) {
  let person = people[index]
  console.log(person.name)
}

// THIS IS CALLED ITERATION OR ITERATING
// breaker breaker breaker breaker breaker breaker






let people = [
  {
    name: "Mark"
  },
  {
    name: "Ryan"
  },
  {
    name: "Kenny"
  }
]

let newPerson = {
  name: "Jake"
}
let Brittany = {
  name: "Brittany"
}
people.push(newPerson)
people.push({ name: "Zach" })



for (let index = 0; index < people.length; index++) {
  let person = people[index]
  console.log(person.name)
}