const Dragon = require('./dragon')

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }
    dontInviteThemOverForDinner(evilDoings){
        return this.evilDoings.forEach(evilDoing => {
            console.log(`${this.name} will ${evilDoing}`)
        })
    }
    burnsNemesis(){
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}

// let black = new EvilDragon("Hardcore", "BrwonRedBlack", ["kill", "hate", "BURN!!!"], "killer");
// console.log(black);
// console.log(black.dontInviteThemOverForDinner());
// console.log(black.burnsNemesis())
module.exports = EvilDragon;
