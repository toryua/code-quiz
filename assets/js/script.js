
var startBtnEl = document.querySelector("#startBtn");
var quizTimerEl = document.querySelector("#timer");
var quizEL = document.querySelector("#quiz");
var quizQEl = document.querySelector("#quizQuestion");
var quizAEl = document.querySelector("#quizAnswer");




function startQuiz() {
    console.log("The click worked!");

    var playerName = window.prompt("Enter your initials to begin:");


    function quizCountDown() {
        console.log("quizCountDown is called");
        
        var quizTimeLeft = 18000;
        var timeInterval = setInterval(function() {
            if (quizTimeLeft > 0) {
             quizTimerEl.textContent = quizTimeLeft;
             quizTimeLeft--;
            } else {
            quizTimerEl.textContent = 'Time is up!';
            }

            
        })
    
    function quizQuestions() {
        console.log("quizQuestions is called!")
        
        var quizQuestions = [
            {q: 'Question One is false. Type "f"', a: 'f'},
            {q: 'Question Two is true. Type "t"', a: 't'},
            {q: 'Question Three is true. Type "t"', a: 't'},
        ];
        
        var quizScore = 0;
        for (var i = 0; i < quizQuestions.length; i++) {
            var answer = confirm(quizQuestions[i].q);

            if (
                (answer === true && quizQuestions[i].a === 't') ||
                (answer === false && quizQuestions[i] === 'f')
            ) {
                quizScore++;
            } else {
                quizTimeLeft--;
            };
        console.log(quizScore);
        }

        function endGame () {
            console.log("endGame is called!");
            window.alert("The quiz has ended! You scored " + quizScore + " . It's time to see how your score stacks up!");

            var highScore = localStorage.getItem("highscore");
            if (highScore === null) {
                highScore = 0;
            }

            if (quizScore > highScore) {
                localStorage.setItem("highscore", quizScore);
                localStorage.setItem("name", playerName);
            }
        }    
        endGame();
        }
      quizQuestions();  

     
    };

    quizCountDown();
         
};
startBtnEl.addEventListener("click", startQuiz);