<template>
    <h2>Pedidos</h2>
    <p>Nombre del Cliente</p>
    {{$store.getters.nombre}}
    <p>Numero</p>
    {{$store.getters.numero}}
    <p>Correo</p>
    {{$store.getters.correo}}
    <p>Descripción del pastel</p>
    {{$store.getters.descrip}}
    <!--<button @click="$store.dispatch('pedido')">SIGUIENTE PEDIDO</button>
    <button @click="store.dispatch"
     <button @click="$store.commit('SaboresCond')">PRUEBA</button>
    <p id="prueba">¿?</p>
 -->
    <br>
</template>

<script>
export default {
    name: 'botAct',
}
</script>