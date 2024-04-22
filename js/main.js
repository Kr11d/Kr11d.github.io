var app = new Vue({
    el: "#app",
    data: {
        products: [
            { id: 1, title: "Prod 1", short_text: 'short_text', image: 'images/orange1.png', desc: "Full desc" },
            { id: 2, title: "Prod 2", short_text: 'short_text', image: 'images/orange2.png', desc: "Full desc" },
            { id: 3, title: "Prod 3", short_text: 'short_text', image: 'images/orange3.png', desc: "Full desc" },
            { id: 4, title: "Prod 4", short_text: 'short_text', image: 'images/orange4.png', desc: "Full desc" },
            { id: 5, title: "Prod 5", short_text: 'short_text', image: 'images/orange5.png', desc: "Full desc" }
        ]
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
        }
    }
});