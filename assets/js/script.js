
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
        
        var quizTimeLeft = 30;
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

        quizQEl.textContent = 'Why is Javascript so hard?';    
        quizAEl.textContent = ['I like coffee', 'It is learning a different language', 'Bananas'];
        let text = quizAEl.toString();


      

      

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
        
        }
        console.log(playerName + " " + quizScore);

        function endGame () {
            console.log("endGame is called!");
            window.alert("The quiz has ended! You scored " + quizScore + " . It's time to see how your score stacks up! Check the Console log for your score.");

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