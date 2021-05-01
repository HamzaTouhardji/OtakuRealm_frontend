<template>
  <form name="form">
    <div class="login-box">
      <h1>Login</h1>
      <div class="text-box">
        <i class="fa fa-user" aria-hidden="true"></i>
        <input
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          v-model="form.username"
        />
      </div>
      <div class="text-box">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          v-model="form.password"
        />
      </div>

      <span
        v-if="$store.state.loading"
        class="lds-dual-ring"
        :key="$store.state.loading"
      ></span>
      <div v-else>
        <span class="error" id="errorname">{{ $store.state.alert }}</span>
        <input
          class="btn"
          type="button"
          name=""
          value="Log-in"
          @click="login"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Log",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      var username = document.forms["form"]["username"];
      var password = document.forms["form"]["password"];
      if (username.value == "" || password.value == "") {
        console.log("remplir champs");
        this.$store.state.alert = "champ(s) non rempli(s)";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      } else {
        this.$store.dispatch("getToken", {
          username: this.form.username,
          password: this.form.password,
          router: this.$router,
        });
      }
    },

    //animation feedback
  },
};
</script>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.login-box {
  width: 280px;
  margin: auto;
  color: white;
}

.error {
  color: rgb(211, 59, 59);
  font-weight: bold;
}

.login-box h1 {
  font-size: 40px;
  border-bottom: 6px solid #c03a6d;
  margin-bottom: 50px;
  padding: 13px 0px;
}

.text-box {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #c03a6d;
}

.text-box i {
  width: 26px;
  float: left;
  text-align: center;
}

.text-box input {
  border: none;
  outline: none;
  background: none;
  color: white;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}

.btn {
  width: 100%;
  background: none;
  border: 2px solid #c03a6d;
  color: white;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0;
}

.lds-dual-ring {
  text-align: center;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-left: 40%;
}
.lds-dual-ring:after {
  text-align: center;
  content: " ";
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>