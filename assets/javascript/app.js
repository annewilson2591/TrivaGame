$(document).ready(function(){
    ///check these functions
    $('#remaining-time').hide();
    $('#start').on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);
})

var trivia = {
    //properties 
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    //currentSet: 0,
    //timer: 20,
    //timerOn: false,
    //timerId: '',

    //questions
    questions: {
        q1: 'Which supervillain becomes president of the United States?',
        q2: 'Which supervillain has the ability to control all of he molecules in his body?',
        q3: 'The Green Goblin often uses weapons that look like what?',
        q4: 'What is Lex Luther/s real first name?',
        q5: 'With which group of superheros does Ultron often clash?',
        q6: 'Which super skills does the Dark Phoenix often use to combat enemies?',
        q7: 'The electro-blast gloves are a primary weapon of which famous villain?',
        q8: 'What object fuels Juggernaut?',
        q9: 'Selina Kyle is an alter ego for which slinky supervillain?',
        q10: 'Venom looks like an evil version of which superhero?',
    },
    options: {
        q1: ['Doctor Doom', 'Lex Luthor', 'Galactus'],
        q2: ['Doctor Octopus', 'Ultron', 'Apocalyse'],
        q3: ['Jack-o-lanterns', 'bazookas', 'swords'],
        q4: ['Xavier', 'Alexander', 'Joe'],
        q5: ['Avengers', 'X-Men', 'Fantastic Four'],
        q6: ['laser beams', 'fireballs', 'energy manipulation'],
        q7: ['Green Goblin', 'Blackheart', 'Mr. Freeze'],
        q8: ['Crimson Gem', 'Emerald Jewel', 'Butane'],
        q9: ['Mystique', 'Catwoman', 'Dark Phoenix'],
        q10: ['Batman', 'Spiderman', 'Hulk'],
    },
    answers: {
        q1: 'Lex Luthor',
        q2: 'Apocalyse',
        q3: 'Jack-o-lanterns',
        q4: 'Alexander',
        q5: 'Avengers',
        q6: 'energy manipulation',
        q7: 'Green Goblin',
        q8: 'Crimson Gem',
        q9: 'Catwoman',
        q10: 'Spiderman',
    }
}