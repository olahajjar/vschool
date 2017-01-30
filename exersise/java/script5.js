var Student = function(name, dob, grades,result) {
  this.studentName = name;
  this.studentDob = dob;
  this.studentGrades = grades; 
  this.studentResult = result ;
}
var student1 = new Student("ali","03/14/1988","[100,88,50,77]","pass");
var student2 = new Student("ali","03/14/1988","[100,77,50,77]","pass");
var student3 = new Student("ali","03/14/1988","[89,77,50,50]","pass");
var student4 = new Student("ali","03/14/1988","[100,90,50,60]","pass");
var student5 = new Student("ali","03/14/1988","[100,77,50,85]","pass");
console.log(student1);
  