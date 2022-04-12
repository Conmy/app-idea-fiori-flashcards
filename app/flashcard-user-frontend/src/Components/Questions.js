import {
	Bar, Text,
	BusyIndicator,
	ResponsiveGridLayout,
} from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";
import { Flashcard } from "./Flashcard";
import { spacing } from "@ui5/webcomponents-react-base";

import QuestionService from '../Services/QuestionService';

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
		const fetchData = async () => {
			const dataResult = await QuestionService.getQuestions();
			setQuestions(dataResult);
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
			</Bar>
		</>
	);
}
