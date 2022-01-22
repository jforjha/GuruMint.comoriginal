<template>

  <div class="col-md-3" style="margin:5x;padding-bottom:45px " id=card>
    <div class="card"  >
      <img :src="image" :alt="name" class="card-img-top" >
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <!-- <div class="card-text">IDR {{ price  }}</div> -->
           <!-- <div class="card-text" v-for="ToDo in kashish" :key="ToDo.id">
                {{ ToDo.shortdescription }}
              </div> -->
          <p class="card-text">{{ description }}</p>   
              <br>
          
              
        <div  class="row justify-content-end"  >
    
           <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart" style="margin-top:10%;width:45%;margin-right:32px" @click="addToCart(invId)">BUY NOW</button> -->
                <!-- <button class="btn btn-primary" style="margin-top:10%;width:100%;" ><router-link style="color:white;text-decoration: none;" to="/bidding" >BIDDING</router-link> </button> -->
          <!-- <button class="btn btn-primary" style="margin-top:10%;width:100%;" @click="addToCart(invId);showAlert()">ADD TO CART</button> -->
       
           <div class="button"  v-if= "invId!=3" >       <a :href="'' + link" target="_blank" style="text-decoration: none;" class="btn btn-primary" id="cardchild"  >{{ buttontitle }}</a>
        
           </div>
            <div class="btn btn-primary button" style="width:93%;margin-left:3%" v-if= "invId==3" >      {{ buttontitle }}
        
           </div>

          </div>
      </div>
    </div>

<!-- code only for 3rd card -->

   
    <!-- code ends -->


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
  name: 'biddingitem',
    data(){
    return {
        kashish: [],
      link1: this.link
    }
  },
  props: ['invId', 'name', 'image', 'price','description','buttontitle','link'],
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
        text:"Project Successfully added to cart :)",
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
    bottom:20px;
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
  height:625px
}

</style>


