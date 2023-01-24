<template>
        <h2 class="text-center titulo_listado">Listado de Albumes</h2>
        <div class="albumes-listado-contenedor-componente">
        <AlbumComponente class="albumes-listado-componente-album" v-for="album in albumes" :id="album.id" :key="album.id"/>
        </div>
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
<style>

.albumes-listado-contenedor-componente{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}

.albumes-listado-componente-album{
    width: 40%;
    margin: 0.5em;
    text-align: center;
    height: 40vh;
}

@media (min-width: 768px) {

    .albumes-listado-contenedor-componente{
    margin: 0 auto;
    width: 50%;

    border: rgba(171, 171, 171, 1) solid 0.1em;
    border-top: 0;
    border-bottom: 0;

    }

    .albumes-listado-componente-album{
    width: 25%;
    text-align: center;
    height: 40vh !important;
    width: 30% !important;
    margin: 0.5em;
    }

}


</style>