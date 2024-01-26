<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive, toRefs} from 'vue'
  let person = reactive({
    name: 'zs',
    age: 18
  })
  let { name, age } = toRefs(person);
  // console.log(toRefs(person));
  
  function changeName() {
    name.value += '~';   // 将一个响应式对象中的每一个属性，转换为`ref`对象。用toRefs转换后，原响应式对象里面的值也会改变
    console.log(name.value,  person.name);
    
  }
  function changeAge() {
    age.value += 1; 
  }
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>