var readlineSync= require("readline-sync");
var word =readlineSync.question("enter word to make it upercase") ;
console.log("the word" + " "+ word.toUpperCase());
var charNumber=readlineSync.question("enter word to know the char number");
console.log("the char number  "+ charNumber.length );
var word1 =readlineSync.question("enter the first word ");
var word2 =readlineSync.question("enter the second word ");
console.log("two words "+ word1+" "+word2 );
var word3 =readlineSync.question("enter the word");
if (word3.length<20){
    console.log(word3.substr(21,word3.length))
}