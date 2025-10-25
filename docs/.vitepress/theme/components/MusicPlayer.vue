<script setup lang='ts'>
import { useData } from 'vitepress';


const { theme, frontmatter } = useData()

console.log(theme.value, frontmatter.value);

</script>

<template>
  <div class="player-container">
    <input type="text" placeholder="请输入歌手、歌名或歌词搜索" />
  </div>
</template>

<style scoped lang='css'></style>