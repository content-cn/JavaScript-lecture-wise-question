//Do not alter the starter code
function main(){

    //Create Character constructor function
    
    //Create Warrior ,Mage, Enemy and Archer constructor fntion inheriting Character
    
    //Create constructor function for Hero inheriting Hero and Mage
    
    let warrior1 = new Warrior(100, 50, 30, "sword");
    let mage1 = new Mage(80, 20, 50, "fireball");
    let archer1 = new Archer(90, 40, 40, "poison");
    let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
    let enemy1 = new Enemy(200, 80, 20, "goblin");
    
    console.log(warrior1);
    console.log(mage1);
    console.log(archer1);
    console.log(hero1);
    console.log(enemy1);
    
    return {Character,Hero,Warrior,Mage,Archer,Enemy};
    }