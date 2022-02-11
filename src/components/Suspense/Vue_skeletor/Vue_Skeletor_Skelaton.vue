<template>
    <div class="container">
      <div class="row ">
          <div class="col-sm-12 col-sm-6 col-lg-4" v-for="n in 9" :key="n">
                <div class="card custom_card shadow rounded m-2">
                      <div class="card-body">
                        <div class="custom_card_img" />
                        <div class="card-title"/>
                        <div class="card-text"/> 
                        <p class="updated"/>
                        <div class="btn custom_btn"/>
                        <div class="btn custom_btn"/>
                      </div>
                </div>
          </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "ueskelatorSkelaton",
   
}
</script>
<style scoped>
@media only screen and (max-width: 730px) {
  .card {
    display: contents;
  }
}
.custom_card_img{
  content: '';
  height: 250px;
  width: 100%; 
  display:  block;
  background-color: #ededed;
  box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;
}
.card-title{
  content: '';
  height: 25px;
  width: 70%;
  margin: 60px 0px 0px 0px;
  display: block;
  background-color: #ededed;
  box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;
}
.card-title::after{
  content: '';
  height: 15px;
  width: 130%;
  margin: 30px 0px 0px 0px;
  display: inline-block;
  background-color: #ededed;
  box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;
}
.card-text{
  content: '';
  height: 15px;
  width: 90%;
  margin: 25px 0px 0px 0px;
  display: block;
  background-color: #ededed;
  box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;
}
.card-text::before{
  content: '';
  height: 15px;
  width: 100%;
  margin: 19px 0px 0px 0px;
  display: inline-block;
  background-color: #ededed;
  box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;
}
.custom_btn{
  content: '';
  height: 35px;
  width: 100px;
  margin: 19px 5px 0px 0px;
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
 /* // Loader animation main */
  @keyframes loader-animate{
 0%{
    transform: translate3d(-100%, 0, 0);
  }
 100%{
    transform: translate3d(100%, 0, 0);
  }
}

</style>
