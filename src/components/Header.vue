<template>
  <header class="header">
    <div class="menu-conatiner">
      <router-link to="/">
        <span class="logo">OtakuRealm-Logo</span>
      </router-link>
      <div class="menu">
        <router-link to="/" class="menu-link">Home</router-link>
        <router-link to="/about" class="menu-link">About</router-link>
      </div>
    </div>
    <div class="search-bar">
      <input
        type="text"
        class="search-bar-input"
        placeholder="Search Animes here..."
      />
    </div>
    <div class="actions">
      <router-link
        v-if="!$store.state.authenticated"
        to="/login"
        class="menu-link"
        >Sign in/Log in</router-link
      >
    <template v-else>
      <router-link to="/profil" class="menu-link" > Profil </router-link>
      <router-link to="/" class="menu-link" @click="logout"> Log_out </router-link>  
    </template>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout: function () {
      this.$store.dispatch('auth_logout').then(() => {
        this.$router.push("/login");
        console.log('logout');
      });
    },
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  align-items: center;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 24px;
}
.menu {
  display: inline-block;
  margin-left: 16px;
}
.menu-link {
  margin-left: 16px;
  text-decoration: none;
  color: #9e9e9e;
  transition: 300ms ease-in-out;
}

.menu-link:hover {
  color: #fd9330;
}
.logo {
  font-weight: bold;
  font-size: 18px;
  color: #ececec;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-user-select: none;
}

.search-bar-input {
  border-radius: 25px;
  background: #272727;
  border: 2px solid transparent;
  outline: none;
  height: 42px;
  min-width: 520px;
  color: #9e9e9e;
  padding-left: 16px;
  padding-right: 42px;
  transition: 300ms ease-in-out;
}

.search-bar-input:focus {
  border: 2px solid #fd9330;
  background: #111;
}

@media (max-width: 1023px) {
  .search-bar {
    display: none;
  }
}

@media (max-width: 1223px) {
  .search-bar-input {
    min-width: 300px;
  }
}
</style>