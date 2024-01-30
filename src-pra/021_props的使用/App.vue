<template>
  <Person/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {reactive} from 'vue'
  import {type Persons} from '@/types'

  let personList = reactive<Persons>([
    {id:'fjakljfd56465', name:'zs', age: 18},
    {id:'fjakljfd56466', name:'ls', age: 19},
    {id:'fjakljfd56467', name:'ww', age: 20},
  ])
  console.log(personList);
  
</script>
