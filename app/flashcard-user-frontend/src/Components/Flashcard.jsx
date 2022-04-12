import React from 'react';
import { Card, CardHeader, List, StandardListItem, Icon } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/question-mark.js';

class Flashcard extends React.Component {

    constructor(props) {
        super(props);
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.state = {
            question: props.question,
            answers: props.answers // In the form of a list with entries: { ID: <>, answer: <> }
        };
    }

    handleHeaderClick() {
        alert('Header Clicked');
    };

    handleAnswerClick(item) {
        alert('Answer clicked' + item);
        //const correctAnswer = await getFlashcardAnswerId();
    }

    renderListItems(items) {
        return items.map((item) => {
            return (
                <StandardListItem key={item.ID} onClick={() => this.handleAnswerClick(item)}>
                    {item.answer}
                </StandardListItem>);
        });
    }

    render() {
        return (
            <Card
                header={
                    <CardHeader
                        titleText={this.state.question}
                        interactive
                        onClick={this.handleHeaderClick}
                    >
                        <Icon slot='avatar' name='question-mark'/>
                    </CardHeader>
                }
                style={{gridColumn: 'span 4'}}
                >

                <List>
                    {this.renderListItems(this.state.answers)}
                </List>
            </Card>
        );
    }
}

export default Flashcard;