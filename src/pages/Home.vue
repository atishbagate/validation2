<template>
  <div class="card mt-5 HomePage">
   <hr />
   <Suspense>
    <template #default>
      <Suspensemain />
    </template>
    <template #fallback>
      <Suspensemainskelaton/>   
    </template>
  </Suspense>
    <hr />
    <InfoCards2 />
     <hr />
    <InfoCards />
    <hr />
    <Carasaules />
    <hr />
    <Section1 />
    <hr />
    <Section2 />
    <hr />
    <Section3 />
    <hr />
    <Section4 />
    <hr />
    <Footer />
  </div>
</template>
<script>
import InfoCards from "../components/InfoCards.vue";
import InfoCards2 from "../components/Suspense/InfoCards2.vue";
import Section1 from "../components/Section1.vue";
import Section2 from "../components/Section2.vue";
import Section3 from "../components/Section3.vue";
import Section4 from "../components/Section4.vue";
import Footer from "../components/Footer.vue";
import Carasaules from "../components/Carasaules.vue";
import Suspensemain from "../components/Suspense/Suspensemain.vue"
import Suspensemainskelaton from "../components/Suspense/Suspensemainskelaton.vue"
export default {
  name: "Home",
  components: {
    InfoCards,
    InfoCards2,
    Section1,
    Section2,
    Section3,
    Section4,
    Footer,
    Carasaules,
    Suspensemain,
    Suspensemainskelaton
  },
};
</script>
<style scoped>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
