<template>
  <div class="col-md-3">
    <div class="card" id=card1 >
      <img :src="image" :alt="name" class="card-img-top">
      <div  class="card-body">
        <div style="margin-left:20px">
        <h4 class="card-title" style="font-family:Helvetica Neue;text-align: center"><strong>{{ name }}</strong></h4>
        <div class="card-text" style="font-family:Helvetica Neue;text-align: center"><strong>{{ String(price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') | dollars }}</strong></div>
        <div class="row justify-content-end">
        </div>
           <!-- <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart" style="margin-top:10%;width:45%;margin-right:32px" @click="addToCart(invId)">BUY NOW</button> -->
      
          <button id=btn1 class="btn btn-primary "   @click="addToCart(invId);showAlert()">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dollars } from './filters';
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

export default {
  name: 'item',
  
  props: ['invId', 'name', 'image', 'price'],
  filters: {
    dollars,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId)
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
 
  
  

};
</script>
<style scoped lang='scss'>
#btn1{
 
  width:100%;
  background-color:#9d0010;
  border: none;

border: #De7382;
margin-top:20%;
  @media (min-width: 1025px) and (max-width: 1200px){
    bottom:20px;
     position: absolute;
     margin-left:-22%;
     align: center;
      }
            @media only screen and (min-width: 1366px)
{
   margin-left:-14%;
   bottom:6px;
     position: absolute;

 }

}
#card1{
  height:100%;
  
  @media(max-width:668px) {
    margin-left:6%;
    position: relative;
    width: 100%;
    padding: 5%;
  }
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-left:20%;
    }
       @media (min-width: 1025px) and (max-width: 1200px){
        height: 115%;
    margin-left: 13%;
        width:110%;
      }
      @media only screen and (min-width: 1366px)
{
  height: 110%;

 }
}
</style>



