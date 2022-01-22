<template>
  <div class="home" id=withdraw1 >
  <h3 style="margin-left:30%"><b> Welcome, {{name}}</b> </h3>
      <h3><b>Dashboard</b></h3>
     <div>
      <router-link to="/biddingdashboard">Home </router-link>&nbsp;
      <router-link to="/biddingdeposit">Deposit </router-link>&nbsp;
      <!-- <router-link to="/withdraw">Withdraw </router-link>&nbsp; -->
    <button class="btn btn-danger" @click="logout">logout</button>
    </div>
   <br/><br/>
   
    <div class="col-md-12 acct">
      <div class="panel panel-primary">
        <!-- <div class="panel panel-heading">Send</div> -->
        <div class="panel-body">
        <div class="col-md-12 acct">
      <div class="panel panel-primary">
        
        <div class="panel-body">

        <form  class="" @submit="withdraw" >
          <div class="col-md-6">
              <!-- <div class="form-group">
                  <label for="exampleInputPassword1">Your Account Number</label>
                  <input type="text" class="form-control" v-model="contact" placeholder="e.g 254702244756">
              </div> -->
              </div>
              <div class="col-md-6">
              <div class="form-group">
                  <label ><b><h1>Confirm your Bidding Amount </h1> </b></label>
                  <b ><h1 ></h1></b>

                  <input type="number" class="form-control" v-model="amount" value=this.total> 
              </div>
              </div>
              <!-- <div class="form-group">
                  <label for="exampleInputFile">Description</label>
                  <textarea class="form-control" v-model="description" id="description" placeholder="short description" style="width:30%"></textarea>
              
              </div> -->
              <br>
              <div class="form-group">
              <button type="submit" class="btn btn-primary">Pay via wallet</button>
              </div>

    </form>

        </div>
      </div>
    </div> 
    </div>
    
        </div>
      </div>
    </div> 
      
    
    </div>
    

    
  </div>
</template>

<script>

import AuthLogin from './AuthLogin'
import { dollars } from '../filters';

export default {
  name: 'withdraw',
  data () {
    return {
    name: '',
    contact: '',
    amount: '',
    description: '',
    balance: '',
    type: 'Send',
    productData: {
      
        'product_price': ''
      },
     items: this.$store.getters.inCart,
  
    // time_performed: ''

    }
  },
  components: {AuthLogin},

  computed:{
      inCart() { return this.$store.getters.inCart; },
 cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
      filters: {
    dollars,
  },
  },
  methods: {
    withdraw(e){
      const Self = this
    e.preventDefault()
    let init = this.balance
  
    let am= this.amount
  
    let rout = this.$router
    // let stor = {
    //       "amount": this.amount,
    //       "contact": this.contact,
    //       "description": this.description,
    //       "type": this.type
    //       }
          // console.log(stor)
    var FirebaseRef = firebase.database().ref()
    firebase.auth().onAuthStateChanged((user) => {
    let i = 0
    if (init>=am) {
     let bal = init-am
     
      i = i+=1
      FirebaseRef.child('transactions').child(user.uid).set( {
          "trans_id": Math.floor((Math.random()*10000000)+i),
          "amount": Self.amount,
          "contact": Self.contact,
          "description": Self.description,
          "type": Self.type,
          "time_performed": firebase.database.ServerValue.TIMESTAMP,
          "items": this.$store.getters.inCart

          })
      firebase.database().ref('accounts/'+user.uid+'/balance').set(bal)
      alert("sent")
      rout.replace('/biddingdashboard')
      window.location.reload();
    }else{
      alert("insufficient balance")
    }
    })
    
  },
    logout(){
    let rout = this.$router
        firebase.auth().signOut().then(function() {
      // Sign-out successful.
        //console.log('logout................')
            rout.replace('/biddingAuth')
        }).catch(function(error) {
          // An error happened.
        });
    },
       

  },
  mounted(){
    const Self = this
  
    firebase.auth().onAuthStateChanged((user) => {
    
  
    if (user) {
      // User logged in already or has just logged in.
      //Return users name
      var refere = firebase.database().ref('clients/'+user.uid);
      refere.on('value', function(snapshot) {
      Self.name = snapshot.val().Name
      
        });
        //return account balance
      var reb = firebase.database().ref('accounts/'+user.uid);
      reb.on('value', function(snapshot) {
      Self.balance = snapshot.val().balance 
        });
    } else {
      console.log("sdfs")
      // User not logged in or has just logged out.
    }
   
     // console.log(this.name + this.balance)
        
  });

  
  }
 
}


</script>

<style>

#withdraw1{
     margin-top: 5%;
  margin-left: 20%;
  height: 100%;
  width: 100%;
}

</style>
