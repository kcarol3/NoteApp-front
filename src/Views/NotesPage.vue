<template>
  <div class="container">
    <h2>Twoje wszystkie notatki</h2>
    <div class="notes" v-if="notes.length > 0">
      <one-table :table="'Ważne notatki'" :notes="highPriorityNotes" :background="'#e06631'"
                 :fetchData="fetchData"></one-table>
      <one-table :table="'Mniej ważne notatki'" :notes="mediumPriorityNotes" :background="'#fed578'"
                 :fetchData="fetchData"></one-table>
      <one-table :table="'Mało ważne notatki'" :notes="lowPriorityNotes" :background="'#7fd7f0'"
                 :fetchData="fetchData"></one-table>
    </div>
    <div v-else>
      <h2>Brak Twoich notatek</h2>
    </div>
  </div>
</template>

<script>

import OneTable from "@/components/homeComponents/oneTable";
import axios from "axios";

export default {
  components: {OneTable},
  data() {
    return {
      notes: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {


    async fetchData() {
      const token = localStorage.getItem('token');
      await axios.get('http://localhost:4000/api/note/all', {
        headers: {
          Authorization: `${token}`
        }
      })
          .then(response => {
            console.log(response.data);
            this.notes = response.data;
          })
          .catch(error => {
            if(error.response && error.response.status === 401){
              this.$router.push('/');
            }
            console.error(error);
          });
    }
  },
  computed: {
    highPriorityNotes() {
      return this.notes.filter(note => note.priority === 'high');
    },
    mediumPriorityNotes() {
      return this.notes.filter(note => note.priority === 'medium');
    },
    lowPriorityNotes() {
      return this.notes.filter(note => note.priority === 'low');
    },
  }
};
</script>

<style scoped>
.notes {
  display: flex;
  flex-direction: row;
  min-height: 700px;
}

.container {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 34px;
}


</style>