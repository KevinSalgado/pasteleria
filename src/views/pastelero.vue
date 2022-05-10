<template>
  <h1>Aquí podrás ver los pedidos y el inventario</h1>
  <br>
  <botAct/>
  <br><br>
  <SaboresPas/>
  <br><br>
  <AdornosPas/>
</template>

<script>
// @ is an alias to /src
import Sabores from "../components/Sabores.vue";
import botAct from "../components/botAct.vue";
import SaboresPas from "../components/SaboresPas";
import AdornosPas from "../components/AdornosPas";
export default {
  name: 'pastelero',
  components: {
    botAct,
    SaboresPas,
    AdornosPas,
  }
}
</script>

<style>

  body{
    background-color:rgb(186, 240, 125) ;
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