<template>
<div v-if="errMsg" class="text-center text-bold font-weight-bold text-muted">{{errMsg}}</div>
      <Suspense v-else> 
    <template #default>
            <InfoCards2Suspense />
    </template>
    <template #fallback>
            <InfoCardSuspensionSkeleton />
    </template>
  </Suspense>
</template>
<script>
import { onErrorCaptured } from 'vue-demi'
import { ref } from 'vue'
import InfoCards2Suspense from "./MainSuspense/InfoCards2Suspense.vue"
import InfoCardSuspensionSkeleton from "./MainSuspense/InfoCardSuspensionSkeleton.vue"
export default{
    name:"RootSuspense",
    components:{
        InfoCards2Suspense,
        InfoCardSuspensionSkeleton
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