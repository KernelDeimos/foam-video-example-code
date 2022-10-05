foam.CLASS({
    package: 'com.example',
    name: 'ProductCitationView',
    extends: 'foam.u2.CitationView',

    requires: [
        'com.example.CartItem'
    ],

    css: `
        ^ {
            display: flex;
            flex-gap: 20px;
            padding: 15px;
            cursor: pointer;
            border-radius: 5px;
        }
        ^:hover {
            background-color: #CCCCCC;
        }
        ^name {
            font-family: Helvetica, sans-serif;
            font-weight: 600;
            flex-basis: 200px;
        }
        ^cost {
            font-family: Helvetica, sans-serif;
            font-weight: 600;
            color: orange;
            flex-basis: 60px;
        }
        ^count {
            font-family: Helvetica, sans-serif;
            font-weight: 600;
            color: blue;
            flex-basis: 60px;
        }
    `,

    properties: [
        {
            class: 'Boolean',
            name: 'isCart',
            expression: function (data) {
                return this.CartItem.isInstance(data);
            }
        }
    ],

    methods: [
        function render () {
            this
                .addClass()
                .start()
                    .addClass(this.myClass('name'))
                    .add(this.data.name)
                .end()
                .start()
                    .addClass(this.myClass('cost'))
                    .add(this.data.cost)
                .end()
                .start()
                    .show(this.isCart$)
                    .addClass(this.myClass('count'))
                    .addClass(this.myClass('count'))
                    .add(this.data.count)
                .end()
                .start()
                    .add(this.data.description)
                .end()
                
        }
    ]
});
