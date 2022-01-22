<template>
    <div id="mobile1">
      <div >
    <v-navigation-drawer 
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
         
          </v-list-item-avatar>
          <v-list-item-content>
           <v-list-item-title class="title" style="margin-left:100px"> GuruMint</v-list-item-title>
      
            <v-list-item-subtitle>NFT's</v-list-item-subtitle>
          </v-list-item-content>
      
        </v-list-item>
      </v-list>

      <v-divider />
 
      <v-list dense>
        <v-list-item
         
        >
       
         <span class="mr-2">
      
       <a href="https://gurumint.com/" style="color:white;">HOME</a>
<!--       
       <dropdown-menu >
        <button slot="trigger" style="margin-right:220px">EN</button>
      <ul slot="body" style="height:50px;width:20px;color:white">
 <v-btn v-for="country in countries" class="py-2" :key="country.id" style="color:white">
               <span @click="doTranslation(country.code)" :title="country.title" style="color:white">
          <span class="language-item" style="color:white">
            <img
              :alt="country.alt"
              :src="
                `https://cdn.jsdelivr.net/gh/lewis-kori/vue-google-translate/src/assets/images/flags/__${country.title}.png`
              "
              class="flag"
            />

            <span class="language__text" style="color:white">{{ country.title }}</span>
          </span>
        </span>
            </v-btn>
              </ul>
               </dropdown-menu> -->
         
         </span>
    
       
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
      </div>
  <div id=windownav>
    <v-app-bar
      app

      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
     
    > 
    
      <v-toolbar-title>
      
  <button id=b1 onclick="window.history.back()"><i id=i1 class="fal fa-arrow-alt-circle-left fa-2x"> </i></button> <h4 id=g1> GuruMint</h4>
       
      </v-toolbar-title>
      <v-spacer />
     
      <div >
          <div class="col-md-3" id=shoppingcart style="margin-right:40%" >
         
        <ShoppingCart />
      </div>
      </div>&nbsp;
       
      <!-- <div style="z-index:1000">
          <div class="col-md-3" id=shoppingcart >
        <AuthLogin />
      </div>
      </div> -->
      <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      
      <div  v-else >
  
        

       <!-- <a id="home" href="https://gurumint.com/" style="color:white;">HOME</a>&nbsp; -->
         
       <!-- <dropdown-menu >
        <button slot="trigger" >EN</button>&nbsp;&nbsp;
      <ul slot="body" style="height:50px;width:20px;color:white">
 <v-btn v-for="country in countries" class="py-2" :key="country.id" style="color:white">
               <span @click="doTranslation(country.code)" :title="country.title" style="color:white">
          <span class="language-item" style="color:white">
            <img
              :alt="country.alt"
              :src="
                `https://cdn.jsdelivr.net/gh/lewis-kori/vue-google-translate/src/assets/images/flags/__${country.title}.png`
              "
              class="flag"
            />

            <span class="language__text" style="color:white">{{ country.title }}</span>
          </span>
        </span>
  
            </v-btn>
              </ul>
               </dropdown-menu> &nbsp; -->
               <dropdown-menu   >
              <button id=b2 v-if="seen"   slot="trigger"  class="btn btn-primary my-2"> <p id=p1>{{username}}
               Balance: Rp {{balance + 0}}</p></button>
                 <ul slot="body"  style="height:100px;width:20px;color:white;margin-right:1700px;margin-left:-20%">
                <router-link style="text-decoration: none;color:white" to='/userdashboard'>    <button id=b1 style="width:900%;margin-left:320%;" class="btn btn-primary my-2"> WALLET</button></router-link>
                     <button id=b1 style="width:900%;margin-left:320%; " class="btn btn-primary my-2" v-on:click="logout()">LOGOUT</button>    

                  </ul>
               </dropdown-menu>
          <button v-if="seen1" class="btn btn-primary my-2"><router-link style="text-decoration: none;color:white"  to='/auth'>LOGIN</router-link></button>
      </div>
      
     
    
    </v-app-bar>
  </div>
  </div>
</template>
<script>
import ShoppingCart from '../ShoppingCart.vue';
import AuthLogin from '../components/AuthLogin.vue'

export default {
  name:'profilenav',
     data () {
    return {
    name: '',
    msg: 'E-wallet',
  balance:'',
   seen:true,
   seen1:true
  
    }
  },
  methods:{
 logout(){
    let rout = this.$router
        firebase.auth().signOut().then(function() {
      // Sign-out successful.
        // console.log('logout................')
            rout.replace('/auth')
               window.location.reload(); 
          
     
           
        })
    },
    
  },
    components:{ShoppingCart,AuthLogin},
     mounted(){
    const Self = this
    firebase.auth().onAuthStateChanged((user) => {
  
    if (user) {
      this.seen1=false
      // User logged in already or has just logged in.
      //Return users name
      var refere = firebase.database().ref('clients/'+user.uid);
      refere.on('value', function(snapshot) {
      Self.username = snapshot.val().Name
    
        });
        //return account balance
      var reb = firebase.database().ref('accounts/'+user.uid);
      reb.on('value', function(snapshot) {
        Self.balance = snapshot.val().balance 
        });
      
        
    }else if(!user){
         this.seen=false;
    }
       
  });   
  }
}
</script >
<style lang='scss' scoped>
#g1{
  top:96%;
  margin-left:3%;
  position:fixed;
@media (max-width:812px){
display: none;

 }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    margin-top:-5%;
    margin-left:6%;
  }
      @media (min-width: 1025px) and (max-width: 1200px){
          margin-top:-3.5%;
    margin-left:6%;
      }
       @media only screen and (min-width: 1366px){
         margin-top:-3%;
          margin-left:4%;
       }
}
#b1{
  @media (max-width:812px){
  font-size: 80%;
  margin-left:5%;
  }
}
#i1{
  @media (max-width:812px){
    margin-left:-16%;
    position: relative;
  
  }
}
#shoppingcart{
 
   @media (max-width:812px){
      margin-left:-0%;
      font-size:2%;
   }
     @media only screen and (min-width: 1366px){
       margin-left:-10%;
     }
}
#b2{
    @media (max-width:812px){
      margin-left:-0%;
      height:3em;
      width:10em;
   }
   
} 
#p1{
     font-size:1em;
     margin-top:-5%;
       @media only screen and (min-width: 1366px){
          margin-top:3%;
           font-size:1em;
       }

   }
</style>

