<script lang="ts" setup>
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import TaskListItem from '/@/components/TaskListItem.vue'
import { storeToRefs } from 'pinia'

const todoListData = todoListStore()
const { todoList } = storeToRefs(todoListData)

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost',
  }
})

const endDrag = () => {
  todoListData.refresh()
}
</script>

<template>
  <div class="clearfix">
    <Draggable
      :list="todoList"
      v-bind="dragOptions"
      ghost-class="ghost"
      group="people1"
      @end="endDrag"
    >
      <template #item="{ element }">
        <TaskListItem :list-item="element"></TaskListItem>
      </template>
    </Draggable>
  </div>
</template>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>

