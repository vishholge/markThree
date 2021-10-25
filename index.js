var readlineSync = require("readline-sync");

var score = 0;


var highScores = [
  {
    name: "Tanavi",
    score: 5,
  },

  {
    name: "ram",
    score: 3,
  },
]

var questions = [{
  question: "moring sunlight is good source of vitamin? \n a) D\n b) C \n c) E \n d) K ",
  answer: "a"
}, {
  question: "To get better health how many Hr should i sleep?\n a) 8\n b) 15 \n c) 5 \n d) 20  ",
  answer: "a"
},
{
  question: "which of the following is the best time for drink milk ?\n a) afterbreakfast\n b) morning \n c) afterlunch \n d) beforebed",
  answer: "d"
},{
  question:"how much water should i drink per day?\n a) 5ltr\n b) 10ltr \n c) 3ltr \n d) 1ltr ",
  answer:"c"

},{
  question:"exersize for improving mental focus?\n a) running\n b) meditation \n c) squats \n d) chestworkout",
  answer:"b"
  
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "! \n Lests play Quiz for to check, How much healt-consious are you?");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("*****************")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
