// *Variables*
// Declare a variable, assign it a value, and alert the value
    let myVariable = 'Hello World'
    alert(myVariable);
// Create a variable, divide it by 10, and console log the value
    let number = 50;
    number /= 10;
    console.log(number);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
        function multiplyNumbers(num1, num2, num3){
            let product = num1 * num2 * num3;
            alert(product);
        }
    // Call the function with example argumenta
            multiplyNumbers(2, 3, 4);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
    function calculateResult(num1, num2, num3, num4){
        let result = (num1 + num2) - (num3 + num4)
        console.log(result);
    }
    calculateResult(10, 5, 3,2);
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
    function calculateValue(num1, num2, num3){
        let value = 100 + num1 - num2 / num3;
        if(value > 25){
            console.log('WE HAVE A WINNA');
        }
    }
    // CALL THE FUNCTION WITH THE EXAMPLE ARGUMENTS
        calculateResult(5, 10, 2);
//*Loops*

//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
        function checkDayOfTheWeek(day){
            let dayLowerCase = day.toLowerCase();
            if(dayLowerCase === "saturday" || dayLowerCase === "sunday"){
                alert("weekend");
            } else if (dayLowerCase === "monday" || dayLowerCase === "tuesday" || dayLowerCase === "wednesday" || dayLowerCase === "thursday" || dayLowerCase === "friday") {
                alert("weekday")
            } else {
                alert("try again")
            }
        }
checkDayOfTheWeek("Monday");

// Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
    for (let i = 1; i <= num; i += 3) {
      console.log(i);
    }
  };
  
  // Call the function with example arguments
  countByThree(10);