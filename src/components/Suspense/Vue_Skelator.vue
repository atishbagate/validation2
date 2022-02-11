<template>
<div v-if="errMsg" class="text-center text-bold font-weight-bold text-muted">{{errMsg}}</div>
  <Suspense v-else> 
    <template #default>
            <!-- <Ueskelator /> -->
    </template>
    <template #fallback>
            <UeSkeletorSkelaton />
    </template>
  </Suspense>
</template>
<script>
import { onErrorCaptured } from 'vue-demi'
import { ref } from 'vue'
// import Ueskelator from './Vue_skeletor/Vue_skelator.vue'
import UeSkeletorSkelaton from './Vue_skeletor/Vue_Skeletor_Skelaton.vue'
export default{
    name:"ueSkelator",
    components:{
        // Ueskelator,
        UeSkeletorSkelaton
    },
    setup(){
      const errMsg = ref("");
      onErrorCaptured((err)=>{
        errMsg.value = `"cannot load the cards" ${err}`
      })
      return{errMsg}
    }
}
</script>
<style scoped>

</style>