<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="Person1">

let name = '张三';
let age = 18;
let address = 'GUANGBUZHEN';
function changeName() {
  name = name + '~';
  console.log(name);
  
}
function changeAge() {
  age+=1;
  console.log(age);
  
}
function showTel() {
  console.log(address);
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
</style>