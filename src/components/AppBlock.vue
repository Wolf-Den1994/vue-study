<template>
  <div class="container">
    <app-alert
      v-if="alert"
      title="Внимание!"
      text="Это важное сообщение"
      @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть сообщение' : 'Показать сообщение' }}</button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert";
import alertMixin from "@/alertMixin";
export default {
  mixins: [alertMixin],
  components: {
    AppAlert
  }
}
</script>

