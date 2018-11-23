Vue.component('landingpage', {

    data: function () {

        return {


        }
    },
    template: `

    <div>

    <div class="container-fluid">

    <div class="row">
            <div class="col-sm-4 ">
            </div>
            <div class="col-sm-4 ">
            <img src="/logo.png" alt="">

            </div>
            <div class="col-sm-4 ">

            </div>
        </div>

        <div class="row">
            <div class="col-sm-4 ">
            </div>
            <div class="col-sm-4 ">
                <button v-on:click="$emit('borrow')"  style='width:300px' type="button" class="margin btn btn-primary">Lender</button>
                <button v-on:click="$emit('lender')"  style='width:300px' type="button" class="margin btn btn-primary">Borrower</button>
            </div>
            <div class="col-sm-4 ">

            </div>
        </div>
    </div>

    </div>


`
})