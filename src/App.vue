<template>
  <div id="app">
    <div class="container">
      <ArticlesList :posts="posts" />
      <AddArticlesBtn :click="handleData" />
    </div>
  </div>
</template>


<script>
import ArticlesList from "./components/ArticlesList.vue";
import AddArticlesBtn from "./components/AddArticlesBtn.vue";
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  methods: {
    handleData() {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=pl&pageSize=5&apiKey=839d8c1928bd403cad816ed242527e48`
        )
        .then(response => {
          // JSON responses are automatically parsed.
          const post = response.data.articles;

          this.posts = response.data.articles.concat(post);
        })
        .catch(e => {
          this.errors.push(e);
        });

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
    }
  },

  // Fetches posts when the component is created.

  components: {
    ArticlesList,
    AddArticlesBtn
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div.container {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
}

div.polaroid {
  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
ul {
  list-style-type: none;
}
li {
  max-width: 30%;
}
img {
  max-width: 100%;
  height: auto;
  overflow: hidden;
}
</style>
