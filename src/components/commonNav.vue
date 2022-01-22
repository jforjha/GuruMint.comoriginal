  <template>
      

  <div>
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
            <!-- <img src="@/assets/img/logo.png" alt="Logo" /> -->
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">GuruMint</v-list-item-title>
      
            <v-list-item-subtitle>NFT's</v-list-item-subtitle>
          </v-list-item-content>
      
        </v-list-item>
      </v-list>

      <v-divider />
 
      <v-list dense>
        <v-list-item
         
        >
       
         <span class="mr-2">
      
       <a href="https://gurumint.com/" style="color:white;margin-right:50px;">HOME</a>
       
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
               </dropdown-menu>
          
         </span>
   
       
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
 
    <v-app-bar
      app

      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
     
    > 
     
      <v-toolbar-title>
   
        GuruMint
      </v-toolbar-title>
      <v-spacer />
      
  
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"

      />
           
      <div v-else>
  
         <span class="mr-2">

       <a href="https://gurumint.com/" style="color:white;margin-right:50px;">HOME</a>
       
      
          
         </span>
         
      
      </div>
     
    </v-app-bar>
  </div>
    </template>