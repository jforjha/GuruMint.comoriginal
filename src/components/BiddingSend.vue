<template>

  <div class="home" id=home1 >
  <h3 style="margin-left:30%"><b> Welcome, {{name}}</b> </h3>
      <h3><b>Dashboard</b></h3>
     <div>
      <router-link to="/biddingdashboard">Home </router-link>&nbsp;
      <router-link to="/biddingdeposit">Deposit </router-link>&nbsp;
      <router-link to="/biddingwithdraw">Withdraw </router-link>&nbsp;
    <button class="btn btn-danger" @click="logout">logout</button>
    </div>
   <br/><br/>
   
    <div class="col-md-12 acct">
      <div class="panel panel-primary">
        <div class="panel panel-heading"><b>Deposit Fund</b></div>
        <div class="panel-body">

        <form  class="" @submit="send" >
          <!-- <div class="col-md-6"> -->
              <!-- <div class="form-group">
                  <label for="exampleInputPassword1">Receiver Contacts</label>
                  <input type="text" class="form-control" v-model="contact" placeholder="e.g 254702244756">
              </div> -->
              <!-- </div> -->
              <div class="col-md-6">
              <div class="form-group">
                  <label for="exampleInputFile">Amount</label>
                  <input type="text" class="form-control" v-model="amount" placeholder="amount to deposit">
              </div>
              </div>
              <div class="form-group">
                  <label for="exampleInputFile">Description</label>
                  <textarea class="form-control" v-model="description" id="description" placeholder="short description" style="width:30%"></textarea>
              
              </div>
              <br>
              <div class="form-group">
              <button type="submit" class="btn btn-primary">DEPOSIT MONEY</button>
              </div>

    </form>

        </div>
      </div>
    </div> 
    </div>
    

    
  </div>
</template>

<script>

import AuthLogin from './AuthLogin'

export default {
  name: 'Send',
  data () {
    return {
    name:'',
    description: '',
    type: 'Deposit',
    amount: '',
    initb:'',
    time: 'ServerValue.TIMESTAMP',
   
    }
  },
 
  components: {AuthLogin},
  methods: {
  send(e){
    const Self = this
    let i = 0
    e.preventDefault()
    let rout = this.$router
  
    var FirebaseRef = firebase.database().ref()
    firebase.auth().onAuthStateChanged((user) => {
     let bal = parseInt(Self.initb)+parseInt(Self.amount)
     i=i+=1
      FirebaseRef.child('transactions').child(user.uid).set( {
            "trans_id": Math.floor((Math.random()*10000000)+i),
          "amount": Self.amount,    
          "description": Self.description,
          "type": Self.type,
          "time_performed": firebase.database.ServerValue.TIMESTAMP,
        

          })
      firebase.database().ref('accounts/'+user.uid+'/balance').set(bal)
      
      // console.log(typeof(bal))
      alert("Deposited")
      rout.replace('/biddingdashboard')
    })
    
  },
   logout(){
    let rout = this.$router
        firebase.auth().signOut().then(function() {
      // Sign-out successful.
        //console.log('logout...............')
            rout.replace('/auth')
        }).catch(function(error) {
          // An error happened.
        });
    }

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
      Self.initb = snapshot.val().balance 
        });
    }
      
      console.log(this.initb)
    })
  }
 
}


</script>

<style>
#home1{
     margin-top: 5%;
  margin-left: 20%;
  height: 100%;
  width: 100%;
}
</style>
