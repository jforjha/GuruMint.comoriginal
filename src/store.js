import firebase from 'firebase';
import Vue from 'vue';
import Vuex from 'vuex';

var nf=Intl.NumberFormat();
var x=999000;
// String(window.location.href).substring(34,47)
var url=String(window.location.href).substring(33,46)
Vue.use(Vuex);

// image url
var storageRef = firebase.storage().ref().child("nft_image/"+String(window.location.href).substring(33,46));
var thisRef = storageRef.child("image1");
var thisRef2 = storageRef.child("image2");
var thisRef3 = storageRef.child("image3");
var thisRef4 = storageRef.child("image4");
thisRef.getDownloadURL().then((url) => {
localStorage.imageurl=url
})
thisRef2.getDownloadURL().then((url) => {
  localStorage.imageurl2=url
  })
  thisRef3.getDownloadURL().then((url) => {
    localStorage.imageurl3=url
    })
    thisRef4.getDownloadURL().then((url) => {
      localStorage.imageurl4=url
      })


var userdata= firebase.database().ref("userdata")
userdata.orderByChild('id').equalTo(url).on('value', function(snapshot) {
  snapshot.forEach(snap => {
localStorage.price1 = snap.val().nft1_price
localStorage.price2 = snap.val().nft2_price
localStorage.price3 = snap.val().nft3_price
localStorage.price4 = snap.val().nft4_price
localStorage.name=String(snap.val().nft1_name)
localStorage.name2=String(snap.val().nft2_name)
localStorage.name3=String(snap.val().nft3_name)
localStorage.name4=String(snap.val().nft4_name)


 }) });

  function price4() {
   
    return localStorage.price1;
    
    
}
function both(){
 price4
 name
}
setInterval( both, 1 );




var price = price4()

function name() {
  
return localStorage.name
}
var name1=name()  
export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'Iconic AgnezMo Digital Avatar', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211120_220506.gif?alt=media&token=b4603c29-31d6-47f9-be58-f933862a83a3', price: 9998 },
      { invId: 2, name: 'Exclusive Origin Demo of F Yo Love Song', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/157359623_188061719422812_3333413910220147425_n.jpg?alt=media&token=7bc0fdb3-8350-41d9-8bf0-267d7f37f63a', price:  9998 },
      { invId: 3, name: 'Ownership of Legendary Song:MatahariKu Official', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211120_222206.gif?alt=media&token=4b941c82-d671-4bcb-a4c4-178f2cd8e755', price:  9998 },
    ],
    
    cinta: [
      { invId: 1, name: 'Iconic Cinta Laura Digital Avatar', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211120_220506.gif?alt=media&token=b4603c29-31d6-47f9-be58-f933862a83a3', price: 999000  },
      { invId: 2, name: "Exclusive Remix of Legendary song 'Oh Baby'" , image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/cintanft3.gif?alt=media&token=7de9d4bb-3652-4cff-b10f-fd80d7eed1d0', price:999000},
      { invId: 3, name: 'Ownership of official song Markisa', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/cintanft4.gif?alt=media&token=719cd801-4a71-401e-8484-3d38ebbfe697', price: 999000},
      // { invId: 4, name: 'Project4', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/attachment_97824570.gif?auto=format&q=60&fit=max&w=930', price: 299 },
    ],

firstname1:[
  {invId: 1, name: name1, image: String(localStorage.imageurl),  price: parseInt(price)},
  {invId: 2, name: localStorage.name2, image: String(localStorage.imageurl2),  price: parseInt(localStorage.price2)},
  {invId: 3, name:localStorage.name3, image: String(localStorage.imageurl3),  price: parseInt(localStorage.price3)},
  {invId: 4, name: localStorage.name4, image: String(localStorage.imageurl4),  price: parseInt(localStorage.price4 )},
  


],
    forSale1: [
      // { invId: 1, name: 'NFT1', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/Prof._Stampfers_Stroboscopische_Scheibe_No._X-1.gif?auto=format&q=60&fit=max&w=930', price: 999 },
      // { invId: 2, name: 'NFT2', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/7717534e-a416-4606-8c18-e05839ac155b.gif?auto=format&q=60&fit=max&w=930', price: 1499 },
       
      // { invId: 4, name: 'Project4', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/attachment_97824570.gif?auto=format&q=60&fit=max&w=930', price: 299 },
      { invId: 4, name: 'One day with AgnezMo: VIP Access to shooting set', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211121_103001.gif?alt=media&token=e981721b-c226-4ab6-8e37-4494609ee2cf', price: 9998  }
    ],
    kashishportfolio: [
      { invId: 1, name: 'GuruMint: cross-platform NFT launch tool', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211201_082829.gif?alt=media&token=4c2bee80-9e5c-4b2c-9396-d0ed279d3243',description:'Founded Gurumint, building tools enabling creators to monetise their current / future assets using NFTs, fungible tokens and beyond',buttontitle:'Presentation here',link:'https://docs.google.com/presentation/d/1t9FJ2BNgWYKlAAZ3lVvMsBk72rF5R0_rNHOfWgI8Eyo/edit#slide=id.p',height:'300px', price: 1000000 },
      { invId: 2, name: 'OLX: Trust & Safety in car e-commerce', image: ('https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211130_220102.gif?alt=media&token=137a3b9a-680d-482e-8b45-9dfdb55df261'),description:'While   leading    product mgmt function for OLX Indonesia, increased trust & safety scores ~20% by building seller verification & car-inspection service',buttontitle:'Presentation here',link:'https://docs.google.com/presentation/d/1srzxwNFyTKO4RbQLNw0mdPrUPWljzBdU/edit#slide=id.p1',price: 2000000 },
      { invId: 3, name: 'Self-experiments: Relationship between glucose levels & Cognitive abilities', image: 'https://neurosciencenews.com/files/2017/08/glucose-brain-aging-neurosciencenews.jpg',buttontitle:'In Progress',description:'Studying and doing self-experiments on deriving impact of glucose levels on my memory, Brain wellness, attention, communication & other body metrics. Experimenting with various stimuli to impact glucose leves and the subsequent impact on cognitive abilities', price: 1000000 },
      { invId: 4, name: 'Daraz: Largest B2C e-commerce marketplace from scratch', image: ('https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/kashish_image.jpg?alt=media&token=038618e2-092b-426f-8a67-28ca057112f1') ,buttontitle:'Product here',description:'Co - founded, Daraz.lk,150 + FTEs eCommerce venture in Sri Lanka, which later got    acquired by Alibaba Group,  spearheaded the launch of Daraz in Sri Lanka from 0 to  multimillion dollar GMV in <1 year making Daraz a household name   ',link:'https://www.daraz.lk/', price: 2000000 },
      { invId: 5, name: 'Alconomy: Cryptocurrencies based P2P remittance tool', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211130_210110.gif?alt=media&token=aca3a030-a802-4b66-a1af-8b7d0b41f4dc',buttontitle:'Product demo here',description:'Built a cryptocurrency based remittance tool from scratch to transfer money across borders at zero cost (or while making a profit off arbitrage)',link:'https://www.youtube.com/watch?v=twT3CcmWDI4', price: 1000000 },
      { invId: 6, name: 'OLX: New B2B marketplace & self-car inspection app design from scratch ', image: ('https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211130_215452.gif?alt=media&token=d1edbb76-2105-4079-b0b4-9205a3397282'),buttontitle:'Product demo here',description:'Launched new B2B car-trade product (~7% of business in 1yr) for the group starting with UAE, Pakistan & Indonesia',link:'https://youtu.be/7JxZTJskOUo', price: 2000000 },
      { invId: 7, name: 'MedaIno: Body health metrics monitoring device', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211201_105321.gif?alt=media&token=d02fba02-9b11-4a9d-8595-c587573df842',buttontitle:'Product demo here',description:'Part of the early team in university that built a prototype of On the Go Health Diagnostic Unit',link:'https://youtu.be/OzOcHjRLVbI', price: 1000000 },
      { invId: 8, name: 'Moka Connect: Open APIs for communication among different business apps', image: ('https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/GIF-211130_211609.gif?alt=media&token=86531658-b69b-4420-be94-f8535c43d878'),buttontitle:'API Docs here',description:'Built Public APIs for developers to integrate various business apps on top of core Point of Sale app providing a one-stop solution for small businesses.',link:'https://api.mokapos.com/docs', price: 2000000 },

      // { invId: 3, name: 'Project3', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/attachment_97933572.gif?auto=format&q=60&fit=max&w=930', price: 499 },
      // { invId: 4, name: 'Project4', image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/attachment_97824570.gif?auto=format&q=60&fit=max&w=930', price: 299 },
    ],
    cintabidding: [
      { invId: 4, name: 'One Day with Cinta Laura: VIP Access to shooting set', image: 'https://firebasestorage.googleapis.com/v0/b/gurumintcom-282c4.appspot.com/o/nft4correct_cinta.gif?alt=media&token=29e4892d-91cf-4260-9080-068d3b046e41', price: nf.format(x)  },
    ],
    // firstname:[

    // ],
    inCart: [],
 
  },
  getters: {
    forSale: state => state.forSale,
    forSale1: state => state.forSale1,
    kashishportfolio:state=>state.kashishportfolio,
    inCart: state => state.inCart,
    cinta: state => state.cinta,
    cintabidding: state => state.cintabidding,
    firstname1:state => state.firstname1
   
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },  
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});





     