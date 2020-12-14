//import Data from './data.js';
import UI from './ui.js';

class App {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.ui = new UI();
    }
    fetchQuiz() {
        let self = this;
        fetch('./app/questions.json')
        .then(function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(json) {
                self.questions = json.questions;
                document.dispatchEvent(new Event('fetchDone'));    
            });
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    addEventListeners() {
        const self = this;
        document.addEventListener('fetchDone', (event) => {
            self.ui.renderQuestion(self.questions[this.currentQuestion]);
            
        });
        this.ui.nextButtonE.addEventListener('click', (event) => {
            console.log(self.questions[0].correctAnswer)
            console.log(this.ui.answerThree.nextElementSibling.textContent)
            /* let correctAnswers = ["George", "Sep 1995","Cascading Style Scheets", ] */
            if(self.questions[0].correctAnswer == this.ui.answerThree.nextElementSibling.textContent){
                self.currentQuestion++;
                self.ui.renderQuestion(self.questions[self.currentQuestion]);
                self.ui.progressBar.style.width = `${25 * self.currentQuestion}%`
            }else{
                console.log('funkar ej')
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