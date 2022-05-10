<template>
    
    <h2>Inventario adornos</h2>
    <ul>
        <li>Quedan {{$store.getters.flor}} flores</li>
        <li>Quedan {{$store.getters.estrella}} estrellas</li>
        <li>Quedan {{$store.getters.confetti}} de confetti</li>
    </ul>
    <!--<button @click="$store.dispatch('pedido')">SIGUIENTE PEDIDO</button>
    <button @click="store.dispatch"
     <button @click="$store.commit('SaboresCond')">PRUEBA</button>
    <p id="prueba">¿?</p> holi
 -->
    <br>
</template>

<script>
export default {
    name: 'AdornosPas',
}
</script>