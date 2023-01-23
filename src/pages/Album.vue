<template>
    <div class="contenedor_individual">
        <h1 class="titulo_individual">{{ album.nombre }}</h1>
        <p class="parrafo_genero"> {{ album.genero }}, Duración: {{ album.duracion }}</p>
        <img :src="album.imageUrl" class="imagen_album">
        <div class="contenedor_canciones">
            <p v-for="cancion in album.canciones" class="listaCanciones">{{ cancion }}</p>
        </div>

        <div class="contenedorComponente">
            <Componente_Artista :id="album.artista" :key="album.artista"/>
        </div>

    </div>
</template>


<script>

import Componente_Artista from '../components/Componente_Artista.vue';
import endpoints from '../endpoints';

export default {
    data() {
        return {

            album: {
                nombre: "",
                artista: "",
                imageUrl: "",
                duracion: "",
                genero: "",
                id: "",
                canciones: []
            },
            
        }
    },
    created() {
        endpoints.getAlbumIndividual(this.$route.params.id).then((dataAlbum) => {
            console.log(this.$route.params.id)
            // console.log(dataAlbum.data.artista._path.segments[1])
            // console.log(dataAlbum)
            this.album.nombre = dataAlbum.data.nombre
            this.album.imageUrl = dataAlbum.data.imagen
            this.album.genero = dataAlbum.data.genero
            this.album.duracion = dataAlbum.data.duracion
            this.album.artista = dataAlbum.data.artista._path.segments[1]
            this.album.canciones = dataAlbum.data.canciones

            console.log(this.album)
        })

    },
    components: {
        Componente_Artista
    }
}
</script>

<style>

@media (min-width: 0px) {

    .contenedor_individual{
        width: 80%;
        margin: 0 auto;
    }

    .titulo_individual{
        color: rgb(228, 215, 215);
        margin: 1em;
        text-align: center;
    }

    .parrafo_genero{
    color: rgb(228, 215, 215);
    text-align: center;
    margin: 1em;
    padding-bottom: 1em;
    font-size: 1.2em;
    border: rgba(171, 171, 171, 1) solid 0.1em;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    }

    .imagen_album{
        width: 100%;
        margin: 0 auto;

    }

    .contenedor_canciones{
        margin-top: 1em;
        margin-bottom: 2em;
        padding-bottom: 1em;
        border: rgba(171, 171, 171, 1) solid 0.1em;
        border-top: 0;
        border-left: 0;
        border-right: 0;
    }

    .listaCanciones{
        color: rgb(228, 215, 215);
        text-align: center;
        margin: 0;
    }

    .contenedorComponente{
        margin: 0 auto;
        width: 70%;
        margin-bottom: 2em;
    }
    
}

@media (min-width: 768px) {

    .contenedor_individual{
        width: 40%;
        display: flex;
        flex-direction: column;
    }

    .imagen_album{
        width: 50%;
    }

    .contenedorComponente{
        width: 50%;
        margin-bottom: 4em;
    }

}


</style>