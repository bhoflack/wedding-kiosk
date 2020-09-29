<template>
<div class="image-view">
    <a :href="fullUrl">
      <img class="thumb" :src="thumbUrl" />
    </a>

    <LikeButton v-bind:image="image" />
</div>
</template>

<script>
import LikeButton from './LikeButton.vue'

export default {
    name: 'ImageView',
    props: {
        image: Object
    },
    components: {LikeButton,},
    computed: {
        thumbUrl: function() {
            return `https://storage.googleapis.com/${this.image.bucket}/${this.image.thumb}`
        },
        fullUrl: function() {
            return `https://storage.googleapis.com/${this.image.bucket}/${this.image.name}`
        },
    }
}
</script>

<style scoped>
.thumb {
    width: 80%;
}

.image-view {
    padding-bottom: 4em;
}
</style>