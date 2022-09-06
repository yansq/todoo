// import {getStore} from '/@/../../preload/src/electronStore';
import {api} from '#preload';

const TODO_LIST_DATA = 'TODO_LIST_DATA';

// 访问器属性
export const todoStorage = {
  set setTodoList(val: any) {
    if (!val) {
      api.configStore.delete(TODO_LIST_DATA);
    } else {
      api.configStore.set(TODO_LIST_DATA, val);
    }
  },
  get getTodoList() {
    api.configStore.set(TODO_LIST_DATA, 'aaa');
    return api.configStore.get(TODO_LIST_DATA);
  },
};