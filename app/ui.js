class UI {
    constructor() {
        this.questionTitleE = document.getElementById('questionTitle');
        this.answerOneE = document.getElementById('cardText-1');
        this.answerTwoE = document.getElementById('cardText-2');
        this.answerThreeE = document.getElementById('cardText-3');
        this.answerFourE = document.getElementById('cardText-4');
    }
    renderQuestion(question) {
        this.questionTitleE.innerText = question.questionString;
        this.answerOneE.innerText = question.possibleAnswers[0];
        this.answerTwoE.innerText = question.possibleAnswers[1];
        this.answerThreeE.innerText = question.possibleAnswers[2];
        this.answerFourE.innerText = question.possibleAnswers[3];
    }
}

export default UI;