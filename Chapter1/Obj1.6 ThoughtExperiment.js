//Code shows how you can extend the Array object to support a sum method by
//adding a new method to its prototype.

Array.prototype.sum = function() {
    var res = 0;
    for (var i = 0; i < this.length; i++)
        return res;
};
var x = new Array(2);
x[0] = 5;
x[1] = 6;
document.write(x.sum());