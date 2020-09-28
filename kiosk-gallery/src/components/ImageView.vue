<template>
<div el="img">
    <a :href="fullUrl">
      <img :src="thumbUrl" />
    </a>
</div>
</template>

<script>
export default {
    name: 'ImageView',
    props: {
        image: Object
    },
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

<style lang="sass" scoped>

</style>