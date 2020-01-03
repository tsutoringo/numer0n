var Player = require("./structures/Player");
var check  = require("./src/check")
class Numer0nClient {
    constructor() {
        this.players = [];
        this.turn = 0;
    }
    join(name, numbers) {
        if(!check(numbers)) return false; 
        if(this.players.length >=2)return false;
        this.players.push(new Player(name,numbers)); 
        return true;
    }
    call(numbers) {
        this.check(numbers)
    }
    check(numbers) {

        var checkingPlayer = this.players[this.turn == 0?1:0];
        
    }
}
module.exports = Numer0nClient;