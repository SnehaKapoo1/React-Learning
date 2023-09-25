import animals from "./data";

//console.log(animals);

//destructuring an array
const [cat, dog] = animals;
//console.log(cat);

// //destructuring an object
// const {name, catSound} = cat;
// console.log(catSound);

//console.log(animals[1].sound);

//this is the way, we can give the properties name according to ourselves
// const {name: catName, sound: catSound} =cat;
// console.log(catSound);

//how we would provide a default value, if name is undefined in the array :)
//const {name = "sneha", sound = "Purr"} = cat;
//console.log(name);

//destructre nested object
// const {name, sound, feedingRequirements} = cat;

// console.log(feedingRequirements.food); 
// console.log(feedingRequirements.water); 

// if you will try to directly access the food property then you will get an error
//console.log(food);

// for directly accessing the food we need to destructure that also
// like this:
//const {name, sound, feedingRequirements: {food, water}} = cat;
// const {feedingRequirements: {food, water}} = cat;
// console.log(food);

