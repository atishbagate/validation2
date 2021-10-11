<template>
    <div class="card" >
        <!-- The video -->
<video autoplay muted loop id="myVideo">
  <source src="https://vod-progressive.akamaized.net/exp=1633777562~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1144%2F18%2F455720252%2F2009788548.mp4~hmac=f97830e24867b4dd643509b30f62cfd34ffbdb4f1472c1d4e272e787111f9eb2/vimeo-prod-skyfire-std-us/01/1144/18/455720252/2009788548.mp4" type="video/mp4">
</video>

 
</div>
</template>
<script>
export default {
    name:'Carasaules'
}
</script>
<style scoped>
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  /* position: fixed; */
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 80%;
}
 
</style>