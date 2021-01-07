function initQuiz() {

  let remainingTime = 0;
  const startBtnEl = document.getElementById("startBtn");
  const remainingTimeEl = document.getElementById("remainingTime");
  const finalScoreEl = document.getElementById("finalScore");
  const startScreenEl = document.getElementById("startScreen");
  const quizScreenEl = document.getElementById("quizScreen");
  const finalScreenEl = document.getElementById("finalScreen");
  const submitBtnEl = document.getElementById("submitBtn");
  const highScoreBtnEl = document.getElementById("highscores");
  const highScoreBoxEl = document.getElementById("highScoreBox");
  let highScores = [];

  if (JSON.parse(localStorage.getItem('scores')) !== null) {
    highScores = JSON.parse(localStorage.getItem("scores"));
  }

  function startQuiz() {

    startScreenEl.setAttribute("class", "container d-none");
    quizScreenEl.setAttribute("class", "container");
    remainingTime = 30;
    remainingTimeEl.setAttribute("value", remainingTime);

    let rowEl = null;
    let colEl = null;
    let headerEl = null;
    let buttonEl = null;
    let currentQuestion = 1;
    let score = 0;

    let myInterval = setInterval(function () {
      if (remainingTime < 1) {
        clearInterval(myInterval);
        quizScreenEl.setAttribute("class", "container d-none");
        finalScreenEl.setAttribute("class", "container");
        return;
      }
      remainingTime = remainingTime - 1;
      remainingTimeEl.setAttribute("value", remainingTime);
    }, 1000);

    let clickTimeout = false;

    function generateQuestion(questionNum) {

      quizScreenEl.innerHTML = "";
      rowEl = document.createElement("div");
      rowEl.setAttribute("class", "row");
      quizScreenEl.append(rowEl);

      colEl = document.createElement("div");
      colEl.setAttribute("class", "col-0 col-sm-2");
      rowEl.append(colEl);

      colEl = document.createElement("div");
      colEl.setAttribute("class", "col-12 col-sm-8");
      rowEl.append(colEl);

      colEl = document.createElement("div");
      colEl.setAttribute("class", "col-0 col-sm-2");
      rowEl.append(colEl);

      colEl = rowEl.children[1];
      rowEl = document.createElement("div");
      rowEl.setAttribute("class", "row mb-3");
      colEl.append(rowEl);

      colEl = document.createElement("div");
      colEl.setAttribute("class", "col-12");
      rowEl.append(colEl);

      headerEl = document.createElement("h2");
      headerEl.innerHTML = questions[questionNum - 1].question;
      colEl.append(headerEl);

      colEl = quizScreenEl.children[0].children[1];
      for (let i = 0; i < 4; i++) {
        let rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row mb-1");
        colEl.append(rowEl);

        let colEl2 = document.createElement("div");
        colEl2.setAttribute("class", "col-12");
        rowEl.append(colEl2);

        buttonEl = document.createElement("button");
        buttonEl.setAttribute("class", "btn btn-light");
        buttonEl.setAttribute("type", "button");
        buttonEl.innerHTML = questions[currentQuestion - 1].choices[i];
        colEl2.append(buttonEl);
        buttonEl.addEventListener("click", function () {

          if (clickTimeout) {
            return;
          }
          clickTimeout = true;
          clearInterval(myInterval);
          let colEl = quizScreenEl.children[0].children[1];
          let rowEl = document.createElement("div");
          rowEl.setAttribute("class", "row border-top");
          colEl.append(rowEl);

          colEl = document.createElement("div");
          colEl.setAttribute("class", "col-12");
          rowEl.append(colEl);

          let parEl = document.createElement("p");
          colEl.append(parEl);
          if (this.innerHTML === questions[currentQuestion - 1].answer) {
            parEl.innerHTML = "Correct!";
            remainingTime = remainingTime + 3;
          } else {
            parEl.innerHTML = "Incorrect";
            remainingTime = remainingTime - 3;
            if (remainingTime < 0) {
              remainingTime = 0;
            }
            remainingTimeEl.setAttribute("value", remainingTime);
          }
          currentQuestion++;
          if (currentQuestion > questions.length) {
            score = remainingTime;
          }
          setTimeout(function () {

            if (currentQuestion > questions.length) {

              quizScreenEl.setAttribute("class", "container d-none");
              finalScreenEl.setAttribute("class", "container");
              finalScoreEl.setAttribute("value", score);
            } else {
              generateQuestion(currentQuestion);
              clickTimeout = false;
              myInterval = setInterval(function () {
                if (remainingTime < 1) {
                  clearInterval(myInterval);
                  quizScreenEl.setAttribute("class", "container d-none");
                  finalScreenEl.setAttribute("class", "container");
                  return;
                }
                remainingTime = remainingTime - 1;
                remainingTimeEl.setAttribute("value", remainingTime);
              }, 1000);
            }
          }, 1000);
        });
      }

    }

    function saveHighScore() {
      let initialsEl = document.getElementById("enterInitials");
      let newHighScore = {
        initials: initialsEl.value,
        highScore: score
      };
      console.log(newHighScore);
      highScores.push(newHighScore);
      console.log(highScores);
      localStorage.setItem("scores", JSON.stringify(highScores));
      }
      submitBtnEl.addEventListener("click", saveHighScore);

      generateQuestion(currentQuestion);
      }

      startBtnEl.addEventListener("click", startQuiz);
      highScoreBtnEl.addEventListener("click", function () {
      startScreenEl.setAttribute("class", "container d-none");
      quizScreenEl.setAttribute("class", "container d-none");
      finalScreenEl.setAttribute("class", "container d-none");
      highScoreBoxEl.setAttribute("class", "container");
      let colEl = document.getElementById("highscore-table");
      for (i = 0; i < highScores.length; i++) {
      let rowEl = document.createElement("div");
      rowEl.setAttribute("class", "row mb-1");
      colEl.append(rowEl);

      let colEl2 = document.createElement("div");
      colEl2.setAttribute("class", "col-12 text-center");
      rowEl.append(colEl2);

      let parEl = document.createElement("div");
      parEl.innerHTML = "Initials: " + highScores[i].initials + "   Score: " + highScores[i].highScore;
      colEl2.append(parEl);
    }
  });
}

initQuiz();