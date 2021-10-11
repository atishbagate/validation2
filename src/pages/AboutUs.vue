<template>
    <div class="card mt-5" >
        <!-- The video -->
<video autoplay muted loop id="myVideo">
  <source src="https://vod-progressive.akamaized.net/exp=1633778331~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2116%2F18%2F460584788%2F2037654810.mp4~hmac=c0fe26522fe4418be5123832190857ff98a93c49346d5b10f18146180c376891/vimeo-prod-skyfire-std-us/01/2116/18/460584788/2037654810.mp4" type="video/mp4">
</video>

<!-- Optional: some overlay text to describe the video -->
<div class="content">
  <h1>About Us:</h1>
  <p>Lorem ipsum...</p>
  <!-- Use a button to pause/play the video with JavaScript -->
  <button id="myBtn" onclick="myFunction()">Know More</button>
</div>
    </div>
</template>
<script> 
export default {
  name: 'AboutUs',
}
</script>
<style scoped>
/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>