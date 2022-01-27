<template>
<div class="bg">
  <div class="home" id=withdraw1 >
    <profilenav/>
    <br><br><br><br><br>
    <div class="col-md-12 acct">
      <div class="panel panel-primary">
        <div class="panel-body">
        <div class="col-md-12 acct">
      <div class="panel panel-primary">
        
        <div class="panel-body">
<div id=img1  class="card">
  <img  class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211121_103001.gif?alt=media&token=e981721b-c226-4ab6-8e37-4494609ee2cf" alt="agnezMo">
 
 
</div>
<h1 id=title1 class="shadow"><b>One day with AgnezMo: VIP Access to shooting set</b></h1>
 <div class="row shadow " id="timer" ></div>
 <!-- <b id="timer1" class="shadow">Bid ends January 14, 2022 at 12:00pm IST </b> -->





        <form id=form1  @submit="withdraw" >
         
              <div class="col-md-6">
              <div class="form-group">
                   <table class="table" style="white-space:nowrap;margin-left:-5%">
              <tbody>
               
             <strong ><h2 id=title2 class="shadow" ><b>BIDDING AMOUNT</b></h2></strong>
            <h1>  <input type=number id=am2 class='textarea shadow'  style="margin-left:-4%;" ></h1>
              </tbody>
            </table>
          
              </div>
              </div>
             
              <br>
          
               <form  class="" @submit="withdraw" >
            <button type="submit" class="btn btn-primary" style="color:white;margin-left:15%" >MAKE OFFER</button>
              </form>
    </form>

        </div>
      </div>
    
      <biddinghistory/>
    </div> 
    </div>
    
        </div>
      </div>
    </div> 
      
    
</div>
</template>

<script>
import profilenav from '../components/profilenav.vue'
import { dollars } from '../filters';
import biddinghistory from '../components/Biddinghistory.vue'
import axios from 'axios'
var total2=''
var balance1=0;
var email1='';
export default {
  name: 'withdraw',
  data () {
    return {
    name: '',
    contact: '',
    amount: '',
    description: '',
    balance: '',
    type: 'Paid',
     items: this.$store.getters.inCart,
   image1:'',
   
  
   biddata:{
    "walletaddress":document.getElementById("ad1").value,
    "amount":  document.getElementById("am2").value
   }
  

    }
  },

  components: {profilenav,biddinghistory},
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
 



 midtrans(){
    //  this.token();

axios({
    // Below is the API URL endpoint
   
    url: process.env.VUE_APP_SERVICE_URL,
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
          gross_amount: parseInt(document.getElementById("am2").value)
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
var a1=parseInt(document.getElementById("am2").value)

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

alert(result);
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
      
        amount:document.getElementById("am2").value*100,
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
var a1=document.getElementById("am2").value

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
   this.midtrans();
//  this.makepayment()
firebase.auth().onAuthStateChanged((user) => {
  
   
          var reb3 = firebase.database().ref('transactions/'+user.uid);
      reb3.startAt(null,reb3.push().key).limitToLast(1).on('value', function(snapshot) {
         snapshot.forEach(snap=>{
      var transid = snap.val().trans_id 
   
  //  setTimeout(function() {     alert("Funds deposited successfully" + "\n"+
  //      "Transaction ID : "+ transid)},2000)
   alert("Transaction successful" + "\n"+
       "Transaction ID : "+ transid)

       setTimeout(function () {
               alert("Balance added successfully" + "\n"+
               "Now please make offer")},1000)


      })});
      // console.log(typeof(bal))
      // alert("Deposited")
      // rout.replace('/withdraw')
    })
    
  },

  showAlert() {
      // Use sweetalert2
      this.$swal({
        text:"Bid placed successfully :)",
  icon: "success",
  buttons: false,
   timer: 2000
    
  
});
    },
    withdraw(e){
     
    e.preventDefault()
    let init = this.balance
  
    let am= document.getElementById("am2").value
 
    let rout = this.$router
    var FirebaseRef = firebase.database().ref()
    if(!document.getElementById("am2").value)
      {
        alert("Please enter bidding amount")
      }
      else if((parseInt(document.getElementById("am2").value)<total2) ){
        alert("Please enter amount greater then previous/minimum bidding amount")
      }
      else{
  
    firebase.auth().onAuthStateChanged((userData) => {
    let i = 0
    if (init>=am) {
     let bal = init-am
     
      i = i+=1
      
     
      FirebaseRef.child('transactions').child(userData.uid).push( {
          "trans_id": Math.floor((Math.random()*10000000)+i),
          "amount": document.getElementById("am2").value,
      "type":"Bid placed",
          "time_performed": new Date().toLocaleString(),
          
          // "items": this.$store.getters.inCart

          })
             FirebaseRef.child('biddingdata').push( {
          "trans_id": Math.floor((Math.random()*10000000)+i),
          "amount": document.getElementById("am2").value,
      "type":"Bid placed",
          "time_performed": new Date().toLocaleString(),
          "Name": this.name
         
    })
        
      firebase.database().ref('accounts/'+userData.uid+'/balance').set(bal)
// this.showAlert();
//  setTimeout(function () {
      
        window.location.reload(true);
      // }, 3000);

    }
    
    else{
  if(!userData){alert("Please Login into your account")
   rout.replace('/auth')

    }
    
    else{
      alert("Insufficient balance.Please Deposit respective amount into your wallet")

   this.send()}
   
    } 
    })}
    
  },
    logout(){
    let rout = this.$router
        firebase.auth().signOut().then(function() {
      // Sign-out successful.
        //console.log('logout................')
            rout.replace('/auth')
        }).catch(function(error) {
         console.log(error)
        });
    },




       

  },
  mounted(){


// timer code

  function updateTimer(){var future = Date.parse("jan 14, 2022 12:00:00");
  var now = new Date();
  var diff = future - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor(diff / (1000 * 60 * 60));
  var mins = Math.floor(diff / (1000 * 60));
  var secs = Math.floor(diff / 1000);
 
  const d = days;
  const h = hours - days * 24;
const  m = mins - hours * 60;
  const s = secs - mins * 60;
 
  document.getElementById("timer").innerHTML ="<div class='col'>" +d + "<span>D</span></div>" +"<div class='col'>" +h +"<span>Hrs</span></div>" +"<div class='col'>" +m +"<span>Mins</span></div>" +"<div class='col'>" +s +"<span>Secs</span></div>";}

setInterval(function(){
updateTimer()
}, 1000);
// code ends

//update token for every seconds
function token(){

}
setInterval(function(){
token()
}, 1000);
// code ends

	var retr = firebase.database().ref('biddingdata/').orderByChild( 'time_performed')
    retr.on('value', function(snapshot) {
   snapshot.forEach(snap => {
      const total1 = snap.child("amount").val();
   total2=parseInt(total1) + 1
        $("#am2").attr({
       "min" : parseInt(total1) + 1 ,
       "placeholder":parseInt(total1) + 1,
      
   
 });
     })});


    const Self = this
  
    firebase.auth().onAuthStateChanged((user) => {
    
  
    if (user) {
      // User logged in already or has just logged in.
      //Return users name
      var refere = firebase.database().ref('clients/'+user.uid);
      refere.on('value', function(snapshot) {
      Self.name = snapshot.val().Name

     
      
        });

        // return email 
            var reb1 = firebase.database().ref('clients/'+user.uid);
      reb1.on('value', function(snapshot) {
      email1= snapshot.val().Email
        });
        //return account balance
      var reb = firebase.database().ref('accounts/'+user.uid);
      reb.on('value', function(snapshot) {
      Self.balance = snapshot.val().balance 
         balance1 =  snapshot.val().balance 
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

<style lang='scss' scoped>

#withdraw1{
     margin-top: 3%;
  margin-left: 20%;
  height: 100%;
  width: 100%;
  
  @media (max-width:812px) {
  
    margin-top: 10%;
    position: sticky;
     margin-left:0%;
      background-color:#001a33;
     
   }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
position: fixed;
     margin-top: 0%;
  height: 100%;
width: 100%;
   background-color:#001a33;
  
   }
    @media (min-width: 1025px) and (max-width: 1200px){
      height: 100%;
         position: fixed;
         width: 150%;
         margin-left:-2%;
         background-color:#001a33;
         
        }

}
.textarea{
  width:100%;
  height:60px;
  border:1px solid black;
}
#form1{
  margin-left:5%;
  margin-top:-17%;
   
   @media (max-width: 812px ){
margin-top:30%;
margin-left:20%;
  font-size: 1.3em;
  }

    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
   margin-top: 10%;
   margin-left:71%;
  position:sticky ;

   }
   @media (min-width: 1025px) and (max-width: 1200px){
     margin-left:40%;
   }
       @media only screen and (min-width: 1366px){
      margin-left:34%;
    }
}


 
#timer {
  font-size: 2em;
  font-weight: 100;
  color: white;
  margin-left:20%;
  margin-top:-26%;
  position: absolute;

     @media (max-width: 812px ){
margin-top:5%;
  font-size: 1.7em;
  margin-left:10%;
 

 
 
  }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
   margin-top: 0%;
   margin-left:70%;
  font-size: 0.7em;
  position: relative ;
   }
     @media (min-width: 1025px) and (max-width: 1200px){
       margin-left: 31%;
       font-size: 1.7em;
     }
       @media only screen and (min-width: 1366px){
      margin-left:24%;
    }


}
#timer1 {
  font-size: 1em;
  font-weight: 100;
  color: white;
  margin-left:38%;
  margin-top:-22%;
  position: absolute;
  
    
    @media (max-width: 812px ){
margin-top:5%;
  font-size: 1.3em;
  margin-left:2%;
  margin-right:-10%;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
   margin-top: -40%;
   margin-left:43%;
  position:relative ;
   }
    @media only screen and (min-width: 1366px){
      margin-left:4%;
    }
  
  
}
#title1{
  position: absolute;
  margin-top:-33%;
  margin-left: 10%;
  

@media (max-width: 812px ){
margin-top:-100%;
 margin-right: -36%;
  font-size: 1.3em;
   margin-left:-3%;

  }
   @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
   position: relative;
margin-top: -75%;
margin-left: 0%;
  font-size: 2em;

   }
    @media (min-width: 1025px) and (max-width: 1200px){
       margin-left: 7%;
     }
                 @media only screen and (min-width: 1366px)
{
  margin-top:-37%;
  margin-left:-2%;

 }
}
#title2{
       @media (max-width: 812px ){
margin-top:5%;
  font-size: 1.3em;
   margin-left:-45;

  }
}
#img1{
  width: 28rem;
  margin-left:-13%;
         @media (max-width: 812px ){
margin-top:0%;
  font-size: 1.3em;
 margin-left:0%;
   position: relative;

  }
     @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
  width:70%;
 
  }
   @media (min-width: 1025px) and (max-width: 1200px){
       margin-left: 1%;
     }
}
 
.bg{
  background-color:#001a33 ;
  position: relative;
  width:100%;
  height: 100%;
     @media (max-width: 812px ){
      position: relative;
      width: fit-content;
  }
   @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
      position: relative;
      width: 800px;
}
 @media (min-width: 1025px) and (max-width: 1200px){
      position: sticky;
     
        }

}
.shadow{
    
     color: white;
}
</style>
