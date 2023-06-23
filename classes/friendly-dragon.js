const isEsModule = require("sinon/lib/sinon/util/core/is-es-module");
const Dragon = require("./dragon")

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals(lifeGoals) {
        return this.lifeGoals.forEach(lifeGoal => {
           console.log(`${this.name} likes to ${lifeGoal}`);
        })
    }

    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`
    }
}


// let draggy = new FriendlyDragon("Fluffy", "RoseBlack", ["burn you", "stay calm", "burn everyone"], "Alambron");
// console.log(draggy);
// console.log(draggy.breathesFire());
// console.log(draggy.hasLifeGoals());
// console.log(draggy.helpsPeople());

module.exports = FriendlyDragon;
