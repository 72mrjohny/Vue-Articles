<template>
  <div class="articleCard">
    <div class="articleCard__image">
      <img
        v-bind:src="urlToImage || 'http://www.coraf.org/wp-content/themes/consultix/images/no-image-found-360x250.png' "
      />
    </div>

    <div class="articleCard__description">
      <p class="source">{{source}}</p>
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
      type: String,
      default: "http://google.com"
    },
    title: {
      type: String,
      default: "Tytuł Artykułu"
    },
    source: {
      type: String,
      default: "google.com"
    }
  }
};
</script>

<style>
</style>
