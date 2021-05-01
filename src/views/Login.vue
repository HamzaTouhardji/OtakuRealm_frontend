<template>
  <div class="login">
    <div class="featured">
      <div class="featured-vertical">
        <div class="featured-horizontal">
          <div class="featured-content">
            <div class="form">
              <Log v-if="login" />
              <Signup v-else />
            </div>
            <div class="btn-area">
              <button class="btn" type="button" @click="isVisible" v-if="login">
                Create account
              </button>
              <button class="btn" type="button" @click="isVisible" v-else>
                Log-in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Log from "../components/Log.vue";
import Signup from "../components/Signup.vue";
export default {
  name: "Login",
  data: function () {
    return {
      login: true,
    };
  },
  components: {
    Log,
    Signup,
  },
  methods: {
    isVisible() {
      this.login = !this.login;
      this.$store.state.alert=""
    },
  },
};
</script>

<style scoped>
.featured {
  height: calc(100vh);
  background-size: cover;
  background-position: center;
  background-image: url(https://images5.alphacoders.com/111/1116284.jpg);
}

.featured-vertical {
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
}

.featured-horizontal {
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 10%, transparent 70%);
}

.btn {
  background: none;
  border: none;
  color: rgb(131, 131, 131);
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-left: 50%;
  margin-top: 20px;
  transform: translate(-50%);
}

.form {
  padding-top: 100px;
}
</style>