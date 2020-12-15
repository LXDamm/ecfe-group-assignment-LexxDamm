import UI from './ui.js';

class App {
    constructor() {
        this.questions = [];
        this.answers = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.ui = new UI();
    }
    fetchQuiz() {
        let self = this;
        fetch('./app/questions.json')
        .then(function(response) {
            if (response.status !== 200) {
                console.log('Error, status code: ' + response.status);
                return;
            }
            response.json().then(function(json) {
                self.questions = json.questions;
                document.dispatchEvent(new Event('fetchDone'));    
            });
        })
        .catch(function(err) {
            console.log('Fetch Error: ' + err);
        });
    }
    checkAnswers() {
        let correctAnswers = 0;
        for (let i = 0; i < this.answers.length; i++) {
            if (this.answers[i] == this.questions[i].correctAnswer) {
                correctAnswers++;
            }
        }
        this.score = correctAnswers;
    }
    addEventListeners() {
        document.addEventListener('fetchDone', (event) => {
            this.ui.renderQuestion(this.questions[this.currentQuestion], this.currentQuestion + 1, this.questions.length);
        });
        this.ui.nextButtonE.addEventListener('click', (event) => {
            this.answers.push(this.ui.getAnswerId());
            this.currentQuestion++;
            if (this.currentQuestion < this.questions.length) {
                this.ui.renderQuestion(this.questions[this.currentQuestion], this.currentQuestion + 1, this.questions.length);
                this.ui.setProgressBar((100 / this.questions.length) * this.currentQuestion);
            } else {
                this.checkAnswers();
                this.ui.renderGreatJob(this.score, this.questions.length);
                this.ui.setProgressBar(100);
            }
        });
        this.ui.restartButtonE.addEventListener('click', (event) => {
            this.score = 0;
            this.currentQuestion = 0;
            this.answers = [];
            this.ui.setProgressBar(0);
            this.ui.toggleNextButton();
            this.ui.renderQuestion(this.questions[this.currentQuestion], this.currentQuestion + 1, this.questions.length);
        });
    }
    run() {
        this.addEventListeners();
        this.fetchQuiz();
    }
}

const app = new App();
app.run();