import { createStore } from 'vuex'
import { todoStorage } from '/@/commons/electronStore'
import mutations from '/@/store/mutations'

const store = createStore({
  state() {
    // eslint-disable-next-line no-unused-expressions
    todoStorage.getTodoList
  },
  mutations,
})

export default store
