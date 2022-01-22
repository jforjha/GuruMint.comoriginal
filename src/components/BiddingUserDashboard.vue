<template>
  <div class="home" id=home >
  <h3 style="margin-left:20%"><b> Welcome to GuruMint, {{name}}</b> </h3>
      <h3><b>Dashboard</b></h3>
    <div>
      <router-link to="/biddingdashboard"> Home </router-link>&nbsp;
      <router-link to="/biddingdeposit">Deposit </router-link>&nbsp;
      <router-link to="/biddingwithdraw">checkout </router-link>&nbsp;
    <button class="btn btn-danger" @click="logout">logout</button>&nbsp;
    </div>
   <br/><br/>
   <div class="col-md-8 tran">
      <div class="panel panel-primary">
        <div class="panel panel-heading">Recent Transaction</div>
        <div class="panel-body">
         <table class="table table-hover">
         <thead id="tabhead">
          <th>Transaction ID</th>
          <th >Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Contact</th>
          </thead>
        <tbody>
          <tr v-for="tran in transa">
            <td>{{tran.trans_id}}</td>
            <td v-if="tran.time != 'Invalid Date'">{{tran.time}}</td>
            <td>{{tran.type}}</td>
            <td>{{tran.amount}}</td>
            <td>{{tran.contact}}</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div> 
    <div class="col-md-4 acct">
      <div class="panel panel-primary">
        <div class="panel panel-heading"><h2><b>Account Balance</b></h2></div>
        <div class="panel-body"><h3><b>{{balance-100}}</b> GT</h3>
        </div>
      </div>
    </div> 
      
    <button class="btn btn-primary" >   <router-link :to="{ name: 'Cr' }" style="color:black;text-decoration: none;">Buy NFT's</router-link></button>
    <br><br>
    <h1 style="margin-left:10%">
      My NFT's Collection
    </h1>
<h3>Token Number : <b>{{items}}</b> </h3> 
<br><br>
 <button class="btn btn-primary" > Sell MY NFT'S</button>
    </div>
    

    
  
</template>

<script>

import AuthLogin from './AuthLogin'
 
export default {
  name: 'Home',
  data () {
    return {
    name: '',
    msg: 'E-wallet',
    balance: '',
    transa: [],
    items:''
    }
  },
  components: {AuthLogin},
  methods: {
   logout(){
    let rout = this.$router
        firebase.auth().signOut().then(function() {
      // Sign-out successful.
        //console.log('logout................')
            rout.replace('/biddingauth')
        }).catch(function(error) {
          // An error happened.
        });
    }

  },
  mounted(){
    const Self = this
    firebase.auth().onAuthStateChanged((user) => {
     let trans = {}
 
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
        //return Token Number
     var it = firebase.database().ref('transactions/'+user.uid);
      it.on('value', function(snapshot) {
        Self.items = snapshot.val().items 
        });
        //return transaction
      var retr = firebase.database().ref('transactions/'+user.uid);
      retr.on('value', function(snapshot) {
      trans = snapshot.val() 
        });
    } else {
      console.log("not logged in")
      // User not logged in or has just logged out.
    }
       //trans = { "type":trans.type, "amount":trans.amount, "contact":trans.contact}
      //this.balance=bal
      this.transa.push({ "type":trans.type, "amount":trans.amount, "contact":trans.contact, "time": new Date(trans.time_performed).toDateString(), "trans_id": trans.trans_id})
      //this.name=name
          
  });

  
       
  }
 
}


</script>

<style>
#home{
   margin-top: 5%;
  margin-left: 20%;
  height: 100%;
  width: 100%;
}

</style>
