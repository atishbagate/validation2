<template>
  <nav class="navbar navbar-expand-md  navbar-dark fixed-top bg-dark">
    <router-link class="navbar-brand " to="/Home">Car Collections</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item active">
          <router-link class="nav-link" to="/Home">Home</router-link>
        </li>
        <!-- <li class="nav-item ">
          <router-link class="nav-link" to="/Registration"
            >Registration</router-link>
        </li> -->
        <li class="nav-item ">
          <router-link class="nav-link" to="/Signup">Signup</router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/AboutUs">About Us</router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/ProfilePage">Profile Page</router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/ParentChild">Parent Child props exchange</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App",
};
</script>
<style scoped>

</style>
