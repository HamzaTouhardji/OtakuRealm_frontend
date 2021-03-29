<template>
  <div class="signup-box">
    <h1>Sign-up</h1>
    <label for="name">Usurname : </label>
    <div class="text-box">
      <i class="fa fa-user" aria-hidden="true"></i>
      <input
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
        type="password"
        placeholder="Password"
        name="password2"
        v-model="form.password2"
      />
    </div>
    <input
      class="btn"
      type="button"
      name=""
      value="Sign-Up"
      @click="register"
    />
  </div>
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
    register: function () {
      console.log(
        JSON.stringify({
          username: this.form.username,
          password: this.form.password,
          email: this.form.email,
        })
      );

      if (
        (this.form.mail == this.form.mail2) &&
        (this.form.password == this.form.password2)
      ) {
        fetch("http://otakurealm.mooo.com/api/register/", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.form.username,
            password: this.form.password,
            email: this.form.email,
          }),
        })
          .then(
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
          )
          .then(this.connect);
      } else {
        console.log("pas les meme mdp ou mail");
      }
      //animation feedback
    },

    connect: function (response) {
      if (response == null) {
        return null;
      }
      if (response.token != undefined) {
        console.log(response.token); // faire la session et tout
        this.$router.push("/");
      } else {
        console.log("erreur connexion (mauvais mdp ou mail)");
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
  //float: left;
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
</style>