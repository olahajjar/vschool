var readlineSync= require("readline-sync");
var num1 =readlineSync.question("enter number1") ;
var num2 =readlineSync.question("enter number2") ;
var op =readlineSync.question("enter the operator") ;
if(op==="+"){
    add(num1,num2);
}else if(op=="-"){
    sub(num1,num2);  
}else if(op=="*"){
    mul(num1,num2);
      
}else if(op=="/"){
    div(num1,num2)    
}
var add= function(num1,num2){
    return(num1+num2):
}
var sub= function(num1,num2){
    return(num1-num2):
}
var div= function(num1,num2){
    return(num1/num2):
}
var mul= function(num1,num2){
    return(num1*num2):
}


