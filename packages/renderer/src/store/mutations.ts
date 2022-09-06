import { M_ADD_TODO_LIST_ITEM } from '/@/store/types'
import { todoStorage } from '/@/commons/electronStore'

const mutations = {
  [M_ADD_TODO_LIST_ITEM](state: any, data: any) {
    if (!data) {
      todoStorage.setTodoList = state.todoData
    }
    else {
      if (data.item.id) {
        // eslint-disable-next-line array-callback-return
        state.todoData.map((item: any) => {
          if (item.id === data.item.id)
            item = data.item
        })
        todoStorage.setTodoList = state.todoData
      }
      else {
        const data = state.todoData
        data.item.id = '1'
        data.push(data.item)
        todoStorage.setTodoList = state.todoData
      }
    }
  },
}

export default mutations
