var phrase ="slimy smelly solution";
var count = 1;
var swipe ="";
for (var i=0; i <phrase.length; i++) {
    
    for(var j=i+1; j<phrase.length;j++) {
        if(phrase[i]===phrase[j]){
            count++;
            swipe=phrase[j];
        }
       
    }
    console.log(swipe +" "+count);
    swipe="";
    count = 0;
}