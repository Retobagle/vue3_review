<template>
  <div class="person">
    <h2>一辆{{ car.brand }}，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="item in games" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="changeFirstName">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person1">
import {ref} from 'vue';
let car = ref({
  brand: '奔驰',
  price: 100
})
let games = ref([
  {id: 'fjkaljfd01', name: '王者荣耀'},
  {id: 'fjkaljfd02', name: '原神'},
  {id: 'fjkaljfd03', name: 'dnf'},
])
function changePrice() {
  car.value.price += 10;
}
function changeFirstName() {
  games.value[0].name = 'qq三国'
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