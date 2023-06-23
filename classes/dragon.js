class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons = (...Dragons) => {
    return Dragons.map(el => {
      if(el instanceof Dragon) {
        return el.name
      }
    })
  }
}

// let dragon1 = new Dragon('Killer', 'redBrown');
// let dragon2 = new Dragon('Brown', 'Swetter');
// let dragon3 = new Dragon('Alambron', 'Giro');
// console.log(dragon1);
// console.log(dragon1.breathesFire());
// console.log(Dragon.getDragons(dragon1, dragon2, dragon3))

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
