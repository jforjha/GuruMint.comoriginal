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
        <!-- <p>
          <span class="mr-2">
               <router-link :to="{ name: 'Guidance' }" style="text-decoration: none; color: inherit;">Buying Guidance</router-link></span>
               <br>
               <br>
               <span class="mr-2">
               <router-link :to="{ name: 'Features' }" style="text-decoration: none; color: inherit;">Features</router-link></span>
               <br>
               <br>
                <span class="mr-2"><router-link :to="{ name: 'About' }" style="text-decoration: none; color: inherit;">About</router-link></span>
                <br>
                <br>
                <span class="mr-2"><router-link :to="{ name: 'Contact' }" style="text-decoration: none; color: inherit;">Contact</router-link></span>
        </p> -->
       
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
      
      <div style="z-index:1000">
          <div class="col-md-3" id=shoppingcart  >
        <ShoppingCart />
      </div>
      </div>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"

      />
           
      <div v-else>
  
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
         
      
      </div>
      
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
 import i18n from '@/plugins/i18n';
  import Vue from 'vue'
    import DropdownMenu from 'v-dropdown-menu'
    import 'v-dropdown-menu/dist/v-dropdown-menu.css'
    import ShoppingCart from '../ShoppingCart.vue';
  Vue.use(DropdownMenu);
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", " ABOUT", "#features"],
      ["mdi-download-box-outline", "GETTING STARTED", "#download"],
      // ["mdi-currency-usd", "Market Place", "#pricing"],
      ["mdi-email-outline", "CONTACT US", "#contact"],

    ],
     languages: [
                    { flag: 'Us', language: 'en', title: 'English' },
                    { flag: 'Id', language: 'es', title: 'Indonesian' }
                ]
  }),
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
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
      changeLocale(locale) {
                i18n.locale = locale;
            },
                         doTranslation(code) {
      window.doGTranslate(code);
      if (this.hasClickListener) {
        this.$emit('on-country-click');
      }
      return false;
    },
  },
components: {ShoppingCart},
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

<style scoped>
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
</style>


