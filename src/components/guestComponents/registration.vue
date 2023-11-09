<template>
  <div class="form">
    <h2>Zarejestruj się</h2>
    <div>
      <input type="text" id="name" v-model="firstname" required placeholder="Imię">
    </div>
    <div>
      <input type="text" id="lastname" v-model="lastname" required placeholder="Nazwisko">
    </div>
    <div>
      <input type="email" id="email" v-model="email" required placeholder="Email">
    </div>
    <div>
      <input type="password" id="password" v-model="password" required placeholder="Hasło">
    </div>
    <button @click="register" class="button secondary">Zarejestruj się</button>
  </div>
</template>

<script>
import axios from "axios";

export default {

  name: "registrationView",
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  },

  methods: {
    validate(){
      const regexText = /^[A-Za-z- ]+$/;
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if(!regexText.test(this.firstname)){
        this.$toast.error("Imię jest niepoprawne!")
        return false;
      } else if (!regexText.test(this.lastname)) {
        this.$toast.error("Nazwisko jest niepoprawne!")
        return false;
      } else if(!regexEmail.test(this.email)){
        this.$toast.error("Email jest niepoprawny!")
        return false;
      } else if(!regexPassword.test(this.password)){
        this.$toast.error("Hasło musi zawierać conajmniej 8 znaków, 1 dużą literę, 1 cyfrę oraz znak specjalny!")
        return false;
      } else {
        return true;
      }
    },

    async register() {
      const url = "http://localhost:4000/api/users"

      if (this.validate()) {
        await axios.post(url, {
          firstName: this.firstname,
          lastName: this.lastname,
          password: this.password,
          email: this.email
        }).then(response => {
          console.log('Successful register:',response.status );
          localStorage.setItem('token', response.data.data);
          window.location = "/home";
          this.$toast.success("Pomyślnie zarejestrowano")
          window.location
        })
            .catch(error => {
              console.error(error);
            });
      }
      }
  }
};
</script>

<style scoped>
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
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
