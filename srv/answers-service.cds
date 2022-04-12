using { me.conmy.appidea.flashcards as cards } from '../db/data-model';

service AnswersService {
    @odata.draft.enabled entity Answers as projection on cards.Answer;
}