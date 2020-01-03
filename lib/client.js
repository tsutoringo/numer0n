var Player = require("./structures/Player");
class Numer0nClient {
    constructor() {
        this.players = [];
    }
    join(name, numbers) {
        this.players.push(new Player(name,numbers));
    }
}
module.exports = Numer0nClient;