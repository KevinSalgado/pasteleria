<template>
  <h1>Bienvenidos a pastelería el fino</h1>
  <h2>Aquí podrán disfrutar de los más deliciosos pasteles de México</h2>
  <h2>Donde los más finos de México compran sus pasteles</h2>
  <br>
  <br>
  <Contacto/>
  <router-link to="/pedir">Pedir un pastel</router-link>
</template>

<script>
// @ is an alias to /src

import Contacto from "../components/Contacto.vue";
export default {
  name: 'HomeView',
  components: {
    Contacto,
  }
}
</script>

<style>

  body{
    background-color:rgb(0, 247, 255) ;
  }

  h1{
    font-family: 'Brush Script MT', Times, serif;
    color: black;
    font-size: 50px;
  }

  h2{
    font-family: 'Brush Script MT', Times, serif;
    color: black;
    font-size: 30px;
  }

  .contacto p{
    font-family: 'Times New Roman', Times, serif;
    color:black;
    font-size: 20px;
  }

</style>
