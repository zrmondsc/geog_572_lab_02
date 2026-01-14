let output1 = "";
let output2 = "";
let output3 = "";
let output4 = "";
let output5 = "";

function addLine1(line){
    output1 += `${line}<br>`;
};
function addLine2(line){
    output2 += `${line}<br>`;
};
function addLine3(line){
    output3 += `${line}<br>`;
};
function addLine4(line){
    output4 += `${line}<br>`;
};
function addLine5(line){
    output5 += `${line}<br>`;
};

// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

// prompt user for sentence
const sentence = prompt("Enter a sentence here").toLowerCase(); //prompt allows for user input

// define a set of vowels
const vowels = new Set(["a", "e", "i", "o", "u", "y"]);

// define a counting variable
let num_vowels = 0;

// iterate through the sentence using a for loop
for (const char of sentence){
    if (vowels.has(char)){ //.has checks if a value exists within a set
        num_vowels++
    }
}

console.log(`Number of vowels: ${num_vowels}`)
addLine1(`<b>Q1:</b> Number of vowels: ${num_vowels}`)




// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each.
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];

const second = [12, 3];

const third = [7, 7];

const user_input = prompt("enter numbers separated by commas!");

let fourth = [];

if (user_input === null){
    console.log("no input provided");
    addLine2('<b>Q2:</b> no input provided');
} else {
    const trimmed = user_input.trim(); // .trim removes white space from beginning and end of string
    if (trimmed === ""){
        console.log("no input provided");
        addLine2('<b>Q2:</b> no input provided');
    } else{
        const elements = trimmed.split(","); // .split divides a string into an array of substrings based on a separator
        fourth = elements.map(n => Number(n.trim())); // .map applies a function elementwise over an array

        const hasInvalid = fourth.some(n => Number.isNaN(n));
        if (hasInvalid){
            console.log("invalid input");
            addLine2('<b>Q2:</b> invalid input')
            fourth = [];
        }
    }
}


function oddAddition(numbers) {

   const allOdd = numbers.every(n => n % 2 === 1) // .every is an array method that determines if all elements in an array satisfy a given condition
   if(allOdd){
    return numbers.reduce((a, b) => a * b, 1) // .reduce is an array method that executes a callback function on elements of an array
   } else {
    return numbers.reduce((a, b) => a + b, 0)
   }
}

console.log(
    oddAddition(first),
     oddAddition(second),
     oddAddition(third), 
     oddAddition(fourth));

addLine2(`<b>Q2:</b> first = ${oddAddition(first)}, second = ${oddAddition(second)}, third = ${oddAddition(third)}, fourth = ${oddAddition(fourth)}`)


// Question 3 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

let fizzbuzz = [];

for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 == 0){
        console.log("fizzbuzz")
        fizzbuzz.push("fizzbuzz") // .push adds an element to the end of an array
    } else if(i % 3 === 0 && i % 5 !== 0){
        console.log("fizz")
        fizzbuzz.push("fizz")
    } else if (i % 3 !== 0 && i % 5 === 0){
        console.log("buzz")
        fizzbuzz.push("buzz")
    } else{
        console.log(i)
        fizzbuzz.push(String(i))
    }
}

addLine3(`<b>Q3:</b> FizzBuzz (1–100): ${fizzbuzz.join(", ")}`);

// Question 4 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar

class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    start(){
        return `Vroom vroom! I'm a ${this.year} ${this.make} ${this.model}! or something along those lines`;
    }
}


// create a Car object for fun
const myCar = new Car("Honda", "CR-V", 2021, "grey");
console.log(myCar.start());
addLine4(`<b>Q4:</b> ${myCar.start()}`);


// Call the start method
// Question 5 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)

// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

function cityBuilder(cities, pops){
    // 1 . create table element
    var table = document.createElement("table");

    // 2 . build the header row which contains column titles
    var headerRow = document.createElement('tr'); 

    // create the City column title and add it to the header row
    var cityHeader = document.createElement('th'); 
    cityHeader.innerHTML = 'City';
    headerRow.appendChild(cityHeader); 

    // ceate the population column title and add it to the header row
    var popHeader = document.createElement('th');
    popHeader.innerHTML = 'Population';
    headerRow.appendChild(popHeader);

    // add the header row into the table
    table.appendChild(headerRow)

    // 3. build the data rows
    // for each new city we create a new row <tr> 
    // and the associated data cells <td> for the city name and city population
    for (var i = 0; i < cities.length; i++){

        // create a new row for a city
        var tr = document.createElement('tr');

        // create the data cell for the city name
        var city = document.createElement('td');
        city.innerHTML = cities[i]; // put the city name text into the cell
        tr.appendChild(city); // add the city cell into the row

        // create the data cell for the population size
        var pop = document.createElement('td');
        pop.innerHTML = pops[i]; // put the population into the cell
        tr.appendChild(pop); // put the population cell into the row

        // add the row to the table
        table.appendChild(tr)
    };

    //4. Return the populated table element
    return table;
}


var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany']
var pops = ['59920', '652500', '176650', '56470']


addLine5("<b> Q5: </b>")

function myFunc(){
    var q1 =  document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var q4 = document.getElementById("q4");
    var q5 = document.getElementById("q5");
    q1.innerHTML = output1;
    q2.innerHTML = output2;
    q3.innerHTML = output3;
    q4.innerHTML = output4;
    q5.innerHTML = output5;

    //build and append the table for Q5
    var table = cityBuilder(cities, pops);
    q5.appendChild(table);
};

window.onload = myFunc;

