<template>
  <component v-for="b in block" :is="b.type" :value="b.text"></component>
</template>

<script>
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Text from './components/Text'
import Avatar from "./components/Avatar";
export default {
  props: ['block'],
  components: {
    Title,
    Subtitle,
    Text,
    Avatar
  }
}
</script>

<style scoped>

</style>