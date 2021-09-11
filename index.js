var readlineSync = require("readline-sync");

const chalk = require('chalk');

var score = 0;

var questionLevelOne = [
{
  question: "Who tells Harry he's is a Wizard? ",
  answer:"hagrid"
},
{
  question:"What is Hermoine's cat name? ",
  answer: "crookshanks"
},
{
  question:"Diagon Alley's main bookshop is called Flourish and .. ",
  answer: "blotts"
},
{
  question:"Where did the students study herbology? ",
  answer:"greenhouse"
},
{
  question:"Which Hogwarts staff member lives near the Forbidden Forest? ",
  answer:"hagrid"
}];

var questionLevelTwo = [
  {
    question:"What is the name of Hagrid's dog? ",
    answer:"fang"
  },
  {
    question:"What treat does Hagrid buy Harry in Diagon Alley? ",
    answer:"icecream"
  },
  {
    question:"What class does severus snape teach? ",
    answer:"potions"
  },
  {
    question:"What color was the unicorn blood that was found a over the forest? ",
    answer:"silver"
  },
  {
    question:"What quidditch position does harry end up playing in for the Gryffindor team? ",
    answer:"seeker"
  }
]

var questionLevelThree = [
  {
    question:"What subject does professor Binns take? ",
    answer:"history of magic"
  },
  {
    question:"What number on Privet Drive do the Dursleys live on? ",
    answer:"4"
  },
  {
    question:"What chess piece does Ron choose to play as? ",
    answer:"knight"
  },
  {
    question:"What is Neville Longbottom's pet toad called? ",
    answer:"trevor"
  },
  {
    question:"What is the name of the shop where hagrid purchases Harry an owl? eyelops owl .. ",
    answer:"emporium"
  }
];

function display(){
  var userName = readlineSync.question("May I Know your Name? ");
  console.log(chalk.blue("Welcome!! "+ userName +" TO HOW MUCH DO YOU KNOW HARRY POTTER"));
}


function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are Right!!");
    score = score + 2;
  } else {
    console.log("Wrong!");
  }
console.log("Your score: "+score);
console.log("----------------------");

}

function game(){
  for(var i=0;i<questionLevelOne.length;i++){
    var currentQuestion = questionLevelOne[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
  
}



display();
game();
gameLeveltwo();
gameLevelThree();
finalScore();

function gameLeveltwo()
{
  if(score >= 8)
  {
    console.log("Congrats!! you qualified for level 2");
    for(var i=0;i<questionLevelTwo.length;i++)
    {
      var currentQuestion = questionLevelTwo[i];
      play(currentQuestion.question,currentQuestion.answer);
    }
  }

}

function gameLevelThree(){
  if(score >=16)
  {
    console.log("Congrats!! you qualified for level 3");
    for(var i=0;i<questionLevelThree.length;i++)
    {
      var currentQuestion = questionLevelThree[i];
      play(currentQuestion.question,currentQuestion.answer);
    }
  }
}

// output
function finalScore(){
  console.log("Hurray!! Your final score is: "+chalk.blue(score));
}