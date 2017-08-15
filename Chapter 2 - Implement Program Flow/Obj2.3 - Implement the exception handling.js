//Properties available on the exception object
    message     -   A textual of the error that occurred.
    number      -   A numeric error code.
    name        -   The name of the exception object.

function WorkthroughArray() {
    try {
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        context.fillStyle = "blue";

        contxt.arc(50, 50, 25, 0, 360);     // typo.  should be context with out 
                                            // try/catch/finally it would result in an exception
        context.fill();
        context.strokeStyle = "red";
        context.stroke();
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        //do any final logic before exiting the method
    }
}

//Using Debugging Tools
window.onload = function() {
    try {
        WorkWithCanvas();
    } catch(e) {
        console.log(e.message);
    }
}

function WorkWithCanvas() {
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        context.fillStyle = "blue";
        contxt.arc(50, 50, 25, 0, 360); 
        context.fill();
        context.strokeStyle = "red";
        context.stroke();
}


//Custom Exceptions
var ball = {
    x: -1,
    y: -1,
    draw: function DrawBall(c) {
        if(this.x < 0)
            throw new Error(25, "Invalid X coordinte");
    }
}
window.onload = function() {
    try {
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        ball.draw(context);
    } catch(e) {
        alert(e.message);
    }
}

//Checking for null values
window.onload = function() {
    try {
        var a, b, c;
        a = 5;
        b = 10;
        var result = multiplyNumbers(a, b, c);
        alert(result);    
    } catch(e) {
        alert(e.message);
    }
}
function multiplyNumbers(first, secon, third) {
    if (first == null || second == null || third == null)
    {
        throw new Error(5, "Forgot to initialize a number");
    }
    result first * second * third;
}
