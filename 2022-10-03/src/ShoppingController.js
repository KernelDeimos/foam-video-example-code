foam.CLASS({
    package: 'com.example',
    name: 'ShoppingController',
    extends: 'foam.u2.Controller',

    exports: [
        'productDAO'
    ],

    requires: [
        'com.example.Product',
        'com.example.CartItem',

        'foam.dao.MDAO'
    ],

    properties: [
        {
            name: 'productDAO',
            factory: function () {
                const dao = this.MDAO.create({
                    of: 'com.example.Product'
                });

                for ( const product of this.Product.PRODUCTS ) {
                    dao.put(foam.json.parse(product, this.Product, this.__subContext__));
                }

                return dao;
            },
            view: function (_, x) {
                const view = foam.u2.DAOList.create({
                    rowView: 'com.example.ProductCitationView',
                });
                view.rowClick.sub(x.data.productClick);
                return view;
            }
        },
        {
            name: 'cartDAO',
            factory: function () {
                const dao = this.MDAO.create({ of: 'com.example.Product' });
                return dao;
            },
            view: function (_, x) {
                const view = foam.u2.DAOList.create({
                    rowView: 'com.example.ProductCitationView',
                });
                // view.rowClick.sub(x.data.productClick);
                return view;
            }
        }
    ],

    methods: [
        function render () {
            this
                .start('h1')
                    .add('Hello, FOAM!')
                .end()
                .start('h2')
                    .add('Products')
                .end()
                .add(this.PRODUCT_DAO)
                .start('h2')
                    .add('Cart')
                .end()
                .add(this.CART_DAO);
        }
    ],

    listeners: [
        {
            name: 'productClick',
            code: async function (sub, _, obj) {
                console.log('clicked item: ' + obj.name)

                let item = await this.cartDAO.find(obj.id);

                if ( ! item ) {
                    item = this.CartItem.create({
                        id: obj.id,
                        count: 1
                    });
                    item.copyFrom(obj);
                } else {
                    item.count++;
                }

                this.cartDAO.put(item);
            }
        }
    ]
});
