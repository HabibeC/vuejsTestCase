import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookStoreList:[],
  },
  mutations: {
    addBookItem(state,bookData){
      state.bookStoreList.push(bookData)
    },
    RemoveBook(state,bookData){
      const index = state.bookStoreList.findIndex((item) => item.bookName === bookData.bookName);
      state.bookStoreList.splice(index, 1);
    },
    updateTodoItem(state, payload) {
      state.bookStoreList.splice(payload.index, 1, payload);
    }
  },
  getters:{
    getBookList: (state) => state.bookStoreList
  },
  actions: {
  },
  modules: {
  }
})
