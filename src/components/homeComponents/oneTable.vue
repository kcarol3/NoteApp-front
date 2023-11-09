<template>
<section>
  <h2>
    {{table}}
  </h2>

  <div class="notes" v-for="p in displayedPosts" :key="p.id" :style="`box-shadow: 10px 10px 10px ${background}; border-color: ${background}`">
    <note-component :note="p"></note-component>
  </div>
  <div class = navbar>
    <button type="button" class="page-link" v-if="page !== 1" @click="page--"> Previous </button>
    <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+2)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
    <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
  </div>
</section>
</template>
<script>
import NoteComponent from "@/components/homeComponents/note";

export default {
  name: "oneTable",
  components: {NoteComponent},
  props:{
    background: String,
    table: String,
    notes: {
      type: Array
    },
  },
  data () {
    return {
      page: 1,
      perPage: 2,
      pages: [],
    }
  },

  methods:{
    setPages () {
      let numberOfPages = Math.ceil(this.notes.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (notes) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      if(notes === undefined){
        return [];
      }
      return  notes.slice(from, to);
    }
  },
  computed: {
    displayedPosts () {
      return this.paginate(this.notes);
    }
  },
  watch: {
    notes: {
      immediate: true,
      handler() {
        this.setPages();
      }
    }
  },
}
</script>

<style scoped>
.notes {
  border-radius: 10px;
  margin: 20px 20px 30px 20px;
  transition: transform 0.5s;
}
.notes:hover {
  transform: scale(1.7);
  box-shadow: 40px 40px 40px black;
  border: 3px solid;
}
.notes:hover :not(.notes) {
  transform: scale(1);
}

section {
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 10px 10px 20px grey;
  margin: 25px;
  width: 360px;
}
.navbar {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
button.page-link {
  display: flex;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset{
  width: 500px;
  margin: 20px auto;
}
</style>