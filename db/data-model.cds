namespace me.conmy.appidea.flashcards;

using { managed, cuid } from '@sap/cds/common';

define entity Flashcards : managed, cuid {
    question  : String(255)                 @title : 'Question'; // TODO: Consider i18n for titles
    answer : Association to one Answer;
};

annotate Flashcards with @(
    Common.SemanticKey : [question],
    UI.Identification : [{Value : question}]
) {
    ID @Common : {
        Text : question,
        TextArrangement : #TextOnly,
    };
}

define entity Answer : managed, cuid {
    answer    : String(111)                 @title : 'Answer';
};

annotate Answer with @(
    Common.SemanticKey : [answer],
    UI.Identification : [{Value : answer}]
) {
    ID @Common : {
        Text : answer,
        TextArrangement : #TextOnly,
    };
}