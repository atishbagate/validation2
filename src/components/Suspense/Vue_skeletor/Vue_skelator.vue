<template>
  <!-- <div class="card">
    <div class="card__image">
      <Skeletor height="200" />
    </div>

    <div class="card__slim">
      <div class="card__avatar">
        <Skeletor circle size="48" class="post__avatar" />
      </div>

      <div class="card__meta">
       
        <h2>this is data 
          <Skeletor width="50%" />
        </h2>
        
        <p>
          <Skeletor width="75%" />
        </p>
      </div>
    </div>

    <div class="card__text">
      <Skeletor v-for="i in 5" :key="i" />
    </div>

    <div class="card__actions">
      <Skeletor width="96" height="36" pill style="margin-right: 4px" />
      <Skeletor width="96" height="36" pill />
    </div>
  </div> -->
 
    <div class="card-deck ml-5 mr-5">
      <!-- <div class="custom_card d-md-flex justify-content-around"></div> -->
      
      <div class="card shadow bg-white rounded" style=" width:10rem;" v-for="item in list" v-bind:key="item.title">
          <img class="img-fluid rounded d-block float-right" v-if="item.img" :src="item.img" alt="Card image cap"/>
          <Skeletor v-else-if="isPostLoading" height="200"/>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text"> {{ item.info }}
            </p> <p class="card-text"> <small class="text-muted">Last updated 3 mins ago</small> </p>
            <a href="#" class="btn btn-primary btn-md active" role="button" aria-pressed="true">View Details</a>
            <a href="#" class="btn btn-secondary btn-md active" style="margin-left:10px" role="button" aria-pressed="true">Brochure</a>
          </div>
      </div>
    </div>
</template>
<script> 
// import "vue-skeletor/dist/vue-skeletor.css";
// import { Skeletor } from "vue-skeletor";
import axios from "axios"; 
export default {
  name: "Ueskelator",
  // components:{
  //   // Skeletor
  // },
  data() {
    return {
      list: [],
    };
  },
    mounted() {
    axios
      .get("https://api.jsonbin.io/b/616401c4aa02be1d4457b7e1/3")
      .then((response) => {
        this.list = response.data;
        console.log(response.data);
      });
  },
};
</script>
<style scoped>
@media only screen and (max-width: 730px) {
  .card {
    display: contents;
  }
}
 
</style>

 