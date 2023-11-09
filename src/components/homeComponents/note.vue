<template>
  <div class="content">
    <div v-if="selectedNote">
      <h3>Edytuj notatkę</h3>
      <div class="content">
        <input v-model="editedNote.title" type="text" placeholder="Tytuł"/>
        <textarea v-model="editedNote.content" placeholder="Treść"></textarea>
        <button class="button primary" type="submit" @click="editNote">Zapisz</button>
      </div>
    </div>
    <div v-else>
      <h3>{{ note.title }}</h3>
      <div class="text" v-if="!afterUpdate">{{ note.content }}</div>
      <div class="text" v-if="afterUpdate">{{ currentNote.content }}</div>
      <div class="date" v-if="!afterUpdate">{{ note.dateAdded }}</div>
      <div class="date" v-if="afterUpdate">{{ currentNote.dateAdded }}</div>
      <button class="button primary" type="submit" style="margin: 5px; width: 60px; text-align: center" @click="openEditForm"><i
          class="fas fa-edit"></i></button>
      <button @click="deleteNote" class="button primary" style="margin: 5px; width:60px; background-color: red"><i class="fas fa-trash" ></i>
      </button>
    </div>
  </div>
</template>

<script>

import axios from "axios";


export default {
  name: "noteComponent",

  props: {
    note: {
      type: Object,
    },
  },

  data() {
    return {
      currentNote: this.note,
      selectedNote: false,
      afterUpdate: false,
      show: false,
      editedNote: {
        id: null,
        title: "",
        content: "",
      },
    }
  },

  methods: {
    async deleteNote() {
      const url = `http://localhost:4000/api/note/${this.note._id}`;
      const token = localStorage.getItem("token");

      try {
        const response = await axios.delete(url, {
          headers: {
            Authorization: token,
          },
        });

        console.log(response);
        this.$toast.success("Notatka została usunięta.");
        location.reload();
      } catch (error) {
        console.error(error);
        this.$toast.error("Wystąpił błąd podczas usuwania notatki!");
      }
    },

    openEditForm() {
      this.selectedNote = !this.selectedNote
      this.editedNote._id = this.note._id
      this.editedNote.title = this.note.title
      this.editedNote.content = this.note.content
    },

    cancel() {
      this.selectedNote = !this.selectedNote
      this.selectedNote = false;
      this.editedNote.title = '';
      this.editedNote.content = '';
    },

    async editNote() {
      const url = `http://localhost:4000/api/note/${this.editedNote._id}`
      const token = localStorage.getItem('token');

      axios.put(url, {
        title: this.editedNote.title,
        content: this.editedNote.content,
      }, {
        headers: {
          Authorization: `${token}`
        }
      })
          .then(response => {
            console.log(response)
            this.selectedNote = !this.selectedNote
            this.$toast.success("Zedytowano notatkę.")
            this.currentNote.title = this.editedNote.title
            this.currentNote.content = this.editedNote.content
            this.afterUpdate = true
          })
          .catch(error => {
            console.error(error);
            this.$toast.error("Wystąpił błąd przy edycji!")
          });
    },
  },
}
</script>

<style scoped>


.content {
  background-color: #F0E68C;
  padding: 0px 10px 10px 10px;
  border-radius: 8px;
  display: flex;
  max-width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Permanent Marker', cursive;
  text-align: center;
  background-image:
      linear-gradient(#fffdf0 1px, transparent 3px);
  background-size: 30px 30px;

}

input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
}

textarea {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

h3 {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 22px;
}

.text {
  font-size: 22px;
  margin-bottom: 10px;
}

.date {
  font-size: 16px;
  color: #888888;
}
</style>



