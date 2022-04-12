import { Card, CardHeader, Icon, StandardListItem, Text } from "@ui5/webcomponents-react";
import { useState } from "react";
import '@ui5/webcomponents-icons/dist/question-mark';

export function Flashcard(props) {

	const [answered, setAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const [selected, setSelected] = useState('');

	const handleOptionClicked = (option) => {
		setSelected(option);
		if (option === props.question.answer) {
			const resultProperties = {
				currentResult: true,
				previousResult: answered ? isCorrect : null,
			};
			setAnswered(true);
			setIsCorrect(true);
			props.onAnswerClicked(resultProperties);
		} else {
			const resultProperties = {
				currentResult: false,
				previousResult: answered ? isCorrect : null,
			};
			setAnswered(true);
			setIsCorrect(false);
			props.onAnswerClicked(resultProperties);
		}
	};

	const createQuestionOptions = (q) => {
		return q.options.map((option) => {
			return (
				<StandardListItem
					key={option}
					onClick={() => handleOptionClicked(option)}
				>
					<Text
						style={
							option === selected
							? (isCorrect ? { color: "green"} : {color: "red"})
							: {}
						}
					>
						{option}
					</Text>
				</StandardListItem>
			);
		});
	};

	return (
		<Card
			key={props.question.question}
			header={(
				<CardHeader titleText={props.question.question}>
					<Icon name="question-mark" slot="avatar" />
				</CardHeader>
			)}
			style={{ ...props.style, gridColumn: 'span 5'}}
		>
			{createQuestionOptions(props.question)}
		</Card>
	);
}
