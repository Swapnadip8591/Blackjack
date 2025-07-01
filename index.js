let player = {
    name: "Dip",
    chips: 100
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let win = 0

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let countEl= document.getElementById("count-el")

playerEl.textContent = player.name + ": $" + player.chips
countEl.textContent = "Blackjack: "+win

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if (player.chips<20){
        messageEl.textContent = "You are broke, you can refresh browser!!"
    } else {
        if(isAlive===false || hasBlackJack===true){
            isAlive = true
            hasBlackJack = false
            let firstCard = getRandomCard()
            let secondCard = getRandomCard()
            cards = [firstCard, secondCard]
            sum = firstCard + secondCard
            player.chips -= 20
            renderGame()
        }
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips+= 50
        win += 1
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips
    countEl.textContent = "Blackjack: "+win
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }      
}
