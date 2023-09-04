<template>
  <main class="grid gap-3 grid-cols-[repeat(auto-fit,64px)] auto-rows-[64px] h-screen w-screen pt-4 px-4">
    <div v-for="icon in layout" class="flex flex-col items-center justify-center rounded" :class="{
      'active:border active:border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 ease-in-out': icon.number !== null,
    }">
      <NuxtLink v-if="icon.number !== null" class="flex flex-col shadow-xl" :to="icon.link">
        <font-awesome-icon :icon="icon.icon" class="text-white text-2xl"></font-awesome-icon>
        <span class="text-white text-xs">{{ icon.label }}</span>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
const layout = ref(Array(256));
const icons = ref([{
  icon: 'fa-relugar fa-folder',
  link: '/blog',
  label: 'Blog',
  number: Math.floor(Math.random() * 200),
}
]);

layout.value.fill({
  icon: '',
  link: '',
  label: '',
  number: null,
});


onMounted(() => {
  layout.value.map((icon, index) => {
    let iconsIndex = icons.value.map((icon) => icon.number).flat();
    if (iconsIndex.includes(index)) {
      let iconIndex = iconsIndex.indexOf(index);
      layout.value[index] = icons.value[iconIndex];
    }
  });
});


</script>

<style scoped></style>
