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
    min-height: 245px;
    margin: 0 auto; 
    padding: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid blue;
      /* animation: pulse-bg 0.5s infinite; */
    /* background-color: #eee; */
}
.profile-card{
  background-color: #fff;
  box-shadow: 0 1px 2px 1px rgba(0,0,0,.08), 0 -1px 3px 0 rgba(0,0,0,0.06);
  padding: 8px;
  position: relative;
  margin-bottom: 0;
  height: 200px;
  overflow: hidden;
}
.card-body::before{
    content: '';
    height: 110px;
    display: block;
    background-color: #ededed;
    box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;
}
.card-body::after{
     content: '';
    background-color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-name: loader-animate;
    animation-timing-function: linear;
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    background: -o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );
}

/* // Loader animation */
@keyframes loader-animate{
 0%{
    transform: translate3d(-100%, 0, 0);
  }
 100%{
    transform: translate3d(100%, 0, 0);
  }
}
/* .profile-info{
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
 } */
</style>