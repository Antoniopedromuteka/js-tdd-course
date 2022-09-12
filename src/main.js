 


//  class Animal{
    
//     constructor(kind, sound){
//         this.kind = kind;
//         this.sound = sound;
//     }

//     hello(){
//         console.log(`${this.sound} I'm ${this.kind}`);
//     }

//     static info(){
//         console.log("this is class to create a Animal");
//     }


//     get name(){
//         return "this is my name"
//     }

//     set nickname(nick){
//         this.nick = nick
//     }
//  }


//  const ani = new Animal("PEDRO", "JDJKDJFK");


//  ani.hello();


// class Cabrito extends Animal{
    
//     constructor(kind, sound, pel){

//         super(kind, sound);

//         this.pel = pel;

//     }

    
// }


// const cab = new Cabrito("ffff","ddf","negra");


// console.log(cab.pel);



 

// const sum = (num1, num2) => num1 + num2;
// const sub = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;
// const div = (num1, num2) => num1 / num2;

// export {sum, sub, div, mult}


function FizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if(num % 3 === 0) return "Fizz"
    if(num % 5 === 0) return "Buzz"


    return num

}


module.exports = {FizzBuzz};