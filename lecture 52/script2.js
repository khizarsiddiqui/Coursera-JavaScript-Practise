(function (window) {
    var safiGreeter = {};
    safiGreeter.name = "safi";
    var greeting = "Hi ";
    safiGreeter.sayHi = function () {
        console.log(greeting + safiGreeter.name);
    }

    window.safiGreeter = safiGreeter;

})(window); // execution context

// fake namespaces
// var safiGreeter = {};
// safiGreeter.name = "safi";
// var greeting = "Hi ";
// safiGreeter.sayHi = function () {
//     console.log(greeting + safiGreeter.name);
// }