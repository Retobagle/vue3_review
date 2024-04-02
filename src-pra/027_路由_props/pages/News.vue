<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newList" :key="news.id">
        <!-- query传参 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink> -->
        <!-- <RouterLink
          :to="{
            name:'xiangqing',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
            }
          }"
        >
          {{news.title}}
        </RouterLink> -->

        <!-- params传参 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{news.title}}</RouterLink> -->
        <RouterLink
          :to="{
            name:'xiangqing',
            query:{
              id:news.id,
              title:news.title,
              content:news.content,
            }
          }"
        >
          {{news.title}}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import {reactive} from 'vue'
  import {RouterLink, RouterView} from 'vue-router'

  const newList = reactive([
    {id:'adjklajd01',title:'不错01',content:'升职加薪01'},
    {id:'adjklajd02',title:'不错02',content:'升职加薪02'},
    {id:'adjklajd03',title:'不错03',content:'升职加薪03'},
    {id:'adjklajd04',title:'不错04',content:'升职加薪04'},
  ])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>