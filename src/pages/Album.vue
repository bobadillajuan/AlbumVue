<template>
    <div>
        <h1>{{ album.nombre }}</h1>
        <img :src="album.imageUrl" class="imagen_album">

        <Componente_Artista :id="album.artista" :key="album.artista"/>

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
    // methods: {
    //     getAlbums(ids){                
    //         for(let i = 0; i < ids.length; i++){
    //             endpoints.getAlbumIndividual(ids[i]._path.segments[1]).then((dataAlbum) => {
    //                 this.albumesLista.push({
    //                 nombre: dataAlbum.data.nombre,
    //                 duracion: dataAlbum.data.duracion,
    //                 imagen: dataAlbum.data.imagen,
    //                 genero: dataAlbum.data.genero,
    //                 año: dataAlbum.data.año,
    //                 canciones: dataAlbum.data.canciones
    //                 })
    //             })
    //         }
    //     }
    // },
}
</script>

<style>
    .imagen_artista{
        width: 450px;
    }
    .imagen_album{
        width: 300px;
    }

</style>