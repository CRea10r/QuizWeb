const quizDB = [
    {
        question: "Q1:What is the full form of html",
        a: "Hello to my land",
        b: "Hey text markup language",
        c: "Hypertext Markup language",
        d: "Hypertext Makeup language",
        ans: "ans3"
    },
    {
        question: "Q2:What is the full form of css",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheet",
        ans: "ans1"
    },
    {
        question: "Q3:What is the full form of http",
        a: "HyperText Transfer Product",
        b: "HyperText Test Protocol",
        c: "Hey Transfer Product",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4:What is the full form of JS",
        a: "JavaSuper",
        b: "JavaScript",
        c: "JustScript",
        d: "JordanShoes",
        ans: "ans2"
    },
    {
        question: "Q5:JavaScript as an _______ language",
        a: "Object based",
        b: "Object Oriented",
        c: "Procedural",
        D: "None of these",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestions = () => {
    const questionlist = quizDB[questionCount];
    question.innerHTML = questionlist.question;
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}
loadQuestions();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>
        {
            if (curAnsElem.checked)
                {
                    answer = curAnsElem.id;
             }
        });
    return answer;
};

const deselectALL = () => {
    answers.forEach((curAnsElem) =>curAnsElem.checked = false);  
};
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans)
        {
            score++;
        };
    questionCount++;
    deselectALL();
    if (questionCount < quizDB.length) {
        loadQuestions();
    }
    else {
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} ✌<h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `; 
        showScore.classList.remove('scoreArea');
    }
});