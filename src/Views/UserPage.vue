<template>
  <div class="user-profile">
    <div class="profile-header">
      <h2 class="profile-name" style="font-size: 44px">Dane użytkownika</h2>
    <div style="text-align: left;font-size: 30px">
      <ul class="user-list">
        <li>
          <strong>Imię:</strong> {{ user.firstName }}
        </li>
        <li>
          <strong>Nazwisko:</strong> {{ user.lastName }}
        </li>
      <li>
        <strong>Email:</strong> {{ user.email }}
      </li>
    </ul>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserPage",
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const token = localStorage.getItem('token');
      await axios.get('http://localhost:4000/api/users',{
        headers: {
          Authorization: `${token}`
        }})
          .then(response => {
            this.user = response.data;
          })
          .catch(error => {
            if(error.response && error.response.status === 401){
              this.$router.push('/');
            }
            console.error(error);
          });
    }
  }
}
</script>

<style scoped>
.user-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.user-list li {
  margin-bottom: 10px;
}
.user-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.profile-header {
  margin-bottom: 30px;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.profile-name {
  font-size: 28px;
  margin: 10px 0;
}

.profile-bio {
  font-size: 18px;
  color: #666666;
}

.section-title {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>