<template>
        <h2>Listado de Albumes</h2>
        <AlbumComponente v-for="album in albumes" :id="album.id" :key="album.id"/>
</template>

<script>
import endpoints from '../endpoints';
import AlbumComponente from '../components/AlbumComponente.vue'

export default {
    data() {
        return {
            albumes: [],
        }
    },
    created() {
        endpoints.getAlbumesLista().then((listaAlbumes) =>{
            console.log(listaAlbumes.data)
            this.albumes = listaAlbumes.data.map((album) => {
                return{
                    id: album.id,
                    nombre: album.nombre,
                }
            })
        })

    },
    components: {
        AlbumComponente
    }
}
</script>
<style lang="">

</style>