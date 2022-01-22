<template>
<div class="bg" >
  <div class="home" id=home >
    <profilenav/>
    <br ><br ><br><br><br>
<div id=d1>
      <h3><b class="shadow">Dashboard</b></h3>
    <div >
      <router-link  to="/userdashboard"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark" style="background:#6998da"><strong>Wallet</strong></button>  </router-link>&nbsp;
      <router-link to="/deposit"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Deposit</button> </router-link>&nbsp;
      <router-link to="/withdraw"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">checkout</button> </router-link>&nbsp;
      <router-link to="/bidding"><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Bidding </button></router-link>&nbsp;
       <router-link to="/transactionhistory" ><button type="button" class="btn btn-light" data-mdb-ripple-color="dark">Transaction History </button></router-link>&nbsp;
    <button class="btn btn-danger" @click="logout">logout</button>&nbsp;
    </div>
   <br/><br/>
  
    <div class="col-md-4 acct">
      <div class="panel panel-primary">
       
      <div class="panel-body"><h1 class="shadow" style=" font-size: 5em;"><b ><i class='fas fa-wallet' style='font-size:76px'></i> Rp {{balance+0}}</b> </h1>
        </div>
      </div>
    </div> 
      
    <button class="btn btn-primary" >   <router-link :to="{ name: 'agneztest' }" style="color:white;text-decoration: none;">Go to Cart</router-link></button>
    <br><br>
    <h1 style="margin-left:10%" class="shadow">
      My NFT Collection
    </h1>
    <!-- code for NFT collection -->
    <button class="btn btn-primary" v-on:click="  showAlert()" > Withdraw</button>
</div>
<br><br><br>
  <div  id=nft class="row " style="margin-left:-1%;background-color: #001a33;">
 <body class="card border-0 col-6 col-md-4 card1 "   id=body  style="width: 35rem;background-color: #001a33;" ></body><br>
<body  id=body1  class="card border-0 col-6 col-md-4 card1 " style="width: 35rem;background-color: #001a33;" ></body><br>
<body id=body2 class="card border-0 col-6 col-md-4  card1" style="width: 35rem;background-color: #001a33;" ></body> <br>
<body  id=body3 class="card border-0 col-6 col-md-4 card1"  style="width: 35rem;background-color: #001a33;" ></body> <br>
<body  id=body4 class="card border-0 col-6 col-md-4 card1" style="width: 35rem;background-color: #001a33;" ></body> <br>
</div>

<!-- test cards -->
 
<!-- code ends -->

    </div>
  
    

</div>
  
</template>

<script>

import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
// import axios from 'axios'
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
  img:''
    }
  },
   
  components: {profilenav},
  computed:{forSale() { return this.$store.getters.forSale; }
  
  },
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
    
    //     posts() {
    //   axios
    //     .post(
    //       "https://gurumintcom-282c4-default-rtdb.firebaseio.com/posts.json",
    //      this.it ,
    //       { emulateJSON: true }
    //     )
    //     .then(function(data) {
    //       console.log(data);
    //       this.submitted = true;
    //     });
    // },
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
  
}).then((result) => {
  if (result.isConfirmed) {
    this.$swal({
        text:"Soon NFT will deposit to your wallet",
  icon: "success",
  buttons: false,
   timer: 2000
    
  
});
  }
});
    },

  },

  mounted(){

    
    const Self = this
    firebase.auth().onAuthStateChanged((userData) => {
     let trans = {}
 
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
     var it = firebase.database().ref('transactions/'+userData.uid);
      it.on('value', function(snapshot) {

        Self.items = snapshot.val().items 
        });
 
        //return image2 for card2
      

        //return imageurl
          var retr = firebase.database().ref('NftsCollection/'+userData.uid);
      retr.on('value', function(snapshot) {
   snapshot.forEach(snap=>{
// for card1
  const imageurl1 = snap.child("images").child("0").child("image").val();
  const des1=snap.child("images").child("0").child("name").val();
  var d1=document.createTextNode(des1)
 
  // var d11=document.createElement(des1)
  // d11.style.color="white"
  
      var container1 = document.createElement("span");
       container1.appendChild(d1);
       container1.style.color = "white";
  const price1=snap.child("images").child("0").child("price").val(); 
    var p1=document.createTextNode(price1)
  var img = document.createElement('img');
    var container2= document.createElement("span");
      container2.appendChild(p1);
       container2.style.color = "white";
         img.src=imageurl1
         img.alt=""
        //  document.getElementById('body').append(img,des1,linebreak1,price1)
         document.getElementById('body').append(img,container1,container2)
        

     
// for card2
  const imageurl2 = snap.child("images").child("1").child("image").val();
  var img2 = document.createElement('img');
    var des2=snap.child("images").child("1").child("name").val();
  var price2=snap.child("images").child("1").child("price").val();
  var linebreak2 = document.createElement("br");
         img2.src=imageurl2
           img2.alt=""
        //  document.getElementById('body1').appendChild(img2,des2,linebreak2,price2);
         document.getElementById('body1').append(img2,des2,linebreak2,price2);
 
      
        


// for card3
    const imageurl3 = snap.child("images").child("2").child("image").val();
         var img3=document.createElement('img');
            const des3=snap.child("images").child("2").child("name").val();
  const price3=snap.child("images").child("2").child("price").val(); 
  var linebreak3 = document.createElement("br");
         img3.src=imageurl3
             img3.alt=""
              // document.getElementById('body2').append(img3,des3,linebreak3,price3);
              document.getElementById('body2').append(img3,linebreak3);



        // for card4
     const imageurl4 = snap.child("images").child("3").child("image").val();
       var img4=document.createElement('img');
         img4.src=imageurl4
            img4.alt=""
            //  document.getElementById('body3').append(img4,des4,linebreak4,price4);
   const des4=snap.child("images").child("3").child("name").val();
  const price4=snap.child("images").child("3").child("price").val();
   var linebreak4 = document.createElement("br");
   document.getElementById('body3').append(img4,linebreak4);



// for card5
     const imageurl5 = snap.child("images").child("4").child("image").val();
            var img5=document.createElement('img');
         img5.src=imageurl5
          img5.alt=""
   const des5=snap.child("images").child("4").child("name").val();
  const price5=snap.child("images").child("4").child("price").val();
   var linebreak5 = document.createElement("br");
          // document.getElementById('body4').append(img5,des5,linebreak5,price5);
          document.getElementById('body4').append(img5,linebreak5);
 
})   });
    
    } else {
     console.log("Not logged in")
    }
      this.transa.push({ "type":trans.type, "amount":trans.amount, "contact":trans.contact, "time": new Date(trans.time_performed).toDateString(), "trans_id": trans.trans_id})        
  });
    
  }
 
}
</script>

<style lang="scss" scoped>
#home{
   margin-top: 0%;
  margin-left: 5%;
height: fit-content;
width: fit-content;
 
background-color: #001a33;
  @media (max-width:812px) {
    position:relative;
    margin-left: -7%;
 
    width: 100%;
    height: 100%;
   
  }
}
#d1{
   @media (max-width:812px) {
    position: relative;
    margin-left: 7%;
 
    width: 100%;
   
  }

}
.card1{
width: 35rem;

 @media (max-width:812px) {
    position: relative;
    
width: 55rem;
 margin-left:30%;
  
  }
}
.bg{
  background-color:#001a33 ;
  position: absolute;
  width: 100%;
height: fit-content;
   @media (max-width:812px) {
    position: absolute;
    
 
    width: 100%;
    padding:10px
   
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
}
</style>
