// arrays
// var array = new Array();
// array[0] = "Khizar";
// array[1] = 10;
// array[2] = function(name){
//     console.log("hello " + name);
// }
// array[3] = {course: "html, css and js"};

// console.log(array);
// array[2]("khizar");
// array[2](array[0]);

// //short hand array creation
// var names = ["khizar" , "safi" , "ahsan"]
// // console.log(names);

// for(var i = 0; i < names.length; i++){
//     console.log("hello " + names[i]);
// }

// // prints only array 100 value but undefines other 99 values as index 100 is only assigned with value "Jim"
// names[100] = "jim";
// for(var i = 0; i < names.length; i++){
//     console.log("hello " + names[i]);
// }

var names2 = ["khizar" , "safi" , "ahsan"]

// var myObj = {
//     name: "khizar",
//     course: "JS",
//     platform: "coursera"
// };
// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop]);
// }
// for (var name in names2) {
//     console.log("hello " + names2[name]);
// }

// greeting automatically becomes the object of names2 and adds up to the for loop for the below code
names2.greeting = "HI!";

for (var name in names2) {
    console.log("hello " + names2[name]);
}
