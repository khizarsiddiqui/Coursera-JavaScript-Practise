// object literals and this keyword
var literalCircle = { // new object()
    radius: 10,

    getArea: function() {
        console.log(this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(literalCircle.getArea());

// self keyword
var literalCircle = { // new object()
    radius: 10,

    getArea: function() {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);
        
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(literalCircle.getArea());

// when using object literal, "this" no more refers to global variable "Windows" but to the recently created object ("literalCircle" for here).
// when using "this" keyword within an already created function with "this" in object literal, the inner "this" starts referring to the global "Windows" object.

// note (self)
// Well, there's a common pattern that people use to get around this, and the way you get around this is you just say var self = this. 
// So now that you have self, self is always going to be referring to this. And this, at this point, at least, 
// is referring to the literalCircle object. So instead of in the inner functions referring to this, you always refer to self.