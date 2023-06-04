<template>
  <div class="card">
    <h2>Комментарии</h2>
    <ul class="list" v-for="{id, email, body} in comments" :key="id">
      <li class="list-item">
        <div>
          <p><strong>{{email}}</strong></p>
          <small>{{body}}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['comments']
}
</script>

<style scoped>

</style>