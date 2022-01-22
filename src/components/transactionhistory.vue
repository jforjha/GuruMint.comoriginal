<template>
<div class="bg" >
  <div class="home" id=home >
    <profilenav/>
    <br><br><br><br><br>
      <h3 class="shadow"><b>Dashboard</b></h3>
    <div>
      <router-link  to="/userdashboard"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Wallet</button>  </router-link>&nbsp;
      <router-link to="/deposit"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Deposit</button> </router-link>&nbsp;
      <router-link to="/withdraw"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">checkout</button> </router-link>&nbsp;
      <router-link to="/bidding"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Bidding </button></router-link>&nbsp;
       <router-link to="/transactionhistory" ><button type="button" class="btn btn-light" data-mdb-ripple-color="dark" style="background:#6998da"><strong>Transaction History </strong></button></router-link>&nbsp;
    <button class="btn btn-danger" @click="logout">logout</button>&nbsp;
    </div>
   <br/><br/>
   <div class="col-md-8 tran">
      <div class="panel panel-primary">
        <div class="panel panel-heading shadow"><h1>All completed transactions</h1></div>
        <br>
        <div class="panel-body">
      
  <table class="table  shadow">
                  <thead id="tabhead" >
          <th>Transaction ID</th>
          <th >Date</th>
          <th>Type</th>
          <th>Amount</th>
        
          </thead>
                    <tbody id = "table_body" class="shadow">
                    </tbody>
                </table>
  
        </div>
      </div>
    </div> 
   
      
   
<div >
<div >
  
  

  </div>
</div>

    <!-- code end -->

<!-- <h3>Token Number : <b>{{items}}</b> </h3>  -->
<br>
  

    </div>
    

    
</div>
</template>

<script>
import Item from '../Item.vue';
import AuthLogin from './AuthLogin';
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios'
import 'sweetalert2/dist/sweetalert2.min.css';
import profilenav from '../components/profilenav.vue'

Vue.use(VueSweetalert2);
export default {
  name: 'Home',
  data () {
    return {
    name: '',
    msg: 'E-wallet',
    balance: '',
    transa: [],
    items:'',
    images:'',
    trans1:'',
  transa2:[]
    }
  },
   
  components: {AuthLogin,Item,profilenav},
  computed:{forSale() { return this.$store.getters.forSale; }},
  methods: {
   logout(){
    let rout = this.$router
        firebase.auth().signOut().then(function() {
      // Sign-out successful.
        //console.log('logout................')
            rout.replace('/auth')
        }).catch(function(error) {
          // An error happened.
        });
    },
    
        posts() {
      axios
        .post(
          "https://gurumintcom-282c4-default-rtdb.firebaseio.com/posts.json",
         this.it ,
          { emulateJSON: true }
        )
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    },
      showAlert() {
      // Use sweetalert2
      this.$swal({
        text:"Please enter your BEP-20 Wallet Address.",
   showDenyButton: true,
  showCancelButton: true,
   inputPlaceholder: '0xa6f79B60359f141df90A0C745125B131cFAfFD21',
  confirmButtonText: 'Yes,Confirm',
  denyButtonText: `Cancel`,
  buttons: false,

      // confirmButtonText:'<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
    input: 'text',
  
});
    },

  },

  mounted(){
    const Self = this
    firebase.auth().onAuthStateChanged((userData) => {
     let trans = {}
     let transa2={}
 
    if (userData) {
      // User logged in already or has just logged in.
      //Return users name
      var refere = firebase.database().ref('clients/'+userData.uid);
      refere.on('value', function(snapshot) {
      Self.username = snapshot.val().Name
      
        });
        //return account balance
      var reb = firebase.database().ref('accounts/'+userData.uid);
      reb.on('value', function(snapshot) {
        Self.balance = snapshot.val().balance 
        });
        //return Token Number
    //  var it = firebase.database().ref('transactions/'+userData.uid);
    //   it.on('value', function(snapshot) {

    //     Self.items = snapshot.val().items 
    //     });
        // return image url
 var image1 = firebase.database().ref('transactions/'+userData.uid+'/images/0'   );
      image1.on('value', function(snapshot) {
        snapshot.forEach(snap => {
 Self.images =snapshot.val().image;
  Self.name =snapshot.val().name;
    Self.price =snapshot.val().price;
 
        })
       
        });
        //return image2 for card2
     
       
       

        //return transaction
      var retr = firebase.database().ref('transactions/'+userData.uid);
      retr.on('child_added', function(snapshot) {
   

  const transactionid = snapshot.child("trans_id").val();
      const timeperformed = snapshot.child("time_performed").val()
      const type = snapshot.child("type").val();
      const total1 = snapshot.child("amount").val();

     $('#table_body').append("<tr> <td>" + transactionid + "</td><td>" + timeperformed + "</td><td>" +  type  + "</td><td>" + total1 +"</td></tr>");
     
     
        });
    } else {
      console.log("not logged in")
    
    }
      
      this.transa.push({ "type":trans.type, "amount":trans.amount, "time": new Date(trans.time_performed).toDateString(), "trans_id": trans.trans_id})      
   this.transa2.push({ "type":trans.type, "amount":trans.amount, "time": new Date(trans.time_performed).toDateString(), "trans_id": trans.trans_id})      
  });

  
       
  }
 
}


</script>

<style lang="scss" scoped>
#home{
   margin-top: 0%;
  margin-left: 5%;
background-color:#001a33 ;
height: 1000px;
position: relative;

  @media (max-width:812px) {
    margin-left:5%;
    margin-top: 10%;
    position: relative;
     width: 90%;
  }
}


.bg{
background-color:#001a33 ;
@media (max-width:812px){
 width: 130%;
 position: relative;
 height: 100%;
 
 }
   @media (min-width: 768px) and (max-width: 1024px) {
     height: 1400px;
     margin-top:-10%;
   }
    @media only screen and (min-width: 1366px){
      height:120%;
      position:sticky;
    }

}
.shadow{
    //  text-shadow: 0 0 20px #f2f6f8;
     color: white;
}
.btn-light{
    @media (max-width:812px){
  padding:3%;
  margin:1%;}
     @media (min-width: 768px) and (max-width: 1024px) {
      padding:3%; 
}
}


</style>
