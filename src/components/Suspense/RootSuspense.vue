<template>
      <Suspense>
    <template #default>
            <InfoCards2Suspense />
    </template>
    <template #fallback>
            <InfoCardSuspensionSkeleton />
    </template>
  </Suspense>
</template>
<script>
import InfoCards2Suspense from "./MainSuspense/InfoCards2Suspense.vue"
import InfoCardSuspensionSkeleton from "./MainSuspense/InfoCardSuspensionSkeleton.vue"
export default{
    name:"RootSuspense",
    components:{
        InfoCards2Suspense,
        InfoCardSuspensionSkeleton
    }
}
</script>
<style scoped>

</style>