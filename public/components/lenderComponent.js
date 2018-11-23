Vue.component('lender', {

    data: function () {

        return {

            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            customer_type: 'Borrower',
            customer_data: [],

            reference:'',
            description:'',
            amount: {
                value: Number(''),
                currency_code:"ZAR"
            },
            payment_url:''
        }

    },

    mounted: function() {

        let self = this
        // this.getCustomer('Andrew')
        // console.log(self.firstname)
    },

    methods: {

        showAlert() {
            let self = this

            alert('Your Loan Request has been sent')
            self.$emit('hidelender')
        }

    },

    template: `

     <div>
     <div style='margin-left:210px; margin-top:23px' class="container">
	<div class="row">
		<div class="col-md-9">
		    <div class="card">
		        <div class="card-body">
		            <div class="row">
		                <div class="col-md-12">
		                    <h4>Profile</h4>
		                    <hr>
		                </div>
		            </div>
		            <div class="row">
		                <div class="col-md-12">
                             
                              <div class="form-group row">
                                <label for="name" class="col-4 col-form-label">First Name</label> 
                                <div class="col-8">
                                  <input id="name" name="name" placeholder="First Name" class="form-control here" type="text">
                                </div>
                              </div>

                              <div class="form-group row">
                                <label for="lastname" class="col-4 col-form-label">Last Name</label> 
                                <div class="col-8">
                                  <input id="lastname" name="lastname" placeholder="Last Name" class="form-control here" type="text">
                                </div>
                              </div>

                              <div class="form-group row">
                                <label for="mobile" class="col-4 col-form-label">Mobile Number</label> 
                                <div class="col-8">
                                  <input id="mobile" name="mobile" placeholder="Mobile Number" class="form-control here" required="required" type="text">
                                </div>
                              </div>


                              <div class="form-group row">
                                <label for="email" class="col-4 col-form-label">Email*</label> 
                                <div class="col-8">
                                  <input id="email" name="email" placeholder="Email" class="form-control here" required="required" type="text">
                                </div>
                              </div>

                              <div class="form-group row">
                              <label for="email" class="col-4 col-form-label">Loan Amount</label> 
                              <div class="col-8">
                                <input id="email" name="email" placeholder="Loan Amount" class="form-control here" required="required" type="text">
                              </div>
                            </div>

                              <div class="form-group row">
                                <label for="publicinfo" class="col-4 col-form-label">Reason for Loan</label> 
                                <div class="col-8">
                                  <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" class="form-control"></textarea>
                                </div>
                              </div>

                              <div class="form-group row">
                                <div class="offset-4 col-8">
                                  <button v-on:click='showAlert()' name="submit" type="button" class="btn btn-primary">Create My Profile</button>
                                </div>
                              </div>
		                </div>
		            </div>
		            
		        </div>
		    </div>
		</div>
	</div>
</div>
     </div>
    

`
})