<template>
  <form class="card card-w30">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="select">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="textArea"></textarea>
    </div>

    <button :disabled="disableBtn" class="btn primary" @click.prevent="formHandler">Добавить</button>
  </form>
</template>

<script>
export default {
  emit: ['block-add'],
  data() {
    return {
      select: 'title',
      textArea: '',
    }
  },
  methods: {
    formHandler() {
      this.$emit('block-add', {
        type: this.select,
        text: this.textArea,
      })

      this.select = 'title'
      this.textArea = ''
    }
  },
  computed: {
    disableBtn() {
      return this.textArea.length < 3
    }
  }
}
</script>

<style scoped>

</style>