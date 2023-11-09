<template>
  <nav-bar></nav-bar>
  <div class="content">
<router-view/>
  </div>
  <footer-component/>
</template>

<script>

import FooterComponent from "@/components/footerComponent";
import NavBar from "@/components/navbar";

export default {
  name: 'App',
  components: { NavBar, FooterComponent},
}
</script>

<style>

body, html {
  padding: 0;
  margin: 0;
  height: 100%;
}
.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: "Roboto Light", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #ffffff;
  min-height: 100%;
}
.button {
  display: inline-block;
  padding: 10px 20px;
  font-family: "Lato";
  font-size: 16px;
  text-align: center;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button.primary {
  background-color: #791ba5;
  color: rgb(255, 255, 255);
}

.button.secondary {
  background-color: #9D8CC3F2;
  color: #ffffff;
}
.button:hover {
  background-color: #610282;
  box-shadow: 0px 10px 15px grey;
}
h2 {
  font-size: 28px;
  color: #791ba5;
  font-family: "Lato";
  text-align: center;
  padding: 10px;
  border-radius: 10px;
}

</style>
