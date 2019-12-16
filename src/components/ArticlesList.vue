<template>
  <div class="list">
    <h1>Artykuły</h1>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
        <div class="polaroid">
          <div class="artphoto">
            <img
              v-bind:src="post.urlToImage || 'http://www.coraf.org/wp-content/themes/consultix/images/no-image-found-360x250.png' "
            />
          </div>

          <div class="description">
            <a :href="post.url" target="blank">
              <p>{{post.title}}</p>
            </a>
          </div>
        </div>
      </li>
    </ul>

    <ul v-if="additionalPostStatus && additionalPost.length">
      <li class="additional" v-for="post of additionalPost" v-bind:key="'additional' + post.id">
        <div class="polaroid">
          <div class="artphoto">
            <img
              v-bind:src="post.urlToImage || 'http://www.coraf.org/wp-content/themes/consultix/images/no-image-found-360x250.png'"
            />
          </div>
          <div class="description">
            <a :href="post.url" target="blank">
              <p>{{post.title}}</p>
            </a>
          </div>
        </div>
      </li>
    </ul>

    <button @click="getMoreArticles">Zobacz Więcej</button>

    <!-- <ul v-if="errors && errors.length">
      <li>{{error.message}}</li>
    </ul>-->
  </div>
</template>


<script>
import ClientArticle from "../api/ClientArticle";

export default {
  name: "ArticlesList",
  // props: ["posts"],
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

<style>
</style>
