//syntax for an anonymous function
function (n,n,...n) { body};


//Demonstates using anonymous functions
$("#Button1").click(function() { ... });
$("#Button2").click(function() { ... });
$("#Button3").click(function() { ... });


//Callback functions used in the form of a parameter to another function
$("document").ready(function() {
    $("#Button1").click(function() {
        DoLongTask($("#inputValue").val(),
            function(result, data) {
                if (result == "SUCCESS")
                    alert(data + " is a Success");
                else 
                    alert(data + " is a fail");

            });
    });
});
function DoLongTask (n,f)
{
    if (n < 10)
        f("SUCCESS", n);
    else 
        f("FAIL", n);
}


//Using the this pointer
$("document").ready(
    function() {
        $('#floorDiv').click(function() {
            $(this).css("background-color", "red")
        })
    }
);


$("document").ready(
    function() {
        $('#floorDiv').click(function() {
            $("div").each(function() {$(this).css("background-color", "red");
        });
    })
});
