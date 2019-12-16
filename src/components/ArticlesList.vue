<template>
  <div class="articles">
    <ul v-if="posts && posts.length" class="articles__list">
      <li v-for="post of posts" v-bind:key="post.id" class="articles__item">
        <ArticleCard
          :urlToImage="post.urlToImage"
          :url="post.url"
          :source="post.source.name"
          :title="post.title"
        />
      </li>
    </ul>

    <ul v-if="additionalPostStatus && additionalPost.length" class="articles__list">
      <li
        class="additional articles__item"
        v-for="(post,index) of additionalPost"
        v-bind:key="'additional' + index"
      >
        <ArticleCard
          :urlToImage="post.urlToImage"
          :url="post.url"
          :source="post.source.name"
          :title="post.title"
        />
      </li>
    </ul>

    <button
      class="articles__button"
      @click="getMoreArticles"
      v-if="!additionalPostStatus"
    >Zobacz Więcej</button>
  </div>
</template>


<script>
import ClientArticle from "../api/ClientArticle";
import ArticleCard from "./ArticleCard";

export default {
  name: "ArticlesList",
  components: {
    ArticleCard
  },
  data() {
    return {
      clientArticle: null,
      posts: [],
      additionalPost: [],
      additionalPostStatus: false
    };
  },

  created() {
    this.clientArticle = new ClientArticle(
      "https://newsapi.org/v2/",
      "839d8c1928bd403cad816ed242527e48"
    );
    this.getArticles();
  },

  methods: {
    getArticles() {
      this.clientArticle.setPageSize(5);
      this.clientArticle.getArticles(1).then(response => {
        if (response.status == "ok") {
          this.posts = response.articles;
        }
      });
    },

    getMoreArticles() {
      this.clientArticle.setPageSize(6);
      this.clientArticle.getArticles(5).then(response => {
        if (response.status == "ok") {
          this.additionalPost = response.articles;
          this.additionalPostStatus = true;
        }
      });
    }
  }
};
</script>
