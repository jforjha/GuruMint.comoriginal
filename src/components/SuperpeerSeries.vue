<template>
  <div class="section-page">
    <!-- Fourth-Card -->
    <div class="service-section">
      <img src="../assets/fifth/five-a.png" alt="" class="four-img" />
      <div class="fourth-desc">
        <h2>Customize the content</h2>
        <p>
          Organize your live streams, pre-recorded videos, and hosted events
          into purchasable content packages for your audience.
        </p>
      </div>
    </div>
    <!-- Fourth-Card -->

    <!-- Fifth-Card -->
    <div class="service-section">
      <img src="../assets/fifth/five-b.png" alt="" class="four-img" />
      <div class="fourth-desc">
        <h2>Set the pace</h2>
        <p>
          Series can be cohort-based for engaging group discussions or even
          on-demand for the self-paced learner.
        </p>
      </div>
    </div>
    <!-- Fifth-Card -->

    <!-- Sixth-Card -->
    <div class="service-section">
      <img src="../assets/fifth/five-c.png" alt="" class="four-img" />
      <div class="fourth-desc">
        <h2>Immerse the audience</h2>
        <p>
          Participants can chat with each other, send private messages, and
          raise a hand to be brought up on the stage during live events.
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
  width: 80%;
  font-size: 1.1rem;
  word-spacing: 4px;
}
</style>
