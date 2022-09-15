import { acceptHMRUpdate, defineStore } from 'pinia'
import { toRaw } from 'vue'
import { nanoid } from 'nanoid'
import { todoStorage } from '../commons/electronStore'

export const todoListStore = defineStore('todoList', () => {
  interface TodoItem {
    id?: string
    name: string
  }

  const todoList = ref(todoStorage.todoList)

  function refresh() {
    todoStorage.todoList = toRaw(todoList.value)
  }

  function addTodoListItem(data: TodoItem) {
    if (data.id) {
      todoList.value.map((item: TodoItem) => {
        if (item.id === data.id)
          item = data
        return todoList
      })
    }
    else {
      data.id = nanoid()
      todoList.value.push(data)
    }
    refresh()
  }

  function deleteTodoListItem(idToDel: string) {
    todoList.value.splice(todoList.value.findIndex(
      (item: TodoItem) => item.id === idToDel), 1)
    refresh()
  }

  return {
    addTodoListItem,
    deleteTodoListItem,
    refresh,
    todoList,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(todoListStore, import.meta.hot))
