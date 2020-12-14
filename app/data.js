class Data {
    constructor() {
    }
    fetchQuiz() {
        let fetch = fetch(`./questions.json`)
            .then((res) => {
                res.json()
            })
        return fetch;
    }
}

export default Data;