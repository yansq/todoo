import {createStore} from 'vuex';
import {todoStorage} from '/@/commons/electronStore';
import mutations from '/@/store/mutations';

 const store = createStore({
  state() {
    todoStorage.getTodoList;
  },
  mutations: mutations,
});

export default store;