import {
	Bar, Text,
	BusyIndicator,
	ResponsiveGridLayout,
} from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";
import { Flashcard } from "./Flashcard";
import { spacing } from "@ui5/webcomponents-react-base";

function timeout(stallTime = 2000) {
	return new Promise(resolve => setTimeout(resolve, stallTime));
}

async function stall(data) {
	await timeout();
	return data;
}

export default function Questions() {

	const [questions, setQuestions] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [wrongAnswers, setWrongAnswers] = useState(0);
	const [scoreText, setScoreText] = useState('');

	const initializeScores = () => {
		const correct = 0;
		const wrong = 0;
		setCorrectAnswers(correct);
		setWrongAnswers(wrong);
		setScoreText(`Correct: ${correct} Incorrect: ${wrong}`);
	};

	useEffect(() => {
		const allQuestions = [
			{
				question: 'What is your name?',
				answer: 'I am Arthur, King of the Britons',
				options: [
					'I am Arthur, King of the Britons',
					'Jim',
					'Sir Gadabout'
				]
			},
			{
				question: 'What is your quest?',
				answer: 'I seek the Holy Grail',
				options: [
					'I want to be a doctor',
					"I've come to rescue the princess",
					'I seek the Holy Grail'
				]
			}];

		const fetchData = async () => {
			const result = await stall(allQuestions);
			setQuestions(result);
		};

		fetchData()
		.then(() => {
			initializeScores();
		});
	}, []);


	const handleAnswerClicked = (result) => {
		let ansCorrect = correctAnswers;
		let ansWrong = wrongAnswers;

		if (result.previousResult === null) {
			result.currentResult ? ansCorrect += 1 : ansWrong += 1;
		}
		else {
			// handle when the same answer has been pushed again.
			if (result.currentResult === result.previousResult) return;

			if (result.currentResult) {
				ansCorrect += 1;
				ansWrong -= 1;
			}
			else {
				ansCorrect -= 1;
				ansWrong += 1;
			}
		}
		setScoreText(`Correct: ${ansCorrect} Incorrect: ${ansWrong}`);
		setCorrectAnswers(ansCorrect);
		setWrongAnswers(ansWrong);
	}

	const renderFlashcards = (questionList) => {
		if (questionList) {
			return questionList.map((q => {
				return (
					<Flashcard
						key={q.question}
						question={q}
						onAnswerClicked={(result) => handleAnswerClicked(result)}
						style={spacing.sapUiContentPadding}
					></Flashcard>
				);
			}));
		} else {
			return (
				<BusyIndicator
					active="true"
					style={{ ...spacing.sapUiContentPadding, gridColumn: 'span 16' }}></BusyIndicator>
			);
		}
	};

	return (
		<>
			<ResponsiveGridLayout>
				{renderFlashcards(questions)}
			</ResponsiveGridLayout>
			<Bar design="Footer">
				<Text slot="startContent">{scoreText}</Text>
				{/*<Button slot="endContent">End Button</Button>*/}
			</Bar>
		</>
	);
}
