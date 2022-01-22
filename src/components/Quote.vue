<template>
  <div class="quote-section" >
    <h1 class="quote-h1">Don’t just take our word for it</h1>
    <h2 class="quote-h2"  >
      “It's one of my favourite platforms! Not only is the team behind Superpeer
      super supportive and talented, but the product itself is great to use. I
      can't imagine Superpeer ever going away, thank you for all you do!”
    </h2>
    <div class="image-section">
      <img src="../assets/quote-img.jpeg" alt="img" class="quote-image" />
      <h3 class="quote-h3">Femke van Schoonhoven</h3>
      <p class="quote-p">Product Designer at Uber</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.quote-section {
  margin-top: 10%;
  margin-bottom: 10%;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fffbf0),
    color-stop(74%, hsla(40, 0%, 100%, 0)),
    to(hsla(0, 0%, 100%, 0))
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  border-radius: 20px;
}

.quote-h1 {
  z-index: 1;
  font-size: 3rem;
  font-weight: bolder;
  margin-top: 7%;
  margin-bottom: 4%;
}
.quote-h2 {
  width: 70%;
  font-style: italic;
  word-spacing: 10px;
  
}
.image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  width: 30%;
}
.quote-image {
  border-radius: 50%;
  height: 20%;
  width: 30%;
  object-fit: contain;
  border: solid 6px #fad964;
  background-color: white;
  padding: 6px;
  margin-bottom: 3%;
}
.quote-h3{
    font-weight: bolder;
    margin-bottom: 2%;
}

</style>

