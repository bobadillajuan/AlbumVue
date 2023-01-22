<template>
    <div>
        <h1>{{ artista.nombre }}</h1>
        <img :src="artista.imageUrl" class="imagen_artista">

        <AlbumComponente v-for="album in albumesLista" :id="album.id" :key="album.id"/>


    </div>
</template>

<script>

import AlbumComponente from '../components/AlbumComponente.vue';
import endpoints from '../endpoints';

export default {
    data() {
        return {
            artista: {
                nombre: "",
                imageUrl: "",
                descripcion: "",
                genero: "",
                origen: "",
                albumes: []
            },
            albumesLista: []
            
        }
    },
    components: {
        AlbumComponente
    },
    created() {
        endpoints.getArtistasIndividual(this.$route.params.id).then((dataArtista) => {
            console.log(this.$route.params.id)
            this.artista.nombre = dataArtista.data.nombre
            this.artista.imageUrl = dataArtista.data.imagen
            this.artista.descripcion = dataArtista.data.descripcion
            this.artista.genero = dataArtista.data.genero
            this.artista.origen = dataArtista.data.origen
            this.artista.albumes = dataArtista.data.albumes
            this.getAlbums(this.artista.albumes)
            console.log(this.albumesLista)
        })

    },
    methods: {
        getAlbums(ids){                
            for(let i = 0; i < ids.length; i++){
                endpoints.getAlbumIndividual(ids[i]._path.segments[1]).then((dataAlbum) => {
                    this.albumesLista.push({
                    id: ids[i]._path.segments[1],
                    nombre: dataAlbum.data.nombre,
                    duracion: dataAlbum.data.duracion,
                    imagen: dataAlbum.data.imagen,
                    genero: dataAlbum.data.genero,
                    año: dataAlbum.data.año,
                    canciones: dataAlbum.data.canciones
                    })
                })
            }
        }

    },
    goToDetails(){
        this.$router.push({ name: 'Album', params: { id: album.id}})
    }
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