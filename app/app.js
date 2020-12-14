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
                
            self.currentQuestion++;
            self.ui.renderQuestion(self.questions[self.currentQuestion]);
            self.ui.progressBar.style.width = `${25 * self.currentQuestion}%`
           

           /*  if(self.questions[0].correctAnswer ==){

            } */
            
            
        });
    }
    run() {
        this.addEventListeners();
        this.fetchQuiz();
    }
}

const app = new App();
app.run();