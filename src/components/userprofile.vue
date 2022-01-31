<template>
  <div id=app>
<div id=profile>

  <div id=nav1>
    <profilenav/>

    <section>
      <div class="big">
        <div class="first-page">
         
          <div class="left-profile">
            <img
              height="100"
              width="100"
              class="creator-image"
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/image1?alt=media&token=d617a135-af1b-4e7c-8de8-634d99369ffb"
              alt="creator"
            />
            <!-- <button class="subscribe" v-on:click="scrollToBottom()">Buy My NFT</button> -->
           <br>
      
<br/>

 <!-- <a  href="https://twitter.com/iamsrk?ref_src=twsrc%5Etfw"  class="twitter-follow-button" data-show-count="true"   data-size="large">@iamsrk</a> -->
    <!-- <Linkedin :url=url style="position:relative;" size="large"></Linkedin></p> -->
    <!-- <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL"  data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/kashishmanocha/" target="_blank">
     <img
              height="40"
              width="40"
           
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/linkdin.png?alt=media&token=2b536b34-affe-455c-b582-11cc049cfe39"
            
            /></a></div> -->
<br>

<!-- <label style="color:white;font-size:40px;position:relative"> 42 M+ </label> -->

<!-- <p>
<Facebook :url=url style="position:relative"></Facebook> <WhatsApp :url=url style="position:relative"></WhatsApp> <Telegram :url=url style="position:relative" ></Telegram> <Linkedin :url=url style="position:relative"></Linkedin></p> -->
<br/>  
  </div>
         
         
          <div class="right-profile">
            <div class="user-info">
             <div class="creator-name" >
               {{firstname}}&nbsp;&nbsp;{{ lastname}} 
              
              </div>
            
              <p class="creator-history" v-for="ToDo in kashish" :key="ToDo.id">
                {{ ToDo.bio }}
              </p>
      
            </div>
            <div class="info-container">
            
              <div style= "color:white" class="description">
                <p>
                  {{ description1}}
                </p>
            
                </div>
              <!-- <div class="help">
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
                
                
                </div>
              </div> -->
            </div>
          {{urlfirstname}}
          </div>
        </div>
      </div>

    <!-- </div> -->
    </section>
  {{imageurl}}
    <section class="row">
     
     
       <Item class="shakethis"
        v-for="item in firstname1"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </section>
    
    <br><br><br><br>

  
        
     
       

    <br><br>
   

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

import Series from "./Series.vue";

import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'
import Navigation from "./Navigation.vue"
import guidance from "../pages/Guidance.vue"
import Item from '../Item.vue';
import kashishportfolio from '../kashishportfolio.vue'
import ShoppingCart from '../ShoppingCart.vue'
import profilenav from '../components/profilenav.vue'





import 'vue-js-modal/dist/styles.css'


Vue.use(VModal, { componentName: 'Foo' })

// var firstname='';
export default {
 name: "App",
  data() {
    
    return {
  
 nft_name:'undefined',
urlfirstname:String(window.location.href).substring(34,47),
firstname:'',
lastname:'',
description1:'',
imageurl:''
  
 
   
    

    };
  },
 
  
  
  
  methods: {
  

       

   
 



 

   
  


  },


   
  components: { Series,Facebook,Twitter,WhatsApp,Telegram,Linkedin,Navigation,guidance,foote, Item,
   kashishportfolio,ShoppingCart,profilenav },
 computed: { firstname1() { return this.$store.getters.firstname1}},

  mounted() {
 

      const Self=this
   







var userdata= firebase.database().ref("userdata")
      userdata.orderByChild('id').equalTo(this.urlfirstname).on('value', function(snapshot) {
  snapshot.forEach(snap => {
  Self.firstname=snap.val().name
  Self.lastname=snap.val().lastname
  Self.description1=snap.val().description
  Self.nft_name=snap.val().nft1_name
      })});
if(Self.nft1_name=='undefined'){
  window.location.reload()
}


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