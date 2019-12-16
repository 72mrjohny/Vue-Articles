<template>
  <div class="articleCard">
    <div class="articleCard__image">
      <img
        v-bind:src="urlToImage || 'http://www.coraf.org/wp-content/themes/consultix/images/no-image-found-360x250.png' "
      />
    </div>

    <div class="articleCard__description">
      <a :href="url" target="blank">
        <p>{{title}}</p>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "ArticleCard",
  props: {
    urlToImage: {
      type: String,
      default:
        "http://www.coraf.org/wp-content/themes/consultix/images/no-image-found-360x250.png"
    },
    url: {
      type: String
    },
    title: {
      type: String,
      default: "Tytuł Artykułu"
    }
  }
};
</script>

<style>
</style>
