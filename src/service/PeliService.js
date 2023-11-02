import axios from "axios"
export default{
    async getPelicula(){
        return await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data.genres
        })
        
        .catch(error =>{
            console.log (error)
        })
    },  
    async getGeneroPelicula(id){
        return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=492d218f089fd8c20e9c3a945b482a9f&language=esCO&with_genres=${id}`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
}