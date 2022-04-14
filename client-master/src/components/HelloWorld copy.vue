<template>
  <div class="container-fluid py-3">
    <div class="bg-light py-4 rounded">
      <div
        id=""
        class="container-fluid"
        style="position: relative; width: 848px; height: 578px; z-index: 0"
      >
        <img src="../assets/reaktor.png" id="" class="img-fluid mt-4" alt="" />

        <!-- Indicators -->
        <img
          v-bind:class="
            ccwr ? 'ccwr indicator bg-success' : 'ccwr indicator bg-danger'
          "
        />
        <img
          v-bind:class="
            cwr ? 'cwr indicator bg-success' : 'cwr indicator bg-danger'
          "
        />
        <img
          v-bind:class="
            drain ? 'drain indicator bg-success' : 'drain indicator bg-danger'
          "
        />
        <img
          v-bind:class="
            drain2
              ? 'drain2 indicator bg-success'
              : 'drain2 indicator bg-danger'
          "
        />

        <!-- Buttons -->
        <button
          v-bind:class="
            ccwr ? 'btn btn-success btn-sm' : 'btn btn-danger btn-sm'
          "
          style="position: absolute; left: 10px; top: 0px; z-index: 4"
          @click="ccwr = !ccwr"
        >
          {{ ccwr ? "Open" : "Close" }}
        </button>

        <!-- CW-R -->
        <button
          v-bind:class="
            cwr ? 'btn btn-success btn-sm' : 'btn btn-danger btn-sm'
          "
          style="position: absolute; left: 10px; top: 110px; z-index: 1"
          @click="cwr = !cwr"
        >
          {{ cwr ? "Open" : "Close" }}
        </button>

        <!-- DRAIN 1 -->
        <button
          v-bind:class="
            drain ? 'btn btn-success btn-sm' : 'btn btn-danger btn-sm'
          "
          style="position: absolute; right: 105px; bottom: 90px; z-index: 3"
          @click="drain = !drain"
        >
          {{ drain ? "Open" : "Close" }}
        </button>

        <!-- DRAIN 2 -->
        <button
          v-bind:class="
            drain2 ? 'btn btn-success btn-sm' : 'btn btn-danger btn-sm'
          "
          style="position: absolute; right: 50px; bottom: 30px; z-index: 2"
          @click="drain2 = !drain2"
        >
          {{ drain2 ? "Open" : "Close" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      ccwr: true,
      cwr: true,
      drain: true,
      drain2: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indicator {
  width: 15px;
  height: 15px;
  border-radius: 100px;
}
.ccwr {
  position: absolute;
  left: 120px;
  top: 30px;
  z-index: 4;
}
.cwr {
  position: absolute;
  left: 120px;
  top: 135px;
  z-index: 1;
}
.drain {
  position: absolute;
  right: 200px;
  bottom: 85px;
  z-index: 3;
}
.drain2 {
  position: absolute;
  right: 200px;
  bottom: 30px;
  z-index: 2;
}
</style>
