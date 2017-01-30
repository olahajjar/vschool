
function countCode(world){
     var count=0;
    for (var i=0; i<world.length;i++){
       
        if(world[i]==="c" && world[i+1]==="o" && world[i+3]==="e"){
            count++ ;
            
    }
}
    return count;
}
    console.log(countCode("coneuywhcode"));