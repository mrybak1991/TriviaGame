$(document).ready(function() {
  
    var trivia = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentSet: 0,
        timer: 20,
        timerOn: false,
        timerId: '',
        resultId: '',
    
        questions: {
            q1: 'Who is the only Devil to win the Hart Trophy',
            q2: 'How many Stanley Cups have the Devils won?',
            q3: "What Devil won the franchise's first Conn Smythe Trophy?",
            q4: "What Devil wore number 4 and the 'C' for the majority of his Devil's career?",
            q5: "This Devil won the Norris Trophy for the League's Best Defenseman in 2003-04 season?",
            q6: "What year did the Devils win their second Stanley Cup?",
            q7: "What Devil has the nickname 'Mr. Devil'?",
            q8: "What year did the Devil's win their third Stanley Cup?",
            q9: "What Devil holds the record for the most wins by a goaltender all time?",
            q10: "What Devil is considered the greatest goaltender of all time?",
        },
    
        choices:{ 
            q1: ['Scott Stevens','Martin Brodeur','Scott Niedermayer', 'Taylor Hall'],
            q2: ['1','5','3','4'],
            q3: ['Claude Lemieux','Scott Stevens','Martin Brodeur','Bill Guerin'],
            q4: ['Brian Ralfski','Ken Daneyko','Scott Stevens','Scott Niedermayer'],
            q5: ['Scott Niedermayer','Scott Stevens','Colin White','Brian Ralfski'],
            q6: ['1999','2000','2003','1995'],
            q7: ['Ken Daneyko','Martin Brodeur','Patrick Elias','Andy Greene'],
            q8: ['2001','2005','2002','2003'],
            q9: ['Chris Terreri','Sean Burke','Cory Schneider','Martin Brodeur'],
            q10: ['Chris Terreri','Sean Burke','Cory Schneider','Martin Brodeur'],
        },
    
        answers: {
            q1: 'Taylor Hall',
            q2: '3',
            q3: 'Claude Lemieux',
            q4: 'Scott Stevens',
            q5: 'Scott Niedermayer',
            q6: '2000',
            q7: 'Ken Daneyko',
            q8: '2003',
            q9: 'Martin Brodeur',
            q10: 'Martin Brodeur',
        },
        };

    var questions = Object.values(trivia.questions);
    

    function startTrvia (){
        trivia.timerOn = true;
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.unanswered = 0;
        clearInterval(trivia.timerId);
        $('#start').hide();
        $('#questionScreen').show();
        $('.triviaResults').html('');
        $('#time').text(trivia.timer);
        $('#openScreen').hide();
        $('#remainingTime').show();
        Question()
    };

    function Question(){
        trivia.timer = 20;
        $('#time').text(trivia.timer);

        if(trivia.timerOn){
            trivia.timerId = setInterval(timer, 1000);
        }

        var questionContent = questions[trivia.currentSet];
        $('.Question').text(questionContent);
        if(trivia.currentSet !== questions.length) {
            var questionOptions = Object.values(trivia.choices)[trivia.currentSet];
            questionOptions.map(function (ans) {
                return $('#gameChoices').append($('<button class="choices btn btn-danger m-2">'+ans+'</button><br>'));
            });
        }
        
    };


    function timer(){
        if(trivia.timer > -1 && trivia.currentSet < questions.length){
            $('#time').text(trivia.timer);
            trivia.timer--;
        }
        else if(trivia.timer === -1){
            trivia.unanswered++;
            trivia.result = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(guessResult, 2000);
            $('.triviaResults').html('<h3> You took too long! The correct answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
        } 
        else if(trivia.currentSet === questions.length){
        
            $('.triviaResults').html('<p>Correct: ' + trivia.correct + '</p>'
            + '<p> Incorrect: ' + trivia.incorrect + '</p>'
            + '<p> Unanswered: ' + trivia.unanswered + '</p>'
            + '<p> Better Luck Next Time! </p>' 
            + '<button id = "restartGame" class="btn btn-danger"> Restart Game </button>');
            
            $('#questionScreen').hide();
                       
            $('#openScreen').show();
            $('#restartGame').on('click',startTrvia)

            
            
            
            
         
        }
    };

    function validate (){
        console.log(this);
        var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
        if($(this).text() === currentAnswer){
            console.log($(this));
            $(this).removeClass('btn-danger');
            $(this).addClass('btn-success');
            trivia.correct++;
            clearInterval(trivia.timerId);
            
            $('.triviaResults').html('<p>Bingo!</p>');
            resultId = setTimeout(guessResult, 2000);
            }
        else{
            trivia.incorrect++;
            clearInterval(trivia.timerId);
            $('.triviaResults').html('<p>The correct answer was '+ currentAnswer + '</p>');
            resultId = setTimeout(guessResult, 2000);
        }
    };

    function guessResult(){
        trivia.currentSet++;
        $('#gameChoices').empty();
        $('.triviaResults').empty();
        resultId = setTimeout(Question, 2000);
    }


    $('#remianingTime').hide();
    $(document).on('click', '.choices', validate);
    $('#start').on('click', startTrvia)
});  