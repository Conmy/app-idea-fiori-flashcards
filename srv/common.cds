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

annotate service.Answer with {
    ID @UI.Hidden: true;
}