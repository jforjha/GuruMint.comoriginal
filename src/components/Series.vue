<template>
  <section>
    <div class="second-page">
      <div class="card">
        <div class="cr-image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/chatpoint1-16505.appspot.com/o/cardImage.jpeg?alt=media&token=564b5ffe-6b8b-4db5-aa56-7adba9150e30"
            alt="card"
            class="card-image"
          />
        </div>
        <div class="information">
          <div class="name">
            <h1 class="heading" v-for="ToDo in ToDos" :key="ToDo.id">
              {{ ToDo.courseName }}
            </h1>
          </div>
          <div class="about">
            <p class="para" v-for="ToDo in ToDos" :key="ToDo.id">
              {{ ToDo.courseDesc }}
            </p>
          </div>
          <div class="course-info">
            <div class="info">
              <img
                src="../assets/internet.png"
                alt="globe"
                class="globe"
                height="20"
                width="20"
              />
              <p class="subs">All Subscribers</p>
            </div>
            <div class="info">
              <img
                src="../assets/menu.png"
                alt=""
                class="globe"
                height="20"
                width="20"
              />
              <p class="subs">3 Ports</p>
            </div>
            <div class="info">
              <img
                src="../assets/ticket.png"
                alt="ticket"
                height="20"
                width="20"
                class="globe"
              />
              <p class="subs" v-for="ToDo in ToDos" :key="ToDo.id">
                {{ ToDo.coursePrice }}
              </p>
            </div>
          </div>
          <div class="seats">
            <p class="limit">Limited Seats</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "../firebase/db";
export default {
  data() {
    return {
      ToDos: [],
      newItem: "",
    };
  },

  methods: {
    async addItem() {
      if (this.newItem) {
        await db.collection("ToDos").add({ courseName: this.newItem });
        await db.collection("ToDos").add({ courseDesc: this.newItem });
        await db.collection("ToDos").add({ coursePrice: this.newItem });

        this.newItem = "";
      }
    },
  },
  firestore: {
    ToDos: db.collection("ToDos"),
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
* {
  font-family: "Karla", sans-serif;
}

//

p.limit {
  white-space: nowrap;
}

div.image {
  margin: 0;
}

div.card {
  padding: 2rem 0rem;
}

//
section {
  //   height: 100vh;
  margin-bottom: 10px;
  margin-top: 0px;
  padding-bottom: 10px;
  padding-top: 10px;

  .second-page {
    margin: 1% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
    @media (max-width: 468px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30%;
    }

    .card {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #fffaf0;
      box-shadow: 2px 8px 8px #f7ebd8;
      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 70%;
        margin-bottom: 40%;
      }

      .cr-image {
        object-fit: contain;
        padding-top: 2%;
        padding-bottom: 1%;
        padding-left: 3%;
        width: 70%;
        padding-right: 0%;

        // max-width: 250px;
        // max-height: 170px;
        @media (max-width: 468px) {
          // border: black solid;
          // align-items: center;
          // min-width: 330px;
          // min-height: 200px;
          // object-fit: contain;
          // align-items: center;
          // margin-left: auto;
          // margin-right: auto;
          // padding: 0%;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding-right: 10%;
        }

        .card-image {
          width: 80%;
          border-radius: 8px;
          vertical-align: top;

          @media (max-width: 468px) {
            width: 85%;
            margin-bottom: 10%;
            margin-right: 20%;
          }
        }
      }
      .information {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .name {
          display: flex;
          font-size: 13px;
          font-weight: bolder;
          margin-bottom: 3px;
          text-align: justify;
        }
        .about {
          .para {
            margin-top: 2px;
            margin-left: 0px;
            font-size: 100%;
            text-align: justify;
            margin-bottom: 3%;
            line-height: 120%;
          }
        }
        .course-info {
          display: flex;
          flex-direction: row;
          width: 400px;
          margin-bottom: 4px;
          .info {
            display: flex;
            flex-direction: row;
            margin-left: 2px;

            .globe {
              margin-right: 13px;
              height: 18px;
              width: 18px;
              object-fit: contain;
            }
            .subs {
              margin-top: 0%;
              margin-right: 15px;
              font-size: 15px;
            }
          }
        }
        .seats {
          font-size: 15px;
          .limit {
            margin-top: 9%;
          }
        }
      }
    }
  }
}
</style>
