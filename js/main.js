var app = new Vue({
    el: "#app",
    data: {
        products: [
            { id: 1, title: "Navel Oranges", short_text: 'The navel orange is a sweet type of orange', image: 'images/orange1.png', desc: "Full desc" },
            { id: 2, title: "Cara Cara Oranges", short_text: 'A type of navel orange and also seedless and sweet', image: 'images/orange2.png', desc: "Full desc" },
            { id: 3, title: "Valencia Oranges", short_text: 'Valencia oranges are sweet and extremely juicy', image: 'images/orange3.png', desc: "Full desc" },
            { id: 4, title: "Mandarin Orange", short_text: 'They are small, have a medium to thick loosely adherent rind', image: 'images/orange4.png', desc: "Full desc" },
            { id: 5, title: "Clementines", short_text: 'Known for their small size and easy-to-peel bright orange skin', image: 'images/orange5.png', desc: "Full desc" }
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