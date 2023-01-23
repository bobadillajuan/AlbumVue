<template>
    <div class="card thumbnail text-center" id="artistCard" @click="goToDetails">
        <h1>{{ artista.nombre }}</h1>
        <img :src="artista.imageUrl">
    </div>
</template>

<script>

import endpoints from '../endpoints';

export default {
    name: 'Componente_Artista',
    data() {
        return {
            artista: {
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
        endpoints.getArtistasIndividual(this.id).then((dataArtista) => {
            this.artista.nombre = dataArtista.data.nombre
            this.artista.imageUrl = dataArtista.data.imagen
            this.artista.id = dataArtista.data.id
        })
    },
    methods: {
        goToDetails(){
            this.$router.push({ name: 'Artista', params: { id: this.id }})
        }
    },
}
</script>

<style>


</style>