<template>
    <div>
        <h2>Listado de Artistas</h2>
        <Componente_Artista v-for="artista in artistas" :id="artista.id" :key="artista.id"/>
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
<style lang="">

</style>