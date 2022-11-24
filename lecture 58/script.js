// JSON PROCESSING
// What's the JSON syntax rules? 
// Well, they're pretty simple. 
// Number one is it's a subset of JavaScript object's literal syntax 
// but with a couple of exceptions. Number one is the property names 
// must be in included in double quotes and the string values must be in double quotes as well.
// JSON is just a string, not a JS object literal.

document.addEventListener("DOMContentLoaded",
    function (event) {
        // Unobstrusive event binding
        document.querySelector("button")
        .addEventListener("click", function () {
        
            // call server to get the name
            $ajaxUtils
            .sendGetRequest("/data/name.json",
                function (res) {
                    var message =
                        res.firstName + " " + res.lastName
                    if (res.likesChineseFood) {
                        message += " likes Chinese food";
                    }
                    else {
                        message += " doesn't like Chinese food";
                    }
                    message += " and uses ";
                    message += res.numberOfDisplays;
                    message += " displays for coding.";

                    document.querySelector("#content")
                    .innerHTML = "<h2>" + message + "!";
                });    
        });
    }
); 