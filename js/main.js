var app = new Vue({
    el: "#app",
    data: {
        products: [
            { id: 1, title: "Navel Oranges", short_text: 'The navel orange is a sweet type of orange', image: 'images/orange1.png', desc: "Bright orange with a slightly pebbled rind, navel oranges are seedless and easy to peel. One navel orange provides 73 calories and 82 milligrams (mg) of vitamin C (92% of the Daily Value or DV)." },
            { id: 2, title: "Cara Cara Oranges", short_text: 'A type of navel orange and also seedless and sweet', image: 'images/orange2.png', desc: "Cara cara oranges are a good source of fiber, providing 4 grams (g) in a medium size (14% of the DV). The juice of cara cara orange doesnt turn bitter upon exposure to air, unlike regular navel orange." },
            { id: 3, title: "Valencia Oranges", short_text: 'Valencia oranges are sweet and extremely juicy', image: 'images/orange3.png', desc: "They have a slightly pebbly rind and occasional seeds. In addition to nutrients like vitamin C and potassium, oranges also provide folate, an important B vitamin required for making DNA and red blood cells." },
            { id: 4, title: "Mandarin Orange", short_text: 'They are small, have a medium to thick loosely adherent rind', image: 'images/orange4.png', desc: "They are small, have a medium to thick loosely adherent rind, and a relatively smooth surface. If not harvested at peak internal ripeness, mandarin oranges deteriorate in quality and their rinds become puffy." },
            { id: 5, title: "Clementines", short_text: 'Known for their small size and easy-to-peel bright orange skin', image: 'images/orange5.png', desc: "These seedless oranges are the smallest type of mandarin orange, making them a perfect snack for kids. Clementines are typically sold in 2 to 5-pound (lbs.) " }
        ],

        product: {},
        btnVisible: 0,
        cart: [],
        contactFields: { name: '', comp_name: '', position: '', city: '', country: '', telephone: '', email: '', who: '', other: '', intrested: ''}
    },
    computed: {
        chunkedProducts: function () {
            var chunkSize = 3;
            var chunkedArray = [];
            for (var i = 0; i < this.products.length; i += chunkSize) {
                chunkedArray.push(this.products.slice(i, i + chunkSize));
            }
            return chunkedArray;
        }
    },
    methods: {
        addItem: function (id) {
            window.localStorage.setItem('prod', id);
        },

        getProduct: function () {
            if (window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if (this.products && this.products.length > 0) {
                    for (i in this.products) {
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) this.product = this.products[i];
                    }
                }
            }
        },

        addToCart: function (id) {
            var cart = [];
            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if (cart.indexOf(String(id)) == -1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible = 1;
            }
        },
        checkinCart: function () {
            if (this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) != -1) this.btnVisible = 1;
        },

        getCart: function () {
            var storedCart = window.localStorage.getItem('cart');
            if (storedCart) {
                var cartIds = storedCart.split(',');
                this.cart = this.products.filter(product => cartIds.includes(String(product.id)));
            }
        },

        removeFromCart: function (id) {
            this.cart = this.cart.filter(item => item.id !== id);
            window.localStorage.setItem('cart', this.cart.map(item => item.id).join());
        },

        makeOrder: function () {
            this.cart = [];
            window.localStorage.removeItem('cart');
        }
    },
    
    mounted: function() {
        this.getProduct();
        this.checkinCart();
        this.getCart();
    },

});