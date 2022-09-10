

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

    //roda uma vez, antes do bloco    
    before(function(){

        console.log("Before");

    });


    //roda uma ver, depois do bloco
    after(function(){

        console.log("after");


    })

    // roda todas as vezes antes de cada bloco
    beforeEach(function(){

        console.log("BeforeEach");

    });

    // roda todas as vezes depois de cada bloco
    afterEach(function(){

        console.log("afterEach");

    })


    it("test 1", function(){
        console.log("test 1");

    });


    it("test 2", function(){

        console.log("test 2 ");

    });




})