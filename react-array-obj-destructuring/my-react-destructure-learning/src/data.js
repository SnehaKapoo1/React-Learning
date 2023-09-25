// const animals = [
//     { name: "cat", sound: "meow" },
//     { name: "dog", sound: "woof" }
//   ];

// const animals = [
//   { name: "cat", sound: "meow",
//   feedingRequirements: {
//     food: 2,
//     water: 3
//   }
// },
//   { name: "dog", sound: "woof" }
// ];

//   export default animals;



const animals = [
  { name: "cat", sound: "meow",
  feedingRequirements: {
    food: 2,
    water: 3
  }
},
  { name: "dog", sound: "woof" }
];

// set states function
function useAnimals(animal){
return [
  animal.name,
  function(){
    console.log(animal.sound);
  }
];
}

  export default animals;
  export { useAnimals };