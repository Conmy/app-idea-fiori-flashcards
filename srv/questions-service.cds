using me.conmy.appidea.flashcards as flashcards from '../db/data-model';

service QuestionsService {
    @readonly entity Questions as select from flashcards.Flashcards { *,
    answer.answer as answer,
    answer.ID as answerID,
    } excluding {createdAt, createdBy, modifiedAt, modifiedBy}
}
