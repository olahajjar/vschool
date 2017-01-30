function getRandom(min,max){
    return Math.floor(Math.random()*(max -min+1))+min;
}
$("#basswerd").click(function(){
$("#output").val(basswerd(chars));
});

var chars = [];
var chars[0] ="abcdefghijklmnopqrstuvwxyz";
var chars[1]="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chars[2]='123456789';
var chars[3]="!@#$%^&*()_+:";
var pas="";
function basswerd (chars){
    for(var k=0;k<=8;k++){
    for(var i=0;i<chars.length;i++){
        for(j=0;j<chars[i].length;j++){
            getRandom(0, chars[i].length);
        }
        
    }
    
}
}