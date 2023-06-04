<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>
        Открыто: <strong>{{ openRate }}</strong> |
        Прочитано: <strong>{{ readRate }}</strong> |
        Не прочитано: <strong>{{ notReadRate }}</strong>
      </span>
    </div>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :isOpen="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @not-read-news="notReadNews"
      @un-read="unReadNews"
    ></app-news>
  </div>
</template>

<script>
import AppNews from './AppNews'
export default {
  name: 'App',
  data () {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Это новость №1',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Это новость №2',
          id: 2,
          isOpen: false,
          wasRead: false
        }
      ],
      notReadRate: 2
    }
  },
  provide () {
    return {
      title: 'Список всех новостей',
      news: this.news
    }
  },
  components: {
    AppNews
  },
  methods: {
    openNews () {
      this.openRate++
      // console.log(data)
    },
    readNews (id) {
      this.readRate++
      const idx = this.news.findIndex((news) => news.id === id)
      this.news[idx].wasRead = true
    },
    notReadNews () {
      this.notReadRate--
    },
    unReadNews (id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
      this.notReadRate++
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: darkred;
}
</style>
