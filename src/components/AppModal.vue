<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголовок модалки</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores aut ex, expedita magnam nemo?</p>
  </div>
</template>

<script>
export default {
  emits: ['close']
}
</script>

<style scoped>

</style>