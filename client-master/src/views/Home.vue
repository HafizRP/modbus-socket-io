<template>
  <div class="pt-5">
    <div class="container">
      <!-- <HelloWorld class="" /> -->
      <Login />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Login,
    HelloWorld,
  },
};
</script>
