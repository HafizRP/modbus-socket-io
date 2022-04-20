<template>
  <div class="container-fluid">
    <form class="form-inline mb-2 text-center">
      <label class="mx-1" for="target">Target : </label>
      <input
        type="text"
        class="mx-1"
        id="target"
        placeholder="1-1000 Pcs"
        v-model="target"
      />
      <button
        type="submit"
        class="btn btn-primary btn-sm mx-1"
        @click.prevent="submit"
      >
        Submit
      </button>
    </form>

    <h4 class="text-center" v-if="dataTarget.Indicator">
      Target Produksi : {{ dataTarget.Numbers }}
    </h4>

    <table class="table table-bordered text-center pt-2">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Reaktor</th>
          <th scope="col">Temperature (°C)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="">1</th>
          <td>Reaktor 1</td>
          <td>{{ reaktor.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">2</th>
          <td>Reaktor 2</td>
          <td>{{ reaktor.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">3</th>
          <td>Reaktor 3</td>
          <td>{{ reaktor.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">4</th>
          <td>Reaktor 4</td>
          <td>{{ reaktor.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">5</th>
          <td>Reaktor 5</td>
          <td>{{ reaktor.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">6</th>
          <td>Reaktor 6</td>
          <td>{{ reaktor.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">7</th>
          <td>Reaktor 7</td>
          <td>{{ reaktor.temp }} °C</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tableReaktor",
  data() {
    return {
      dataTarget: {
        Numbers: null,
        Indicator: false,
      },
      target: null,
    };
  },
  created() {
    this.$store.dispatch("press");
    this.$store.dispatch("status");
  },
  methods: {
    submit() {
      this.dataTarget.Indicator = this.target;
    },
  },
  computed: {
    reaktor() {
      return this.$store.getters.reaktor;
    },
  },
};
</script>

<style scoped>
/* table {
    margin-top: 120px;
} */
</style>
