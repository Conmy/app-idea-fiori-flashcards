import React from 'react';
import { ShellBar, FlexBox, FlexBoxWrap, Icon, ResponsiveGridLayout } from '@ui5/webcomponents-react';
import Flashcard from './Components/Flashcard';
import spacing from '@ui5/webcomponents-base';
import '@ui5/webcomponents-icons/dist/sap-ui5.js';

export function MyApp() {

    const handleHeaderClick = () => {
        alert('Header Clicked');
    };

    const flashcard = {
        question: 'Who ARE you?',
        answers: [
            {
                ID: 1,
                answer: "I'm Alice!"
            },
            {
                ID: 2,
                answer: "Who's asking?"
            },
            {
                ID: 3,
                answer: "I'm unsure"
            },
            {
                ID: 4,
                answer: "I'm your worst nightmare!"
            }
        ]
    };

    const renderFlashcards = () => {
        const flashcards = [...Array(12).keys()].map((v) => {
            return Object.assign({}, flashcard);
        });
        return flashcards.map((v, i) => {
            return (
                <Flashcard key={i} question={v.question} answers={v.answers} />
            );
        });
    };

    return (
        <div>
            <ShellBar primary-title='Hello World'>
                <Icon name="education" />
            </ShellBar>
            <ResponsiveGridLayout columnGap='1rem'>
               {renderFlashcards()}
            </ResponsiveGridLayout>
        </div>
    )
}