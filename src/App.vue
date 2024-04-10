<template>
  <nav class="navbar is-info">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img alt="4FOX logo" src="@/assets/smallicon.png">
      </a>
      <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu title is-6">
      <router-link class='navbar-item' to="/"><icon class="material-icons">cottage</icon> Den Defender</router-link> |
      <router-link class='navbar-item' to="/about"><icon class="material-icons">info</icon>About</router-link> |
      <a class='navbar-item' href="https://4fox.uk"><icon class="material-icons">hiking</icon>Return to 4FOX</a>
    </div>
  </nav>
  <router-view/>
  <footer class="footer">
    <div class="cc-license">
      <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">Den Defender</span> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://4fox.uk">4FOX Security</a> is licensed under <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution-ShareAlike 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/custom-bulma.css';
body {
  background-color: #15133c;
}


nav {
    &.router-link-exact-active {
      color: #fa5b05;
    }
  }
</style>
