import Vue from 'vue'
import Vuex from 'vuex'
import * as firestore from './firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        images: [],
    },
    mutations: {
        setImages (state, val) {
            state.images = val
        }
    },
    actions: {
        async likePost (_ , id) {
            console.log(id)
            const post = await firestore.processed.doc(id).get();
            let previousLikes = post.data()['likes']
            if (previousLikes === undefined) {
                previousLikes = 0
            }
            await firestore.processed.doc(id).update({
                likes: previousLikes + 1,
            })
        }
    }
})

firestore.processed.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
    const images = snapshot.docs.map(doc => {
      console.log(doc.data)
      const likes = doc.data()['likes'] === undefined? 0: doc.data()['likes']
      return {... doc.data(), id: doc.id, likes: likes}
    })
    store.commit('setImages', images)
});

export default store;