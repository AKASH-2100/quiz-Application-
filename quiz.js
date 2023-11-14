const quizdata=[
    {
        question:" Which is the biggest continent in the world?",
        a:"North America",
        b:"Asia",
        c:"Africa",
        d:"Australia",
        correct:"b",
    },
    {
        question:" Which is the longest river in the world?",
        a:"Great Ganga",
        b:"Nile",
        c:"Amazon",
        d:"Niger",
        correct:"b",
    },
    {
        question:"Which is the largest ocean in the world?",
        a:"Indian Ocean",
        b:"Arctic Ocean",
        c:"Pacific Ocean",
        d:"Atlantic Ocean",
        correct:"c",
    },
    {
        question:"Which is India’s first super computer?",
        a:"Param8000",
        b:"Param80000",
        c:"Param800",
        d:"Param8",
        correct:"a",
    },
    {
        question:"Which bank is called bankers Bank of India?",
        a:"Reserve Bank Of India",
        b:"State Bank Of India",
        c:"ICICI Bank",
        d:"Punjab National Bank",
        correct:"a",
    },
    {
        question:"Which is the largest animal in the world?",
        a:"Shark",
        b:"Blue whale",
        c:"Elephant",
        d:"Giraffe",
        correct:"b",
    },
    {
        question:"Which is largest animal on land?",
        a:"Tiger",
        b:"Crocodile",
        c:"African Elephant",
        d:"White Elephant",
        correct:"c",
    },
    {
        question:"Which is the largest flower in the world?",
        a:"Rafflesia",
        b:"Jasmine flower",
        c:"Camellia",
        d:"Ballon flower",
        correct:"a",
    },
    {
        question:"Entomology is the science that studies?",
        a:"Behavior of human beings",
        b:"Insects",
        c:"The origin and history of technical and scientific terms",
        d:"The Formation of rocks",
        correct:"b",
    },
    {
        question:"Golf player Vijay Singh belongs to which country?",
        a:"USA",
        b:"Fiji",
        c:"India",
        d:"UK",
        correct:"b",
    },
];

const quiz=document.getElementById('quiz');
const answerels=document.querySelectorAll('.answer');
const questionel=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitbtn=document.getElementById('submit');


let currentquiz=0;
let score=0;

loadquiz()

function loadquiz(){
    deselectanswers()

    const currentquizdata=quizdata[currentquiz]

    questionel.innerText=currentquizdata.question
    a_text.innerText=currentquizdata.a
    b_text.innerText=currentquizdata.b
    c_text.innerText=currentquizdata.c
    d_text.innerText=currentquizdata.d
}

function deselectanswers(){
    answerels.forEach(answerel => answerel.checked=false)
}

function getselected(){
    let answer
    answerels.forEach(answerel =>{
        if(answerel.checked){
            answer=answerel.id
        }
    })
    return answer
}


submitbtn.addEventListener('click', ()=>{
    const answer= getselected()
    if(answer){
        if(answer === quizdata[currentquiz].correct){
            score++
        }
        currentquiz++
        if(currentquiz<quizdata.length){
            loadquiz()
        }
        else{
            quiz.innerHTML=`<h2> You answered ${score}/${quizdata.length} questions correctly</h2>
            <button onclick="location.reload()">Try Again</button>
            `
        }
    }
})
