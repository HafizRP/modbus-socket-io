<template>
  <div>
    <div class="container-fluid">
      <div class="">
        <div
          id=""
          class="container-fluid"
          style="position: relative; width: 848px; height: 598px; z-index: 0"
        >
          <img
            src="../assets/reaktor.png"
            id=""
            class="img-fluid mt-4 rounded"
            alt=""
            focusable="false"
          />

          <!-- Temperature -->
          <div class="vl"></div>
          <span class="centered-noborder temptext text-center"
            >Temperature</span
          >
          <h4 class="centered text-body temp text-center">
            {{ reaktor.temp }} °C
          </h4>

          <!-- Pressure -->
          <div class="v2">
            <p class="centered-noborder presstext text-center">Pressure</p>
            <h4 class="centered text-body press text-center">
              {{ reaktor.press }} Bar
            </h4>
          </div>

          <!-- Indicators
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
        /> -->

          <!-- Buttons -->
          <div>
            <!-- CCWR -->
            <button
              v-bind:class="ccwr ? 'btn-success btn-sm' : 'btn-danger btn-sm'"
              style="position: absolute; left: 80px; top: 15px; z-index: 4"
              disabled
            >
              {{ ccwr ? "Open" : "Close" }}
            </button>

            <!-- CW-R -->
            <button
              v-bind:class="cwr ? 'btn-success btn-sm' : 'btn-danger btn-sm'"
              style="position: absolute; left: 80px; top: 120px; z-index: 1"
              disabled
            >
              {{ cwr ? "Open" : "Close" }}
            </button>

            <!-- STEAM -->
            <button
              v-bind:class="steam ? 'btn-success btn-sm' : 'btn-danger btn-sm'"
              style="position: absolute; left: 125px; top: 220px; z-index: 1"
              disabled
            >
              {{ steam ? "Open" : "Close" }}
            </button>

            <!-- STEAM LED -->
            <button
              v-bind:class="
                steamIndicator ? 'btn-success btn-sm' : 'btn-danger btn-sm'
              "
              style="position: absolute; left: 208px; top: 230px; z-index: 1"
              disabled
            >
              {{ steamIndicator ? "On" : "Off" }}
            </button>

            <!-- CW -->
            <button
              v-bind:class="cw ? 'btn-success btn-sm' : 'btn-danger btn-sm'"
              style="
                position: absolute;
                right: 250px;
                bottom: 225px;
                z-index: 3;
              "
              disabled
            >
              {{ cw ? "Open" : "Close" }}
            </button>

            <!-- CW LED -->
            <button
              v-bind:class="
                cwIndicator ? 'btn-success btn-sm' : 'btn-danger btn-sm'
              "
              style="
                position: absolute;
                right: 180px;
                bottom: 170px;
                z-index: 3;
              "
              disabled
            >
              {{ cwIndicator ? "On" : "Off" }}
            </button>

            <!-- CCW -->
            <button
              v-bind:class="ccw ? 'btn-success btn-sm' : 'btn-danger btn-sm'"
              style="
                position: absolute;
                right: 137px;
                bottom: 260px;
                z-index: 3;
              "
              disabled
            >
              {{ ccw ? "Open" : "Close" }}
            </button>

            <!-- CcW LED -->
            <button
              v-bind:class="
                ccwIndicator ? 'btn-success btn-sm' : 'btn-danger btn-sm'
              "
              style="position: absolute; right: 80px; bottom: 170px; z-index: 3"
              disabled
            >
              {{ ccwIndicator ? "On" : "Off" }}
            </button>

            <!-- DRAIN 1 -->
            <button
              v-bind:class="drain ? 'btn-success btn-sm' : 'btn-danger btn-sm'"
              style="
                position: absolute;
                right: 115px;
                bottom: 105px;
                z-index: 3;
              "
              disabled
            >
              {{ drain ? "Open" : "Close" }}
            </button>

            <!-- DRAIN 2 -->
            <button
              v-bind:class="drain2 ? 'btn-success btn-sm' : 'btn-danger btn-sm'"
              style="position: absolute; right: 160px; bottom: 0px; z-index: 2"
              disabled
            >
              {{ drain2 ? "Open" : "Close" }}
            </button>

            <button
              v-bind:class="
                ccwIndicator ? 'btn-success btn-sm' : 'btn-danger btn-sm'
              "
              style="position: absolute; right: 73px; bottom: 50px; z-index: 3"
              disabled
            >
              {{ ccwIndicator ? "On" : "Off" }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-danger text-center mt-3" v-if="alert">
      <h4>Connection lost!</h4>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      socket: io("localhost:3000", {
        transports: ["websocket", "polling", "flashsocket"],
      }),
      reaktor: {
        temp: null,
        press: null,
      },
      ccwr: true,
      cwr: true,
      steam: false,
      steamIndicator: false,
      cw: false,
      cwIndicator: false,
      ccw: false,
      ccwIndicator: false,
      drain: true,
      drain2: true,
      drainIndicator: false,
      steamIndicator: true,
      alert: false,
    };
  },
  // computed: {
  //   reaktor() {
  //     return this.$store.getters.reaktor;
  //   },
  // },
  methods: {},

  created() {
    this.socket.on("data1", (data) => {
      this.reaktor.temp = data;
    });

    this.socket.on("data2", (data) => {
      this.reaktor.press = data;
    });
  },
  mounted() {
    this.socket.on("status", (data) => {
      if ("reconnecting..." === data) {
        this.alert = true;
      } else {
        this.alert = false;
      }
    });
  },

  computed: {
    reaktorData() {
      return this.$store.getters.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered {
  position: absolute;
  top: 24%;
  left: 42%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
}
.centered-noborder {
  position: absolute;
  top: 24%;
  left: 42%;
  transform: translate(-50%, -50%);
}

.vl {
  border-left: 2px solid black;
  height: 150px;
  position: absolute;
  left: 42%;
  margin-left: -3px;
  bottom: 54%;
}
.temp {
  position: absolute;
  top: 105px;
  width: 100px;
}
.temptext {
  position: absolute;
  top: 70px;
  width: 100px;
}

.press {
  position: absolute;
  top: -20px;
  width: 100px;
}
.presstext {
  position: absolute;
  top: -50px;
  width: 100px;
}
.v2 {
  border-left: 2px solid black;
  height: 200px;
  position: absolute;
  right: 44%;
  margin-right: -3px;
  top: 75px;
}
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
