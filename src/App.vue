<template>
  <div id="app">
    <section class="container">
      <ArticlesList />
    </section>
  </div>
</template>


<script>
import ArticlesList from "./components/ArticlesList.vue";

export default {
  components: {
    ArticlesList
  }
};
</script>
