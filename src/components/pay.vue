<template>
    <div>
        <button v-on:click="pay8()">pay</button>

    </div>
</template>
<script>
import axios from 'axios'

// import Vue from 'vue'
// import AxiosPlugin from 'vue-axios-cors';
 
// Vue.use(AxiosPlugin)

export default {
    data(){
        return{
data1:'',
 }
    },
   mounted(){

axios.get('https://expressbackend-d4dd4vjza-jforjha.vercel.app/api').then(
  (response)=>{
    console.log(response.data)
    this.data1=response.data
  })
   
},
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
 async pay4(){

      const res = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
           "Content-Type": "application/json",
    "Accept": "application/json",
    Authorization:'Basic '  +  Buffer.from("SB-Mid-server-NZEpgt7TfGWe675szo1VTyao").toString('base64')
         },

        // pass in the information from our form
        body: JSON.stringify({
        transaction_details: {
          order_id: "order-csb-1239879879784",
          gross_amount: 10100
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          first_name: "Gaurav",
          last_name: "Jha",
          email: "test@mailnesia.com",
          phone: "08111282433"
        }
      }) 
      });
      console.log(res);
      
    
 },
  
    pay3(){
 
  const testURL ='https://app.sandbox.midtrans.com/snap/v1/transactions';
	const myInit = {
		method: 'post',
		mode: 'no-cors',
    headers: {  
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization":"Basic"  +  Buffer.from("SB-Mid-server-NZEpgt7TfGWe675szo1VTyao").toString('base64')
      // Above is API server key for the Midtrans account, encoded to base64
    },
    body:{
        transaction_details: {
          order_id: "order-csb-1239879879784",
          gross_amount: 10000
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          first_name: "Johny",
          last_name: "Kane",
          email: "testmidtrans@mailnesia.com",
          phone: "08111282333"
        }
      }

	};

	// const myRequest = new Request(testURL, myInit);

	fetch(testURL,myInit).then(function(response) {
		return response;
	}).then(function(response) {
		console.log((response));
	}).catch(function(e){
		console.log(e);
	});
    },
pay1(){

const midtransClient=require('midtrans-client')
// Create Snap API instance
let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction : false,
        serverKey : process.env.VUE_APP_midtrans
    });
 
let parameter = {
    "transaction_details": {
        "order_id": "YOUR-ORDERID-123456",
        "gross_amount": 10000
    },
    "credit_card":{
        "secure" : true
    },
    "customer_details": {
        "first_name": "budi",
        "last_name": "pratama",
        "email": "budi.pra@example.com",
        "phone": "08111222333"
    }
};
 
snap.createTransaction(parameter)
    .then((transaction)=>{
        // transaction token
        let transactionToken = transaction.token;
        console.log('transactionToken:',transactionToken);
    })
},
    async pay(){
      let parameter=    {
        transaction_details: {
          order_id: "order-csb-1239879879784",
          gross_amount: 10000
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          first_name: "Johny",
          last_name: "Kane",
          email: "testmidtrans@mailnesia.com",
          phone: "08111222333"
        }
      }

      let headers= {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
     
        Buffer.from(process.env.VUE_APP_midtrans).toString("base64")

      // Above is API server key for the Midtrans account, encoded to base64
    }

    let url=process.env.VUE_APP_SERVICE_URL
    
    const response=await axios.post(url,parameter,{headers})
    this.data1=response.data

  }  }
}
</script>