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




const questions = [
    {
        
        question: "What's the first thing a caterpillar usually eats after it's born?",
        choices: ["Other bugs" , "Grass" , "Its own eggshell" , "Spiders"],
        answer: "Its own eggshell"
    },
    {
        question: "What animal has the longest lifespan?",
        choices: ["Giant tortoise" , "Locust" , "Elephant" , "Blue whale"],
        answer: "Giant tortoise"

    },
    {
        question: "What is the only mammal capable of true flight?",
        choices: ["Ocelot" , "Bat" , "Hummingbird" , "Flying Squirrel"],
        answer: "Bats"
    },
    {
        question: "What is the fastest flying bird in the world?",
        choices: ["Spine-tailed Swift" , "Harpy Eagle" , "Peregrine Falcon" , "Horned Sungem"],
        answer: "Peregrine Falcon"
    },
    {
        question: "At most, how many pounds of meat can a tiger consume at one time?",
        choices: ["88" , "1000" , "250" , "13"],
        answer: "88"
    },
    {
        question: "What animal has the highest blood pressure?",
        choices: ["Flea" , "Blue Whale" , "Giraffe" , "Elephant"],
        answer: "Giraffe"
    },
    {
        question: "What is the world's most poisonous spider?",
        choices: ["Brown Recluse" , "Sydney Funnel Spider" , "Daddy-Longlegs" , "Brazilian Wondering Spider"],
        answer: "Brazilian Wondering Spider"

    },
    {
        question: "How far away can a wolf smell its prey?",
        choices: ["Nearly 2 miles" , "Nearly 4 miles" , "Nearly 1 mile" , "Nearly half a mile"],
        answer: "Nearly 2 miles"
        
    },
    {
        question: "How big is the largest known ant colony?",
        choices: ["37 miles" , "3,700 miles" , "3.7 miles" , "370 miles"],
        answer: "3,700 miles!"
        
    },
    {
        question: "What is the only dog that can't bark?",
        choices: ["Borzoi" , "Saluki" , "Whippet" , "Basenji"],
        answer: "Basenji"
        
    }
]









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
