let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.scoreboard')
const resultDiv = document.querySelector('.result > p')
const rockDiv = document.getElementById('r')
const paperDiv = document.getElementById('p')
const scissorDiv = document.getElementById('s')

function getComputerChoice() {
  const choices = ['r', 'p', 's']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

function letterToWord(letter) {
  if (letter === 'r') return 'Rock🪨'
  if (letter === 'p') return 'Paper📃'
  if (letter === 's') return 'Scissors✂️'
}

function win(user, computer) {
  userScore++

  userScore_span.textContent = userScore
  console.log(userScore)

  resultDiv.textContent = `${letterToWord(user)}  beats  ${letterToWord(
    computer
  )}. You Win!🔥`

  document.getElementById(user).classList.add('glow-green')
  setTimeout(function () {
    document.getElementById(user).classList.remove('glow-green')
  }, 300)
}
function lose(user, computer) {
  computerScore++

  computerScore_span.textContent = computerScore

  resultDiv.textContent = `${letterToWord(user)} Loses To ${letterToWord(
    computer
  )}. You Loose 😭`
  document.getElementById(user).classList.add('glow-red')
  setTimeout(function () {
    document.getElementById(user).classList.remove('glow-red')
  }, 300)
}
function draw(user, computer) {
  console.count('DRAWWWWWW 📍')
  resultDiv.textContent = `${letterToWord(user)}  equals  ${letterToWord(
    computer
  )}. It's a Draw🤜🤛`

  document.getElementById(user).classList.add('glow-gray')
  setTimeout(function () {
    document.getElementById(user).classList.remove('glow-gray')
  }, 300)
}

function game(userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice)
      break
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice)
      break
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice)
      break
  }
}

function main() {
  rockDiv.addEventListener('click', function () {
    game('r')
  })
  paperDiv.addEventListener('click', function () {
    game('p')
  })
  scissorDiv.addEventListener('click', function () {
    game('s')
  })
}

main()
