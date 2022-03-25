
using me.conmy.appidea.flashcards from '../db/data-model';

service FlashcardService {
    @odata.draft.enabled entity Flashcards as projection on flashcards.Flashcards;
    @readonly entity Answer as projection on flashcards.Answer;
}