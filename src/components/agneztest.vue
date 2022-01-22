<template>
  <div id=app>
<div id=profile>
<div id=nav1>
   <profilenav/>
<div class="firstimage"  >
       <img id="img1"
              height="1000px"
              width="70%"
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/Firstpage_agnez.png?alt=media&token=1e92d59e-6305-4557-ae9b-41de90200e95"
             
            />
              <img id="imgmobile1"
              height="1000px"
              width="70%"
              src="https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/IMG-20211121-WA0001.jpg?alt=media&token=725562c6-172b-440b-bb52-23d982352121"/>
           
</div>
        <br><br>
       <div class="row" id=nftrow style="background-color:black;">
      <Item style="background-color:black" class="shakethis"
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
  <biddingitem style="background-color:black" class="shakethis"
        v-for="item in forSale1"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
        </div>
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
import { db } from "../firebase/db";
import Series from "./Series.vue";
import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'
import Navigation from "./Navigation.vue"
import guidance from "../pages/Guidance.vue"
import Item from '../Item.vue';
import ShoppingCart from '../ShoppingCart.vue';
import biddingitem from '../biddingitem.vue'
import profilenav from '../components/profilenav.vue'
import 'vue-js-modal/dist/styles.css'
Vue.use(VModal, { componentName: 'Foo' })
var currentRoute = window.location;
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
    
      modal:false,
       isLoading: false,
    url: String(currentRoute),
    url1:"https://twitter.com/iamsrk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      ToDos: [],
      newItem: "",
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
       forSale1(){return this.$store.getters.forSale1;}
  },
  methods: {
   
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
    

  },

  firestore: {
    ToDos: db.collection("ToDos"),
  },
   
  components: { Series,Facebook,Twitter,WhatsApp,Telegram,Linkedin,Navigation,guidance,foote,   Item,
    ShoppingCart,biddingitem,profilenav },
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
#app{
  background-color: black;
  
}
#footer{
  margin-bottom:-1%;
  margin-left:-1% ;
  
}
#nav1{
  
   padding:10px;
   margin-top:50px;
  @media (max-width: 668px) {
position: relative;
width: 90%;}
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
   
   
    }
        @media (min-width: 1025px) and (max-width: 1200px){
width: 90%;
       }

  
}
#profile{
   background: black;
   width:100%;
@media  (max-width: 668px) {
  width:100%;
background-color: black;
}
 @media (min-width: 768px) and (max-width: 1024px) {
    width:100%;
 }
}
   .firstimage{
     display: block;
  margin-left: 10%;
  margin-right: auto;
  width: 100%;
      @media (max-width: 668px){
         

  display:relative;
        width:100%;
      }
   }

   #img1{
      @media (max-width: 812px){
  display: none;
     }
       @media (min-width: 1025px) and (max-width: 1200px){
width:100%;
margin-left:-5%;
       }
   }
   #imgmobile1{
     display:none;
         @media (max-width: 668px){
         
position: relative;
  display: block;
        width:110%;
     height:500px;
     margin-left:-10%
     }
     @media (min-width: 768px) and (max-width: 1024px) {
         
position: relative;
  display: block;
        width:120%;
     height:900px;
     margin-left:-7%
  
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
.shakethis {
  transition: 0.3s;
}
.shakethis:hover {
  transform: translate(0, -20px);
}
</style>
