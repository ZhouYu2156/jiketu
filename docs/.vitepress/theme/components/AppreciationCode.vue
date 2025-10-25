<script setup lang='ts'>
import { useData } from 'vitepress';
import { computed } from 'vue';

const { isDark } = useData()

const source = computed(() => isDark.value ? '/appreciation/AppreciationCode-dark.jpg' : '/appreciation/AppreciationCode-light.jpg')

</script>

<template>
  <img :src="source" alt="赞赏码" width="200" height="200" style="border-radius: 5%;" />
</template>

<style scoped lang='css'></style>