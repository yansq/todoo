import { storeApi } from '#preload'

const TODO_LIST_DATA = 'TODO_LIST_DATA'

// 访问器属性
export const todoStorage = {
  set todoList(val: any) {
    if (!val)
      storeApi.configStore.delete(TODO_LIST_DATA)
    else
      storeApi.configStore.set(TODO_LIST_DATA, val)
  },
  get todoList() {
    return storeApi.configStore.get(TODO_LIST_DATA)
  },
}
