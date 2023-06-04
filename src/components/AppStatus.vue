<template>
  <span :class="[
    'badge',
    type
  ]">{{ status }}</span>
</template>

<script>
import {computed} from "vue";

export default {
  props: ['type', 'status'],
  setup(props) {
    return {
      type: props.type,
      status: props.status
    }
  }
}
</script>