<template>
  <ul class="news-list">
    <!-- <li>编号：{{query.id}}</li>
    <li>标题：{{query.title}}</li>
    <li>内容：{{query.content}}</li> -->
    <li>编号：{{params.id}}</li>
    <li>标题：{{params.title}}</li>
    <li>内容：{{params.content}}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
  import {toRefs} from 'vue'
  import {useRoute} from 'vue-router'
  let route = useRoute()
  // console.log('route',route);
  
  // let {query} = route  // 从一个响应式对象的身上直接解构属性，会丢失响应性，可以用toRefs来解决
  let {query,params} = toRefs(route)  // 从一个响应式对象的身上直接解构属性，会丢失响应性，可以用toRefs来解决
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>