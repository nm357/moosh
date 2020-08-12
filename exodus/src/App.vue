<template>
  <div id="app">
    <span>moosh</span>
    
    
    <section id="links">
      <div><router-link to="/art">Art</router-link></div>
      <div><router-link to="/philosophy">Philosophy</router-link></div>
      <div><router-link to="/language">Language</router-link></div>
      <div><router-link to="/software">Software</router-link></div>
    </section>

    <router-view></router-view>
    
    <div id="footer">
      Nicholas Mikita, {{ currentYear }} 
      <a class="link" target="_blank" v-bind:href="githubUrl">
        <img src="./assets/GitHub_Logo.png" width="60px">
      </a>
      <a class="link" target="_blank" v-bind:href="linkedinUrl">
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
      currentYear: new Date().getFullYear(),
      githubUrl: 'https://www.github.com/nm357',
      linkedinUrl: 'https://www.linkedin.com/in/nicholasmikita',
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  },
  mounted: function() {
    window.addEventListener('resize', onWindowResize); 
  },
  beforeDestroy: function() {
    window.removeEventListener('resize')
  },
  methods: {
    
  }
}
function onWindowResize() {
  this.windowHeight = window.innerHeight;
  this.windowWidth = window.innerWidth;
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

#links {
  text-align: left;
  width: 80px;
}

#footer {
  position: absolute;
  bottom: 0%;
  width: 100%;
  padding: 10px;
}
</style>
