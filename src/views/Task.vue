<template>
  <div class="card">
    <h2>{{ task.name }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.disc }}</p>
    <div>
      <button class="btn" @click="() => changeStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="() => changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="() => changeStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import {useRouter, useRoute} from "vue-router";
import {useStore} from "vuex";
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const tasks = store.getters.getTasks;
    const task = tasks.find((task) => task.id === route.path.split('/')[2])

    const changeStatus = (newStatus) => {
      store.commit('changeStatusVuex', {task, newStatus})
      router.push('/')
    }

    return {
      task,
      changeStatus
    }
  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>