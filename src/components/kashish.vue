<template>
  <div id=app>
<div id=profile>

  <div id=nav1>
    

 <navigation/>
 
 <div class="space stars1"></div>
  <div class="space stars2"></div>
  <div class="space stars3"></div>
    <section>
 
    <!-- <div class="bubbles">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div> -->
      <div class="big">
        <div class="first-page">
         
          <div class="left-profile">
            <img
              height="100"
              width="100"
              class="creator-image"
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/IMG-20211116-WA0001.jpg?alt=media&token=b0f3bd16-8fd6-45e0-aa07-150b9213c1e3"
              alt="creator"
            />
            <!-- <button class="subscribe" v-on:click="scrollToBottom()">Buy My NFT</button> -->
           <br>
      
<br/>

 <!-- <a  href="https://twitter.com/iamsrk?ref_src=twsrc%5Etfw"  class="twitter-follow-button" data-show-count="true"   data-size="large">@iamsrk</a> -->
    <!-- <Linkedin :url=url style="position:relative;" size="large"></Linkedin></p> -->
    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL"  data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/kashishmanocha/" target="_blank">
     <img
              height="40"
              width="40"
           
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/linkdin.png?alt=media&token=2b536b34-affe-455c-b582-11cc049cfe39"
            
            /></a></div>
<br>

<!-- <label style="color:white;font-size:40px;position:relative"> 42 M+ </label> -->

<!-- <p>
<Facebook :url=url style="position:relative"></Facebook> <WhatsApp :url=url style="position:relative"></WhatsApp> <Telegram :url=url style="position:relative" ></Telegram> <Linkedin :url=url style="position:relative"></Linkedin></p> -->
<br/>  
  </div>
         
         
          <div class="right-profile">
            <div class="user-info">
              <h2 class="creator-name" v-for="ToDo in kashish" :key="ToDo.id">
                {{ ToDo.name }}
              </h2>
              <p class="creator-history" v-for="ToDo in kashish" :key="ToDo.id">
                {{ ToDo.bio }}
              </p>
              <!-- <p class="location">
                <span class="location-detail"
                  ><img
                    class="loc-image"
                    height="20"
                    width="20"
                   
                    src="../assets/location.png"
                    alt="location"
                /></span>
                <span
                  class="location-detail"
                  v-for="ToDo in ToDos"
                  :key="ToDo.id"
                  >{{ ToDo.location }}</span
                >
              </p> -->
            </div>
            <div class="info-container">
            
              <div style= "color:white" class="description">
                <p
                  class="creator-description"
                  v-for="ToDo in kashish"
                  :key="ToDo.id"
                >
                  {{ ToDo.description }}
                </p>
            
                </div>
              <div class="help">
                <p class="help-line" style="color:white">How can I help?</p>
                <div class="creator-features">
                  <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in kashish"
                      :key="ToDo.id"
                      style="display: inline-block"
                      >{{ ToDo.button1 }}</span
                    >
                  </router-link>
                  <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in kashish"
                      :key="ToDo.id"
                      >{{ ToDo.button2 }}</span
                    >
                  </router-link>
                  <!-- <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button3 }}</span
                    >
                  </router-link> -->
                  
                </div>
              </div>
            </div>
            <!-- <div class="coupons">
              <img
                class="donation-image"
                src="../assets/badge.png"
                alt="donation"
              />
              <p class="donate-text">10% goes to Black Girls CODE</p>
            </div> -->
          </div>
        </div>
      </div>
    <!-- </div> -->
    </section>
    
    <section>
     
      <!-- <h2 class="second-container">
       <foote />
      </h2> -->

      <!-- <Series /> -->
     
    </section>
    
    <br><br><br><br>
  <h1 style="color:white;  text-align: center;">Stuff i've helped create</h1>
       <div class="row" style="margin:30px" id=nftrow>
        
        
      <kashishportfolio class="shakethis"
        v-for="item in kashishportfolio"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :description="item.description"
        :buttontitle="item.buttontitle"
        :link="item.link"
       
        />
       
     
        

     
    </div>
    <br><br>
   
<!-- <a href="https://www.instagram.com/agnezmo/?hl=en">
   <span style="font-size: 100px;">
       <span style="color: indianred;">
          <i class="fa fa-instagram" aria-hidden="true"></i>
       </span>
   </span>
</a> -->
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
import kashishportfolio from '../kashishportfolio.vue'
import ShoppingCart from '../ShoppingCart.vue'





import 'vue-js-modal/dist/styles.css'


Vue.use(VModal, { componentName: 'Foo' })
var currentRoute = window.location;
let accounts = [];

export default {
 name: "App",
  data() {
    
    return {
       drawer: null,
    isXs: false,
     kashish: [],
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
      url:"https://www.linkedin.com/in/kashishmanocha/",

    // url: String(currentRoute),
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
     kashishportfolio(){return this.$store.getters.kashishportfolio;},
     notlink() { return this.$store.getters.notlink; },
  },
  methods: {
    async addItem() {
      if (this.newItem) {
        await db.collection("kashish").add({ name: this.newItem });
        await db.collection("kashish").add({ bio: this.newItem });
        await db.collection("kashish").add({ location: this.newItem });
        await db.collection("kashish").add({ description: this.newItem });
        await db.collection("kashish").add({ button1: this.newItem });
        await db.collection("kashish").add({ button2: this.newItem });
        await db.collection("kashish").add({ button3: this.newItem });
        
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
    kashish: db.collection("kashish"),
  },
   
  components: { Series,Facebook,Twitter,WhatsApp,Telegram,Linkedin,Navigation,guidance,foote, Item,
   kashishportfolio,ShoppingCart },
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
     postscribe('#linkedin', '<script src="https://platform.linkedin.com/badges/js/profile.js"><\/script>')
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
        border: 6px solid white;
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
#nav1{
   padding:10px;
   margin-top:50px;
  @media (max-width: 668px) {

width: 120vw;       }

  
}
#footer{
  margin-bottom:-1%;
  margin-left:-1% ;
    @media (max-width: 668px) {

width: 123vw;
margin-bottom:-1%;
margin-left:-1%       }
}
#profile{
    background: radial-gradient(circle at bottom, black,black 100%);
  height: 100%;
  overflow: hidden;
   width:100vw;

    @media (max-width: 736px) {

width: 120vw;
padding-right:1%;       }

  @media (max-width: 812px) {

width: 125vw;       }
   }
   //galaxy style code
   .space {
  background:  center / 200px 200px round;
  border: 1px dashed  navy 0;
  bottom: 0;
  left: 0;
  position:fixed;
 
 
  right: 0;
  top: 0;
}

.stars1 {
  animation: space 120s ease-in-out infinite;
  background-image: 
    radial-gradient(1px 1px at 25px 5px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));
}

.stars2 {
  animation: space 180s ease-in-out infinite;
  background-image: 
    radial-gradient(1px 1px at 75px 125px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));
}

.stars3 {
  animation: space 240s ease-in-out infinite;
  background-image: 
    radial-gradient(1px 1px at 10px 10px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)), 
    radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));
}

@keyframes space {
  40% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.25;
  }
  60% {
    opacity: 0.75;
  }
  100% {
    transform: rotate(360deg);
  }
}
//galaxy code ends
//bubbles code starts
// $bubble-count: 20;
// $sway-type: "sway-left-to-right", "sway-right-to-left";

// @function random_range($min, $max) {
//   $rand: random();
//   $random_range: $min + floor($rand * (($max - $min) + 1));
//   @return $random_range;
// }

// @function sample($list) {
//   @return nth($list, random(length($list)));
// }

// .bubbles {
//    position: relative;
//   width: 100%;
//   display:table-row;
// //    @media (max-width: 668px) {
// //           position: relative;
// //   width: 100%;
// //   height: 500%;
// //   margin-bottom: 100px;
// // display: table-row;
// //   overflow: hidden;
// //         }
 
// }

// .bubble {
//   position: absolute;
//   left: var(--bubble-left-offset);
//   bottom: -75%;
//   display: block;
//   width: var(--bubble-radius);
//   height: var(--bubble-radius);
//   border-radius: 50%;
//   animation: float-up var(--bubble-float-duration) var(--bubble-float-delay) ease-in infinite;

//   &::before {
//     position: absolute;
//     content: '';
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: hsla(183, 94%, 76%, 0.3);
//     border-radius: inherit;
//     animation: var(--bubble-sway-type) var(--bubble-sway-duration) var(--bubble-sway-delay) ease-in-out alternate infinite;
//   }

//   @for $i from 0 through $bubble-count {
//     &:nth-child(#{$i}) {
//       --bubble-left-offset: #{random_range(0vw, 100vw)};
//       --bubble-radius: #{random_range(1vw, 5vw)};
//       --bubble-float-duration: #{random_range(6s, 12s)};
//       --bubble-sway-duration: #{random_range(4s, 6s)};
//       --bubble-float-delay: #{random_range(0s, 4s)};
//       --bubble-sway-delay: #{random_range(0s, 4s)};
//       --bubble-sway-type: #{sample($sway-type)};
//     }
//   }
// }

// @keyframes float-up {
//   to {
//     transform: translateY(-175vh);
//   }
// }

// @keyframes sway-left-to-right {
//   from {
//     transform: translateX(-100%);
//   }

//   to {
//     transform: translateX(100%);
//   }
// }

// @keyframes sway-right-to-left {
//   from {
//     transform: translateX(100%);
//   }

//   to {
//     transform: translateX(-100%);
//   }
// }
//bubble code ends
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

//shaking hover code starts



.shakethis {
  transition: 0.3s;
}
.shakethis:hover {
  transform: translate(0, -20px);
}




</style>