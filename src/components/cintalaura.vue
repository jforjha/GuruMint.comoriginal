<template>
  <div id=app>
<div id=profile>

  <div id=nav1>
   <navigation/>

   <!-- <button id="pay-button" v-on:click="  paymidtrans()">Pay!</button>
    <pre><div id="result-json">JSON result will appear here after payment:<br></div></pre>  -->
<div class="firstimage" >
       <img id="img1"
              height="1000px"
              width="70%"
           style="box-shadow:white"
             
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/cinta1st_image.png?alt=media&token=3ada4ac5-e830-4641-9c62-4c7f879278e0"
             
            />
              <img id="imgmobile1"
              height="1000px"
              width="70%"
            
             
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/IMG-20211123-WA0004.jpg?alt=media&token=52ad6b14-baec-41a3-8e39-37221312872c"
             
            />
                <!-- <div class="btn" > <a  href="https://twitter.com/agnezmo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"  class="twitter-follow-button" data-show-count="true" target=”_blank”   data-size="large">@agnezmo</a> -->
                
                <!-- <a class="badge-base__link LI-simple-link" href="https://www.instagram.com/agnezmo/?hl=en" target="_blank">
     <img
              height="100"
              width="100"
           
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/Instagram%20logo.jpg?alt=media&token=4350b19a-53bd-4d9c-a0df-0fb177f53092"
            
            /></a> -->
            <!-- </div> -->
</div>

  
 

   
        <br><br>
  
 
       <div class="row" id=nftrow style="background-color:#fdfdff">
      <Item style="background-color:#fdfdff"
        v-for="item in cinta"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
  <biddingitem style="background-color:#fdfdff"
        v-for="item in cintabidding"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
        
             <!-- <biddingitem
        v-for="item in forSale1"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" /> -->
        
    </div>
    <br><br>
   <!-- <div id="second"style=" display: block;
  margin-left: 10%;
  margin-right: auto;
  width: 100%;">
       <img id="img2"
              height="1000px"
              width="70%"
            
              class="creator-image"
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/secondpage_agnez.png?alt=media&token=4c5bd37a-a3a9-440b-ab6c-24e001983da2"
              alt="creator"
            />
</div> -->
    <div id="footer" style="width:105%">
       <foote ></foote>
      </div>
      
 
  </div>
  
</div>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import foote from "./Footer.vue";
import { Facebook } from 'vue-socialmedia-share';
import { WhatsApp } from 'vue-socialmedia-share';
import { Telegram } from 'vue-socialmedia-share';
import { Linkedin } from 'vue-socialmedia-share';
import { Twitter} from 'vue-socialmedia-share';
import { db } from "../firebase/db";
import Series from "./Series.vue";
import axios from "axios";
import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'
import Navigation from "./Navigation.vue"
import guidance from "../pages/Guidance.vue"
import Item from '../Item.vue';
import ShoppingCart from '../ShoppingCart.vue';
import biddingitem from '../biddingitem.vue'


import 'vue-js-modal/dist/styles.css'


Vue.use(VModal, { componentName: 'Foo' })
var currentRoute = window.location;
let accounts = [];

//midtrans code starts

// const midtransClient = require('midtrans-client');

// // Create Snap API instance, empty config
// let snap = new midtransClient.Snap({
//     isProduction : false,
//     serverKey : 'SB-Mid-server-NZEpgt7TfGWe675szo1VTyao',
//     clientKey : 'SB-Mid-client-WxSB3m3iWqKxhh8D'
// });


// let parameter = {
//     "transaction_details": {
//         "order_id": "test-transaction-1234",
//         "gross_amount": 10000
//     },
//     "item_details": [{
//         "id": "ITEM1",
//         "price": 10000,
//         "quantity": 1,
//         "name": "Midtrans Bear",
//         "brand": "Midtrans",
//         "category": "Toys",
//         "merchant_name": "Midtrans"
//     }],
//     "customer_details": {
//         "first_name": "John",
//         "last_name": "Watson",
//         "email": "test@example.com",
//         "phone": "+628123456",
//         "billing_address": {
//             "first_name": "John",
//             "last_name": "Watson",
//             "email": "test@example.com",
//             "phone": "081 2233 44-55",
//             "address": "Sudirman",
//             "city": "Jakarta",
//             "postal_code": "12190",
//             "country_code": "IDN"
//         },
//         "shipping_address": {
//             "first_name": "John",
//             "last_name": "Watson",
//             "email": "test@example.com",
//             "phone": "0 8128-75 7-9338",
//             "address": "Sudirman",
//             "city": "Jakarta",
//             "postal_code": "12190",
//             "country_code": "IDN"
//         }
//     },
//     "enabled_payments": ["credit_card", "mandiri_clickpay", "cimb_clicks","bca_klikbca", "bca_klikpay", "bri_epay", "echannel", "indosat_dompetku","mandiri_ecash", "permata_va", "bca_va", "bni_va", "other_va", "gopay","kioson", "indomaret", "gci", "danamon_online"],
//     "credit_card": {
//         "secure": true,
//         "bank": "bca",
//         "installment": {
//             "required": false,
//             "terms": {
//                 "bni": [3, 6, 12],
//                 "mandiri": [3, 6, 12],
//                 "cimb": [3],
//                 "bca": [3, 6, 12],
//                 "offline": [6, 12]
//             }
//         },
//         "whitelist_bins": [
//             "48111111",
//             "41111111"
//         ]
//     },
//     "bca_va": {
//         "va_number": "12345678911",
//         "free_text": {
//             "inquiry": [
//                 {
//                     "en": "text in English",
//                     "id": "text in Bahasa Indonesia"
//                 }
//             ],
//             "payment": [
//                 {
//                     "en": "text in English",
//                     "id": "text in Bahasa Indonesia"
//                 }
//             ]
//         }
//     },
//     "bni_va": {
//         "va_number": "12345678"
//     },
//     "permata_va": {
//         "va_number": "1234567890",
//         "recipient_name": "SUDARSONO"
//     },
//     "callbacks": {
//         "finish": "https://demo.midtrans.com"
//     },
//     "expiry": {
//         "start_time": "2025-12-20 18:11:08 +0700",
//         "unit": "minute",
//         "duration": 9000
//     },
//     "custom_field1": "custom field 1 content",
//     "custom_field2": "custom field 2 content",
//     "custom_field3": "custom field 3 content"
// };

export default {
 name: "App",
  data() {
    
    return {
       drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Guidance",""],
      ["mdi-information-outline", "Features", "#features"],
      ["mdi-download-box-outline", "About", "#download"],
      // ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "Contact us", "#contact"],
    ],
     languages: [
                    { flag: 'Us', language: 'en', title: 'English' },
                    { flag: 'Id', language: 'es', title: 'Indonesian' }
                ],
     web3: "",
      modal:false,
      account: "",
      contractInstance: "",
  
      isLoading: false,
    url: String(currentRoute),
    url1:"https://twitter.com/iamsrk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      ToDos: [],
      newItem: "",
    
user:{
  walletAddress:"",
  Name:"",
  email:"",
  phone:""
},
submitted: false,
    };
  },
 
    props: {
    color: String,
    flat: Boolean,
     countries: {
      type: Array,
      default() {
        return [
            {
            code: 'en|id',
            title: 'Indonesian',
          },
            {
            code: 'en|en',
            title: 'English',
          },

        ];
      },
    },
  },
  
   computed: {
    hasClickListener() {
      return Object.keys(this.$listeners).includes('on-country-click');
    },
     forSale() { return this.$store.getters.forSale; },
       forSale1(){return this.$store.getters.forSale1;},
        cinta(){return this.$store.getters.cinta;},
        cintabidding(){return this.$store.getters.cintabidding;}
  },
  methods: {
    async addItem() {
      if (this.newItem) {
        await db.collection("ToDos").add({ name: this.newItem });
        await db.collection("ToDos").add({ bio: this.newItem });
        await db.collection("ToDos").add({ location: this.newItem });
        await db.collection("ToDos").add({ description: this.newItem });
        await db.collection("ToDos").add({ button1: this.newItem });
        await db.collection("ToDos").add({ button2: this.newItem });
        await db.collection("ToDos").add({ button3: this.newItem });
        
        this.newItem = "";
      }
    },
                          doTranslation(code) {
      window.doGTranslate(code);
      if (this.hasClickListener) {
        this.$emit('on-country-click');
      }
      return false;
    },
    scrollToBottom() {
    let element = document.getElementById("nftrow");
    element.scrollIntoView({behavior: "smooth", block: "start"});
},
   
     opendialog () {
        this.$modal.show('example')
    },
      
      onResize() {
      this.isXs = window.innerWidth < 850;
    },
                      doTranslation(code) {
      window.doGTranslate(code);
      if (this.hasClickListener) {
        this.$emit('on-country-click');
      }
      return false;
    },
    sendEthButton ()  {
      
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from:  accounts[0],
          to: '0x0f6b0e3d75175bb97de6dc5339447182be1f8730',
          value: '0x00',
         //gasPrice: '0x09184e72a000',
        gas: '3000000',
           data:
      '0xd3fc9864000000000000000000000000136adcc423732bbda6406f2ddcb5bae123a4cbc300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000006368747470733a2f2f697066732e696f2f697066732f516d58436d726e546962686861396d314e436836394e3451424d534a6b6257547a6764645a50656f4731614a4a743f66696c656e616d653d53637265656e73686f7425323028323533292e706e670000000000000000000000000000000000000000000000000000000000'
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
},
async  getAccount() {
   
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
},
beforeOpen (event) {
      console.log('Opening...')
    },
    beforeClose (event) {
      console.log('Closing...')
      // What a gamble... 50% chance to cancel closing
      if (Math.random() < 0.5) {
        event.cancel()
      }
    },

makepayment: function() {
  
      var options = {
        key: "rzp_test_astk95KRrqNO0x",
        // key_secret : "mVybwVFhZAqr6Eg1OPGP3Rcs",
        amount: 500 * 100,
        name: "GuruMint",
        description: "Pay Your Educator",
        image: "/your_logo.png",
        handler: function(response) {
          alert(
            "Your Transaction is Successful"+" "+
           
            "Save This Payment ID For Future Referce  " +
              " " +
              response.razorpay_payment_id
          );
        },
        prefill: {
        
          name: this.user.Name,
          email: this.user.email,
          contact: this.user.phone,
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
//     async paymidtrans(){
//     let transactionToken = await snap.createTransactionToken(parameter);
//     console.log('transactionToken:',transactionToken);
// },
// snapAsync();
    // paymidtrans(){
    //     // SnapToken acquired from previous step
    //     snap.pay('transactionToken', {
    //       // Optional
    //       onSuccess: function(result){
    //         /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
    //       },
    //       // Optional
    //       onPending: function(result){
    //         /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
    //       },
    //       // Optional
    //       onError: function(result){
    //         /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
    //       }
    //     });
    //   },
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

   
  
// shareViaWebShare() {
//   navigator.share({
//     title: 'Title to be shared',
//     text: 'Text to be shared',
//     url: ""
//   })
// }

  },

  firestore: {
    ToDos: db.collection("ToDos"),
  },
   
  components: { Series,Facebook,Twitter,WhatsApp,Telegram,Linkedin,Navigation,guidance,foote,   Item,
    ShoppingCart,biddingitem },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  

};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
* {
  font-family: "Karla", sans-serif;
}
//
h2.creator-name {
  padding: 0;
}
h2.second-container {
  margin-top: 5%;
 width: 120%;
 margin-left:-1%;
 margin-bottom: -3%;
 
  padding: 0;
   @media (max-width: 468px) {
     width:103%
  
   }
}
//
.big {
  display: flex;
  flex-direction: column;
  margin-top: 0%;
  @media (max-width: 468px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    min-width: 460px;
    
  }
  .first-page {
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;
    @media (max-width: 468px) {
      display: flex;
      flex-direction: column;
      
    }
    .left-profile {
      flex: 1;
      // border: solid black 1px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: 150px;
      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        margin: auto;
        align-items: center;
      }
      .creator-image {
        border-radius: 100%;
        height: 350px;
        width: 350px;
        padding: 8px;
        border: 6px solid #70cbff;
        object-fit: contain;
      }
      .subscribe {
        width: 148px;
        margin-top: 1.5rem;
        height: 35px;
        width: 150px;
        padding: 0.5rem 1.5rem;
        line-height: 1rem;
        font-weight: 500;
        border-radius: 8px;
        border: 1px solid #0967d2 !important;
        color: white;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        transition: 0.5s ease-in-out;
        &:hover {
          color: white;
          background-color: #0967d2;
        }
        @media (max-width: 468px) {
          width: 70%;
          margin-left: auto;
          font-size: 120%;
          font-weight: bolder;
          border-radius: 10px;
        }
      }
    }
    .right-profile {
      display: flex;
      flex-direction: column;
      flex: 2;
      padding-top: 1.5rem;
      margin-left: 0%;
      padding-left: 1.75rem;
      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 0%;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        min-width: 440px;
        align-items: flex-start;
        margin-bottom: 5%;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
        }
        .creator-name {
          font-size: 2rem;
          color: white;
          margin-bottom: 7px;
          margin-top: 0px;
          font-weight: 600;
          @media (max-width: 468px) {
            font-size: 1.8rem;
            margin-top: 2%;
            
          }
        }
        .creator-history {
          color:white;
          margin-bottom: 8px;
          margin-top: 1px;
          font-size: 120%;
          text-align: justify;
          @media (max-width: 468px) {
            font-size: 120%;
            margin-top: 0px;
            text-align: center;
          }
        }
        .location {
          display: flex;
          font-size: 120%;
          color:white;
          margin-top: 0px;
          @media (max-width: 468px) {
            justify-content: center;
          }
        }
      }
      .description {
        margin-top: 0px;
        display: flex;
        width: 80%;
        margin-bottom: 3%;
        flex-wrap: wrap;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5%;
          width: 100%;
        }
        .creator-description {
          align-items: flex-start;
          line-height: 1.5em;
          text-align: justify;
          font-size: 120%;
          @media (max-width: 468px) {
            font: size 10%;
            margin-top: auto;
            margin-right: 20px;
          }
        }
      }
      .help {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0px;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          margin-top: 5%;
          align-items: center;
        }
        .help-line {
          text-align: start;
          margin-top: 0%;
          font-size: 120%;
          font-weight: bolder;
          margin-bottom: 0%;
          @media (max-width: 468px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: bolder;
          }
        }
        .creator-features {
          margin-top: 0px;
          display: flex;
          flex-wrap: wrap;
          @media (max-width: 468px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .button {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 1.5rem;
            height: 40px;
            width: 270px;
            padding: 0.6rem 1.5rem;
            line-height: 1rem;
            font-weight: 500;
            border-radius: 8px;
            border: 1px solid #0967d2 !important;
            background-color: #0967d2;
            color: blanchedalmond;
            font-size: 120%;
            outline: none;
            cursor: pointer;
            margin-right: 29px;
            transition: 0.5s ease-in-out;
            &:hover {
              color: white;
              background-color: #064288;
            }
            @media (max-width: 468px) {
              //   display: flex;
              //   flex-direction: column;
              //   align-items: center;
              margin-left: auto;
              margin-right: auto;
              line-height: 130%;
              height: 50px;
              width: 290px;
              font-size: 120%;
            }
          }
        }
      }
      .coupons {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        border-radius: 8px;
        max-width: 180px;
        padding: 0.5rem;
        border: 1px solid #e1e1e1;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: row;
          margin-top: 20px;
        }
        .donation-image {
          height: 28px;
          width: 28px;
        }
        .donate-text {
          color: #626262;
          font-size: 0.75rem;
          margin-left: 5px;
          margin-top: 0px;
        }
      }
    }
  }
}
.second-container {
  font-size: 130%;
  color: white;
}
 .share{
                background: url('../assets/share.png') no-repeat;
                cursor:pointer;
                border: none;
                display:block;
                width: 80px;
            }
            #eth_tip_button {
	position: relative;

	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-weight: 500;
	text-decoration: none;
	color: #ffffff;
	background: #2629ec;

}
#footer{
  margin-bottom:-1%;
  margin-left:-1% ;
    @media (max-width: 668px) {

width: 106vw;
margin-bottom:-4%;
margin-left:-2%       }
}
#nav1{
   padding:10px;
   margin-top:50px;
  @media (max-width: 668px) {

width: 80vw;       }

  
}
#profile{
   background: #fdfdff
;
   width:100vw;
    @media (max-width: 736px) {

width: 120vw;
       }

  @media (max-width: 812px) {

width: 100vw;       }
   }
   .firstimage{
     display: block;
  margin-left: 15%;
  margin-right: auto;
  width: 100%;
      @media (max-width: 812px){
         

  display:relative;
        width:100%;
 
 
  

 
 
 
       
      }
   }
//    .firstimage .btn {
//   position: absolute;
//   top: 18%;
//   left: 80%;
//   transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   background-color: black;
//   color: white;
//   font-size: 25px;
//   padding: 12px 24px;
//   border: none;
//   cursor: pointer;
//   border-radius: 5px;
// }

// .firstimage .btn:hover {
//   background-color: black;
// }
   #img1{
      @media (max-width: 812px){
         

  display: none;
        width:140%;
     height:550px;
     margin-left:-18%
       
      }
   }
   #imgmobile1{
     display:none;
         @media (max-width: 812px){
         

  display: block;
        width:140%;
     height:550px;
     margin-left:-18%
       
      }

   }
    #img2{
      @media (max-width: 812px){
         

  display:block;
        width:130%;
     height:600px;
     margin-left:-10%
      }
   }

   #second{
         @media (max-width: 812px){
         

  display:relative;
        width:100%;
      }
   }
 



a:link {
  text-decoration: none;
  font-size: large;
  cursor: pointer;
  
}
.language-item {
  display: flex;
 
}
.language__text {
  color: black;
  margin-top: 7px;
  padding-left: -20px;
  text-decoration: none;
}
.language-item:hover {
  cursor: pointer;
  text-decoration: underline;
  
}
.flag {
  height: 40px;
}
h3 {
  cursor: pointer;
}
/*//columns*/
/* Container for flexboxes */
.row {
  display: flex;
  flex-wrap: wrap;
   @media (max-width: 812px){
         

 width:132%
      }
}
/* Create four equal columns */
.column {
  flex: 20%;
  padding: 10px;
}
/* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .column {
    flex: 25%;
  }
}
/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
//galaxycode starts






</style>
