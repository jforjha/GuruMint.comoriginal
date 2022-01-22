<template>
<div class="bg">
  <div class="home" id=home >
    <profilenav/>
    <br><br>
      
   <div class="col-md-8 tran">
      <div class="panel panel-primary">
        <div class="panel panel-heading shadow"><h1>BIDDING HISTORY</h1></div>
        <br>
        <div class="panel-body">
      
  <table class="table  shadow">
                  <thead id="tabhead" class="shadow">
          <th>NAME</th>
          <th >Date</th>
          <th>Amount</th>
        
          </thead>
                    <tbody id = "table_body" class="shadow"> </tbody>
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
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
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
   
  components: {profilenav},
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
    
    //     posts() {
    //   axios
    //     .post(
    //       "https://gurumintcom-282c4-default-rtdb.firebaseio.com/bidding.json",
    //      this.it ,
    //       { emulateJSON: true }
    //     )
    //     .then(function(data) {
    //       console.log(data);
    //       this.submitted = true;
    //     });
    // },
  

  },

  mounted(){
    
	
	
	
	
	const Self = this
    firebase.auth().onAuthStateChanged((userData) => {
     let trans = {}
 
 
    if (userData) {


// return bidding information

	var retr = firebase.database().ref('biddingdata/')
    retr.on('value', function(snapshot) {
   snapshot.forEach(snap => {

      const timeperformed = snap.child("time_performed").val()
    
      const total1 = snap.child("amount").val() ;
   
	const name= snap.child("Name").val();
	$('#table_body').append("<tr> <td>" + name + "</td><td>" + timeperformed + "</td><td>" + total1 +"</td></tr>");
     })});

// code ends

      // User logged in already or has just logged in.
      //Return users name
      var refere = firebase.database().ref('clients/'+userData.uid);
      refere.on('value', function(snapshot) {
      Self.username = snapshot.val().Name
	// const username1= snapshot.val().Name
    //   $('#name1').append("<tr> <td>" + username1 );
        });
        //return account balance
      
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
//       var retr = firebase.database().ref('transactions/'+userData.uid);
//       retr.on('child_added', function(snapshot) {
   

//   const transactionid = snapshot.child("trans_id").val();
//       const timeperformed = snapshot.child("time_performed").val()
//       const type = snapshot.child("type").val();
//       const total1 = snapshot.child("amount").val();

//      $('#table_body').append("<tr> <td>" + transactionid + "</td><td>" + timeperformed + "</td><td>" +  type  + "</td><td>" + total1 +"</td></tr>");
     
     
//         });
    } else {
      console.log("not logged in")
    
    }
      
      this.transa.push({ "type":trans.type, "amount":trans.amount, "time": new Date(trans.time_performed).toDateString(), "trans_id": trans.trans_id})      
     
  });

  
       
  }
 
}


</script>

<style lang="scss" scoped>
#home{
   margin-top: 5%;
  margin-left: -10%;
  height: 100%;
  width: 120%;
  @media (max-width:812px) {
    margin-left:-4%;
    margin-top: 10%;
    position: sticky;
    width: 120%;
    height: fit-content;
    
  }
   @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
   margin-top: 15%;
   margin-left:1%;
   width: 90%;
  position: relative ;

   }
    @media (min-width: 1025px) and (max-width: 1200px){
      width:100%;
      margin-left: 1%;
    }
}
.bg{
  background-color:#001a33 ;
   @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //your styles here
   margin-top: 5%;
   margin-left:0%;
   width:120%;
  position: sticky ;

   }
   
}
.shadow{
    //  text-shadow: 0 0 20px #f2f6f8;
     color: white;
}
</style>
