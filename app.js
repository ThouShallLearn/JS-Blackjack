const startGame = document.getElementById('start-game-btn');
const getBal = document.getElementById('bal-btn');

let DEFAULT_BET = 0;
let DEFAULT_BAL = 1000;

let pc1;
let pc2;
let cc1;
let cc2;

let userGenned = userGen();
//let addBal = balBut();

//let newGen;

//Get random cards.
function getCards(minCard, maxCard) {
  return Math.floor(Math.random() * maxCard + minCard);
}

//Get Credits
function userGen() {
  let userGenned;
  userGenned = parseInt(prompt('How many credits do you want to start with?'));
  console.log(`Your balance is: ${userGenned}`);

  return userGenned;
}

//balance still in-progress, cant get to change actual value
function balBut() {
  userGenned;
  let addBal;
  addBal = parseInt(prompt('How many credits do you want to start with?'));

  if (isNaN(addBal)) {
    userGenned += DEFAULT_BAL;
    alert("That wasn't a number, so we set at default +1000.");
    return addBal, userGenned;
  } else {
    userGenned += addBal;
    //userGenned += userGenned;
    console.log('Your balance is: ', userGenned);
    return userGenned;
  }
}

function playGame() {
  pc1 = getCards(1, 11);
  pc2 = getCards(1, 11);
  cc1 = getCards(1, 11);
  cc2 = getCards(1, 11);

  alert(`You draw a ${pc1} and a ${pc2}, adding up to 
${pc1 + pc2}
While the computer got ${cc1} and ${cc2}, adding up to
 ${cc1 + cc2} `);
  return pc1, pc2, cc1, cc2;
}

//DEFAULT_BET,pc1,pc2,cc1,cc2,userGenned.
//Start the game!
function startGameF() {
  userGenned;

  let bet = parseInt(
    prompt('What is your bet? 10, 20, 30, etc..', 'Place Bet Here!')
  );
  //Did they put in a bet??
  if (isNaN(bet)) {
    bet = DEFAULT_BET;
    //Dont want to get NAN
    alert("That wasn't a number so you play with 0 now!");
  } else {
    console.log(bet, 'Was your bet!');
  }
  // Play game

  playGame();

  //Who Wins?
  if (pc1 + pc2 > cc1 + cc2) {
    //userGenned += bet;
    alert(`PLAYER WINS ${bet + bet}
    ${(userGenned += bet + bet)} is now your balance!`);
    console.log(
      `WIN > Your cards: ${pc1 + pc2}, Bot Cards: ${
        cc1 + cc2
      } Balance up to: ${userGenned}`
    );
    return userGenned,pc1,pc2,cc1,cc2;
  } else if (cc1 + cc2 > pc1 + pc2) {
    //userGenned -= bet;
    alert(`Computer Win, You Lost ${bet} credits!
 ${(userGenned -= bet)} is now your balance!`);
    console.log(
      `LOSS > Your cards: ${pc1 + pc2}, Bot Cards: ${
        cc1 + cc2
      } Balance down to: ${userGenned}`
    );
    return userGenned;
  } else {
    alert(`Counts as push, you get ${bet} back!
Your balance stayed the same!`);
    console.log('Your new balance is:', userGenned);
  }
  return userGenned;
  //Balance
}

getBal.addEventListener('click', balBut);
startGame.addEventListener('click', startGameF);

//function whoWin(pc1, pc2, cc1, cc2) { }

//let bot1 = getCards(1, 11), checkAce;

/*function checkAce() {
   if (pc1 = 1 || 11) {
       pc1 = "Ace";
   } else {
        return pc1;
}
alert(`You draw a ${pc1} and a ${pc2}, adding up to ${pc1 + pc2}`);
}
function check2A() {
    if (pc2 = 1 || 11) {
    pc2 = "Ace";
    } else {
    return pc2;
    
}
alert(`You draw a ${pc1} and a ${pc2}, adding up to ${pc1 + pc2}`);
}*/

/*function getRandomIntInclusive(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }*/
