<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Moje notatki</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: #791ba5;
  color: white;
  width: auto;
  padding: 5px;
  text-align: center;
}
</style>
