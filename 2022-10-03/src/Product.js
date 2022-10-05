foam.CLASS({
    package: 'com.example',
    name: 'Product',

    constants: [
        {
            name: 'PRODUCTS',
            value: [
                {
                    name: 'cheese grater',
                    description: 'it makes cheese smaller',
                    cost: 5
                },
                {
                    name: 'frying pan',
                    description: 'helps make food get hotter',
                    cost: 10
                },
                {
                    name: 'monkey wrench',
                    description: 'used to make things tight or loose',
                    cost: 8
                }
            ]
        }
    ],
    
    properties: [
        {
            class: 'String',
            name: 'id',
            factory: function () {
                return foam.uuid.randomGUID();
            }
        },
        {
            class: 'String',
            name: 'name'
        },
        {
            class: 'String',
            name: 'description'
        },
        {
            class: 'Long',
            name: 'cost'
        }
    ]
});
