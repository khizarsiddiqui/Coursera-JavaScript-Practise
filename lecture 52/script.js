// fake namespaces
(function (window) {
    var khizarGreeter = {};
    khizarGreeter.name = "khizar";
    var greeting = "Hello "
    khizarGreeter.sayHello = function() {
    console.log(greeting + khizarGreeter.name);
    }

    window.khizarGreeter = khizarGreeter;
})(window);
