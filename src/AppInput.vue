<template>
  <div class="form-control" :class="{invalid: error}">
    <label :for="id">{{ label }}</label>
    <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      :value="value"
    @input="onChange"
    >
    <!--      :value="modelValue"            default-->
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  // emits: ['update:modelValue'],        default
  emits: ['update:value'],
  props: {
    // modelValue: String,         default
    value: String,
    label: String,
    placeholder: String,
    error: String
  },
  methods: {
    onChange(event) {
      // this.$emit('update:modelValue', event.target.value)          default
      this.$emit('update:value', event.target.value)
    }
  },
  data() {
    return {
      id: 'input' + Math.random()
    }
  }
}
</script>

<style scoped>

</style>