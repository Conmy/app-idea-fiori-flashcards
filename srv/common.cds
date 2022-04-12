namespace me.conmy.appidea.flashcards;

using FlashcardService as service from './flashcard-service';

using { cuid } from '@sap/cds/common';

annotate cuid with {
    ID @(
        title : 'ID Field', // TODO: i18n?
        UI.HiddenFilter,
        Core.Computed
    );
}

annotate service.Flashcards with {
    answer @Common : {
        Text : answer.answer,
        TextArrangement : #TextOnly,
        ValueList : {
            $Type : 'Common.ValueListType',
            Label : 'Answer', // TODO: i18n?
            CollectionPath : 'Answer',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : answer_ID,
                    ValueListProperty : 'ID'
                },

            ]
        }
    };
}
