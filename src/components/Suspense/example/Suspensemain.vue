<template>
 <div class="profile-card">
     <div class="card-body">
         <h2 class="profile-name">name: {{userData.name}}</h2>
         <p class="profile-info">info: {{userData.info}}</p>
     </div>
 </div>
 
</template>
<script> 
    import { ref } from "vue";

    const loadData = async () => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
         resolve({
                name:"Suspension loader",
                info:" Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, velscelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
                 })
            },2000)
        })
    }
export default{
    name:"Suspense",
    async setup(){
        const userData = ref(await loadData())
        return {userData};
   }

}
</script>
<style scoped>
.profile-card{
    width: 100%;
    max-width: 700px;
    min-height: 200px;
    /* width: 700px;
    height: 200px; */
    background: white;
    margin: 0 auto; 
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
    border: 2px solid blue;
}
.profile-info{
width: 85%;
line-height: 140%;
color: #787;
}
.profile-name{
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #222;
}
</style>
