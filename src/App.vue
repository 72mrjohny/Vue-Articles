<template>
  <div id="app">
    <div class="container">
      <h1>articles</h1>
      <ul v-if="posts && posts.length">
        <li v-for="post of posts" v-bind:key="post.id">
          <div class="polaroid">
            <img v-bind:src="post.urlToImage" />

            <p>
              <strong>{{post.title}}</strong>
            </p>
            <p>{{post.description}}</p>
            <p>{{post.content}}</p>
          </div>
        </li>
      </ul>

      <ul v-if="errors && errors.length">
        <li>{{error.message}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: []
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=839d8c1928bd403cad816ed242527e48`
      )
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data.articles;
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
  padding: 10px 20px;
}

div.polaroid {
  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
li {
  max-width: 200px;
}
img {
  max-width: 100%;
  height: auto;
  overflow: hidden;
}
</style>
