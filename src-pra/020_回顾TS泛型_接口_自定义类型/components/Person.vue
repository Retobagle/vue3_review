<template>
  <div class="person">
    
  </div>
</template>

<script lang="ts" setup name="Person">
  import {type PersonInter, type Persons} from '@/types';
  
  // let person:PersonInter = {id:'fjakljfd56465', name:'zs', age: 18}
  /* let personList:Array<PersonInter> = [
    {id:'fjakljfd56465', name:'zs', age: 18},
    {id:'fjakljfd56466', name:'ls', age: 19},
    {id:'fjakljfd56467', name:'ww', age: 20},
  ] */
  let personList:Persons = [
    {id:'fjakljfd56465', name:'zs', age: 18},
    {id:'fjakljfd56466', name:'ls', age: 19},
    {id:'fjakljfd56467', name:'ww', age: 20},
  ]
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>