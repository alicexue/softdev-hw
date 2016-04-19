console.log("loaded foo.js");

var base = "this is in foo in global namespace";
var x = "x is in the global namespace";
var f2 = function() {
    console.log("this is f2");
};

var f1 = {
    x : "sumpn in the f1 namespace",
    f2 : f2,
    f : function() {
	console.log("this is in f in f1 namespc");
	console.log("x is " + x);
	console.log("f1.x is " + f1.x);
	console.log("better way: " + this.x);
    }
};

var makeIncrementer = function() {
    var c = 0;
    function inc(){
	c++;
	return c;
    }
    return inc;
}

// in console:
// var wat = makeIncrementer()
// wat()

var makeAdder = function(n) {
    var c = 0;
    function add(){
	c = c + n;
	return c;
    }
    return add;
}

