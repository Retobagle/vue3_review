<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id">
        {{ p.name }} -- {{ p.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { type Persons } from '@/types';
  import { withDefaults } from 'vue';
  /* let x = defineProps(['list'])
  console.log('x', x); */

  //接收并且限制类型
  // defineProps<{list:Persons}>()

  //接收并且限制类型, 限制必要性, 指定默认值
  withDefaults(defineProps<{list?:Persons}>(), {
    list:()=>[{id:'fjakljfd56401', name:'默认人', age: 66}]
  })
  
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>