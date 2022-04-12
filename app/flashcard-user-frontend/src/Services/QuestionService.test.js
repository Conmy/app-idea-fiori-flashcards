import QuestionService from './QuestionService';
import axios from 'axios';

jest.mock('axios');

describe('getQuestions', () => {

    it('should call the question service endpoint for creating results', async () => {
        const returnResult = {
            status: 200,
            data: {
                value: []
            }
        };

        const mockImpl = axios.get.mockImplementation(() => Promise.resolve(returnResult));

        await QuestionService.getQuestions();

        expect(axios.get.mock.calls.length).toBe(1);
        expect(mockImpl).toHaveBeenCalled();
    });

    it('should return a list of questions on success', async () => {
        const questionResult = {
            question: 'Question',
            answer: 'Hello'
        };
        const dataResult = {
            status: 200,
            data: {
                value: [questionResult]
            }
        };
        axios.get.mockImplementation(() => Promise.resolve(dataResult));

        const result = await QuestionService.getQuestions();

        expect(result).toMatchObject([questionResult]);

    });

});