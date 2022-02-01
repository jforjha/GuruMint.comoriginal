<template>
<div class="bg">
  <div class="home" id=withdraw1 >
    <profilenav/>
    <br><br>
 
      <h3><b class="shadow">Dashboard</b></h3>
     <div>
      <router-link  to="/userdashboard"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Wallet</button>  </router-link>&nbsp;
      <router-link to="/deposit"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Deposit</button> </router-link>&nbsp;
      <router-link to="/withdraw" ><button type="button" class="btn btn-light" data-mdb-ripple-color="dark" style="background:#6998da"><strong>checkout</strong></button> </router-link>&nbsp;
      <router-link to="/bidding"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Bidding </button></router-link>&nbsp;
       <router-link to="/transactionhistory" ><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Transaction History </button></router-link>&nbsp;

    <button class="btn btn-danger" @click="logout">logout</button>
    </div>
   <br/><br/>
   
    <div class="col-md-12 acct">
      <div class="panel panel-primary">
       
        <!-- <div class="panel panel-heading">Send</div> -->
        <div class="panel-body">
        <div class="col-md-12 acct">
      <div class="panel panel-primary">
        
        <div id=panel2 class="panel-body">

        <form  class="" @submit="withdraw" >
          <div class="col-md-6">
              <!-- <div class="form-group">
                  <label for="exampleInputPassword1">Your Account Number</label>
                  <input type="text" class="form-control" v-model="contact" placeholder="e.g 254702244756">
              </div> -->
              </div>
              <div class="col-md-6">
              <div class="form-group">
                   <table class="table shadow" style="white-space:nowrap;margin-left:-5%">
              <tbody>
                <tr class="shadow" v-for="(item, index) in cart">
                  <td class="shadow"> {{ item.name }}</td>
                  <td class="shadow">   {{ item.price |  dollars  }}</td> 
      
               
                  <!-- <td>
                    <button class="btn btn-xs btn-danger pull-right" @click="removeFromCart(index)">&times;</button>
                  </td> -->
                </tr>
                <tr>
                  <th>Total</th>
                  <td>  Rp {{ total  }}</td>
                  <!-- <th></th> -->
                </tr>
      

          
              </tbody>
            </table>

                  <!-- <input type="text" class="form-control" v-model="amount" value=this.total>  -->
              </div>
              </div>
             
              <br>
          
               <form  class="" @submit="withdraw" >
            <button type="submit" id=bid1 class="btn btn-primary" style="color:white">PAY NOW</button>
              </form>
              

    </form>
    <br><br>

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
import profilenav from '../components/profilenav.vue'
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
    type: 'Paid',
     items: this.$store.getters.inCart,
   image1:''
    // time_performed: ''

    }
  },

  components: {AuthLogin,profilenav},
  computed:{
      inCart() { return this.$store.getters.inCart; },
 cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.firstname1.find((forSaleItem) => {
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
     
  showAlert() {
      // Use sweetalert2
      this.$swal({
        text:"NFT Successfully added to cart :)",
  icon: "success",
  buttons: false,
   timer: 2000
    
  
});
    },
    withdraw(e){
     
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
      if(parseInt(this.total)<1){
            alert("Please add NFTs in your cart")
          }
          else{
    firebase.auth().onAuthStateChanged((userData) => {
    let i = 0
    if (init>=am) {
     let bal = init-am
     
      i = i+=1
      FirebaseRef.child('transactions').child(userData.uid).push( {
          "trans_id": Math.floor((Math.random()*10000000)+i),
          "amount": this.total,
      "type":"Paid",
          "time_performed": new Date().toLocaleString(),
          // "items": this.$store.getters.inCart

          })
               FirebaseRef.child('NftsCollection').child(userData.uid).push( { 
         "images":   this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.firstname1.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      }),
       
      })
        
      firebase.database().ref('accounts/'+userData.uid+'/balance').set(bal)
      // alert("Transaction Successful")
      rout.replace('/userdashboard')
    window.location.reload(true)
    }
    
    else{
  if(!userData){alert("Logged out successfully")
    }else{
      alert("Insufficient balance.Please Deposit respective amount into your wallet")

     
    rout.replace('/deposit')}
   
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

<style lang='scss' scoped>

#withdraw1{
     margin-top: 5%;
  margin-left: 5%;
  height: 100%;
  width: 100%;
  @media (max-width:812px) {
  margin-left:5%;
    margin-top: 23%;
    position:fixed;
    
  }
    @media (min-width: 768px) and (max-width: 1024px) {
       height: 100%;
width: 100%;
position: fixed;
 margin-top: 12%;
  margin-left: 1%;
     }
       @media (min-width: 1025px) and (max-width: 1200px){
          margin-top: 8%;
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
#bid1{
  margin-left:20%;
  margin-top:5%;
}
#panel2{
  margin-left:25%;
  margin-top:4%;
   @media (max-width:812px){
  padding:3%;
  margin:1%;
  margin-left:-4%;}
      @media (min-width: 768px) and (max-width: 1024px) {
         margin-left:14%;
      }
}
.bg{
  background-color:#001a33 ;
  height: 100%;
  width: 100%;
  position: absolute;
    @media (max-width:812px) {
        height: 100%;
  width: 100%;
  position: absolute;
    }
     @media only screen and (min-width: 1366px){
       height:100%;
       position: fixed;
     }

}
.shadow{
    //  text-shadow: 0 0 20px #f2f6f8;
     color: white;
}

</style>
