var text ="hello hi hey";
var count =1;
var saveLetter="";
for(var i=0;i<text.length;i++){
    if((saveLetter.indexOf(text[i])==-1)){
        saveLetter=saveLetter+text[i];
        for(j=i+1;j<text.length;j++){
            if(text[i]===text[j]){
                count++;
            }
        }
        
        console.log(text[i]+" "+count);
    }
    count=1;
}