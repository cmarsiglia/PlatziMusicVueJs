<template>
  <div id="app">
    <img src="./assets/lastfm-logo.png" style="width:20%">
    <hr>
    <p>Platzi Music LasFM</p>
    <p><select name="country" v-model="selectedCountry">
    <option v-for="country in countries" :value="country.value">{{country.name}}</option>
    </select> </p>
    <spinner v-show="loading"></spinner
<br>
    <artist v-for="artist in artists" :artist="artist" :key="artist.mbid"></artist>

  </div>
</template>

<script>


import getArtists from './api'
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'

export default {
  name: 'app',
  data () {
    return {
        artists:[],
        countries:[
          {name:'Colombia',value:'colombia'},
          {name:'España',value:'spain'},
          {name:'Argentina',value:'argentina'},
        ],
        selectedCountry:'argentina',
        loading:true
    }
  },
  components:{
    Artist,
    Spinner
  },

  methods:{
    refreshArtists(){
      const self = this
      this.loading = true
      this.artists = [] // Antes de Cargar los datos de un nuevo pais vaciamos el array
       getArtists(this.selectedCountry)
        .then(function (artists){
          self.loading = false
        self.artists = artists
        console.log(artists);
      })
    }

  },
  mounted: function(){
    this.refreshArtists()
  },
  watch:{
    selectedCountry(){
      this.refreshArtists()
    }

  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
