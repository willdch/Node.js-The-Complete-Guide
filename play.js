// to use node on this computer,  in terminal. type node + the name of the file including its file type.  ex. $ node play.js

// let name = "Will";
// let age = 37;
// let hasHobbies = true;

// // arrow function syntax
// const summerizeUser = (userName, userAge, userHasHobbies) => {
//   return (
//     "The users name is " +
//     userName +
//     " and he is " +
//     userAge +
//     " years old. Does he have hobbies? " +
//     userHasHobbies
//   );
// };

// console.log(summerizeUser(name, age, hasHobbies));
// console.log(summerizeUser("Will Harris", 37, "yes, he plays the drums"));

// // simplified arrow functions syntax when returning only one peice of logic.
// // can remove the {} and the return statement.

// const newSummry = (newName, newAge, newHasHobbies) =>  "The users name is " + newName +
// " and he is " +
// newAge +
// " years old. Does he have hobbies? " +
// newHasHobbies;

// console.log(newSummry(name, age, hasHobbies));

// in this example we are using CONST which will not allow the nested function to refer to the local scope but instead will be refer to gloabal scope. if you call the function like so -person.greeting();- you will get an undefined. instead to make the local scope accessible do the following. remove the arrow function and take out the : after greeting.
// const person = {
//     name: 'Will',
//     age: 37,
//     job: 'Junior developer',
//     greeting: () => {
//         console.log('Hello, My name is ' + this.name + '.  I am ' +this.age + ' and I am a ' + this.job + '.');
//     }
// };

// console.log(person);
// person.greeting();

// const person = {
//   name: "Will",
//   age: 37,
//   job: "Junior developer",
//   greeting() {
//     console.log(
//       "Hello, My name is " +
//         this.name +
//         ".  I am " +
//         this.age +
//         " and I am a " +
//         this.job +
//         "."
//     );
//   }
// };
//  person.greeting();

//          Arrays and Methods
// looping through arrays
// const hobbies = ['Sports', 'Cooking', 'Drumming'];

// for(var i = 0; i < hobbies.length; i++) {
//     if(hobbies[i] === "Sports"){
//         console.log("who cares!")
//     } else if (hobbies[i] === 'Cooking'){
//         console.log('That is useful');
//     } else if (hobbies[i] === "Drumming") {
//         console.log("thats what I'm talking About!!!");
//     }
// }

// also looping through the same array.
// for(hobby of hobbies) {
//     console.log(hobby);
// }
// .map method will not directly edit the existing array but will create a whole new array with the edits.
// console.log(hobbies.map(hobby => "Hobby: " + hobby));
// console.log(hobbies);

// to directly edit the array use the .push method.
// hobbies.push("Programming");
// console.log(hobbies);


//  two methdos for copying an array.  .slice or -spread operators-

// slick method
// const copiedArray = hobbies.slice();
// console.log(copiedArray);

// spread operator
// const newCopiedArray = [...hobbies];
// console.log(newCopiedArray);

// spread operator on an object.
// const copiedPerson = {...person};
// console.log(copiedPerson);
// copiedPerson.greeting();

// // rest operator

// ex 1.  not flexible becuase it has a specific amount of atguments and returned params.
// const drumBrands = (brand1, brand2, brand3) => {
//  return[brand1, brand2, brand3];
// };
// console.log(drumBrands("Pearl", 'Mapex', 'Premier'));

//  ex 2 & 3 are flexible.  they use the rest operator so any number of params can be passed in.
// const drums = (...brands) => {
//     return brands;
// };
// console.log(drums("Pearl", 'Mapex', 'Premier', 'Gretch', 'DW'));

// const toArray = (...args) => {
// return args;
// };
// console.log(toArray(1, 2, 3, 4, 5 ));

// how do you know which ti use?
  // SPREAD OPERATOR:  IF youR using it to pull elements or properties out of arrays or objects?  

//   REST OPERATOR:  IF your using it to merge mulitple arguments into and array and you are using it in the argument list of a function.


// Object destructuring 
const person = {
  name: "Will",
  age: 37,
  job: "Junior developer",
  greeting() {
    console.log(
      "Hello, My name is " +
        this.name +
        ".  I am " +
        this.age +
        " and I am a " +
        this.job +
        "."
    );
  }
};

//  ex. 1
const printName= ({ name, age, }) => {
    console.log(name, age);
};

printName(person);


// ex 2.
const { name, age } = person;
console.log(name, age);

// ex 3.
const hobbies = ["Singing", "basketball"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// rest operators can be used but will return the whole array not the specific values of the array. 
const [...hobby] = hobbies;
console.log(hobby);
