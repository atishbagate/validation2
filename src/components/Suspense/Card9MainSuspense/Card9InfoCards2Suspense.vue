<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-12 col-sm-6 col-lg-4" v-for="item in userInfo" v-bind:key="item.title">
                <div class="card custom_card shadow rounded m-2">
                      <img class="img-fluid rounded d-block  float-right card-img-top" :src="item.img" alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                         <p class="card-text"> {{ item.info }}
                        </p> <p class="card-text"> <small class="text-muted">Last updated 3 mins ago</small> </p>
                        <a href="#" class="btn btn-primary btn-md active" role="button" aria-pressed="true" >View Details</a>
                        <a href="#" class="btn btn-secondary btn-md active" style="margin-left:10px;" role="button" aria-pressed="true">Brochure</a>
                      </div>
                </div>
          </div>
      </div>
  </div>
</template>
<script>
import axios from "axios"; 
import { ref } from 'vue';
// const loadData = async() =>{
//   return new Promise((resolve)=>{
//     setTimeout(() => {
//           resolve(
//       axios.get("http://localhost:3000/events")
//       .then((resolve) => {
//         console.log(resolve.data);
//         // alert(JSON.stringify(resolve.data))
//         return resolve.data;
//       })
//   )
//     },2000);
//   })
// }
export default {
  name: "Card9InfoCards2Suspense",
  async setup(){
   try {
      // const userInfo = ref(await loadData())
    const userInfo = ref(await  axios.get("http://localhost:3000/events")
                      .then((response)=>{
                            console.log(response.data);
                            return(response.data);
                          }));
    // const op = userInfo._rawValue;
    // console.log(userInfo);
    // console.log(op);
      return{userInfo}
   } catch (error) {
     console.log(`this is the catched error we get ${error}`);
   }
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

 