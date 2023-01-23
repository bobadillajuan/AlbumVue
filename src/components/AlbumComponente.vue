<template>
    <div class="card thumbnail" @click="goToDetails">
        <img :src="album.imageUrl">        
        <h3>{{ album.nombre }}</h3>
        <h5>{{ album.artista }} ({{ album.genero }})</h5>
    </div>
</template>

<script>

import endpoints from '../endpoints';

export default {
    name: 'AlbumComponente',
    data() {
        return {
            album: {
                id: "",
                nombre: "",
                artista: "",
                imageUrl: "",
                descripcion: "",
                genero: "",
                origen: "",
                albumes: []
            }
        }
    },
    props: {
        id:{
            required: true,
        }
    },
    created() {
        endpoints.getAlbumIndividual(this.id).then((dataAlbum) => {
            this.album.nombre = dataAlbum.data.nombre
            this.album.imageUrl = dataAlbum.data.imagen
            this.album.genero = dataAlbum.data.genero
            this.album.id = dataAlbum.data.id


            this.album.artista = dataAlbum.data.artista._path.segments[1]
            endpoints.getArtistasIndividual(this.album.artista).then((dataArtista) => {
                this.album.artista = dataArtista.data.nombre
            })
        })
    },
    mounted() {
        
    },
    methods: {
        goToDetails(){
            this.$router.push({ name: 'Album', params: { id: this.id }})
        }
    },
}
</script>

<style>
    .card{
        
        background: #000000;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        color: rgb(228, 215, 215);

        border-color: #555b5e;
    }

</style>