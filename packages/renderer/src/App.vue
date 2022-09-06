<script lang="ts" setup>
import ReactiveCounter from '/@/components/ReactiveCounter.vue'
import ReactiveHash from '/@/components/ReactiveHash.vue'
import ElectronVersions from '/@/components/ElectronVersions.vue'
import TaskList from '/@/components/TaskList.vue'
import { NButton, NLayout, NLayoutContent, NLayoutSider, NSpace } from 'naive-ui'

const data = [
  {
    id: 1,
    name: 'test1',
  },
  {
    id: 2,
    name: 'test2',
  },
  {
    id: 3,
    name: 'test3',
  },
]
</script>

<template>
  <img
    alt="Vue logo"
    src="../assets/logo.svg"
    width="150"
  />
  <div flex>
    <NButton type="primary">Add Task</NButton>
  </div>
  <div
    flex
    justify-center
  >
    <NSpace
      vertical
      size="large"
    >
      <NLayout has-sider>
        <NLayoutSider
          collapse-mode="width"
          :collapsed-width="120"
          :width="240"
          show-trigger="bar"
          content-style="padding: 24px;"
          bordered
        >
          <div> layout sider </div>
        </NLayoutSider>
        <NLayoutContent content-style="padding: 24px;">
          main content
          <TaskList :list-items="data"></TaskList>
        </NLayoutContent>
      </NLayout>
    </NSpace>
  </div>

  <p>
    For a guide and recipes on how to configure / customize this project,<br />
    check out the
    <a
      href="https://github.com/cawa-93/vite-electron-builder"
      target="_blank"
    >
      vite-electron-builder documentation
    </a>
    .
  </p>

  <fieldset>
    <legend>Test Vue Reactivity</legend>
    <ReactiveCounter />
  </fieldset>

  <fieldset>
    <legend>Test Node.js API</legend>
    <ReactiveHash />
  </fieldset>

  <fieldset>
    <legend>Environment</legend>
    <ElectronVersions />
  </fieldset>

  <p>
    Edit
    <code>packages/renderer/src/App.vue</code> to test hot module replacement.
  </p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100%;
}

fieldset {
  @apply m-2rem p-1rem;
}
</style>
