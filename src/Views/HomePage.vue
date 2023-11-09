<template>
  <div class = "home">
  <header>
    <h1>Witaj, {{ username }}!</h1>
    <p>Organizuj swoje notatki w jednym miejscu.</p>
  </header>
  <div class="container">
    <section class="notes">
      <h2>Ostatnia notatka</h2>
      <div v-if="note !== null">
        <note-component :note="note"></note-component>
      </div>
      <div v-else>
        <h3>Brak notatek</h3>
      </div>
    </section>
    <section class="add-note">
      <h2>Dodaj nową notatkę:</h2>
      <form @submit.prevent="addNote">
        <input type="text" v-model="newNoteTitle" placeholder="Tytuł notatki" />
        <textarea name="myNote" v-model="newNoteContent" rows="5"  placeholder="Wpisz swoją notatkę"></textarea>
        <label>
          <input type="radio" value="low" v-model="priority" /> Niski priorytet
        </label>
        <label>
          <input type="radio" value="medium" v-model="priority" /> Średni priorytet
        </label>
        <label>
          <input type="radio" value="high" v-model="priority" /> Wysoki priorytet
        </label>
        <button class = "button primary" type="submit">Dodaj</button>
      </form>
    </section>
  </div>
  </div>
</template>

<script>
import NoteComponent from "@/components/homeComponents/note";
import axios from "axios";

export default {
  name: "HomePage",
  components: { NoteComponent},
  data() {
    return {
      username: "John",
      note: null,
      priority: "low",
      newNoteTitle: "",
      newNoteContent: "",
    };
  },
  methods: {
    async addNote() {
      const url = "http://localhost:4000/api/note"
      const token = localStorage.getItem('token');
      axios.post(url, {
        title: this.newNoteTitle,
        content: this.newNoteContent,
        priority: this.priority,
      },{
        headers: {
          Authorization: `${token}`
        }})
          .then(response => {
            console.log(response)
            this.$toast.success("Dodano notatkę.")
            this.fetchData()
          })
          .catch(error => {
            console.error(error);
            this.$toast.error("Wystąpił błąd przy dodawaniu!")
          });
    },
    async getName(){
      const token = localStorage.getItem('token');
      await axios.get('http://localhost:4000/api/users',{
        headers: {
          Authorization: `${token}`
        }})
          .then(response =>{
            console.log(response.data)
            this.username = response.data.firstName
          })
          .catch(error => {
            console.error(error);
          });
    },

    async fetchData() {
      const token = localStorage.getItem('token');
      await axios.get('http://localhost:4000/api/note',{
        headers: {
          Authorization: `${token}`
        }})
          .then(response => {
            this.note = response.data;
          })
          .catch(error => {
            if(error.response && error.response.status === 401){
              this.$router.push('/');
            }
            console.error(error);
          });
    }
  },
  created() {
    this.fetchData();
    this.getName();
  },
};
</script>

<style scoped>
.home {
  max-width: 80%;
  margin: 0;
  padding: 20px;
  text-align: center;
}
.container{
  display: flex;
  flex-direction: row;
}
header h1 {
  font-size: 46px;
  margin-bottom: 20px;
  color: #791ba5;
}

header p {
  font-size: 22px;
  color: #666666;
  margin-bottom: 40px;
}
section{
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  box-shadow: 10px 10px 20px grey;
}


section.notes h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333333;
}

section.notes ul{
  list-style: none;
  padding: 5px;
}

section.notes li {
  margin-bottom: 20px;
  box-shadow: 5px 5px 10px grey;
}

section.add-note{
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  align-content: center;
}

section.add-note h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333333;
}

section.add-note form input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
}
section.add-note textarea{
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

section.add-note form button:hover {
  background-color: #610282;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
