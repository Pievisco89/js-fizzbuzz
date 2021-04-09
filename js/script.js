/* creare e stampare num da 1 a 100 */
for(var i = 1; i <= 100; i++){
  if(i%3 == 0 && i%5 == 0){
    console.log("FizzBuzz")
  }else if(i%3 == 0){
    console.log("Fizz")
  }else if(i%5 == 0){
    console.log("Buzz")
  }else{
    console.log(i)
  }
}
/* multipi di 3 stampare "fizz" - multipi di 5 stampare "buzz - multipli entrambi "fizzbuzz"*/

