import{e as n}from"./endpoints-aea6c9b1.js";import{_ as m,o as l,c as u,a as s,t as i}from"./index-6e194e68.js";const d={name:"AlbumComponente",data(){return{album:{id:"",nombre:"",artista:"",imageUrl:"",descripcion:"",genero:"",origen:"",albumes:[]}}},props:{id:{required:!0}},created(){n.getAlbumIndividual(this.id).then(e=>{this.album.nombre=e.data.nombre,this.album.imageUrl=e.data.imagen,this.album.genero=e.data.genero,this.album.id=e.data.id,this.album.artista=e.data.artista._path.segments[1],n.getArtistasIndividual(this.album.artista).then(t=>{this.album.artista=t.data.nombre})})},mounted(){},methods:{goToDetails(){this.$router.push({name:"Album",params:{id:this.id}})}}},b=["src"];function c(e,t,p,g,a,r){return l(),u("div",{class:"card thumbnail",onClick:t[0]||(t[0]=(...o)=>r.goToDetails&&r.goToDetails(...o))},[s("img",{src:a.album.imageUrl},null,8,b),s("h3",null,i(a.album.nombre),1),s("h5",null,i(a.album.artista)+" ("+i(a.album.genero)+")",1)])}const f=m(d,[["render",c]]);export{f as A};