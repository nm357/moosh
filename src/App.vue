<template>
  <div id="app">
    <span>moosh</span>
    <p>Art, Philosophy, Language, Software</p>
    
    <div><router-link to="/hello">Hello</router-link></div>
    <div><router-link to="/home">Home</router-link></div>

    <router-view></router-view>
    
    <div id="footer">
      Nicholas Mikita, {{ currentYear }} 
      <a target="_blank" href="https://www.github.com/nm357">
        <img src="./assets/GitHub_Logo.png" width="60px">
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/nicholasmikita">
        <img src="./assets/LI-Logo.png" width="60px">
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#footer {
  position: absolute;
  bottom: 0%;
  width: 100%;
  padding: 10px;
}
</style>
