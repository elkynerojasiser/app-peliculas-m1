<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="pelicula in page.results" :key="pelicula.id">
          <div class="card">
            <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path" class="card-img-top" :alt="pelicula.title" />
            <div class="card-body">
              <h5 class="card-title">{{ pelicula.title }}</h5>
              <p class="card-text">{{ pelicula.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import PeliService from '@/service/PeliService'
  
  export default {
    name: 'GeneroPeliculaView',
    data() {
      return {
        page: {
          results: [],
        },
      };
    },
    async created() {
      const peliculaId = this.$route.params.id;
      this.page = await PeliService.getGeneroPelicula(peliculaId);
      console.log(this.page);
    },
  };
  </script>
  
