import{C as c}from"./Componente_Artista-4672b4cf.js";import{e as l}from"./endpoints-aea6c9b1.js";import{_ as m,r as _,o as n,c as a,a as o,t,F as u,d,f as p}from"./index-6e194e68.js";const h={data(){return{album:{nombre:"",artista:"",imageUrl:"",duracion:"",genero:"",id:"",canciones:[]}}},created(){l.getAlbumIndividual(this.$route.params.id).then(e=>{console.log(this.$route.params.id),this.album.nombre=e.data.nombre,this.album.imageUrl=e.data.imagen,this.album.genero=e.data.genero,this.album.duracion=e.data.duracion,this.album.artista=e.data.artista._path.segments[1],this.album.canciones=e.data.canciones,console.log(this.album)})},components:{Componente_Artista:c}},b={class:"contenedor_individual"},g={class:"titulo_individual"},f={class:"parrafo_genero"},v=["src"],C={class:"contenedor_canciones"},k={class:"listaCanciones"},x={class:"contenedorComponente"};function y(e,B,U,D,s,F){const i=_("Componente_Artista");return n(),a("div",b,[o("h1",g,t(s.album.nombre),1),o("p",f,t(s.album.genero)+", Duración: "+t(s.album.duracion),1),o("img",{src:s.album.imageUrl,class:"imagen_album"},null,8,v),o("div",C,[(n(!0),a(u,null,d(s.album.canciones,r=>(n(),a("p",k,t(r),1))),256))]),o("div",x,[(n(),p(i,{id:s.album.artista,key:s.album.artista},null,8,["id"]))])])}const L=m(h,[["render",y]]);export{L as default};
