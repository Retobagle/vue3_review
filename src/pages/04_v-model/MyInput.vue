<template>
  <input 
    type="text" 
    :value="name"
    @input="emit('update:name',(<HTMLInputElement>$event.target).value)"
  >
  <br>
  <input 
    type="text" 
    :value="psd"
    @input="emit('update:psd',(<HTMLInputElement>$event.target).value)"
  >
  <br>
</template>

<script setup lang="ts" name="MyInput">
  defineProps(['name','psd'])
  const emit = defineEmits(['update:name', 'update:psd'])
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>