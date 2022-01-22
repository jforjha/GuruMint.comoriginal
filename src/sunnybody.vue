<template>
  <div class="col-md-4"  style="margin:5x;padding-bottom:45px " >
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top" style="display:none">
        <model-viewer   id=sunnybody style="height:472px;margin-left:13%;margin-bottom:-1%;" shadow-intensity="4" camera-controls interaction-prompt="auto"  src="static/models/collada/sunny132.glb"  ar-modes="webxr scene-viewer quick-look" seamless-poster  ></model-viewer>
      <div class="card-body">
        <h4 class="card-title"> <strong>{{ name }}</strong></h4>
        <div class="card-text">{{ price | dollars }}</div>
           <div class="card-text" v-for="ToDo in kashish" :key="ToDo.id">
                <strong>{{ description }}</strong>
              </div>
        <div class="row justify-content-end">

           <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart" style="margin-top:10%;width:45%;margin-right:32px" @click="addToCart(invId)">BUY NOW</button> -->
                <!-- <button class="btn btn-primary" style="margin-top:10%;width:100%;" ><router-link style="color:white;text-decoration: none;" to="/bidding" >AUCTION</router-link> </button> -->
          <button class="btn btn-primary button" style="margin-top:10%;width:100%;" @click="addToCart(invId);showAlert()">ADD TO CART</button>
        </div>
      </div>
    </div>
    <br><br>
    <!-- code only for 3d model card -->

  </div>
</template>

<script>
import { dollars } from './filters';
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import { db } from "./firebase/db";
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
export default {
  name: 'item',
     data(){
    return {
        kashish: [],
    }
  },
  props: ['invId', 'name', 'image', 'price','description'],
  filters: {
    dollars,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId)
    },
     async addItem() {
      if (this.newItem) {
        await db.collection("kashish").add({ shortdescription: this.newItem }); 
        this.newItem = "";
      }
    },
   
    showAlert() {
      // Use sweetalert2
      this.$swal({
        text:"NFT Successfully added to cart :)",
  icon: "success",
  buttons: false,
   timer: 2000
    
  
});
    },
 
 
   
  },
    firestore: {
    kashish: db.collection("kashish"),
  },
  
 
  
  
};
</script>

<style scoped>
  .button{
    opacity: 1;
     position: absolute;
   bottom:5%;
     left: 2px;
  
  
    
  }
  .button a{
    z-index: 1;
     width: 100%;
     
  }
/*   
  .card:hover .button {
 opacity: 1;
left: 2px;
 bottom:20px;
 transition: opacity .35s ease;
} */
.card{
  height:715px;
  
  
}
</style>
