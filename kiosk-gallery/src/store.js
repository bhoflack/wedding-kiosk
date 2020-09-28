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
    }
})

firestore.processed.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
    const images = snapshot.docs.map(doc => {
      console.log(doc.data)
      return doc.data()
    })
    store.commit('setImages', images)
});

export default store;