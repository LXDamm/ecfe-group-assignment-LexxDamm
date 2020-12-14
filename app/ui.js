import Data from "./data";

import Data from './data.js';

class UI {
    constructor() {
        this.data = new Data();
    }
    render() {
        this.data.fetchQuiz().then((data) => {
            
        });
    }
}

export default UI;