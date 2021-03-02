<template>
  <div class="login">
        <div class="featured">
            <div class="featured-vertical">
                <div class="featured-horizontal">
                    <div class="featured-content">
                      <Log/>
                      <Signup/>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Log from '../components/Log.vue'
import Signup from '../components/Signup.vue'
export default {
    name: "Login",
    data: function() {
      return {
        signin:false
      }
    },
    components: {
      Log,
      Signup
    }
}
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

</style>