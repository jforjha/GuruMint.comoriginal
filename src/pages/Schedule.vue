<template>
<div>
      <!-- <h1>Provide Your Details</h1>
      <label>First Name</label>
      <input id="firstname" type="text" required v-model="user.firstname" />
      <label>Last Name</label>
      <input type="text" required v-model="user.lastname" id="lastname" />

      <label>Email</label>
      <input type="email" id="email" required v-model="user.email" />
      <label>Phone Number</label>
      <input type="text" id="number" v-model="user.number" />
      <br> -->
    
    <div id="calendly" class="calendly-inline-widget" data-url="https://calendly.com/gurumint/dawn-dickson" 
    style="min-width:100vw;height:100vh;position:relative; 
    margin-top:-50px;
    "></div>

             <!-- <input
        type="button"
        v-model="user.url"
        style="background-color: grey; height: 50px; width: 150px"
        id="url1"
        value="Educator Name"
        v-on:click="lastRouteName();"
      />
            <input type="text" id="url" v-model="user.url" /> -->
      <!-- <label for="party">Enter a date and time to reserved your slot :)</label>
      <input
        type="datetime-local"
        id="fromDateVal"
        v-model="user.fromDateVal"
        :first-interval="9"
        :interval-minutes="60"
        :interval-count="8"
        min="2021-08-01T00:00"
        max="2021-08-31T00:00"
        placeholder="Select Date"
      /> -->
      <!-- <v-date-picker v-model="fromDateVal"></v-date-picker> -->
    

      <!-- <input type="time" v-model="time"  placeholder="Select Time"  min="08:00" max="20:00" required> -->
      <!--          
              <v-time-picker v-model="time" format="24hr"></v-time-picker> -->
      <!-- <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>Accept terms and conditions</label>
      </div> -->

      <input
        type="button"
              style=" height: 50px;
              width:40%;
               left:30vw;position:absolute;
               border:solid blue
              overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; "
        id="rzpbutton"
        value="Pay To Reserve Your Slot"
        v-on:click= makepayment();
          />

</div>

</template>

<script>
import axios from "axios";
/* eslint-disable no-useless-escape */
import postscribe from 'postscribe'

export default {
  data() {
    return {
      user: {
        fromDateVal: "",
        firstname: "",
        lastname: "",
        email: "",
        number: "",
      //  url: returnVal
      },
      submitted: false,
    };
  },

mounted: function () {
    postscribe('#calendly', `<script src="https://assets.calendly.com/assets/external/widget.js" ><\/script>`)
  },

  methods: {
    lastRouteName  : function() {
  var returnVal = '';
  const routerStack = this.$router.history.stack;
  const idx = this.$router.history.index;

  if (idx > 0) {
    returnVal = routerStack[idx - 1].name;
  }

  return returnVal;
},

    post() {
      axios
        .post(
          "https://chatpoint1-16505-default-rtdb.firebaseio.com/posts.json",
          this.user,
          { emulateJSON: true }
        )
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    },

    makepayment: function() {
      var options = {
        key: "rzp_test_astk95KRrqNO0x",
        // key_secret : "mVybwVFhZAqr6Eg1OPGP3Rcs",
        amount: 500 * 100,
        name: "GuruMint",
        description: "Pay Your Educator",
        image: "/your_logo.png",
        handler: function(response) {
          alert(
            "Your Transaction is Successful"+" "+
           
            "Save This Payment ID For Future Referce  " +
              " " +
              response.razorpay_payment_id
          );
        },
        // prefill: {
        //   name: this.user.name,
        //   email: this.user.email,
        //   contact: this.user.number,
        // },
        notes: {
          address: "Hello World",
        },
        theme: {
          color: "#0EB9F2",
        },
      };
      const rzp1 = new window.Razorpay(options);

      rzp1.open();
      // event.preventDefault();
    },
    // total: function(){

    //   let total = [];

    //   Object.entries(this.cartValue).forEach(([key, val]) => {
    //       total.push(val.cartValue) // the value of the current key.
    //   });

    //   return total.reduce(function(total, num){ return total / 1000}, 0);

    // },
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
      // format date, apply validations, etc. Example below.
      // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
/* button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
} */
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
#rzpbutton{
	border-radius: 3px;
	font-weight: 500;
	text-decoration: none;
	color: #ffffff;
	background: #2629ec;
  bottom: 20px;
}


</style>
