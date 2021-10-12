<template>
    <div class="card-deck ml-5 mr-5">
      <div class="custom_card d-md-flex justify-content-around"></div>
    <div class="card shadow rounded" style=" width:10rem;">
        <img class="img-fluid rounded d-block  float-right" />
      <div class="card-body">
        <h5 class="card-title" />
        <p class="card-text" /> 
        <p class="card-text" />
        </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "InfoCardSuspension",
}
</script>
<style scoped>
@media only screen and (max-width: 730px) {
  .card {
    display: contents;
  }
}
.custom_card{
    width: 400px;
    height: 400px;
     animation: pulse-bg 0.5s infinite;
}
.card-title{
        width: 400px;
    height: 400px;
    animation: pulse-bg 0.5s infinite;
}
.card-text{
    animation: pulse-bg 0.5s infinite;
}
 @keyframes pulse-bg {
     0% {
         background-color: #eee;
     }
     50% {
         background-color: #c09191;
     }
     100% {
         background-color: #eee;
     }
 }

</style>
