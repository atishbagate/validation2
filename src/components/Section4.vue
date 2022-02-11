<template>
  <div class="row featurette" style="align-items: center; margin:0px 25px;">
    <div class="col-md-7 order-md-2">
      <h2 class="featurette-heading">
        {{title}}
        <span class="text-muted">{{mutedText}}</span>
      </h2>
      <p class="lead">{{para}}</p>
    </div>
    <div class="col-md-5 order-md-1">
      <img
        class="featurette-image img-fluid mx-auto shadow  bg-white rounded"
        data-src="holder.js/500x500/auto"
        alt="500x500"
        v-bind:src="img"
        data-holder-rendered="true"
        style="width: 700px; height: 400px;"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Section4",
  data(){
    return{
      title:"we will soon",
      mutedText:"See for yourself.",
      para:`porta felis euismod semper. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.`,
      img:"https://cdn.motor1.com/images/mgl/2PgYn/s3/ferrari-laferrari.jpg"
    }
  }
};
</script>
<style scoped></style>
        <!-- or we can write this -->
        <!-- :src="img" -->