<template>
     <div class="profile-card">
     <div class="card-body">
         <h2 class="profile-name" />
         <p class="profile-info" /> 
     </div>
 </div>
</template>
<style scoped>
.profile-card{
     width: 100%;
    max-width: 700px;
    min-height: 250px;
    margin: 0 auto; 
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
    border: 2px solid blue;
      /* animation: pulse-bg 0.5s infinite; */
    background-color: #eee;
}
.profile-info{
    width: 400px;
    height: 100px;
      animation: pulse-bg 0.5s infinite;
}
.profile-name{
    width: 30px;
    height: 10px;
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