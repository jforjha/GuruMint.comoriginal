<template>
  <div >
     <ul class="nav navbar-nav navbar-right" >
        <li class="dropdown" >
          <a   class="dropdown-toggle" data-toggle="dropdown" type="button" style="font-size:18px ;text-decoration: none;margin-left:5%" aria-expanded="false" > 
           <i class="fas fa-shopping-cart" style="position:relative;"></i> Cart ({{ numInCart }})</a>
          <ul id="cartmodal" class="dropdown-menu dropdown-cart" role="menu"  >
              <li>
                 <div  class="modal-dialog"  style="margin-right:-2%;margin-left:-16%;margin-bottom:-5%;margin-top:-6%;position:relative">
        <div class="modal-content"  style="width:130%">
          <div class="modal-header">
            <h5 class="modal-title">SUMMARY</h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div  class="modal-body" >
            <table class="table" style="white-space:nowrap;">
              <tbody>
                <tr v-for="(item, index) in cart">
                  <td > {{ item.name }}</td>
                  <td >   {{ item.price |  dollars  }}</td> 
      
               
                  <td>
                    <button class="btn btn-xs btn-danger pull-right" @click="removeFromCart(index)">&times;</button>
                  </td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th>  ₹ {{ total  }}</th>
                  <!-- <th></th> -->
                </tr>
      

          
              </tbody>
            </table>
          </div>
        <!-- for image upload code starts -->
     
      <!-- code ends -->
            
          <div class="modal-footer">
            <!-- <button class="btn btn-secondary" data-dismiss="modal" >Keep shopping</button> -->
            <!-- <button class="btn btn-primary" v-on:click="makepayment();posts()">PAY NOW</button> -->
            <!-- <button class="btn btn-primary" v-on:click="midtrans()">PAY NOW</button> -->
             <form  class="" @submit="withdraw" >
            <button type="submit" id="paynow" class="btn btn-primary"  >PAY NOW</button>
              </form>
           
          </div>
    
        
        </div>
      </div>
                
              </li>  
          </ul>
        </li>
      </ul>
     
  </div>
</template>

<script>
import { dollars } from './filters';
import axios from "axios";



 

 

var id=String(window.location.href).substring(34,47)
var firstname=String(window.location.href).substring(48,(window.location.href).length)

export default {
  name: 'shoppingCart',
  
  data(){

    return {

     url:String(`http://localhost:8080/userprofile/${id+"_"+firstname}`),
   
      items: this.$store.getters.inCart,
      user:{
  walletAddress:"",
  email:"",

    name: ''  , 
    amount: '',
  
    balance: '',
    },
    }
  },
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        if(window.location.href==String(`http://localhost:8080/userprofile/${id+"_"+firstname}`)){
        return this.$store.getters.firstname1.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });}else if(window.location.href=="http://localhost:8080/agneztest"){
            return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
        }
        
      });
    },
  
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  filters: {
    dollars,
  },
   mounted(){

        const Self = this  
var userdata= firebase.database().ref("userdata")
      userdata.on('value', function(snapshot) {
      snapshot.forEach(snap => {
        localStorage.firstname=snap.val().name
localStorage.lastname=snap.val().lastname


        })  });

   
  
    firebase.auth().onAuthStateChanged((user) => {
    
  
    if (user) {
     
        //return account balance
      var reb = firebase.database().ref('accounts/'+user.uid);
      reb.on('value', function(snapshot) {
      Self.balance = snapshot.val().balance 
        });
    } else {
      console.log("User Not LoggedIN")
      // User not logged in or has just logged out.
    }
   
     // console.log(this.name + this.balance)
        
  });

  
  },
  
  methods: {

   
    withdraw(e){
      const Self = this
    e.preventDefault()
    let init = this.balance
  
    let am= this.total
  
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
      FirebaseRef.child('transactions').child(user.uid).push( {
          "trans_id": Math.floor((Math.random()*10000000)+i),
          "amount": this.total,
         "type":"Paid",
          "time_performed": new Date().toLocaleString(),
         
         
          })
       FirebaseRef.child('NftsCollection').child(user.uid).push( { 
         "images":   this.$store.getters.inCart.map((cartItem) => {
        
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId
        });
      }) 
       
      })
      firebase.database().ref('accounts/'+user.uid+'/balance').set(bal)
      alert("Transaction Successful")
      rout.replace('/userdashboard')
      window.location.reload();
    }
    else{
  if(!user){alert("Please Login into your Account")
  rout.replace('/auth')
    }else{
      alert("Insufficient balance.Please deposit respective amount into your wallet")
    rout.replace('/deposit')}
    } 
    })
    
  },
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
    makepayment: function() {
  
      var options = {
        key: "rzp_test_astk95KRrqNO0x",
        // key_secret : "mVybwVFhZAqr6Eg1OPGP3Rcs",
        amount: this.total * 100,
        name: "GuruMint",
        description: "Pay Your Educator",
        image: "/your_logo.png",
        handler: function(response) {
          alert(
            "Your Transaction is Successful"+" "+
           
            "Save This Payment ID For Future Referce  " +
              " " +
              response.razorpay_payment_id
          )? "" : location.reload();
        },
        prefill: {
        
          name: "",
          email: this.user.email,
          contact: "",
        },
        // notes: {
        //   WalletAddress: "",
        // },
        theme: {
          color: "#0EB9F2",
        },
      };
      const rzp1 = new window.Razorpay(options);

      rzp1.open();
      // event.preventDefault();
    },
      posts() {
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
    
  },
};
</script>
<style lang='scss' scoped>
#cartmodal{
 display: fixed;
margin-top: 40%;
margin-left: -240%;

  @media (max-width:812px){
 margin-left:-60%;
 width:70vw;
  }
    @media only screen and (min-width: 1366px){
       margin-left:-420%;
       margin-top: 30%;
    }
}
#paynow{
  margin-left:-50%;
     color:white;
  @media (max-width:812px) {
    color:white;
    margin-left:-150%
  }
    @media only screen and (min-width: 1366px){
       margin-left:-350%;
    }
}
</style>