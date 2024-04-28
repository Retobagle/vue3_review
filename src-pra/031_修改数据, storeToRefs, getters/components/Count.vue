<template>
  <div class="count">
    <h2>当前求和为：{{ sum }},放大10倍后是{{ bigSum }}</h2>
    <h2>欢迎来到 {{ school }}, 地址是{{ address }}, 英文为{{ upperSchool }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref,toRefs } from "vue";
  import {useCountStore} from '@/store/count'
  import { storeToRefs } from "pinia";

  const countStore = useCountStore();
  // const {sum,school,address} = toRefs(countStore)
  // console.log('toRefs(countStore)', toRefs(countStore));
  const {sum,school,address,bigSum,upperSchool} = storeToRefs(countStore) //storeToRefs只会关注store中的数据，不会对方法进行ref包裹
  console.log('toRefs(countStore)', storeToRefs(countStore));
  
  // console.log('countStore', countStore);  //reactive定义的响应式对象里面有ref时，不用.value就可以拿出ref的数据
  
  // 数据
  let n = ref(1) // 用户选择的数字

  // 方法
  function add(){
    // 第一种修改方式，每个数据直接改
    // countStore.sum += n       发生三次修改

    // 第二种修改方式
    // countStore.$patch({
    //   sum:666,
    //   school:'灶浦一中',
    //   address:'金灶'
    // })                        发生一次性批量变更

    // 第三种修改方式
    countStore.increment(n.value)
  }
  function minus(){
    countStore.sum -= n.value
  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>