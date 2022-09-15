<script setup lang="ts">
import { Delete48Filled as DeleteIcon } from '@vicons/fluent'
import { NButton, NIcon } from 'naive-ui'

export interface ListItem {
  name: string
  id: string
}

// eslint-disable-next-line vue/define-macros-order
const props = defineProps<{ listItem: ListItem }>()
const todoListData = todoListStore()
const deleteTask = () => {
  todoListData.deleteTodoListItem(props.listItem.id)
}
</script>

<template>
  <div class="list-group-item">
    <span>{{ props.listItem.id }}</span>
    <span>{{ props.listItem.name }}</span>
    <NButton
      text
      @click="deleteTask"
    >
      <NIcon>
        <DeleteIcon />
      </NIcon>
    </NButton>
  </div>
</template>
