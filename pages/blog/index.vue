<script lang="ts" setup>

</script>

<template>
  <main>
    <h1>Blog</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/blog">Blog</NuxtLink>
    <ContentList v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <NuxtLink :to="article._path">Read more</NuxtLink>
      </div>
    </ContentList>
  </main>
</template>

<style lang="postcss" scoped></style>
