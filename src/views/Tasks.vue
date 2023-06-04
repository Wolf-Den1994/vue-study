<template>
  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeCount }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.name }}
        <AppStatus :type="'done'" :status="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="() => lookTask(task.id)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const tasks = store.getters.getTasks;

    onMounted(async () => {
      if (!tasks.length) {
        try {
          const response = await fetch('https://view-course-3-default-rtdb.firebaseio.com/tasks.json', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })
          const data = await response.json();

          const tasks = Object.keys(data).map((key) => {
            return {
              id: key,
              ...data[key]
            }
          })
          await store.dispatch('createNewTaskAsync', tasks)
        } catch (e) {
          console.log(e, e.message)
        }
      }
    }, )

    const lookTask = (id) => {
      console.log(id);
      router.push('/task/' + id)
    }

    return {
      activeCount: store.getters.getActiveCount,
      tasks,
      lookTask,
    }
  },
  components: {AppStatus}
}
</script>
