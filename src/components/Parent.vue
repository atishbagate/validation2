<template>
    <h2 class="mt-5">this is parent here data will change</h2>
    <br>
      <h3>this is the life cycle Implementation code.</h3>
     <div id="child">
         <br/>
         <br/>
         <Child />
     </div>
</template>
<script> 
import Child from './Child.vue'
export default {
    name:"Parent",
    components:{ 
        Child },
 
}
</script>
<style scoped>

</style>