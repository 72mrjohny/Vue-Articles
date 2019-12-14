<template>
  <div class="list">
    <h1>articlesList</h1>
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
</template>


<script>
export default {
  name: "ArticlesList",
  props: ["posts"]
};
</script>

<style>
</style>
