<template>
  <div class="my-2 mx-0">
    <div class="row my-5 mx-0 justify-content-md-center">
      <div class="col-lg-auto col-md-auto">
        <HelloWorld />
      </div>
      <div class="col-lg col-md">
        <div class="mt-5">
          <TableReaktor />
        </div>

        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import TableReaktor from "@/components/tableReaktor.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    HelloWorld,
    TableReaktor,
    Navbar,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.about {
  margin-top: 50px;
}
</style>
