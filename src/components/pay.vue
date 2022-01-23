<template>
    <div>
  
         <button v-on:click="pay8()">pay_working</button>
      
        <br>
     

    </div>
</template>
<script>
import axios from 'axios'




export default {
    data(){
        return{
data1:'',
 }
    },
   mounted(){
// https://expressbackend-d4dd4vjza-jforjha.vercel.app/api
// axios.get('http://localhost:3000/api',this.body3).then(
//   (response)=>{
//     console.log(response.data)
//     this.data1=response.data
//   })

 axios({
    // Below is the API URL endpoint
    url: "https://cors-anywhere.herokuapp.com/https://app.sandbox.midtrans.com/snap/v1/transactions",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
     
      Authorization:
        "Basic " +
        Buffer.from("SB-Mid-server-NZEpgt7TfGWe675szo1VTyao").toString("base64")
      // Above is API server key for the Midtrans account, encoded to base64
    },
    data:
      // Below is the HTTP request body in JSON
      {
        transaction_details: {
          order_id: "order-csb-kfjbkj987" ,
          gross_amount: 101010
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          first_name: "Rohan",
          last_name: "Jha",
          email: "testmidtrans@mailnesia.com",
          phone: "08111224333"
        }
      }
  }).then(
    (snapResponse) => {
     this.data1 = snapResponse.data.token;
      console.log("Retrieved snap token:", this.data1);
      // Pass the Snap Token to frontend, render the HTML page
    
    },
    (error) => {
   
      console.log(error);
    }
  )},
methods:{
   
pay8(){
 
     window.snap.pay(this.data1, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            alert("payment success!"); console.log(result);
          },
          onPending: function(result){
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
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

},
}
}
</script>