<template>
  <div class="my-3">
    <div class="container bg">
      <img
        src="../assets/reaktor.svg"
        class="img-responsive reaktor"
        alt=""
        width="90%"
        srcset=""
      />
      <img class="I bottom-right bg-secondary" />
      <img class="I bottom-right2 bg-danger" />
      <img class="I top-left bg-primary text-left" />
      <img class="I top-left2 bg-danger" />
    </div>

    <section class="container">
      <div class="row y-2">
        <div class="col-12 col-md-6 py-2">
          <button class="btn btn-success btn-lg btn-block">1</button>
        </div>
        <div class="col-12 col-md-6 py-2">
          <button class="btn btn-success btn-lg btn-block">CCWA</button>
        </div>
        <div class="col-12 col-md-6 py-2">
          <button class="btn btn-success btn-lg btn-block">CCWA</button>
        </div>
        <div class="col-12 col-md-6 py-2">
          <button class="btn btn-success btn-lg btn-block">CCWA</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Reaktor",
  data() {
    return {
      ccwa: false,
    };
  },
};
</script>

<style scoped>
.bg {
  position: relative;
  text-align: center;
  color: white;
}
.reaktor {
  width: 100% \9;
}
.I {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.top-left {
  position: absolute;
  /* top: 35px;
  left: 305px; */
  z-index: 9;
}

.top-left2 {
  position: absolute;
  top: 170px;
  left: 302px;
}

.bottom-right {
  position: absolute;
  bottom: 150px;
  right: 390px;
}
.bottom-right2 {
  position: absolute;
  bottom: 215px;
  right: 390px;
}
</style>
