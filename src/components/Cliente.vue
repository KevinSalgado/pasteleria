<template>
    <p>Introduce tus datos personales</p>
    <br>
    <label for="nombre">Introduce tu nombre completo</label>
    <input type="text" id="nombre" name="nombre">
    <br>
    <label for="numero">Introduce tu numero</label>
    <input type="text" name="numero" id="numero">
    <br>
    <label for="correo">Introduce tu email</label>
    <input type="email" id="correo" name="correo">
    <br>
    <label for="des">Describe el pastel</label>
    <br>
    <input type="text" id="des" name="des" style="height:70px">
    
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