<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="changeOpen">
      {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
    </app-button>
    <app-button
      color="danger"
      v-if="wasRead"
      @action="$emit('un-read', id)"
    >Отметить непрочитанной</app-button>
    <div v-if="isNewsOpen">
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, alias aliquid cum dolorem, dolores dolorum et exercitationem facere inventore minus molestiae porro quo rem sapiente similique sint tempora tempore voluptates?</p>
      <app-button
        v-if="!wasRead"
        color="primary"
        @action="readNews"
      >Прочесть новость</app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton'
import AppNewsList from './AppNewsList'
export default {
  data () {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    changeOpen () {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    readNews () {
      this.$emit('read-news', this.id)
      this.isNewsOpen = false
      this.$emit('not-read-news')
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        // console.log(value)
        return value === true || value === false
      }
    },
    wasRead: Boolean
  },
  // emits: ['open-news']
  emits: {
    // 'open-news' (num) { // или null
    //   if (num) {
    //     return true
    //   }
    //   console.warn('No data in open-news emit')
    //   return false
    // }
    'open-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    'not-read-news': null,
    'un-read' (id) {
      if (id) {
        return true
      }
      console.warn('un-read emit сломан')
      return false
    }
  },
  components: {
    AppButton,
    AppNewsList
  }
}
</script>
