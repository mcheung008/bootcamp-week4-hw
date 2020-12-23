const startButton = document.getElementById("start-quiz-button")
const questionContainerEl = document.getElementById ("question-box")
const questionEl = document.getElementById("question")
const choicesButtonsEl = document.getElementById("choices-buttons")
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener("click" , startQuiz)


// const timerEl = document.getElementById("timer");
// const secondsLeft = 180;
  


function startQuiz() {
    
    
    startButton.classList.add("hide")
    shuffledQuestions= questions.sort(() => Math.random() - .5)
    questionContainerEl.classList.remove("hide")
    currentQuestionIndex = 0
    nextQuestion()


}


function nextQuestion() {

    showQuestion(shuffledQuestions[currentQuestionIndex])





}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.choices.forEach(choices => {
        const button = document.createElement("button")
        button.innerText = choices.text
        button.classList.add("btn-btn-info")
       
        button.addEventListener("click" , selectChoices)
        choicesButtonsEl.appendChild(button)
    })
}






function selectChoices(e) {






}





// startBtn.addEventListener("click" , startTimer);

// function startTimer() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timerEl.textContent = "Time: " + secondsLeft;

//         if(secondsLeft === 0) {
//             alert("Times up!");
//             clearInterval(timerInterval);
//         }
//     },1000)
// }
// startTimer();
