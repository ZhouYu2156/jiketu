<script setup lang='ts'>

defineProps<{
  source: {
    title: string;
    items: {
      icon?: string
      text: string
      link: string
    }[]
  }
}>()
</script>

<template>
  <div class="items">
    <a v-for="item in source.items" :href="item.link" target="_blank" rel="noopener noreferrer">
      <img v-if="item.icon" :src="item.icon" alt="cover" width="32" height="32" />
      <span v-else class="logo-icon">图</span>
      <p>{{ item.text }}</p>
    </a>
  </div>
</template>

<style scoped lang="css">
@reference "../style.css";

.items {
  @apply w-full grid grid-cols-6 gap-x-2 gap-y-2;

  a {
    @apply flex items-center justify-center flex-col no-underline hover:cursor-pointer hover:bg-black/30 rounded p-1;

    .logo-icon {
      @apply rounded-full bg-blue-500 w-[32px] h-[32px] text-center leading-[32px];
    }

    p {
      @apply text-center m-0 p-0 pt-1;
    }
  }

}
</style>