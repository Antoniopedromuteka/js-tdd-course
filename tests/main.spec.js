

// describe('Main', function() {


//     describe('Method A', function(){

//         context("case 1", function(){

//             it.skip("should happen blablabla", function(){
//                 //espera o que aconteca
//                 //Entra de dados / metodo sum(2,2)
//                 //Espera retornar / (4) => true | (3) => false => broken test
//             })

//         });

//         context("case 2", function(){

            
//             it("should happen ", function(){
//                 //espera o que aconteca
//                 //Entra de dados / metodo sum(2,2)
//                 //Espera retornar / (4) => true | (3) => false => broken test

//                 throw new Error("just an error");
//             })


             

//         })

//     });


//     describe('Method B', function(){

//     });
// });


describe("Main", function(){

    var arr;
    //roda uma vez, antes do bloco    
    before(function(){
        

    });


    //roda uma ver, depois do bloco
    after(function(){



    })

    // roda todas as vezes antes de cada bloco
    beforeEach(function(){

         arr = [1,2,3];
 

    });

    // roda todas as vezes depois de cada bloco
    afterEach(function(){
 

    })

  

    it("should have a size of 4 when push another value to the array", function(){
        

        arr.push(4);

        console.log(arr.length); //4

    });


    it("should have a size 2 when pop a value from the array", function(){  
 

        arr.pop();

        console.log(arr.length);

    });

    it("should remove the value 3 when use pop in the array",function(){

      

        console.log(arr.pop()===3);

    })




})