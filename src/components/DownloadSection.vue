<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">How to launch your NFT on GuruMint</h1>
              <h3 class="font-weight-light">
             <br> 
             Step 1: Please click 'Apply Now' below, fill the form to give some details about your profile and our team will review your profile
              <br>
              
              Step 2: If your profile matches our criteria, we will reach out to you to schedule a demo of various use-cases possible for your NFT via our platform, new use-cases are emerging every day.
              <br>
              Step 3: We will help you create your NFT profile page easily (similarly to Tokopedia toko page), which you can share with your followers.
              <br>
              Step 4: You can collect payments (after deducting our small variable success fees) and engage with your fans through our software.
              
              </h3>
              <v-btn rounded outlined href="https://docs.google.com/forms/d/e/1FAIpQLSfQYUUkdWNRKuSEdxhB3QKcQXgqT46lflXWn07AgAYmVaze4A/viewform?usp=sf_link" target="_blank" large color="white" class="mt-4">
                <!--v-icon class="mr-2">
                  mdi-github
                </v-icon-->
                Apply Now!
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: relative;
 
}

#download .container,
#download .row {
  height: 100%;
 
}
</style>