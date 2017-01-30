var readlineSync = require("readline-sync");

function getRandom(min,max){

    return Math.floor(Math.random()*(max -min+1))+min;

}

var Player = function(name, health, attack, inv) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.inv = inv;
  this.addItem = function(item) {
    this.inv.push(item);
  }
}
var playerName = readlineSync.question("Enter your Name ") ;
console.log("Hi Welcome To the game   " + playerName);
var user = new Player(playerName, 100, 100, []);

var possiblEenemy=["Prowler","Dragon","Ancient Dungeon"];

var Inventory=["Sword","Knife","Axe","Light"];



var Enemy =function(enemyName,health,attack)

{  this.EnemyName=enemyName;

    this.health=health;

    this.attack=attack;
}
var enemies = [];
enemies[0] = new Enemy("Prowler", 20, 100);
enemies[1] = new Enemy("Dragon", 400, 200);
enemies[2] = new Enemy("Ancient Dungeon", 200, 1000);
while(true) {
  var userinput = readlineSync.question("what do you want to do walk enter w or view your id enter view") ;
  if(userinput == "w") {
   var chance = getRandom(50, 100);
    if(chance > 50) {
      enemy = enemies[getRandom(0, enemies.length - 1)];
      while(user.health > 0 && enemy.health > 0) {
        var userinput1=readlineSync.question("what do you want run or attack ") ;
        if(userinput1 == "run") {
          chance = getRandom(20, 100);
          if(chance > 50) {
            console.log("You run away");
            break;
          } else {
            console.log("You fool you cant run... or you can try again");
          }
        } else if(userinput == "attack") {
          var damage = getRandom(0, user.attack);
          enemy.health -= damage;
          console.log("You hit the enemy with " + damage + " amount of damage");
        } else {
          console.log("You fool put in 'attack' or 'run'");
        }
        chance = getRandom(0, 100);
        if(chance > 50) {
          console.log("Enemy attacks");
          var damage = getRandom(0, enemy.attack);
          user.health -= damage;
          console.log("You were hit for " + damage + " amount");
        } else {
          console.log("Enemy missed");
        }
      }
      if(enemy.health < 0 && user.health > 0) {
        console.log("You killed the enemy now have a prize");
        var item = Inventory[getRandom(0, Inventory.length - 1)];
        console.log("You got a " + item);
        user.addItem(item);
      } else if(user.health < 0) {
        console.log("You died");
        break;
      }
    }
  } else if(userinput=="view"){console.log(user.name+"  "+user.attack+"  "+user.health+"  "+user.inv);}
    else{
      
    console.log("You idiot put 'w' FOR WALK");
  }
}
console.log("Game over here is what you won" + user.inv);