<template>
  <nav>
    <ul>
      <li>
        <div class="a" @click="this.$router.push('/home')">Strona domowa</div>
      </li>
      <li>
        <div class="a" @click="this.$router.push('/allNotes')">Notatki</div>
      </li>
      <li>
        <div class="a" @click="this.$router.push('/user')">Mój profil</div>
      </li>
      <li v-if="ifAuth">
        <div @click="logout" class="a">Wyloguj</div>
      </li>
      <li v-else>
        <div @click="this.$router.push('/login')" class="a">Zaloguj</div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    ifAuth() {
      if (typeof localStorage !== 'undefined') {
        if (localStorage.getItem('token')) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    }
  },
  methods: {
    logout(){
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('token');
      }
      window.location="/"
    },
    }
  }
</script>

<style scoped>
nav {
  background-color: #791ba5;
  padding: 10px;
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-right: 10px;
}

.a {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.a:hover {
  background-color: #610282;
}
</style>