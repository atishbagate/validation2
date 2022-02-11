<template>
        <ProfileBio class="d-flex float-right"/>
        <ProfileFeed class="d-flex float-left mt-5"/>
        <ProfileImg class="d-flex float-left mt-5  "/>
</template>
<script>
import ProfileBio from '../components/ProfilePage/ProfileBio.vue';
import ProfileFeed from '../components/ProfilePage/ProfileFeed.vue';
import ProfileImg from '../components/ProfilePage/ProfileImg.vue';
export default {
    name:"ProfilePage",
    components:{
        ProfileBio,
        ProfileFeed,
        ProfileImg
    }
}
</script>
<style scoped>
 
</style>