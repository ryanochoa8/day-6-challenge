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




let fruit = "apple"
let orangeCount = 0

switch (fruit) {
  case "orange":
    orangeCount++
    console.log("You found an orange!")
    break;
  case "apple":
    debugger
    console.log("You found an Apple!")
    break;
  case "banana":
    console.log("You found a Banana?")
    break;
  default:
    console.log("you found an unknown fruit!")
}