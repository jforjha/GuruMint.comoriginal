import Vue from "vue";
import VueRouter from "vue-router";
import Bidding from "../components/Bidding"
import Cr from "../components/cr.vue";
import Error from "../pages/Error.vue";
import Schedule from "../pages/Schedule.vue";
import Landing from "../components/Landing.vue";
import Features from "../pages/Features.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Guidance from "../pages/Guidance.vue";
import AuthLogin from '../components/AuthLogin'
import Signup from '../components/Signup'
import userdashboard from '../components/userdashboard'
import Send from '../components/send'
import withdraw from '../components/withdraw'
import marketplace from '../components/Marketplace'
import BiddingAuth from '../components/BiddingAuthLogin'
import biddingdeposit from '../components/BiddingSend'
import biddingwithdraw from '../components/BiddingWithdraw'
import biddingdashboard from '../components/BiddingUserDashboard'
import kashish from '../components/kashish.vue'
import agnezmo from '../components/agnezmo'
import sunny from '../components/Sunny.vue'
import transactionhistory from '../components/transactionhistory.vue'
import nft from '../components/nft.vue'
import agneztest from '../components/agneztest.vue'
import cintalaura from '../components/cintalaura.vue'
import ico from '../components/ico.vue'
import profilecreation from '../components/profilecreation.vue'
import userprofile from '../components/userprofile.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Landing",
    component: Landing,
  },
  { path: "/cintalaura", name: "cintalaura", component: cintalaura},
  {path:"/profilecreation", name:"profilecreation" ,component: profilecreation},
  {path:"/userprofile", name:"userprofile" ,component: userprofile},

  { path: "/shahrukh", name: "Cr", component: Cr},
  { path: "/ico", name: "ico", component: ico},
  
  { path: "/kashish", name: "kashish", component: kashish},
  { path: "/Landing", name: "Landing", component: Landing },
  { path: "/bidding", name: "bidding", component: Bidding },
  { path: "/marketplace", name: "marketplace", component: marketplace },
  { path: "/biddingAuth", name: "BiddingAuth", component: BiddingAuth },
  { path: "/biddingdeposit", name: "biddingdeposit", component: biddingdeposit },
  { path: "/biddingwithdraw", name: "biddingwithdraw", component: biddingwithdraw },
  { path: "/biddingdashboard", name: "biddingdashboard", component: biddingdashboard },
  {path:"/agnezmo",name:"agnezmo",component:agnezmo},
  {path:"/sunny",name:"Sunny",component:sunny},
  {path:"/agneztest",name:"agneztest",component:agneztest},

  
 
  
  {
		path: '/auth',
		component: AuthLogin,
		name: 'AuthLogin',
	},
  {
		path: '/signup',
		component: Signup,
		name: 'Signup',
	},
  {
		path: '/transactionhistory',
		component: transactionhistory,
		name: 'transactionhistory',
	},
  {
		path: '/deposit',
		component: Send,
		name: 'Deposit',
		meta:{
			requireAuth:true
		}
	},
  {
		path: '/withdraw',
		component: withdraw,
		name: 'withdraw',
		meta:{
			requireAuth:true
		}
	},
  {
		path: '/userdashboard',
		component: userdashboard,
		name: 'Home',
		meta:{
			requireAuth:true
		}
	},
  {
    path: "/404",
    name: "Error",
    component: Error,
  },
  /* {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
  */
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/guidance",
    name: "Guidance",
    component: Guidance,
  },
  {
    path:"/nft",
    name:"nft",
    component:nft,
  }
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
 
});
// router.beforeEach((to, from, next) => {
//   const currentUser =  firebase.auth().currentUser;
//   const requireAuth = to.matched.some(record=>record.meta.requireAuth)
//   if (requireAuth && !currentUser) next('auth')
//   else if (!requireAuth && currentUser) next('')
//   else next()
// })



export default router;
