<template>
<!-- <div v-if="errMsg" class="text-center text-bold font-weight-bold text-muted">{{errMsg}}</div> -->
      <!-- <Suspense v-else>  -->
      <Suspense> 
    <template #default>
            <Card9InfoCards2Suspense />
    </template>
    <template #fallback>
            <Card9InfoCardSuspensionSkeleton />
    </template>
  </Suspense>
</template>
<script>
// import { onErrorCaptured } from 'vue-demi'
// import { ref } from 'vue'
import Card9InfoCards2Suspense from './Card9MainSuspense/Card9InfoCards2Suspense.vue'
import Card9InfoCardSuspensionSkeleton from './Card9MainSuspense/Card9InfoCardSuspensionSkeleton.vue'
export default{
    name:"Card9RootSuspense",
    components:{
        Card9InfoCards2Suspense,
        Card9InfoCardSuspensionSkeleton
    },

    // setup(){
    //   const errMsg = ref("");
    //   onErrorCaptured((err)=>{
    //     errMsg.value = `"cannot load the cardss" ${err}`
    //   })
    //   return{errMsg}
    // }
}
</script>
<style scoped>

</style>