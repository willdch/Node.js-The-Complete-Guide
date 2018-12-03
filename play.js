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
const hobbies = ['Sports', 'Cooking', 'Drumming'];

for(var i = 0; i < hobbies.length; i++) {
    if(hobbies[i] === "Sports"){
        console.log("who cares!")
    } else if (hobbies[i] === 'Cooking'){
        console.log('That is useful');
    } else if (hobbies[i] === "Drumming") {
        console.log("thats what I'm talking About!!!");
    }
}

// also looping through the same array.
for(hobby of hobbies) {
    console.log(hobby);
}
// .map method will not directly edit the existing array but will create a whole new array with the edits.
// console.log(hobbies.map(hobby => "Hobby: " + hobby));
// console.log(hobbies);

// to directly edit the array use the .push method.
hobbies.push("Programming");
console.log(hobbies);
