<template>
  <div>
    <div class="form">
      <h2>Zaloguj się</h2>
      <div>
        <input type="email" id="email" v-model="email" required placeholder="Email">
      </div>
      <div>
        <input type="password" id="password" v-model="password" required placeholder="Hasło">
      </div>
      <button @click="login" class="button primary" >Zaloguj się</button>
      <button @click="this.$router.push('/register')" class="button secondary" style="margin-top: 20px">Zarejestruj się</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "loginView",
  data() {
    return {
      email: '',
      password: ''
    };
  },

  methods: {
    validate(){
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(!regexEmail.test(this.email)){
        this.$toast.error("Email jest niepoprawny!")
        return false;
      } else if(!regexPassword.test(this.password)){
        this.$toast.error("Hasło musi zawierać conajmniej 8 znaków, 1 dużą literę, 1 cyfrę oraz znak specjalny!")
        return false;
      } else {
        return true;
      }
    },

    async login() {
      const url = "http://localhost:4000/api/auth"

      if(this.validate()) {
        axios.post(url, {email: this.email, password: this.password})
            .then(response => {
              console.log(response)
              localStorage.setItem("token", response.data.data)
              window.location = "/home"
              this.$toast.success("Pomyślnie zalogowano")
            })
            .catch(error => {
              if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log(error.response.data.message);
                this.$toast.error("Niepoprawne dane logowania!")
              } else {
                console.log("Wystąpił błąd podczas odbierania odpowiedzi.");
                // Dodaj dodatkowe działania w przypadku braku odpowiedzi
              }
            });
      }
    }
  }
};
</script>


<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
h2 {
  font-size: 28px;
  color: #791ba5;
  font-family: "Lato";
  text-align: center;
  padding: 10px;
  border-radius: 10px;
}

.form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

label {
  font-size: 18px;
}

input {
  padding: 8px ;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>