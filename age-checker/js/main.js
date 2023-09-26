//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
 /*let age = 17
 if(age < 16){
    console.log('They can not drive') 
 } else if(age < 18){
    console.log('tell them they can\'t hate from outside the club, because they can\'teven get in')
 } else if(age < 21) {
   console.log('tell them they can not drink')
 } else if(age < 25 ){
   console.log('tell them they can not rent cars affordably')
 } else if(age < 30 ) {
    console.log('tell them they can not rent fancy cars affordably')
 } else if (age >= 30 ) {
    console.log('tell them there is nothing left to look forward too other than 100devs')
 };*/

//--- Harder
//On click of the h1

//Take the value from the input
/*document.querySelector('h1').addEventListener('click', ageCheck)
let p = document.querySelector('p')
function ageCheck(){
   let age = Number (document.querySelector('input').value)
}*/

//Place the result of the conditional in the paragraph
   

/*let age = Number (document.querySelector(input) .value)
 if(age < 16){
   p.innerText = 'They can not drive'
 } else if(age < 18){
   p.innerText = 'tell them they can\'t hate from outside the club, because they can\'teven get in'
 } else if(age < 21){
   p.innerText('tell them they can not drink')
 } else if(age < 25){
   p.innerText = 'tell them they can not rent cars affordably'
 } else if(age < 30){
   p.innerText = 'tell them they can not rent fancy cars affordably'
 } else if(age < 30 || age > 30){
   p.innerText = 'tell them there is nothing left to look forward too other than 100devs'
 } else {
   p.innerText = 'Something cool'
 } */

//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

// harder 
//On click the h1
//take the valeu from the input
//Place the result of the conditional in the paragraph

// updated version
// this is conditionals 
document.querySelector('h1').addEventListener('click', checkAge)
  const p = document.querySelector('p')
  function checkAge(){
    let age = Number(document.querySelector('input').value)
    if(age < 16){
      p.innerText = 'they can not drive'
    }else if( age < 18 ){
      p.innerText = 'tell them they can \'t hate from outside the club, because they can \'t even get in'
    }else if( age < 21){
      p.innerText = 'They can not drink'
    }else if(age < 25){
      p.innerText = 'They can not rent cars affordably'
    }else if( age < 30){
      p.innerText = 'They can not rent fancy cars affordably'
    }else{
      p.innerText = 'Nothing left to look forward'
    }    
  }

