var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',

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
        q1: 'Taylor',
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
    },

    function startTriva (){
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.unanswered = 0;
        clearInterval(trivia.timerId);

        $('#questionScreen').show();
        $('.triviaResults').html('');
        $('#time').text(triva.timer);
        $('#openScreen').hide();
        $('#remainingTime').show();

        Question();
    };

    function Question(){
        
    }