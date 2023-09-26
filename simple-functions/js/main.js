  //--- function declaration Easy
//create a function that subtracts two numbers and alerts the difference
 function subTwoAndAlert(n1, n2){
    let difference = n1 - n2
    alert(difference)
 }
//subTwoAndAlert(10, 7)
//create a function that divides three numbers and console logs the quotient  
function divideThreeAndLog(n1,n2,n3){
  console.log( n1 / n2 /n3)
 }
//divideThreeAndLog(12,4,3)

//create a function that multiplys three numbers and returns the product

 /*function multiThreeAndReturn(robot, unix, attack){
  let product = robot * unix * attack
    return product
 }*/
/*let returnedVal = multiThreeAndReturn(2,3,5)
console.log(returnedVal)*/

// or done in one line 
let multiThreeAndReturn = (r,u,a)=>r*u*a

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

 /function sumAndDivide(n1,n2,n3){
      return (n1 + n2 % n3)
 }

 // done it on one line 
 const sumAndDivide = (a,b,c)=>(a+b)%c

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
  function FuckAroundAndMathOut(n1,n2,n3,n4){
      let product = n1 * n2
      if(product > 100){
        console.log(product + n3 + n4)
      }else if(product < 100){
        console,log(product -n3 -n4)
      }else{
        alert( (n1*n2*n3) %n4)
      }
  }
FuckAroundAndMathOut(5,4,3,2) // 15 will be the output
FuckAroundAndMathOut(100,1,2,3) // 405 will be the output
