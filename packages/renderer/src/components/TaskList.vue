<script lang="ts" setup>
import {computed} from 'vue';
import Draggable from 'vuedraggable';
import TaskListItem from '/@/components/TaskListItem.vue';
import type {ListItem} from '/@/components/TaskListItem.vue';

const props = defineProps<{
  listItems: ListItem[];
}>();

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost',
  };
});
</script>

<template>
  <div class="clearfix">
    <Draggable
      :list="props.listItems"
      v-bind="dragOptions"
      ghost-class="ghost"
      group="people1"
    >
      <template #item="{element}">
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
