// import {sum, sub, div, mult} from "../src/main"


// // describe('Main', function() {


// //     describe('Method A', function(){

// //         context("case 1", function(){

// //             it.skip("should happen blablabla", function(){
// //                 //espera o que aconteca
// //                 //Entra de dados / metodo sum(2,2)
// //                 //Espera retornar / (4) => true | (3) => false => broken test
// //             })

// //         });

// //         context("case 2", function(){

            
// //             it("should happen ", function(){
// //                 //espera o que aconteca
// //                 //Entra de dados / metodo sum(2,2)
// //                 //Espera retornar / (4) => true | (3) => false => broken test

// //                 throw new Error("just an error");
// //             })


             

// //         })

// //     });


// //     describe('Method B', function(){

// //     });
// // });


// // describe("Main", function(){

// //     var expect = require("chai").expect;

// //     var arr;
// //     //roda uma vez, antes do bloco    
// //     before(function(){
        

// //     });


// //     //roda uma ver, depois do bloco
// //     after(function(){



// //     })

// //     // roda todas as vezes antes de cada bloco
// //     beforeEach(function(){

// //          arr = [1,2,3];
 

// //     });

// //     // roda todas as vezes depois de cada bloco
// //     afterEach(function(){
 

// //     })

  

// //     it("should have a size of 4 when push another value to the array", function(){
        

// //         arr.push(4);

// //         expect(arr).to.have.lengthOf(4);
 

// //     });


// //     it("should have a size 2 when pop a value from the array", function(){  
 

// //         arr.pop();

// //        expect(arr).to.have.lengthOf(2);
// //     });

// //     it("should remove the value 3 when use pop in the array",function(){

// //         arr.pop();
// //         expect(arr).to.not.include(3);

// //     })

// //     it("should be an array", function(){
// //         expect(arr).to.be.a("array")
// //     })




// // })


// var expect = require("chai").expect;




// describe("Calc", function(){

//     // smoke test

    

//     describe("smoke test", function(){

//         // it("should exist the calc lib", function(){

//         //     expect(calc).to.exist;

//         // })

//         // it("should exist the method sum", function(){

//         //     expect(calc.sum).to.exist;
//         //     expect(calc.sum).to.be.a.function;

//         // })

//         // it("should exist the method sub", function(){

//         //     expect(calc.sub).to.exist;
//         //     expect(calc.sub).to.be.a.function;

//         // })  
//         //  it("should exist the method mult", function(){

//         //     expect(calc.mult).to.exist;
//         //     expect(calc.mult).to.be.a.function;

//         // })  
//         //  it("should exist the method div", function(){

//         //     expect(calc.div).to.exist;
//         //     expect(calc.div).to.be.a.function;

//         // })

//         it("should return 4 when 'sum(2,2)'", function(){
//             expect(sum(2,2)).to.be.equal(4)
//         })

//         it("should return 4 when 'sub(6,2)'", function(){
//             expect(sub(6,2)).to.be.equal(4)
//         })

//         it("should return 4 when 'mult(2,2)'", function(){
//             expect(mult(2,2)).to.be.equal(4)
//         })

//         it("should return 4 when 'div(2,2)'", function(){
//             expect(div(12,3)).to.be.equal(4)
//         })


//     })


 
  

 
// })




const expect = require("chai").expect;

 
const main = require("../src/main");


describe("FizzBuzz",()=>{

    it("should return 'fizz' when multiple of 3", ()=>{
        expect(main.FizzBuzz(3)).to.be.equal("Fizz");
        expect(main.FizzBuzz(6)).to.be.equal("Fizz");
    })

    it("should return 'buzz' when multiple of 5", ()=>{
        expect(main.FizzBuzz(5)).to.be.equal("Buzz")
    })

    it("should return 'fizzBuzz' when multiple of 3 and 5", ()=>{
        expect(main.FizzBuzz(15)).to.be.equal("FizzBuzz");
    })


    it("should return non-number",()=>{
        expect(main.FizzBuzz(7)).to.be.equal(7)
    })
})