<script lang="ts" setup>
import { NButton } from 'naive-ui'
const todoList = todoListStore()

const addTask = () => {
  todoList.addTodoListItem({ name: 'aaa' })
}
</script>

<template>
  <div class="tool-bar">
    <NButton
      type="primary"
      @click="addTask"
    >
      Add Task
    </NButton>
  </div>
</template>
