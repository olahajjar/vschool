function getRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1))+min;
}
var Enemy= function(type) {
    var type = type ;
    this.enemyType= "";
    this.hitPoints=0;
    this.defense=0
    this.genrate=function(){
        var index=getRandom(0,type.length-1);
        this.enemyType =type[index];
        if(this.enemyType === "Ancient Dragon") {
            this.hitPoints = getRandom(80,100);
            this.defense = this.hitPoints*3;
        } else if(this.enemyType === "Prowler") {
            this.hitPoints = getRandom(50,79);
            this.defense = this.hitPoints*3;    
        }else if(this.enemyType === "Mighty Grunt") {
            this.hitPoints = getRandom(20,49);
            this.defense = this.hitPoints*3;
        }  
    } 
}
var possibleType =["Ancient Dragon",'Prowler',"Mighty Grunt"];
    for(var i=0; i<100;i++){
        var tempEnemy=new Enemy(possibleType);
        tempEnemy.genrate() ;
        console.log(tempEnemy.enemyType);
        console.log(tempEnemy.hitPoints);
        console.log(tempEnemy.defense);
        
    }