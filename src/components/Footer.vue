<template>
<div id=footer1>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text >
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
   Reach out to us on our any social media handles.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>GuruMint</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>

<style lang='scss' scoped>
.v-card {
  width: 125%;
margin-left:-1%;
margin-bottom: -1%;


}
</style>

<script>
export default {
  data: () => ({
    icons: [
      /*{
        text: "mdi-facebook",
        link: "",
      },*/
      {
        text: "mdi-twitter",
        link: "https://twitter.com/kaasdavinci",
      },
      {
        text: "mdi-linkedin",
        link: "https://www.linkedin.com/company/gurumint",
      },
      {
        text: "mdi-instagram",
        link: "https://instagram.com/guru.mint/",
      },
    ],
  }),
};
</script>
<style lang='scss' scoped>
#footer1{
    @media (max-width: 668px) {
position: absolute;
width: 111%;
margin-bottom:-1%;
margin-left:-2%       }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 99.5%;
    position: absolute;
    display: block;
    }
      @media (min-width: 1025px) and (max-width: 1200px){
        width: 108%;
      }
}
</style>