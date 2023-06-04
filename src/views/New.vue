<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input v-model="name" type="text" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input v-model="date" type="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model="disc" id="description"></textarea>
    </div>

    <button
      class="btn primary"
      :disabled="!disabledSubmit"
      @click.prevent="submitForm"
    >Создать</button>
  </form>
</template>


<script>
import { ref, computed } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const state = useStore();
    const router = useRouter();

    const name = ref('');
    const date = ref('');
    const disc = ref('');

    const disabledSubmit = computed(() => !!(name.value && date.value && disc.value))

    const submitForm = async () => {
      const status = new Date().getTime() > new Date(date.value).getTime() ? 'active' : 'cancelled';

      const data = {
        name: name.value,
        date: date.value,
        disc: disc.value,
        status,
      }

      const response = await fetch('https://view-course-3-default-rtdb.firebaseio.com/tasks.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const dbData = await response.json()

      state.commit('createNewTask', {
        id: dbData.name,
        ...data
      })

      await router.push('/')
    }

    return {
      disabledSubmit,
      name,
      date,
      disc,
      submitForm
    }
  }
}
</script>