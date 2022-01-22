<template>
<div id=form1>
  <commonNav/>
  <div class="col-md-11" >
  <form  class="form-inline" @submit="login" >
  <h3><b>Sign in</b></h3>
  <br> <br>
      <input  class="form-control ml-sm-2 mr-sm-4 my-2"  type="text" v-model="email"   placeholder="Type your Email" name="title" required>
      <br><br> <br>
      <input  class="form-control ml-sm-2 mr-sm-4 my-2"  type="password" v-model="password" placeholder="Type Your Password" name="title" required>
      <br><br> <br>
      <button type="submit" style="width:30%" class="btn btn-primary">Login</button>
    </form>
<br><br> <br>
    <span>Not yet SignUp? <router-link to="/signup">Sign Up</router-link></span>
  </div>
</div>
</template>

<script>
import commonNav from '../components/commonNav.vue'

export default{
  components: { commonNav },
  name: 'AuthLogin',
  data() {
    return {
    username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login(e){
    let rout = this.$router
    e.preventDefault()
      if(this.email!='' &&this.password!=''){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function(user) {
        let username = user.email
            alert("login successful")
            rout.replace('/biddingwithdraw')
          }, function(err) {
              alert("Ops login failed"+ err.message)
          })
      }

    } 
  }
}

</script>
<style scoped>
#form1{
  margin-top: 10%;
  margin-left: 15%;
  

/* background-image: url('images/checked.png'); */
}
</style>