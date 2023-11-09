<template>
  <div class="home">
    <header>
      <h1>Witaj w aplikacji do tworzenia notatek!</h1>
      <p>Organizuj swoje pomysły, zadania i notatki w jednym miejscu.</p>
    </header>
    <section class="functions">
      <h2>Funkcje aplikacji:</h2>
      <ul>
        <li>Szybko twórz i edytuj notatki</li>
        <li>Organizuj notatki nadając im priorytet</li>
      </ul>
      <div class = "buttons">
        <button @click="this.$router.push('login')" class="button primary">Zaloguj się</button>
        <button @click="this.$router.push('/register')" class="button secondary">Zarejestruj się</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "guestLayout"
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

}
.functions {
  border: 2px solid black;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background: #ffffff;
}
.functions h2{
  text-align: center;
}
header h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
  font-family: "Lato";
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
  background: #791ba5;
}

header p {
  font-size: 18px;
  color: #666666;
  margin-bottom: 40px;
  text-align: center;
}

section {
  margin-bottom: 60px;
}

section h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

section ul {
  list-style-type: circle;
  margin-left: 0;
  margin-bottom: 10px;
}

section li {
  font-size: 18px;
  color: #333333;
  margin-bottom: 10px;
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.buttons .button {
  margin-bottom: 10px;
}
</style>