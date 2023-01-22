import axios from 'axios'

export default{

    getArtistasLista(){
        return axios.get('http://localhost:4005/artistas').then((lista) => {
            return lista
        }).catch(e => console.log(e))
    },
    getArtistasIndividual(id){
        return axios.get(`http://localhost:4005/artistas/${id}`)
            .then((artista) => {
                return artista
        }).catch(e => console.log(e))
    },
    getAlbumesLista(){
        return axios.get('http://localhost:4005/albumes').then((lista) => {
            return lista
        }).catch(e => console.log(e))
    },
    getAlbumIndividual(id){
        return axios.get(`http://localhost:4005/albumes/${id}`)
            .then((album) => {
                return album
        }).catch(e => console.log(e))
    },

}