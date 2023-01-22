<template>
    <div class="container text-center">
        <h1>Página de Inicio</h1>

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

        
        <div class="img-container">
            <div class="col-md-3 boton_escritorio">
                <h4 class="titulo_imagen">Ver lista de artistas</h4>
                <router-link class="btn btn-primary" to="/artistas">Ver</router-link>
                <!-- <button class="btn btn-primary">Button</button> -->
            </div>
            <img src="../assets/img/Escritorio-Portada01.jpg" class="img-fluid imagen_escritorio">
        </div>

        <div class="img-container"> 
            <div class="col-md-3 boton_escritorio">
                <h4 class="titulo_imagen">Ver lista de artistas</h4>
                <router-link class="btn btn-primary" to="/albumes">Ver</router-link>
                <!-- <button class="btn btn-primary">Button</button> -->
            </div>
            <img src="../assets/img/Escritorio-Portada02.jpg" class="img-fluid imagen_escritorio">
        </div>

    </div>

</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            artistas: "",
        }
    },
    mounted() {
    console.log('Mounted') 
    },

}

</script>

<style>
.parrafos{
    display: flex;
    flex-direction: row;
    text-align: center;}
.parrafos p{
    margin: 1em;}
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
    margin: auto 1.5em auto auto;}
.boton_escritorio{
    position: absolute;
    bottom: 10%;
    left: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 5%;}
@media (min-width: 0px) {
.imagen_movil{
    width: 450px;
    margin-bottom: 1em;
}
.boton_escritorio{
    display: none;
}
.imagen_escritorio{
    display: none;
    margin-bottom: 1em;
}}
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
    }

    .titulo_imagen{
    color: rgb(228, 215, 215);
    margin: auto 0 auto auto;
    width: 100%;
    }}

</style>