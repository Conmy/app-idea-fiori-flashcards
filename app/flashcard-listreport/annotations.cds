using FlashcardService as service from '../../srv/common';

annotate service.Flashcards with @(UI : {
    LineItem : [
        {
            $Type : 'UI.DataField',
            Value : question
        },
    ],

    HeaderInfo : {
        TypeName : 'Flashcard Question', // TODO: i18n?
        TypeNamePlural : 'Flashcard Questions',
        TypeImageUrl : 'sap-icon://alert',
        Title : {Value : question},
        Description: {Value : 'Flashcard Question Management'}
    },

    FieldGroup #HeaderGeneralInfo : {
        @Type : 'UI.FieldGroupType',
        Data  : [
            {
                Value : question
            },

        ]
    },

    FieldGroup #FlashcardManagedFields : {
        @Type : 'UI.FieldGroupType',
        Data  : [
            {
                $Type : 'UI.DataField',
                Value : createdAt,
            },
            {
                $Type : 'UI.DataField',
                Value : createdBy,
            },
            {
                $Type : 'UI.DataField',
                Value : modifiedAt,
            },
            {
                $Type : 'UI.DataField',
                Value : modifiedBy,
            },
        ],
    },

    Facets : [
        {
            $Type   : 'UI.ReferenceFacet',
            Label   : 'General Information', // TODO: i18n?
            ID      : 'HeaderGeneralInfo1',
            Target  : '@UI.FieldGroup#HeaderGeneralInfo',
        },
        {
            $Type   : 'UI.ReferenceFacet',
            Label   : 'Managed Fields', // TODO i18n?
            ID      : 'ManagedFields1',
            Target  : '@UI.FieldGroup#FlashcardManagedFields',
        }
    ]
});
