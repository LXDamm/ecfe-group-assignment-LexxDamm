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
        let correct = 0;
        console.log(this.answers);
        for (let i = 0; i < this.answers.length; i++) {
            if (this.answers[i] == this.questions[i].correctAnswer) {
                correct++;
            }
        }
        this.score = correct;
    }
    renderResults() {
        console.log(this.score);
    }
    addEventListeners() {
        document.addEventListener('fetchDone', (event) => {
            this.ui.renderQuestion(this.questions[this.currentQuestion], this.currentQuestion + 1, this.questions.length);
        });
        this.ui.nextButtonE.addEventListener('click', (event) => {
            if (this.currentQuestion < this.questions.length) {
                this.answers.push(this.ui.getAnswerId());
                this.currentQuestion++;
                this.ui.renderQuestion(this.questions[this.currentQuestion], this.currentQuestion + 1, this.questions.length);
                this.ui.setProgressBar(20 * this.currentQuestion);
            } else {
                this.checkAnswers();
                this.renderResults();
            }
        });
    }
    run() {
        this.addEventListeners();
        this.fetchQuiz();
    }
}

const app = new App();
app.run();