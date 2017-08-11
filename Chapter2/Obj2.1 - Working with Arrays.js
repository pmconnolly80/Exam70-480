//Array instantiated and the 3 available constructors
var anArray = new Array();
var anArray = new Array(5);
var anArray = new Array('soccer', 'basketball', ..., 'badminton');

var anArry = new Array(5);
anArray[1] = 'soccer';
alert(anArray[1]);

//Resize Array
var anArray = new Array(5);
alert(anArray.length);
anArray[9] = 'soccer';
alert(anArray.length);

//Multi-deminsional Array
var multiArray = new Array(3);
multiArray[0] = new Array(3);
multiArray[1] = new Array(3);
multiArray[2] = new Array(3);

//Using the length property
var anArray = new Array(5);
alert(anArray.length);

//Using the concat method
var sports = new Array('football', 'cricket', 'rugby', 'tennis', 'badminton');
var moreSports = new Array('soccer', 'basketball', 'hockey');
var combinedSports = sports.concat(moreSports);

//Using the indexOf and lastIndexOf methods
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var index = sports.indexOf('football', 0);

//Using the join method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var joined = sports.join(',');

//Using the reverse method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
sports.reverse();

//Using the sort method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
alert(sports.indexOf('soccer'));
sports.sort();
alert(sports.indexOf('soccer'));

//Using the slice method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var someSports = sports.slice(1,2);

//Using the splice method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var splicedItems = sports.splice(1, 3, 'golf', 'curling', 'darts');

//Using the length property
var anArray = new Array(5);
alert(anArray.length);

//Using the concat method
var sports = new Array ('football', 'cricket', 'rugby', 'tennis', 'badminton');
var moreSports = new Array('soccer', 'basketball', 'hockey');
var combinedSports = sports.concat(moresports);

//Using the indexOf methods
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var index = sports.indexOf('football', 0);
    //answer is 3

//Using the lastIndexOf methods
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var index = sports.lastIndexOf('football', 0);
    //answer is -1

//Using the join method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var joined = sports.join(',');
    //answer is soccer, basketball, hockey, football, cricket, rugby, tennis, badminton

//Using the reverse method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
sport.reverse();
    //answer is badminton, tennis, cricket, rugby, football, hockey, basketball, soccer

//Using the sort method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
alert(sports.indexOf('soccer'));
sports.sort();
alert(sports.indexOf('soccer'));

//Using the slice method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var someSports = sports.slice(1, 2);
    //answer is basketball

//Using the splice method
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var splicedItems = sports.splice(1, 3, 'golf', 'curling', 'darts');
    //answer is soccer, golf, curling, darts, cricket, rugby, tennis

//IMPLEMENTING SPECIAL TYPES OF ARRAYS

//Using the pop and push methods
var sports = new Array();
sports.push('soccer', 'basketball', 'hockey');
sports.push('football');
    //creates an array - soccer, basketball, hockey, football
var nextSport = sports.pop();
    //answer football - which the last value added to the array

//Using shift and unshift methods
var sports = new Array();
sports.unshift('soccer', 'basketball', 'hockey');
sports.unshift('football');
var nextSport = sports.shift();
    //creates an array - football, soccer, basketball, hockey

var sports = new Array();
sports.push('soccer');
sports.push('basketball');
sports.push('hockey');
var get1 = sports.shift();
sports.push('golf');
var get2 = sports.shift();
    //creates an array - basketball, hockey, golf

//USING ADVANDED ARRAY METHODS

//Using the every method
var evenNumber = new Array(0, 2, 4, 6, 8, 9, 10, 12);
var allEven = evenNumbers.every(evenNumberCheck, this);
if (allEven){
    ...
} else {
    ...
}
function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
}
    //returns false on the 6th item.  9 is an odd number

//Using the some method
var evenNumber = new Array(0, 2, 4, 6, 8, 9, 10, 12);
var allEven = evenNumbers.some(evenNumberCheck, this);
if (allEven){
    ...
} else {
    ...
}
function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
}
    //return result isn't true

//Using the forEach method
var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
sportsArray.forEaxh(offerSport);
function offerSport(value, index, array) {
    var sportsList = document.getElementById("sportsList");
    var bullet = document.createElement("li");
    bullet.innerText = value;
    sportsList.appendChild(bullet);
}
    //alphabetized: sportsArray.sort()forEach(offerSport);

//Using the filter method
var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10 , 12);
var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);
    //work with the even numbers
function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
}
    //result filters out odd numbers

//Using the map method
var money = [12.8, 15.9, 21.7, 35.2];
var roundedMoney = money.map(roundOff, money);
...
function roundOff(value, position, array) {
    return Math.round(value);
}
    //answer = 13, 16, 22, 35

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var squares = numbers.map(squareNumber, numbers);
...
function squareNumber(value, position, array) {
    return value * value;
}
    //answer = 2, 4, 9, 16, 25, 36, 49, 64

//Using the reduce and reduceRight methods
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var factorials = numbers.reduce(factorial);
function factorial(previous, current) {
    return previous * current;
}
    //factorial of 10 is caluculated, 10!

//IMPLEMENTING ITERATIVE CONTROL FLOW

//Using the for loop

    // Structure:
    //  for(<counter>;<expression>;<counter increment>)
    //  {
    //      <code to run>
    //  }

for (var i = 0, i < 10; i++) {
    document.write(i);
}        //returns a block of code 10 times; expression is to be less than 10, counter starts at 1

for (var i = 10, i < 0; i--) {
    document.write(i);
}       //returns in reverse order

for (var i = 0, i < 100; i*=2) {
    document.write(i);
    document.write("<br />");
}       //returns set of numbers that increase by a factor of 2 up to 100

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
for (var i = 0, i < alphabet.length; i++) {
    document.write(alphabet[i]);
    document.write("<br />");
}

//Using the for...in loop
var person = { firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"};
for (var prop in person) {
    document.write(person[prop]);
}

//Using the while loop

    // Structure:
    // while(<expression>) {
    //    <code block>
    //}

var i = 0;
while (i < 10) {
    //do some work here.
    i++;
}   // runs 10 times

var canvas = document.getElementById("canvas1");
while (canvas.styles.backgroundColor == 'green') {
    //move traffic
}   // while loop never ends until the backgroundColor is no longer green

//Using the do...while loop

    // Structure:
    // do{
    //    <code block>
    //} while <expression>

var canvas = document.getElementById("canvas1");
do {
    //stop traffic
} while (canvas.styles.backgroundColor == 'red')
    //loop continues to run as long as the expression evaluates to true.

