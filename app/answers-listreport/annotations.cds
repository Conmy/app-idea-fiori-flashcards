using AnswersService as service from '../../srv/answers-service';

annotate service.Answers with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : id,
            Label : 'id',
        },
        {
            $Type : 'UI.DataField',
            Label : 'answer',
            Value : answer,
        },
    ]
);

annotate service.Answers with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
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
            {
                $Type : 'UI.DataField',
                Label : 'answer',
                Value : answer,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
