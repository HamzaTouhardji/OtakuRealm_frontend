<template>
  <div class="login-box">
    <h1>Login</h1>
    <div class="text-box">
      <i class="fa fa-user" aria-hidden="true"></i>
      <input type="text" placeholder="Username" name="" value="" />
    </div>
    <div class="text-box">
      <i class="fa fa-lock" aria-hidden="true"></i>
      <input type="password" placeholder="Password" name="" value="" />
    </div>
    <input class="btn" type="button" name="" value="Log-in" />
  </div>
</template>

<script>
export default {
  name: "Log",
};
</script>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.login-box {
  width: 280px;
  margin: auto;
  color: white;
}

.login-box h1 {
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