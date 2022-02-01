<template>
<div id=p1>
    <profilenav/>
    <div id=profilecreation class="textcolor">
        <h3 class="textcolor">Personal Details</h3>
<input v-model=firstname type="text" placeholder="First Name" required>
<input v-model=lastname type="text" placeholder="Last Name" required>
<input v-model=phonenumber minlength=10 maxlength=10 type="number" placeholder="Contact Number" required>
<input v-model=emailid type="email" placeholder="Email ID" required>
<br><br>
<input v-model=description type="text" minlength=100 placeholder="About you" required><label> *min 100 letters</label><input type="file" class="textcolor1"  id="profile" name="files[]" /><label>Profile image</label>
<br>
<h3>NFT 1 Details</h3>
<div class=nftdetails>
<input v-model=nft1_name type="text" minlength=10 placeholder="NFT 1 NAME" required><label> *min 10 letters</label>
<input v-model=nft1_price type="number" placeholder="NFT 1 PRICE" required>

<input v-model=nft1_desc type="text" minlength=20 placeholder="NFT 1 DESCRIPTION" required><label> *min 20 letters</label>
<br>
<label>Choose image for NFT1</label> &nbsp;
<br>
<input type="file" class="textcolor1"  id="files" name="files[]" />
<br>
</div>
<h3>NFT 2 Details</h3>
<div class=nftdetails>
<input v-model=nft2_name type="text" minlength=10 placeholder="NFT 2 NAME" required><label> *min 10 letters</label>

<input v-model=nft2_price type="number" placeholder="NFT 2 PRICE" required>

<input v-model=nft2_desc type="text" minlength=20 placeholder="NFT 2 DESCRIPTION" required><label> *min 20 letters</label>
<br>
<label>Choose image for NFT2</label> &nbsp;
<br>
<input type="file" class="textcolor1" id="files2" name="files[]" />
<br>
</div>
<h3>NFT 3 Details</h3>
<div class=nftdetails>
<input v-model=nft3_name type="text" minlength=10 placeholder="NFT 3 NAME" required><label> *min 10 letters</label>

<input v-model=nft3_price type="number" placeholder="NFT 3 PRICE" required>

<input v-model=nft3_desc type="text" minlength=20 placeholder="NFT 3 DESCRIPTION" required><label> *min 20 letters</label>
<br>
<label>Choose image for NFT3</label> &nbsp;
<br>
<input type="file" class="textcolor1"  id="files3" name="files[]" />
<br>
</div>
<h3>NFT 4 Details</h3>
<div class=nftdetails>
<input v-model=nft4_name type="text" minlength=10 placeholder="NFT 4 NAME" required><label> *min 10 letters</label>

<input v-model=nft4_price type="number" placeholder="NFT 4 PRICE" required>

<input v-model=nft4_desc type="text" minlength=20 placeholder="NFT 4 DESCRIPTION" required><label> *min 20 letters</label>
<br>
<label>Choose image for NFT4</label> &nbsp;
<br>
<input class="textcolor1" type="file"  id="files4" name="files[]" />
<br>
</div>

<button style="margin-left:40%" v-on:click="submit()" class="btn btn-danger">submit</button>
    <br>
    </div>
    </div>
  
</template>
<script>

import profilenav from '../components/profilenav.vue'
export default {
    data(){
return{
    firstname:"",
    lastname:"",
    description:"",
    phonenumber:"",
    emailid:"",
    nft1_name:"",
    nft1_price:"",
    nft1_desc:"",
     nft2_name:"",
    nft2_price:"",
    nft2_desc:"",
     nft3_name:"",
    nft3_price:"",
    nft3_desc:"",
      nft4_name:"",
    nft4_price:"",
    nft4_desc:"",
    uniqueid: Math.random().toString(16).slice(2),
 }
    },
    components:{profilenav},

    methods:{
  
 uploadFile(){
      
      // Created a Storage Reference with root dir
      var storageRef = firebase.storage().ref().child("nft_image/"+(this.uniqueid));
      // Get the file from DOM
      var file = document.getElementById("files").files[0];
      var file2= document.getElementById("files2").files[0];
         var file3= document.getElementById("files3").files[0];
           var file4= document.getElementById("files4").files[0];
            var file5= document.getElementById("profile").files[0];
     //dynamically set reference to the file name
      var thisRef1 = storageRef.child("image1");
      var thisRef2 = storageRef.child("image2");
       var thisRef3 = storageRef.child("image3");
         var thisRef4 = storageRef.child("image4");
           var thisRef5 = storageRef.child("profile");

      //put request upload file to firebase storage
      if(file){
      thisRef1.put(file)}else{
          alert("Please upload profile image")
      }
        if(file2){
      thisRef2.put(file2)}else{
          alert("Please upload profile image")
      }
           if(file3){
      thisRef3.put(file3)}else{
          alert("Please upload profile image")
      }
         if(file4){
      thisRef4.put(file4)}else{
          alert("Please upload profile image")
      }
      if(file5){
      thisRef5.put(file5)}else{
          alert("Please upload profile image")
      }
      
      },
        submit(){
     
            const profiledata={

name: this.firstname,
lastname: this.lastname,
description:this.description,
phone:this.phonenumber,
email:this.emailid, 
   nft1_name:this.nft1_name,
   nft1_price:this.nft1_price,
    nft1_desc:this.nft1_desc,

     nft2_name:this.nft2_name,
   nft2_price:this.nft2_price,
    nft2_desc:this.nft2_desc,

        nft3_name:this.nft3_name,
   nft3_price:this.nft3_price,
    nft3_desc:this.nft3_desc,

        nft4_name:this.nft4_name,
   nft4_price:this.nft4_price,
    nft4_desc:this.nft4_desc,
    id: this.uniqueid,
 

 }
       if(this.firstname &&this.nft1_price &&this.nft2_desc && this.nft3_name && this.nft4_price && this.lastname && this.description &&   document.getElementById("files").files[0] && document.getElementById("files3").files[0] ){
                this.uploadFile()
              var FirebaseRef = firebase.database().ref()
               FirebaseRef.child("userdata").push(profiledata)
               this.$router.push({name:'userprofile',params:{id:(this.uniqueid+"_"+ this.firstname+this.lastname)}});
               window.location.reload()
               }
               else{
                   alert("Please fill all the details")
               }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.nftdetails{
    margin:10px
}
#profilecreation{
    position: fixed;
    margin-top: 5%;
    margin-left:25%;
    background: #004771;
}
#p1{
    background: black;
    position: fixed;
    height: 100%;
    width:100% ;
}
.textcolor{
    color:white;
}
.textcolor1{
    color:black
}
input {
 background:white;
 margin-left:5px;
 color:black

}
</style>