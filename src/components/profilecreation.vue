<template>
<div>
<input v-model=firstname type="text" placeholder="name" required>
<br>
<input v-model=lastname type="text" placeholder="lastname" required>
<br>
<input v-model=description type="text" placeholder="description" required>
<br>
<input type="file"  id="files" name="files[]" multiple />

<br>
<button v-on:click="submit()">submit</button>
    </div>
  
</template>
<script>

export default {
    data(){
return{
    firstname:"",
    lastname:"",
    description:""
}
    },
    methods:{
 uploadFile(){
      
      // Created a Storage Reference with root dir
      var storageRef = firebase.storage().ref();
      // Get the file from DOM
      var file = document.getElementById("files").files[0];
     //dynamically set reference to the file name
      var thisRef = storageRef.child("image1");

      //put request upload file to firebase storage
      if(file){
      thisRef.put(file)}else{
          alert("Please upload profile image")
      }},
        submit(){
       
            const profiledata={

name: this.firstname,
lastname: this.lastname,
description:this.description 
            }
       if(this.firstname && this.lastname && this.description &&   document.getElementById("files").files[0] ){
                this.uploadFile()
              var FirebaseRef = firebase.database().ref()
               FirebaseRef.child("profiledata").set(profiledata)
               this.$router.push('/userprofile');
               }
               else{
                   alert("Please fill all the details")
               }
            
        }
    }
}
</script>