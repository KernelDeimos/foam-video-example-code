foam.CLASS({
    package: 'com.example',
    name: 'CartItem',

    properties: [
        {
            class: 'Reference',
            of: 'com.example.Product',
            name: 'id'
        },
        {
            class: 'Int',
            name: 'count'
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
