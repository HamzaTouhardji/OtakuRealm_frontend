<template>
  <form name="form">
    <div class="signup-box">
      <h1>Sign-up</h1>
      <label for="name">Usurname : </label>
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
      <label for="name">Email : </label>
      <div class="text-box">
        <i class="fa fa-send" aria-hidden="true"></i>
        <input
          id="email"
          type="email"
          placeholder="OtakuRealm@mail.com"
          name="email"
          v-model="form.email"
        />
      </div>
      <label for="name">Confirm your email : </label>
      <div class="text-box">
        <i class="fa fa-send" aria-hidden="true"></i>
        <input
          id="email2"
          type="email"
          placeholder="OtakuRealm@mail.com"
          name="email2"
          v-model="form.email2"
        />
      </div>
      <label for="name">Password: </label>
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
      <label for="name">Confirm your password : </label>
      <div class="text-box">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input
          id="password2"
          type="password"
          placeholder="Password"
          name="password2"
          v-model="form.password2"
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
          value="Sign-Up"
          @click="register"
        />
      </div>
    </div>
  </form>
</template>
 
<script>
export default {
  name: "Signup",
  data() {
    return {
      form: {
        username: "",
        password: "",
        password2: "",
        email: "",
        email2: "",
      },
    };
  },

  methods: {
    async register() {
      var username = document.forms["form"]["username"];
      var password = document.forms["form"]["password"];
      var email = document.forms["form"]["email"];
      var password2 = document.forms["form"]["password2"];
      var email2 = document.forms["form"]["email2"];
      if (
        username.value == "" ||
        password.value == "" ||
        password2.value == "" ||
        email.value == "" ||
        email2.value == ""
      ) {
        console.log("remplir champs");
        this.$store.state.alert = "champ(s) non rempli(s)";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("password2").value = "";
        document.getElementById("email").value = "";
        document.getElementById("email2").value = "";
      } else {
        if (
          this.form.email == this.form.email2 &&
          this.form.password == this.form.password2
        ) {
          this.$store.dispatch("load");
          await fetch("http://otakurealm.mooo.com/api/register/", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.form.username,
              password: this.form.password,
              email: this.form.email,
            }),
          }).then(
            function (response) {
              if (response.status === 200) {
                return response.json();
              } else {
                console.log("erreur requete");
                return null;
              }
            },
            function (err) {
              console.log("err", err);
            }
          );
          this.$store.dispatch("getToken", {
            username: this.form.username,
            password: this.form.password,
            router: this.$router,
          });
          this.$store.dispatch("load");
        } else {
          this.$store.state.alert =
            "La confirmation du mot de pass ou du mail est incorrect";
          console.log(
            "La confirmation du mot de pass ou du mail est incorrect"
          );
        }
      }
    },
  },
};
</script>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.signup-box {
  width: 280px;
  margin: auto;
  color: white;
}

.signup-box h1 {
  font-size: 40px;
  border-bottom: 6px solid #c03a6d;
  margin-bottom: 50px;
  padding: 13px 0px;
}

.error {
  color: rgb(211, 59, 59);
  font-weight: bold;
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