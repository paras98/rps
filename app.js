var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissors_div =document.getElementById("s");
function getComputerChoice() {
  const choices = ['r','p','s'];
  var randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You WIN !`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function() { document.getElementById(user).classList.remove('green-glow')}, 300)
}


function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses ${convertToWord(computer)}${smallCompWord}. You LOSE !`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function() { document.getElementById(user).classList.remove('red-glow')}, 300)


}
function draw(user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} are same  ${convertToWord(computer)}${smallCompWord}. DRAW !`;
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(function() { document.getElementById(user).classList.remove('gray-glow')}, 300)

}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice)  {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice,computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice,computerChoice);
      break;
    case "ss":
    case "pp":
    case "rr":
      draw(userChoice,computerChoice);
      break;
  }
}
function main(){
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
