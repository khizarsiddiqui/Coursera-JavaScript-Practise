// DOM(Document Object Model) manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument); // returns true as it's document is a part of HTML

function sayHello(){
    var name =
        document.getElementById("name").value;
        var message = "<h2>Hello " + name + "!<h2>";
    
        // document
        // .getElementById("content")
        // .textContent = message;
        document
        .getElementById("content")
        .innerHTML = message;

        if (name === "student") {
            var title = document
            .querySelector("#title")
            .textContent;
            title += " & loving it!";
            document
            .querySelector("#title")
            .textContent = title;
        }
}