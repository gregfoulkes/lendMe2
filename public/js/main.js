
let app = new Vue ({
    el: '#lendMe',    
    data: {
        showlanding: true,
        showborrower:false,
        showlender:false,
        showtransactionpage: false
    },

    mounted: function() {

    },

    methods: {

        showBorrower: function(){
            this.showlanding = false
            this.showborrower = true
        },

        showLender: function() {
            this.showlender = true

            this.showlanding = false
        }

    }


})