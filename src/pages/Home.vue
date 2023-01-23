<template>
    <div class="container text-center pt-3" id="containter_principal">
        <div class="imagenes img-fluid">

            <div class="img-container">
                <div class="boton_movil container">
                    <h4 class="titulo_imagen">Ver lista de artistas</h4>
                    <router-link class="btn btn-primary" to="/artistas">Ver</router-link>
                </div>
                <img src="../assets/img/Movil-Portada01.jpg" class="img-fluid imagen_movil">
            </div>

            <div class="img-container"> 
                <div class="boton_movil container">
                    <h4 class="titulo_imagen">Ver lista de albumes</h4>
                    <router-link class="btn btn-primary" to="/albumes">Ver</router-link>
                </div>
                <img src="../assets/img/Movil-Portada03Albumes.jpeg" class="img-fluid imagen_movil">
            </div>

        </div>

        
    <div id="escritorio">
        <h2 class="text-center" id="titulo2">Ultimos artistas</h2>
        <div class="img-container container-fluid" id="contenedor_imagen_escritorio">
            <div class="col-md-4 boton_escritorio">
                <h4 class="titulo_imagen">Ver lista de artistas</h4>
                <router-link class="btn btn-primary" to="/artistas">Ver</router-link>
            </div>
            <img src="../assets/img/Escritorio-Portada02.jpg" class="img-fluid imagen_escritorio">
        </div>
        <h2 class="text-center">Últimos Álbumes</h2>
        <div class="contenedor-componente">
            <div class="componenteAlbum" v-for="(album, index) in albumes">
            <AlbumComponente v-if="index < 4" :id="album.id" :key="album.id"/>
            </div>
        </div>

        <!-- <div class="img-container"> 
            <div class="col-md-3 boton_escritorio">
                <h4 class="titulo_imagen">Ver lista de albumes</h4>
                <router-link class="btn btn-primary" to="/albumes">Ver</router-link>
            </div>
            <img src="../assets/img/Escritorio-Portada02.jpg" class="img-fluid imagen_escritorio">
        </div> -->

    </div>

    </div>

</template>

<script>
import endpoints from '../endpoints';
import AlbumComponente from '../components/AlbumComponente.vue'
export default {
    
    name: "Home",
    components: {
        AlbumComponente
    },
    data() {
        return {
            albumes: [],
            index: ""
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
    mounted() {
    console.log('Mounted') 
    },
    

}

</script>

<style>

@media (min-width: 0px) {

.imagenes{
    display: flex;
    flex-direction: column;}
.img-container {
    position: relative;}
.boton_movil{
    width: 100%;
    position: absolute;
    bottom: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;}
.titulo_imagen{
    color: rgb(228, 215, 215);
    margin: auto 1.1em auto auto;}
.boton_escritorio{
    position: absolute;
    bottom: 10%;
    left: 60%;
    /* display: flex; */
    /* flex-direction: row;
    justify-content: center; */
    height: 7%;}

.btn{
    background: #555b5e;
    border-radius: 5%;
    border: #646A75; 
}

#containter_principal{

    border: 0;

}
.imagen_movil{
    width: 700px;
    margin-bottom: 1em;
    border-radius: 0.5%;
}
.boton_escritorio{
    display: none;
}
.imagen_escritorio{
    display: none;
    margin-bottom: 1em;
}

#escritorio{
    display: none;
}

}




@media (min-width: 768px) {

    .boton_movil{
        display: none;
    }
    .imagen_movil{
        display: none; 
    }
    .boton_escritorio{
        display: flex;
    }
    .imagen_escritorio{
        display: block;
        margin-bottom: 4em;
    }

    #containter_principal{

    padding-right: 3em;
    padding-left: 3em;
    margin-top: 2em;

    width: 70%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    border: rgba(171, 171, 171, 1) solid 0.1em;
    border-top: 0;
    border-bottom: 0;

    }

    #escritorio{
    width: 90%;
    display: block;
    }

    .titulo_imagen{
    color: rgb(228, 215, 215);
    margin: auto 0 auto auto;
    width: 100%;
    }

    h2{
        color: rgb(228, 215, 215);  
    }

    .contenedor-componente{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        
    }

    .componenteAlbum{
        height: 100% !important;
        width: 30% !important;
        margin: 2em;
    }

}

</style>