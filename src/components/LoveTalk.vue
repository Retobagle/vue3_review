<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {useTalkStore} from '@/store/loveTalk'

  const talkStore = useTalkStore()
  // console.log('talkStore', talkStore);
  talkStore.$subscribe((mutate,state)=>{    //通过 store 的 `$subscribe()` 方法侦听 `state` 及其变化
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
  })
  // 方法
  function getLoveTalk(){
    talkStore.getTalk()
  }
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>