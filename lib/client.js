var Player = require("./structures/Player");
var check  = require("./src/check")
class Numer0nClient {
    constructor() {
        this.players = [];
        this.turn = 0;
    }
    get turnPlayer() {
        return this.players[this.turn];
    }
    join(name, numbers, tags) {
        if(!check(numbers)) return false; 
        if(this.players.length >=2)return false;
        this.players.push(new Player(name,numbers,tags)); 
        return true;
    }
    call(numbers,callback) {
        if(1 >= this.players.length) {
            callback({
                status: false,
                result: undefined
            })
            return;
        }
        if(!check(numbers)) {
            callback({
                status: false,
                result: undefined
            })
            return;
        }
        callback({status: true,result: this.check(numbers)});
        this.turn = this.turn == 0?1:0;
    }
    check(numbers) {
        var checkingPlayer = this.players[this.turn == 0?1:0];
        
        var ans = {
            bite: 0,
            eat: 0 
        }
      
        for(var i=0;i<3;i++){
            for(var s=0;s<3;s++){
                if(numbers[i] == checkingPlayer.numbers[s]){
                    ans.bite++;
                    if(i == s){
                        ans.bite--;
                        ans.eat++;
                    }
                }

            }
        }
        return ans;
    }
    
}

module.exports = Numer0nClient;