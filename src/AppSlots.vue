<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template #default="{ idx, iter }">
        <span style="color: #ff0839">
          <strong>{{ idx }}</strong>
          Item: {{ iter }}
        </span>
      </template>
    </app-list>

    <app-block>
      <p>Это текст в блоке</p>
      <template #header>
        <h3>Заголовочек</h3>
      </template>
      <template v-slot:footer>
        <hr>
        <small>ФУТЕР</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock'
import AppList from './AppList'
export default {
  components: {
    AppBlock,
    AppList
  }
}
</script>

<style lang="scss" scoped>

</style>
