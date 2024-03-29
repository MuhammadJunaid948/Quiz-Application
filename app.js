
let quizdata = [
        {
                "question": "What does HTML stand for?",
                "a": "Hypertext Machine language.",
                "b": "Hyper Text Markup Language",
                "c": "Hightext machine language.",
                "d": "Hypertext and links markup language",


                "correct": "Hyper Text Markup Language"
        },
        {
                "question": "How is document type initialized in HTML5.",

                "a": "<!DOCTYPE HTML>",
                "b": "</DOCTYPE>",
                "c": "</DOCTYPE html>",
                "d": "<Doctype HTMl?>",

                "correct": "<!DOCTYPE HTML>"

        },
        {

                "question": "Which of the following HTML Elements is used for making any text bold ?",

                "a": "<p>",
                "b": "<i>",
                "c": "<li>",
                "d": "<b>",

                "correct": "<b>"
        },
        {
                "question": "Which of the following HTML elements is used for creating an unordered list?",

                "a": "<ui>",
                "b": "<i>",
                "c": "<em>",
                "d": "<ul>",
                "correct": "<ul>"
        },
        {
                "question": "Which of the following characters indicate the closing of a tag? ",

                "a": ".",
                "b": "/",
                "c": "//",
                "d": "!",
                "correct": "/"
        },
        {
                "question": "What is the font size of the h1 heading tag?",

                "a": "20px",
                "b": "2em",
                "c": "4em",
                "d": "6em",
                "correct": "2em"
        },
        {
                "question": "Which of these tags would display the largest text?",

                "a": "<h4>",
                "b": "<h6>",
                "c": "<h2>",
                "d": "6em",
                "correct": "6em"
        },
        {
                "question": " Which of the following properties is used to align the text of a document?",

                "a": "text-indent",
                "b": "text-align",
                "c": "text-decoration",
                "d": "text-decoration",
                "correct": "text-align"
        },
        {
                "question": " Which of the following properties is used to set the width of an image?",

                "a": "border",
                "b": "width",
                "c": "height",
                "d": "moz-opacity",
                "correct": "width"
        },


]


// getting Element
const questionBox = document.getElementById("questionBox")
const optionsInput = document.querySelectorAll(".options")
const submit = document.getElementById("submit");


// console.log(optionsInput)
let index = 0;
let total = quizdata.length
let right = 0
let wrong = 0


function renderQuestion() {

        if (index === total) {
                return endQuiz()
        }
        reset()
        const data = quizdata[index]
        questionBox.innerText = `${index + 1}) ${data.question}`;
        optionsInput[0].nextElementSibling.innerText = data.a
        optionsInput[1].nextElementSibling.innerText = data.b
        optionsInput[2].nextElementSibling.innerText = data.c
        optionsInput[3].nextElementSibling.innerText = data.d
}


function submitQuiz() {
        const data = quizdata[index]
        const ans = getAnswer()
        if (ans === data.correct) {
                right++;
        }
        else {
                wrong++;
        }
        index++
        renderQuestion()
}
function getAnswer() {
        let answer;
        optionsInput.forEach(
                (input) => {
                        if (input.checked) {
                                answer = input.nextElementSibling.innerText;
                                console.log(answer)
                        }
                }
        )
        return answer;
}

function reset() {
        optionsInput.forEach(function (input) {
                input.checked = false;
        }
        )
}
function endQuiz() {
        document.getElementById("main").innerHTML = `
        
         <h3>Thank you for playing the quiz<h3>
         
         <h2>${right} are correct and ${wrong} are wrong </h2?
         `

}
renderQuestion()




