<template>
        <h2 class="text-center titulo_listado">Listado de Albumes</h2>
        <div class="componentesListado">
        <AlbumComponente class="componenteAlbum" v-for="album in albumes" :id="album.id" :key="album.id"/>
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

.componentesListado{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    
}


.componenteAlbum{
    width: 30%;
    margin: 1em;
    text-align: center;
    height: 41vh;
}

@media (min-width: 768px) {

    .componentesListado{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    width: 60%;

    border: rgba(171, 171, 171, 1) solid 0.1em;
    border-top: 0;
    border-bottom: 0;   

    }

    .componenteAlbum{
    width: 25%;
    margin: 2em;
    text-align: center;
    }

}


</style>