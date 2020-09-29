<template>
  <div id="like">
      <a @click="likePost(image.id)"><b>{{ image.likes }}</b> <span v-if="image.likes == 1">like</span><span v-else>likes</span></a>
  </div>
</template>

<script>
export default {
    name: 'LikeButton',
    props: {
        image: Object,
    },
    methods: {
        likePost(id) {
            this.$store.dispatch('likePost', id)
        },
    }
}
</script>