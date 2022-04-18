<template>
  <div class="container-fluid">
    <form class="form-inline">
      <label class="pr-1 pb-1" for="target">Target : </label>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="target"
        placeholder="1-1000 Pcs"
        v-model="target"
      />
      <button
        type="submit"
        class="btn btn-primary mb-2"
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
          <td>{{ this.$store.state.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">2</th>
          <td>Reaktor 2</td>
          <td>{{ this.$store.state.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">3</th>
          <td>Reaktor 3</td>
          <td>{{ this.$store.state.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">4</th>
          <td>Reaktor 4</td>
          <td>{{ this.$store.state.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">5</th>
          <td>Reaktor 5</td>
          <td>{{ this.$store.state.temp }} °C</td>
        </tr>
        <tr>
          <th scope="">6</th>
          <td>Reaktor 6</td>
          <td>{{ this.$store.state.temp }} °C</td>
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
  created() {},
  methods: {
    submit() {
      this.dataTarget.Indicator = this.target;
    },
  },
};
</script>

<style scoped>
/* table {
    margin-top: 120px;
} */
</style>
