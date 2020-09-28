<template>
  <div v-if="images.length" id="image-container">
    <div v-for="image in images" :key="image.id" class="image">
      <ImageView v-bind:image=image />    
    </div>
  </div>
  <div v-else>
      <p class="no-results">There are currently no images</p>
  </div>    
</template>

<script>
import { mapState } from 'vuex'
import ImageView from './ImageView.vue'

export default {
    name: 'Images',
    components: {ImageView},
    computed: {
        ...mapState(['images'])
    }
}
</script>

<style scoped>

#image-container {
    display: flex;
    flex-direction: column;

}

</style>