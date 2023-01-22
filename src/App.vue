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
      // axios.get('http://localhost:4005/albumes').then((list) => {
      //       this.albumes = list.data
      //       console.log(list.data)
      //   })
    },
  };
</script>

<template>

    <!-- Conforme con el estilo del menú -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid text-center">
          <div class="col-4 col-md-2" id="titulo">
            <h3 class="mb-0">Proyecto</h3>
          </div>
          <button class="navbar-toggler col-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse col-12 col-md-2" id="navbarSupportedContent">
                <ul class="navbar-nav" id="listaEnlaces">
                  <li class="nav-item active">
                    <router-link to="/" class="link  text-decoration-none">Home</router-link>
                  </li>
                  <li class="nav-item  mx-4">
                    <router-link to="/info" class="link  text-decoration-none">Info</router-link>
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
      <!-- <div v-for = "album in albumes">
        <p>Genero: {{ album.genero }}</p>
        <p>Nombre: {{ album.nombre }}</p>
      </div> -->
      <router-view class="page"></router-view>
    </div>

</template>

<style scoped>

#listaEnlaces{
    font-style: italic;
  }

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
  background: #093028;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #237A57, #093028);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #237A57, #093028); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>
