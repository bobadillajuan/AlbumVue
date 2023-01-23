<template>
    <div class="contenedor_individual">
        <h1 class="titulo_individual">{{ artista.nombre }}</h1>
        <p class="parrafo_genero"> {{ artista.origen }}, {{ artista.genero }}</p>
        <p class="parrafo_individual">{{ artista.descripcion }}</p>
        <img :src="artista.imageUrl" class="imagen_artista">
            <div>
                <h2 class="titulo_individual">Albumes</h2>
                <div class="AlbumesListado">
                    <AlbumComponente class="AlbumComponente" v-for="album in albumesLista" :id="album.id" :key="album.id"/>
                </div>
            </div>
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

@media (min-width: 0px) {

.titulo_individual{
color: rgb(228, 215, 215);
margin: 1em;
}

.parrafo_individual{
color: rgb(228, 215, 215);
margin: 1em;
padding-bottom: 1em;
font-size: 1.2em;
border: rgba(171, 171, 171, 1) solid 0.1em;
border-top: 0;
border-left: 0;
border-right: 0;
}

.parrafo_genero{
color: rgb(228, 215, 215);
margin: 1em;
font-size: 1.5em;
}

.contenedor_individual{
width: 95%;
margin: 0 auto;
text-align: center;

}

.imagen_artista{
    width: 100%;
    margin: 0 auto;
}

.AlbumesListado{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;

    border: rgba(171, 171, 171, 1) solid 0.1em;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    margin-bottom: 1em;

}

.AlbumComponente{
    width: 70%;
    margin: 1em;
}

}


@media (min-width: 768px) {

    .titulo_individual{
    color: rgb(228, 215, 215);
    margin: 1em;
    }

    .parrafo_individual{
    color: rgb(228, 215, 215);
    margin: 1em;
    font-size: 1.2em;
    border: rgba(171, 171, 171, 1) solid 0.1em;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    }

    .parrafo_genero{
    color: rgb(228, 215, 215);
    margin: 1em;
    font-size: 1.5em;
    }

    .contenedor_individual{
    width: 60%;
    margin: 0 auto;
    text-align: center;
    border: rgba(171, 171, 171, 1) solid 0.1em;
    border-top: 0;
    border-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .imagen_artista{
        width: 80%;
        margin: 1em;
    }

    .AlbumesListado{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
    }

    .AlbumComponente{
        width: 70%;
        margin: 0 auto;
        margin-bottom: 2em;
    }

}

</style>