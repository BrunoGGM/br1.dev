<template>
  <main class="flex flex-col h-screen w-screen pt-4 px-4 gap-3">
    <div v-for="icon in icons" class="flex flex-col items-center rounded w-[64px] h-[64px]" :class="{
      'active:bg-white active:bg-opacity-10 hover:bg-white hover:bg-opacity-10 transition-all duration-300 ease-in-out': icon.number !== null,
    }">
      <NuxtLink v-if="icon.number !== null" class="flex flex-col p-4 shrink-0" :to="icon.link">
        <span>
          <font-awesome-icon :icon="icon.icon" class="text-white text-2xl drop-shadow-lg"></font-awesome-icon>
        </span>
        <span class="text-white text-xs drop-shadow-lg">{{ icon.label }}</span>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
const icons = ref([{
  icon: 'fa-relugar fa-folder',
  link: '/blog',
  label: 'Blog',
  number: Math.floor(Math.random() * 200),
},
{
  icon: 'fa-relugar fa-folder',
  link: '/blog',
  label: 'Blog',
  number: Math.floor(Math.random() * 200),
},
{
  icon: 'fa-relugar fa-folder',
  link: '/blog',
  label: 'Blog',
  number: Math.floor(Math.random() * 200),
}
]);
</script>

<style scoped></style>
