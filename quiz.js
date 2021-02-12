allQuestions = [
  {
    question: " What is the   Non Primitive Data Types in JavaScript?",
    options: ["Object", "Array", "Number", "Boolean"],
    correct: "Object",
    // Can add an index element for correct answer to reduce duplicacy
    // correctIndex: 0,
  },
  {
    question:
      "Which of the following variables takes precedence over the others if the names are the same?",
    options: [
      "Global variable",
      "The local element",
      "The two of the above",
      "None of the above",
    ],
    correct: "The local element",
  },
  {
    question:
      " Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    options: ["last()", "put()", "push()", " None of the above."],
    correct: "push()",
  },
  {
    question:
      "Which built-in method returns the calling string value converted to lower case?",
    options: [
      "toLowerCase()",
      " toLower()",
      "changeCase(case)",
      "None of the above.",
    ],
    correct: "toLowerCase()",
  },
  {
    question: " In which language is Python written?",
    options: ["English", "PHP", "C", "C++"],
    correct: "C",
  },
  {
    question:
      "Which one of the following is the correct extension of the Python file?",
    options: [".py", ".python", ".p", ".pi"],
    correct: ".py",
  },
];

let ques = document.querySelector(".ques");
let next = document.querySelector(".next");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

// selecting label for option
let opt1 = document.querySelector(".opt1");
let opt2 = document.querySelector(".opt2");
let opt3 = document.querySelector(".opt3");
let opt4 = document.querySelector(".opt4");

let forDynamicRadiobtn = document.querySelector(".forDynamicRadiobtn");

let lab = document.querySelectorAll(".lab");

let counter = 0; // counter => numberOfQuestionsAnswered

let score = 0;
let totalQuestions = allQuestions.length;

next.addEventListener("click", function () {
  // Is previous answer correct
  if (counter > 0) {
    const correctAnswer = allQuestions[counter - 1].correct;
    const allAnswers = document.getElementById("answers");
    const userAnswer = document.querySelector(`input[name='samename']:checked`)
      .value;
    if (userAnswer === correctAnswer) {
      score++;
    }

    console.log(` Score: ${score} / ${totalQuestions}`);
  }

  // Create next Question
  forDynamicRadiobtn.innerText = "";
  if (counter < allQuestions.length) {
    let q = allQuestions[counter].question;
    ques.innerHTML = q;
    options = allQuestions[counter].options;
    for (let op of options) {
      let createSpan = document.createElement("span");
      let createSpan2 = document.createElement("span");
      customRadioBtn = document.createElement("input");
      customRadioBtn.setAttribute("type", "radio");
      customRadioBtn.setAttribute("name", "samename");
      customRadioBtn.setAttribute("value", op);
      createSpan.classList.add("mr");
      createSpan2.classList.add("bt");
      createSpan2.appendChild(customRadioBtn);
      createSpan.innerHTML = op;
      forDynamicRadiobtn.appendChild(createSpan2);
      forDynamicRadiobtn.appendChild(createSpan);

      // console.log(op);
    }
    counter += 1;
  } else {
    document.body.innerHTML = "";
    let newDiv = document.createElement("div");
    newDiv.classList.add("bg-info", "text-center", "mt-5");
    newDiv.innerHTML = `<h1>Your Total score is :${score} / ${allQuestions.length}</h1>`;
    document.body.appendChild(newDiv);
    // console.log(`Your Total score is ${score}`);
    if (score > 3) {
      let congoMessage = document.createElement("h2");
      congoMessage.innerHTML = "CONGRATULATIONS YOU PASSED THE TEST";
      // congoMessage.setAttribute("br");
      congoMessage.classList.add("text-center", "bg-warning");
      // body.classList.add("blackColor");
      document.body.appendChild(congoMessage);
    } else {
      let failMessage = document.createElement("h2");
      failMessage.innerHTML = `OOPS YOU FAILED BETTER LUCK NEXT TIME`;
      // congoMessage.setAttribute("br");
      failMessage.classList.add("text-center", "bg-warning");
      document.body.appendChild(failMessage);
    }
  }
});

console.log(counter);
