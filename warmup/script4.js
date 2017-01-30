var classroom = {
    names :["ola", "ali","omar"],
    age :[20,30,25],
    mag :["doctor","engneer"]
    
};
var car ={ color:red,
         type : pmw,
         model :1900} ;
var student ={ name:"ola",
             old:25,
             gradeuat :true};
var fruit ={
    type: "apple",
    test:"swite",
    color:"red"
};
var element ={
    p:"paragraph",
    h:"head",
    div:"divide"
    
};
var Car = function(type, model, color) {
 this.carType = type;
 this.carModel = model;
 this.carColor = color;
 this.start = function(task, object) {
   console.log("I turn the key on in the " + this.carType + " car");
     task(object);
 };
 this.drive = function(object) {
   console.log("I am driving at " + 50 + " kph" + " in the " + object.carColor + " " + object.carType + " car");
 
 }
};
var Students = function(name, old) {
 this.studentsName = name;
 this.studentsOLD= old;
 this.gradeuat = function() {
   console.log("gradeuated " + this.studentsName + " student");
 }
};
var Fruit = function(type, test) {
 this.studentsT = type;
 this.studentsTest= test;
 this.gradeuat = function() {
   console.log("gradeuated " + this.studentsName + " student");
 }
};

