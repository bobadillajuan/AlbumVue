import{e as p}from"./endpoints-aea6c9b1.js";import{A as h}from"./AlbumComponente-47d56792.js";import{_ as g,r as l,o as s,c as n,a as t,b as a,w as c,F as b,d as v,e as r,f,g as x}from"./index-6e194e68.js";const V="/assets/Movil-Portada01-33632f47.jpg",k="/assets/Movil-Portada03Albumes-24582259.jpeg",y="/assets/Escritorio-Portada02-ca1de2ed.jpg";const A={name:"Home",components:{AlbumComponente:h},data(){return{albumes:[],index:""}},created(){p.getAlbumesLista().then(e=>{console.log(e.data),this.albumes=e.data.map(o=>({id:o.id,nombre:o.nombre}))})},mounted(){console.log("Mounted")}},C={class:"container text-center pt-3",id:"containter_principal"},B={class:"imagenes img-fluid"},N={class:"img-container"},j={class:"boton_movil container"},H=t("h4",{class:"titulo_imagen"},"Ver lista de artistas",-1),M=t("img",{src:V,class:"img-fluid imagen_movil"},null,-1),P={class:"img-container"},$={class:"boton_movil container"},w=t("h4",{class:"titulo_imagen"},"Ver lista de albumes",-1),E=t("img",{src:k,class:"img-fluid imagen_movil"},null,-1),F={id:"escritorio"},L=t("h2",{class:"text-center",id:"titulo2"},"Ultimos artistas",-1),T={class:"img-container container-fluid",id:"contenedor_imagen_escritorio"},U={class:"col-md-4 boton_escritorio"},q=t("h4",{class:"titulo_imagen"},"Ver lista de artistas",-1),z=t("img",{src:y,class:"img-fluid imagen_escritorio"},null,-1),D=t("h2",{class:"text-center"},"Últimos Álbumes",-1),G={class:"contenedor-componente"},I={class:"componenteAlbum"};function J(e,o,K,O,d,Q){const i=l("router-link"),m=l("AlbumComponente");return s(),n("div",C,[t("div",B,[t("div",N,[t("div",j,[H,a(i,{class:"btn btn-primary",to:"/artistas"},{default:c(()=>[r("Ver")]),_:1})]),M]),t("div",P,[t("div",$,[w,a(i,{class:"btn btn-primary",to:"/albumes"},{default:c(()=>[r("Ver")]),_:1})]),E])]),t("div",F,[L,t("div",T,[t("div",U,[q,a(i,{class:"btn btn-primary",to:"/artistas"},{default:c(()=>[r("Ver")]),_:1})]),z]),D,t("div",G,[(s(!0),n(b,null,v(d.albumes,(_,u)=>(s(),n("div",I,[u<4?(s(),f(m,{id:_.id,key:_.id},null,8,["id"])):x("",!0)]))),256))])])])}const X=g(A,[["render",J]]);export{X as default};