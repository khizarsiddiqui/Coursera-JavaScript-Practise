// event handling
document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello(event) {
            this.textContent = "said it!";
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
        // unobstructive event binding
        document.querySelector("button")
        .addEventListener("click", sayHello);
    }
);

// document.querySelector("button")
// .onclick = sayHello;