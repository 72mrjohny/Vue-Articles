<template>
  <div id="app">
    <div class="container">
      <ArticlesList :posts="posts" />
    </div>
  </div>
</template>


<script>
import ArticlesList from "./components/ArticlesList.vue";
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  components: {
    ArticlesList
  }
};
</script>
