<template>
    <p>Escoge los adornos que quieras para tu pastel</p>
<br>

    <input type="checkbox" id="ador1" name="ador1" value="flores">
    <label for="ador1">Pastel con flores</label>
    <input type="checkbox" id="ador2" name="ador2" value="estrellas">
    <label for="ador2">Pastel con estrellas</label>
    <input type="checkbox" id="ador3" name="ador3" value="confetti">
    <label for="ador3">Pastel con confetti</label>


    <!-- <button @click="$store.commit('SaboresCond')">PRUEBA</button>
    <p id="prueba">¿?</p>
 -->
    <br>
</template>

<script>
export default {
    name: 'AdornEsc',
}
</script>