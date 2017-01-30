var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newArry=[];
for(var i; i<people.length;i++){
     newArry.push(people[i]);
    for(var j;j<alphabet.length;j++){
        newArry.push(alphabet[j]);
        
    }
   
}
 console.log(newArry.join(" , "));