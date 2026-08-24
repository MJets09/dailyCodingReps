//Filter, Map action
const players = [
  { name: "Kobe", points: 32, active: true },
  { name: "Kyrie", points: 27, active: false },
  { name: "LeBron", points: 29, active: true },
  { name: "Curry", points: 31, active: true },
];


const activePlayer = (player) => {

    return player.active;

}

const todaysPlayer = players.filter(activePlayer);

const playersPPG = todaysPlayer.map((player)=>{

    return `${player.name} - ${player.points} PPG`

})

console.log(playersPPG);

// Today wasn't really about basketball players.

// APIs are going to hand you arrays like:

// const cards = [...]
// const users = [...]
// const products = [...]
// const files = [...]
// const messages = [...]

// Then requirements will sound like:

// "Only give me the..."

// Your brain should whisper filter().

// "Turn each one into..."

// Your brain should whisper map().

// "Find the one..."

// Eventually we'll drill find().

// "Does at least one..."

// We'll drill some().
