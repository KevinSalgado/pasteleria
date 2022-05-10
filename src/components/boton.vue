<template>
    
    <button @click="$store.dispatch('pedido')">HACER PEDIDO</button>
    <!-- onclick="location.href='http://localhost:8080/'
        <button @click="$store.commit('SaboresCond')">PRUEBA</button>
    <p id="prueba">¿?</p>
 -->
    <br>
</template>

<script>
export default {
    name: 'boton',
}
</script>