<template>
  <h1>Pedidos</h1>
  <h2>Aquí podrás realizar tus pedidos</h2>
  <br>
  <br>
  <Sabores/>
  <br>
  <Adornos/>
  <br>
  <SaborEsc/>
  <br>
  <AdornEsc/>
  <br>
  <Cliente/>
  <br>
  <boton/>
</template>

<script>
// @ is an alias to /src
import Sabores from "../components/Sabores.vue";
import Adornos from "../components/Adornos.vue";
import SaborEsc from "../components/SaborEsc.vue";
import AdornEsc from "../components/AdornEsc.vue";
import Cliente from "../components/Cliente.vue";
import boton from "../components/boton.vue";
export default {
  name: 'Pedir',
  components: {
    Sabores,
    Adornos,
    SaborEsc,
    AdornEsc,
    Cliente,
    boton,
  }
}
</script>

<style>

  body{
    background-color:rgb(245, 135, 245) ;
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

  .pedir li{
    font-family: 'Times New Roman', Times, serif;
    color: black;
    font-size: 25px;
  }

  p{
    font-family: 'Times New Roman', Times, serif;
    color: black;
    font-size: 25px;
  }

</style>