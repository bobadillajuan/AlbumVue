<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        albumes: []
      }
    },
    mounted() {
    },
    methods: {
    },
    created() {
    },
  };
</script>

<template>

    <!-- Conforme con el estilo del menú -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid text-center">
          <div class="col-4 col-md-1" id="titulo">
            <h3 class="mb-0">Proyecto</h3>
          </div>
          <button class="navbar-toggler col-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse col-12 col-md-2" id="navbarSupportedContent">
                <ul class="navbar-nav" id="listaEnlaces">
                  <li class="nav-item  mx-4 active">
                    <router-link to="/" class="link  text-decoration-none">Home</router-link>
                  </li>
                  <li class="nav-item  mx-4">
                    <router-link to="/artistas" class="link  text-decoration-none">Artistas</router-link>
                  </li>
                  <li class="nav-item  mx-4">
                    <router-link to="/albumes" class="link  text-decoration-none">Albumes</router-link>
                  </li>
                </ul>
          </div>
    </nav>

    <div class="app">
      <router-view class="page"></router-view>
    </div>

</template>

<style scoped>

/* #listaEnlaces{
    font-style: italic;
  } */

#titulo{
  color: rgba(171, 171, 171, 1);
}

button{
  margin-right: 0.5em;
}
.link{
  color: rgba(171, 171, 171, 1);
  font-size: 1.5em;
}
.app{

  background: #0F2027;
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027);

  /* background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526); */


}

</style>
