using { me.conmy.appidea.flashcards as cards } from '../db/data-model';

service AnswersService {
    entity Answers as projection on cards.Answer;
}
annotate Answers with @odata.draft.enabled;