<template>
  <div class="container column">
    <app-form @block-add="blockAdd"></app-form>

    <div class="card card-w70">
      <app-slot :block="block" v-if="block.length"></app-slot>
      <h3 v-show="!block.length">Добавьте первый блок, чтобы увидеть результат</h3>
    </div>

  </div>

  <div class="container">
    <p>
      <button class="btn primary" @click="getComments">Загрузить комментарии</button>
    </p>
    <loader v-if="loading"></loader>
    <app-comments :comments="comments" v-if="comments.length"></app-comments>
  </div>
</template>

<script>
import AppSlot from "./AppSlot";
import AppForm from './AppForm'
import AppComments from "./AppComments";
import Loader from "./Loader";

export default {
  data() {
    return {
      block: [],
      loading: false,
      comments: []
    }
  },
  methods: {
    async getComments() {
      try {
        this.loading = true
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
        this.comments = await response.json()
        this.loading = false
      } catch (e) {
        this.loading = false
        console.error(e, e.message)
      }
    },
    blockAdd(bl) {
      this.block.push(bl)
    }
  },
  components: {
    AppSlot,
    AppForm,
    AppComments,
    Loader
  }
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
