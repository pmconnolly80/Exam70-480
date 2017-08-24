//Using if statements

if (exp1, exp2, exp3){
    //true logic
} else {
    //false logic
}

//Nested Conditional statement
var userAge = 10, gender = 'M';
var minimumAge = 11;
if (userAge > minimumAge) {
    if (gender == 'M'){
        //do logic for above age male
    }
    else {
        //do logic for above age female
    }
} else if (gender == 'M') {
    //do logic for underage male.
} else {
    //do logic for underage female.
}

//Examines background color of an element 
// and processses specific behavior on color
var canvas = document.getElementById("canvas1");
if (canvas.style.backgroundColor == 'green') {
    alert('proceed');
} else if (canvas.style.backgroundColor == 'yellow') {
    alert('slow down/safetly stop');
} else if (canvas.style.backgroundColor == 'red') {
    alert ('stop')
}

var canvas = document.getElementById("canvas1");
if (canvas.style.backgroundColor == 'green' || canvas.style.backgroundColor == 'yellow')
{
    alert('proceed');
} else if (canvas.style.backgroundColor == 'red ') {
    alert('stop')
}


//Switch Statements
switch (canvas.style.backgroundColor) {
    case 'yellow':
        alert('slow down');
        break;
    case 'green':
        alert('proceed');
        break;
    case 'red':
        alert('stop');
        break;
    default: 
        alert('unkinon condition');
        break;
}

//wants the same to happen with green and yellow
switch (canvas.style.backgroundColor) {
    case 'yellow':
    case 'green':
        alert('proceed');
        break;
    case 'red':
        alert('stop');
        break;
    default: 
        alert('unkinon condition');
        break;
}

//Using ternary operators
<expression> ? <true part>: \<false part>

canvas.style.backgroundColor == 'green' ? document.write('proceed') :
document.write('stop');