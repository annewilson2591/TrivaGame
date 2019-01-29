$(document).ready(function(){

    //start game when start button clicked 
    $("#start-button").on("click", gameState.startTimer);
  
  });
  
  
  var gameState = {
    timeRemaining : 60,
  
    //start timer, hide start page, show questions
    startTimer: function() {
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      setInterval(gameState.countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    },
  
    //stop timer and check answers
    countdown: function() {
      gameState.timeRemaining--;
      $("#timer").text("Time remaining: " + gameState.timeRemaining);
      if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#timer").empty();
      }
    },
  
    // stop the timer and check the answers
    stopTimer: function() {
      clearInterval();
      trivia.checkAnswers();
    },
  
    //hide questions and display end page with results
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
      $("#end-page").show();
      $("#questions-box").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correct-answers").text("Correct answers: " + numCorrect);
      $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
      $("#unanswered").text("Skipped questions: " + numUnanswered);
    }
  }
  
  //questions and scoring functions
  var trivia = {
  
    //questions from array, loop and append
    displayQuestions: function() {
      var divContainer = $("#questions-box");
      var answerGroup = $(".form-check");
      divContainer.append('<h2>Answer the following questions:</h2>');
              
      for (var i = 0; i < questionBank.length; i++) {
  
        divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
  
        var answer1 = questionBank[i].answers[0];
        var answer2 = questionBank[i].answers[1];
        var answer3 = questionBank[i].answers[2];
  
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
      }
  
      //add done button to the end of page
      var doneButton = '<button class="btn btn-danger" id="done-button" type="submit">Done</button>';
      divContainer.append(doneButton);
      $("#done-button").on("click", gameState.stopTimer);
    },
  
    //test if user answers are correct
    checkAnswers: function() {
      var correctAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numUnanswered = 0;
  
      //loop to compare answers, increment score
      for (var i = 0; i < questionBank.length; i++) {
        correctAnswer = questionBank[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            numIncorrect++;
          }
        }
      }
  
      // show the end page with the score 
      gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },
  }
  
  var questionBank =
  [
    {
        question: 'Which supervillain becomes president of the United States?',
        answers: ['Doctor Doom', 'Lex Luthor', 'Galactus'],
        correct: 'Lex Luthor',
    },

    {
        question: 'Which supervillain has the ability to control all of he molecules in his body?',
        answers: ['Doctor Octopus', 'Ultron', 'Apocalyse'],
        correct: 'Apocalyse',
    },

    {
        question: 'The Green Goblin often uses weapons that look like what?',
        answers: ['Jack-o-lanterns', 'bazookas', 'swords'],
        correct: 'Jack-o-lanterns',
    },

    {
        question: 'What is Lex Luther/s real first name?',
        answers: ['Xavier', 'Alexander', 'Joe'],
        correct: 'Alexander',
    },

    {
        question: 'With which group of superheros does Ultron often clash?',
        answers: ['Avengers', 'X-Men', 'Fantastic Four'],
        correct: 'Avengers',
    },

    {
        question: 'Which super skills does the Dark Phoenix often use to combat enemies?',
        answers: ['laser beams', 'fireballs', 'energy manipulation'],
        correct: 'energy manipulation',
    },

    {
        question: 'The electro-blast gloves are a primary weapon of which famous villain?',
        answers: ['Green Goblin', 'Blackheart', 'Mr. Freeze'],
        correct: 'Green Goblin',
    },

    {
        question:'What object fuels Juggernaut?',
        answers: ['Crimson Gem', 'Emerald Jewel', 'Butane'],
        correct: 'Crimson Gem',
    },

    {
        question: 'Selina Kyle is an alter ego for which slinky supervillain?',
        answers: ['Mystique', 'Catwoman', 'Dark Phoenix'],
        correct: 'Catwoman',
    },

    {
        question: 'Venom looks like an evil version of which superhero?',
        answers: ['Batman', 'Spiderman', 'Hulk'],
        correct: 'Spiderman',
    },
  ]
  