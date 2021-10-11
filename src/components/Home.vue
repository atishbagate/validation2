<template>
    <div class="card mt-5" >
        <h2>this is home Component</h2> 
        <Footer />
    </div>
</template>
<script>
import Footer from './Footer.vue'
export default {
  name: 'Home',
  components:{
      Footer
  }

}
</script>
<style scoped>

</style>