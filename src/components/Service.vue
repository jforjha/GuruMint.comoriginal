<template>
  <div class="section-page">
    <!-- Fourth-Card -->
    <div class="service-section">
      <img src="../assets/fourth/four-a.png" alt="" class="four-img" />
      <div class="fourth-desc">
        <h2>Engage with your audience</h2>
        <p>
          Connect with your subscribers through interactive livestreams, 1:1s,
          and our newest feature, Series.
        </p>
      </div>
    </div>
    <!-- Fourth-Card -->

    <!-- Fifth-Card -->
    <div class="service-section">
      <img src="../assets/fourth/four-b.png" alt="" class="four-img" />
      <div class="fourth-desc">
        <h2>Manage easier</h2>
        <p>
          We take care of scheduling, payments, and protecting your privacy, so
          that you don’t have to.
        </p>
      </div>
    </div>
    <!-- Fifth-Card -->

    <!-- Sixth-Card -->
    <div class="service-section">
      <img src="../assets/fourth/four-c.png" alt="" class="four-img" />
      <div class="fourth-desc">
        <h2>Earn, your way</h2>
        <p>
          Set your own rates and earn revenue through weekly livestreams,
          channel subscriptions, and even donations.
        </p>
      </div>
    </div>
    <!-- Sixth-Card -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.section-page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* border: solid black 1px; */
}
.service-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border: solid black 1px; */
}
.four-img {
  height: 50%;
  object-fit: contain;
  /* border: solid black 1px; */
}
.fourth-desc {
  /* border: solid black 1px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  width: 80%;
}
h2 {
  text-align: center;
  font-size: 1.7rem;
  font-weight: bolder;
  padding-bottom: 4%;
}
p {
  text-align: center;
}
</style>
