<template>
    <h2 class="text-center titulo_listado">Listado de Artistas</h2>
    <div id="version_movil">
        <Componente_Artista class="componenteArtista" v-for="artista in artistas" :id="artista.id" :key="artista.id"/>
    </div>
</template>

<script>
import endpoints from '../endpoints';
import Componente_Artista from '../components/Componente_Artista.vue'

export default {
    data() {
        return {
            artistas: [],
        }
    },
    created() {
        endpoints.getArtistasLista().then((listaArtistas) =>{
            console.log(listaArtistas.data)
            this.artistas = listaArtistas.data.map((artista) => {
                return{
                    id: artista.id,
                    nombre: artista.nombre,
                }
            })
            console.log(this.artistas)
        })

    },
    components: {
        Componente_Artista
    }
}
</script>

<style>

.titulo_listado{
    color: rgb(228, 215, 215);
    margin: 1em;
}

#version_movil{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
}

.componenteArtista{
    margin-bottom: 1em;

}

@media (min-width: 768px) {

    #version_movil{
    display: flex;
    flex-direction: row;
    width: 70%;
    padding-bottom: 10em;
    border: rgba(171, 171, 171, 1) solid 0.1em;
    border-top: 0;
    border-bottom: 0;

    }

    .componenteArtista{
    margin: 1em;
    width: 30%;

    }


}

</style>