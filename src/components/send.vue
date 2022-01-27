<template>
<div class="bg">
<div class="bg">
  <div class="home" id=home1 >
    <profilenav/>
 
      <h3><b class="shadow">Dashboard</b></h3>
     <div>
   <router-link  to="/userdashboard"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Wallet</button>  </router-link>&nbsp;
      <router-link to="/deposit"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark" style="background:#6998da"><strong>Deposit</strong></button> </router-link>&nbsp;
      <router-link to="/withdraw"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">checkout</button> </router-link>&nbsp;
      <router-link to="/bidding"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Bidding </button></router-link>&nbsp;
       <router-link to="/transactionhistory" ><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Transaction History </button></router-link>&nbsp;
    <button class="btn btn-danger" @click="logout">logout</button>
    </div>
   <br/><br/>
   
    <div class="col-md-11 acct">
      <div class="panel panel-primary">
        <!-- <div class="panel panel-heading" style="margin-left:-1%;"><b>Deposit Funds</b></div> -->
        <div class="panel-body" id=panel1>

        <form  class="" @submit="send" >
        
              <div class="col-md-6">
              <div class="form-group">
                  
                 <i class="fas fa-sack shadow" style='font-size:140px'></i>
                  <br><br>
            <h1>  <div id=am1 class='textarea shadow' contenteditable style="margin-left:-4%;" >{{total}}</div></h1>
      
              </div>
              </div>
           
              <br>
              <div class="form-group">
             
              </div>

    </form>

        </div>
        
      </div>
    </div> 
    <button id=btndp  class="btn btn-primary" v-on:click="send()">Deposit Money</button>
  
    </div>
    

</div>
</div>
</template>

<script>
import Vue from 'vue';
import profilenav from '../components/profilenav.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios'

Vue.use(VueSweetalert2);
var balance1=0;
var email1=''
export default {
  name: 'Send',
  data () {
    return {
    name:'',
    description: '',
    type: 'Deposit',
    amount: '',
    time: 'ServerValue.TIMESTAMP',
    send1:false,
    data1:''
  
   
    }
  },
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
  
  },
  components: {profilenav},
  methods: {
    // created(){
    //   this.makepayment();
    //  this.send();

    // },
 

   midtrans(){
    //  this.token();

axios({
    // Below is the API URL endpoint
  //  https://thingproxy.freeboard.io/fetch/https://app.sandbox.midtrans.com/snap/v1/transactions
    url:process.env.VUE_APP_SERVICE_URL,
    method: "post",
    headers: {
      
      "Content-Type": "application/json",
      Accept: "application/json",
     
      Authorization:
        "Basic " +
        Buffer.from(process.env.VUE_APP_midtrans).toString("base64")
      // Above is API server key for the Midtrans account, encoded to base64
    },
    data:
      // Below is the HTTP request body in JSON
      {
        transaction_details: {
          order_id: "gurumint" + Math.round(new Date().getTime() / 1000),
          gross_amount: parseInt(document.getElementById('am1').innerHTML)
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          first_name: "GuruMint",
          last_name: "",
          email: "GuruMint@gurumint.com",
          phone: "08111224333"
        }
      }
  }).then(
    (snapResponse) => {
     this.data1 = snapResponse.data.token;
      console.log("Retrieved snap token:", this.data1);
      window.snap.pay(this.data1, {
          onSuccess: function(){
               
                  var FirebaseRef = firebase.database().ref()
    let i = 0
  
  // let rout=this.$router
   
    firebase.auth().onAuthStateChanged((user) => {
var a1=document.getElementById('am1').innerHTML

var a2=parseInt(a1)
var b1=parseInt(balance1)
       let bal =b1 + a2
        firebase.database().ref('accounts/'+user.uid+'/balance').set(bal)
       



        // rout.replace('/withdraw')
     i=i+=1
  FirebaseRef.child('transactions').child(user.uid).push( {
            "trans_id": Math.round(new Date().getTime() / 1000),
          "amount":parseInt(a1),    
          "type": "deposit",
          "time_performed":    new Date().toLocaleString(),
          })   
          })
            /* You may add your own implementation here */
          

          },
          onPending: function(result){

            /* You may add your own implementation here */


            alert("wating for your payment!");
            console.log(result) 
       
          },
          onError: function(result){
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function(){
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })
      // Pass the Snap Token to frontend, render the HTML page
    
    },
    (error) => {
   
      console.log(error);
    }
  )




       
   },

 makepayment(){

      var options = {
        key: "rzp_test_astk95KRrqNO0x",
        // key_secret : "mVybwVFhZAqr6Eg1OPGP3Rcs",
      
        amount:document.getElementById('am1').innerHTML*100,
        name: "GuruMint",
        description: "Mint NFTs like a Pro!",
        image: "https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/gurumintlogo.jfif?alt=media&token=d7bb79fa-efac-4729-a37f-dc375b964f40",
       
        handler: function(response) {
       
       
          if ( response.razorpay_payment_id > 1) {
alert("payment fail")
}else  {
   var FirebaseRef = firebase.database().ref()
    let i = 0
  
  // let rout=this.$router
   
    firebase.auth().onAuthStateChanged((user) => {
var a1=document.getElementById('am1').innerHTML

var a2=parseInt(a1)
var b1=parseInt(balance1)
       let bal =b1 + a2
        firebase.database().ref('accounts/'+user.uid+'/balance').set(bal)
       



        // rout.replace('/withdraw')
     i=i+=1
  FirebaseRef.child('transactions').child(user.uid).push( {
            "trans_id": response.razorpay_payment_id,
          "amount":parseInt(a1),    
          "type": "deposit",
          "time_performed":    new Date().toLocaleString(),
          })   
          })}
         
        },
 
      // callback_url: this.$router.push('/withdraw'),
  callback_method: "get",
        prefill: {
        
          // name: this.name,
          email: email1,
          // contact: this.user.phone,
        },
        // notes: {
        //   WalletAddress: "",
        // },
        
  modal: {
        "ondismiss": function(){
            alert('Checkout window closed');
        }
    },

  
        theme: {
          color: "#0EB9F2",
        },
      };
  
      const rzp1 = new window.Razorpay(options);
      rzp1.open()
     
      // event.preventDefault();
     
    },
  
     send:function(){
    let rout = this.$router
//  this.makepayment()
this.midtrans();
   
    firebase.auth().onAuthStateChanged((user) => {
  
   
          var reb3 = firebase.database().ref('transactions/'+user.uid);
      reb3.startAt(null,reb3.push().key).limitToLast(1).on('value', function(snapshot) {
         snapshot.forEach(snap=>{
      var transid = snap.val().trans_id 
   
  //  setTimeout(function() {     alert("Funds deposited successfully" + "\n"+
  //      "Transaction ID : "+ transid)},2000)
    alert("Transaction successful" + "\n"+
       "Transaction ID : "+ transid)
rout.replace('/withdraw')



      })});
      // console.log(typeof(bal))
      // alert("Deposited")
      // rout.replace('/withdraw')
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
     
   //axios midtrans
   


   
    const Self = this
 
    firebase.auth().onAuthStateChanged((userData) => {
    if (userData) {
      // User logged in already or has just logged in.
      //Return users name
      var refere = firebase.database().ref('clients/'+userData.uid);
      refere.on('value', function(snapshot) {
      Self.name = snapshot.val().Name
      
        });
      //return account balance
      var reb = firebase.database().ref('accounts/'+userData.uid);
      reb.on('value', function(snapshot) {
      
     balance1 = snapshot.val().balance 
        });

          var reb1 = firebase.database().ref('clients/'+userData.uid);
      reb1.on('value', function(snapshot) {
      email1= snapshot.val().Email
        });

    
     
    }
      
      console.log(this.initb)
    })
  }
 
}
</script>

<style lang='scss' scoped>
#home1{
     margin-top: 8%;
  margin-left: 5%;
height: fit-content;
width: fit-content;
  @media (max-width:812px) {
    margin-left:5%;
    margin-top: 34%;
    position: relative;
    
  }
     @media (min-width: 768px) and (max-width: 1024px) {
       height: 100%;
width: 100%;
 margin-top: 17%;
  margin-left: 1%;
     }
      @media (min-width: 1025px) and (max-width: 1200px){
        margin-top: 12%;
      }
}
.textarea{
  width:200px;
  height:50px;
  border:1px solid black;
}
.bg{
  background-color:#001a33 ;
  height: 100%;
  width: 100%;
  position: fixed;
}
.shadow{
    //  text-shadow: 0 0 20px #f2f6f8;
     color: white;
}
#panel1{
  margin-left: 90%;
   @media (max-width:812px){
       margin-left: 20%;
   }
      @media (min-width: 1025px) and (max-width: 1200px){
        margin-top: 12%;
        margin-left: 40%;
      }


}
.btn-light{
    @media (max-width:812px){
  padding:3%;
  margin:1%;}
     @media (min-width: 768px) and (max-width: 1024px) {
      padding:3%;
        

  
}
}
#btndp{
  color:white;margin-left:90% ;
    @media (max-width:812px){
margin-left:30%;
    }
      @media (min-width: 1025px) and (max-width: 1200px){
        margin-left: 40%;
      }
}
</style>