<template>
    
    <h2>Inventario sabores</h2>
    <ul>
        <li>Quedan {{$store.getters.cafe}} de cafe</li>
        <li>Quedan {{$store.getters.chocolate}} de chocolate</li>
        <li>Quedan {{$store.getters.vainilla}} de vainilla</li>
        <li>Quedan {{$store.getters.napolitano}} de napolitano</li>
    </ul>
    <!--<button @click="$store.dispatch('pedido')">SIGUIENTE PEDIDO</button>
    <button @click="store.dispatch"
     <button @click="$store.commit('SaboresCond')">PRUEBA</button>
    <p id="prueba">¿?</p>
 -->
    <br>
</template>

<script>
export default {
    name: 'SaboresPas',
}
</script>