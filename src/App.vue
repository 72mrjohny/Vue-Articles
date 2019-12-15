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
  methods: {
    handleData() {
      // axios
      //   .get(
      //     `https://newsapi.org/v2/top-headlines?country=pl&pageSize=5&apiKey=839d8c1928bd403cad816ed242527e48`
      //   )
      //   .then(response => {
      //     // JSON responses are automatically parsed.
      //     // const post = response.data.articles;
      //     this.posts = response.data.articles; //.concat(post);
      //   })
      //   .catch(e => {
      //     this.errors.push(e);
      //   });
      // async / await version (created() becomes async created())
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
    ArticlesList
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div.container {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.list h1 {
  flex-basis: 10vh;
  text-align: center;
  line-height: 10vh;
}

div.polaroid {
  flex-basis: 21%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
ul {
  list-style-type: none;
  /* jako element elastaczny */
  flex-grow: 1;
  /* kontener flex */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
li {
  max-width: 30%;
  float: left;
}
li:nth-child(-n + 2) {
  max-width: 40%;
}
li.additional {
  max-width: 30%;
  float: left;
}
img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
button {
  font-weight: 300;
  line-height: 32px;
  padding: 0 20px;
  text-transform: uppercase;
  color: black;
  background-color: transparent;
  font-size: 12px;
  border: 2px solid black;
}
</style>
