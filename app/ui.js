class UI {
    constructor() {
        this.questionTitleE = document.getElementById('questionTitle');
        this.answer = document.getElementById('cardText');
        this.nextButtonE = document.getElementById('next-btn');
        this.restartButtonE = document.getElementById('restart-btn');
        this.progressBar = document.querySelector('.progress-bar');
        this.cardInfo = document.querySelector('.card-info');
        this.scoreE = document.getElementById('oneOfFive');
        this.toggle = false;
    }
    getAnswerId() {
        let id;
        const cardItemsE = document.querySelectorAll('.card');
        cardItemsE.forEach((element) => {
            const inputE = element.querySelector('.card-answer');
            if (inputE.checked == true) {
                id = parseInt(inputE.getAttribute('id'));
            }
        });
        return id;
    }
    renderQuestion(question, currentQuestion, questionsCount) {
        this.scoreE.innerHTML = `Question ${currentQuestion} of ${questionsCount}`;
        this.questionTitleE.innerText = question.questionString;
        let html ='';
        for(let i = 0; i < question.possibleAnswers.length; i++){ 
            html += `
                <div id="cardStyle" class="card col border-0">
                    <span class="d-flex align-items-center" id="cardInfo">
                    <input type="radio" name="value" class="card-answer" id="${i}" />
                    <label for="cardTwo" id="cardText" class="radio-custom-label m-3">${question.possibleAnswers[i]}</p>
                    </span>
                </div>
            `;
        }
        this.cardInfo.innerHTML = html;
    }
    toggleNextButton() {
        if (this.toggle) {
            this.nextButtonE.style.display = 'block';
        } else {
            this.nextButtonE.style.display = 'none';
        }
        this.toggle = !this.toggle;
    }
    renderGreatJob(score, questionsCount) {
        this.toggleNextButton();
        this.questionTitleE.innerText = 'Great Job!';
        this.scoreE.innerHTML = `Score is ${score} of ${questionsCount}`;
    }
    setProgressBar(amount) {
        this.progressBar.style.width = `${amount}%`;
    }
}

export default UI;