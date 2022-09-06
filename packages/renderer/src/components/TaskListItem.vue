<script lang="ts" setup>
export interface ListItem {
  name: string
  id: number
}

// eslint-disable-next-line vue/define-macros-order
const props = defineProps<{ listItem: ListItem }>()
</script>

<template>
  <div class="list-group-item">
    <span>{{ props.listItem.id }}</span>
    <span>{{ props.listItem.name }}</span>
  </div>
</template>
