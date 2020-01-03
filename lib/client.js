var Player = require("./structures/Player");
class Numer0nClient {
    constructor() {
        this.players = [];
    }
    join(name, numbers) {
        if(this.players.length >=2)return false
        this.players.push(new Player(name,numbers)); 
    }
}
module.exports = Numer0nClient;