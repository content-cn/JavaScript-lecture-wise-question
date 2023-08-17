function main(){
    function Character(health, strength, agility) {
    this.health = health;
    this.strength = strength;
    this.agility = agility;
  }
  
  function Warrior(health, strength, agility, weaponType) {
    Character.call(this, health, strength, agility);
    this.weaponType = weaponType;
  }
  
  function Mage(health, strength, agility, spellType) {
    Character.call(this, health, strength, agility);
    this.spellType = spellType;
  }
  
  function Archer(health, strength, agility, arrowType) {
    Character.call(this, health, strength, agility);
    this.arrowType = arrowType;
  }
  
  function Hero(
    health,
    strength,
    agility,
    weaponType,
    spellType,
    specialAbility
  ) {
    Warrior.call(this, health, strength, agility, weaponType);
    Mage.call(this, health, strength, agility, spellType);
    this.specialAbility = specialAbility;
  }
  
  function Enemy(health, strength, agility, enemyType) {
    Character.call(this, health, strength, agility);
    this.enemyType = enemyType;
  }
  
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