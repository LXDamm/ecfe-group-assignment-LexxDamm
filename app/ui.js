class UI {
    constructor() {
        this.questionTitleE = document.getElementById('questionTitle');
        this.answer = document.getElementById('cardText');
        /* this.answerTwoE = document.getElementById('cardText-2');
        this.answerThreeE = document.getElementById('cardText-3');
        this.answerFourE = document.getElementById('cardText-4'); */
        this.nextButtonE = document.getElementById('next-btn');
        this.progressBar = document.querySelector('.progress-bar');
        /* this.answerOne = document.getElementById('cardOne')
        this.answerTwo = document.getElementById('cardTwo')
        this.answerThree = document.getElementById('cardThree')
        this.answerFour = document.getElementById('cardFour') */
        this.cardInfo = document.querySelector('.card-info');
    }
    renderQuestion(question) {
        this.questionTitleE.innerText = question.questionString;
        console.log(question)
        let html ='';
        for(let i = 0; i < question.possibleAnswers.length; i++){ 
            html += `
                <div id="cardStyle" class="card col border-0">
                    <span class="d-flex align-items-center" id="cardInfo">
                    <input type="radio" name="value" class="" id="cardOne" />
                    <label for="cardTwo" id="cardText" class="radio-custom-label m-3">${question.possibleAnswers[i]}</p>
                    </span>
                </div>
            `
            /*this.answer.innerText = question.possibleAnswers[i];
             this.answerTwoE.innerText = question.possibleAnswers[1];
            this.answerThreeE.innerText = question.possibleAnswers[2];
            this.answerFourE.innerText = question.possibleAnswers[3]; */
    }
        this.cardInfo.innerHTML = html;
    }
}

export default UI;