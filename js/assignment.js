"use strict";
const todo = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

let shiftValue;
let popValue;

const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.textContent = todo.join(",");
}

function updateAnswerTwo() {
    answerTwoEl.textContent = todo[2];
}

function removeLastValue() {
    popValue = todo.pop();
}

function removeFirstValue() {
    shiftValue = todo.shift();
}

function addShiftAndPopValues() {
    todo.push(shiftValue, popValue);
}

function updateAnswerFour() {
    answerFourEl.textContent = todo.join(",");
}

function reverseTodoList() {
    todo.reverse();
}

function updateAnswerFive() {
    answerFiveEl.textContent = todo.join(",");
}

function updateAnswerSix() {
    answerSixEl.textContent = todo.join(",");
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    updateAnswerFour();
    reverseTodoList();
    updateAnswerFive();
    removeFirstValue();
    addShiftAndPopValues();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", render);
