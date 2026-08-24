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