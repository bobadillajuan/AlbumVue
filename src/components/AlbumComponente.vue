<template>
    <div class="card thumbnail" @click="goToDetails">
        <h1>{{ album.nombre }}</h1>
        <img :src="album.imageUrl">
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
            this.album.id = dataAlbum.data.id
        })
    },
    methods: {
        goToDetails(){
            this.$router.push({ name: 'Album', params: { id: this.id }})
        }
    },
}
</script>

<style>
    

</style>