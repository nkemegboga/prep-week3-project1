/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.
function funny_joke(person) {
  document.getElementById("q1").innerHTML += "<p>Hello " + person + ", you are so funny! Not really.</p>";
};
funny_joke("Nkem")

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.
function divideByTwo() {
  document.getElementById("submitresponse").addEventListener("click", function() {
  var number_val = document.getElementById("number_val").value;
  document.getElementById("q2").innerHTML = Number(number_val)/2;})
};

divideByTwo()


// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
function greeting(){
  document.getElementById("submitresponseq3").addEventListener("click", function() {
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  document.getElementById("q3").innerHTML = "Hello " +name1+ " and "+name2;})
}
greeting()


// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
function num_average(a,b,c,d,e,f){
  average = (a+b+c+d+e+f)/6;
  document.getElementById("q4").innerHTML = "Average of "+ a +", "+ b+", "+ c+", "+ d+", "+ e+" and "+ f +" is " + average;
  return average
}

num_average(10,11,24,30,54,45)
// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.
function cashew_price(unit_price){
  total_price = 6*unit_price;
  document.getElementById("q5").innerHTML = "Total price is $"+total_price
}
cashew_price(2)


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
function area(length, width){
  area = length*width;
  return area
}
function perimeter(length, width){
  perimeter = 2*(length)+2*(width);
  return perimeter
}
document.getElementById("q6").innerHTML = "The area is " + area(10,5)+ " and perimeter is "+ perimeter(10,5)



// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
function quarter(number){
  quarter_val = 0.25*number;
  return quarter_val;
}
val = 28;
document.getElementById("q7").innerHTML = "A quarter of "+val+ " is " + quarter(val)



// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
function sleepings(hours){
  if (hours >=8){document.getElementById("q8").innerHTML = "Good job, you're getting enough rest."}
  else {document.getElementById("q8").innerHTML ="You need to get more sleep!"}
}
sleepings(6)




// 9. Develop a function that determines a person's age by asking them for their birth year.
function age(){
  document.getElementById("submitresponseq9").addEventListener("click", function() {
  var year = document.getElementById("year").value;
  document.getElementById("q9").innerHTML = "You will be "+(2017-year)+ " this year.";})
}
age()



// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
     teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
function teams(teammates){
  var team1 = [];
  var team2 = [];
  for (i=0; i<teammates.length; i++){
    if (i%2 == 0){team1.push(teammates[i])}
    else {team2.push(teammates[i])}
    document.getElementById("q10").innerHTML = "Members of team 1 are " + team1 + ". Members of team 2 are "+ team2
  }
}
teams(teammates)


// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.
function ThreeDigSum(){
  document.getElementById("submitresponseq11").addEventListener("click", function() {
  var ThreeDig = document.getElementById("threedig").value;
  var ThreeDigSum_val = 0;
  for (i = 0; i<ThreeDig.length; i++){ThreeDigSum_val = ThreeDigSum_val + Number(ThreeDig[i])}
  document.getElementById("q11").innerHTML = "The sum of digits is  " + ThreeDigSum_val;})
}
ThreeDigSum()





// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.
function change(quarters, dimes, nickels, pennies){
  change = (Number(quarters)*25+Number(dimes)*10+Number(nickels)*5+Number(pennies))/100;
  return change.toFixed(2)
}
document.getElementById("q12").innerHTML = "Your change is $" + change(10,12,13,5)


// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
function phone_number(number_raw){
  number = number_raw.toString();
  if (number.length > 11 || number.length<10){document.getElementById("q13").innerHTML = "The entered number is a bad number."}
  else if (number.length == 10){document.getElementById("q13").innerHTML = "The entered number is a good number: " + number}
  else if (number.length == 11 && number[0] == 1){document.getElementById("q13").innerHTML = "The entered number is a good number: " + number.substring(1)}
  else if (number.length == 11){document.getElementById("q13").innerHTML = "The entered number is a bad number."}
}
phone_number(15122020196)

// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
function isNumber(value){
  if (isNaN(value)==true){return "Not a number"}
  else {return "Valid number"}
}
for (i = 0; i<arrayOfAllTheThings.length; i++){document.getElementById("q14").innerHTML += "<p>"+isNumber(arrayOfAllTheThings[i])+"</p>"}

// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.
function die_roll(){
  var roll1 = Math.floor(Math.random()*5)+1
  var roll2 = Math.floor(Math.random()*5)+1
  return roll1+roll2
}
document.getElementById("q15").innerHTML = die_roll()

// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.
var roll_total = 0;
var counter = 0;
while (roll_total < 40){
  roll_total = roll_total+die_roll()
  counter = counter+1;
}
document.getElementById("q16").innerHTML = "Total number of die rolls is " + counter


// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
function leap_year(year){
  var div4 = year/4;
  var div100 = year/100;
  var div400 = year/400;
  if (year%4 != 0){ return "It's not a leap year!"}
  else if (year%4 == 0 && year%100 != 0){ return "It's a leap year!"}
  else if (year%4 == 0 && year%100 == 0 && year%400 == 0){ return "It's a leap year!"}
  else if (year%4 == 0 && year%100 == 0 && year%400 != 0){ return "It's not a leap year!"}
}
year = 1990;
document.getElementById("q17").innerHTML = year+ ": "+leap_year(1998)
