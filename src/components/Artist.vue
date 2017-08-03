<template>
  <li class="card">
    <img src="#" :src="artist.image[2]['#text']" alt="" style="width:100%">
    <div class="container">
        <h4><a href="#" :href="artist.url" target="_blank">{{artist.name}}</a></h4>
        <p>Oyentes: {{artist.listeners}}</p>
      </div>
  </li>
</template>

<script>

export default {
    name: 'artist',
    props: [ 'artist' ]
}
</script>

<style scoped>

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 15%;
    border-radius: 5px;
    margin-bottom: 20px;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
img {
    border-radius: 5px 5px 0 0;
    max-height: 200px;
}
.container {
    padding: 2px 10px;
}
h4 a{
  color: #B40404;
  text-decoration: none;
}
h4 a:hover{
  color: #2E2E2E;
}
p{
  font-size: 12px;
  color: #2E2E2E;
}
</style>
