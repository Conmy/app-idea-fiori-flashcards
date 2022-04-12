import axios from 'axios';

const endpointUrl = "";
const questionsEndpoint = "/questions/Questions";

const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const QuestionService = {

    getQuestions : async () => {
        try {
            const result = await axios.get(endpointUrl + questionsEndpoint);
            if (result.status !== 200) {
                console.error("A non-200 result was returned from the Questions endpoint");
                return;
            }
            if (result.status === 200) {
                const questions = result.data.value;
                const answersList = questions.map(item => item.answer);

                // construct options
                return questions.map(item => {
                    const otherAnswers = shuffleArray(answersList.filter(ans => ans !== item.answer));

                    return {
                        question: item.question,
                        answer: item.answer,
                        options : shuffleArray([
                            ...otherAnswers.slice(-3),
                            item.answer
                        ])
                    };
                });
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export default QuestionService;
