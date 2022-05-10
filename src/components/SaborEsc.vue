<template>
    <p>Escoge el sabor/es que quieras en tu pastel</p>
<br>

    <input type="checkbox" id="sabor1" name="sabor1" value="cafe">
    <label for="sabor1">Pastel de cafe</label>
    <input type="checkbox" id="sabor2" name="sabor2" value="Chocolate">
    <label for="sabor2">Pastel de Chocolate</label>
    <input type="checkbox" id="sabor3" name="sabor3" value="Vainilla">
    <label for="sabor3">Pastel de Vainilla</label>
    <input type="checkbox" id="sabor4" name="sabor4" value="Napolitano">
    <label for="sabor4">Pastel Napolitano</label>

    
    <!-- <button @click="$store.commit('SaboresCond')">PRUEBA</button>
    <p id="prueba">¿?</p>
 -->
    <br>
</template>

<script>
export default {
    name: 'SaborEsc',
}
</script>