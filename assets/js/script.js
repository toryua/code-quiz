
var startBtnEl = document.querySelector("#startBtn");
var quizTimerEl = document.querySelector("#timer");


function startQuiz() {
    console.log("The click worked!");

    window.alert("The timer started and the game has begun!");

    function quizCountDown() {
        console.log("quizCountDown is called");
        
        var quizTimeLeft = 3000;
        var timeInterval = setInterval(function() {
            if (quizTimeLeft > 0) {
             quizTimerEl.textContent = quizTimeLeft;
             quizTimeLeft--;
            } else {
            quizTimerEl.textContent = 'Time is up!';
            }

            
        })
        
        
    };

    quizCountDown();
     
};
startBtnEl.addEventListener("click", startQuiz);