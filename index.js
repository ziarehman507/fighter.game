var KICK = 'KICK'
var PUNCH = 'PUNCH'
var COVER = 'COVER'
var SP = 'SP'

var players = ["Joy", "Reo", "Thoor"]
var attects = [KICK, PUNCH, COVER, SP]
var stopGame;
var count = 0

var player1 = prompt("enter your name")
var player2 = players[Math.floor(Math.random() * 3)]

var player1_health = 100
var player2_health = 100

function GetAttectEffect() {
    var randomAttect = attects[Math.floor(Math.random() * 4)]
    if (randomAttect === KICK) {
        return [KICK, 10]
    } else if (randomAttect == PUNCH) {
        return [PUNCH, 20]
    } else if (randomAttect == SP) {
        return [SP, 50]
    } else {
        return [COVER, 0]
    }

}

function playerAction(count) {
    var attact = GetAttectEffect()
    if (count % 2) {
        player1_health = player1_health - attact[1]
        console.log(player2, " Attact to ", player1, " is ", attact[0], " and ", player1, " Health is ", player1_health)
    } else {
        player2_health = player2_health - attact[1]
        console.log(player1, " Attact to ", player2, " is ", attact[0], " and ", player2, " Health is ", player2_health)
    }
}

function result() {
    if(player1_health <= 0) {
        console.log(player2, "is Won")
    } 
    
    if(player2_health <= 0) {
        console.log(player1, "is Won")
    } 
    
}

function handleFight() {
    count++
    playerAction(count)

    if (player1_health <= 0 || player2_health <= 0) {
        clearInterval(stopGame)
        result()
    }

}

stopGame = setInterval(handleFight, 1000)
