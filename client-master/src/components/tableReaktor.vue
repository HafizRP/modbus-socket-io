<template>
  <div class="container-fluid">
    <table class="table table-bordered text-center">
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
};
</script>

<style scoped>
/* table {
    margin-top: 120px;
} */
</style>
