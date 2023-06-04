<template>
<!--  <app-alert-->
<!--    v-if="alert"-->
<!--    title="Работаем с Composition"-->
<!--    type="danger"-->
<!--    @close="close"-->
<!--  ></app-alert>-->

  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, computed, methods, watch</small>
    <hr>

    <div class="form-control">
      <input type="text" ref="textInput">
      <input type="text" v-model="firstName">
    </div>

    <button class="btn" @click="change">Изменить</button>
<!--    <button class="btn danger" @click="toggle">ALERT</button>-->
  </div>

  <framework-info
    @change-version="changeVersion"
    class="text-from-app"
  >
    <template #footer>
      <p>this is footer</p>
    </template>
  </framework-info>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
import FrameworkInfo from "../FrameworkInfo";
import AppAlert from "@/AppAlert";
// import {useAlert} from "../use/alert";

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    // const [alert, toggle, close] = useAlert()

    // console.log(isRef(name)) //true
    // console.log(isRef(version.value)) //false

    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    // console.log('created')
    //
    // onBeforeMount(() => {
    //   console.log('onBeforeMount')
    // })
    //
    // onMounted(() => {
    //   console.log('onMounted')
    // })
    //
    // onBeforeUpdate(() => {
    //   console.log('onBeforeUpdate')
    // })
    //
    // onUpdated(() => {
    //   console.log('onUpdated')
    // })

    // console.log(isReactive(framework)) //true
    // console.log(isReactive(framework.name)) //false

    // const doubleVersion = computed(() => version.value * 2)

    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log('new', newValues, 'old', oldValues) // new [8, 'Vue JS!'] old [6, 'VueJS']
    // })

    watch(firstName, (newValue, oldValue) => {
      // console.log(newValue) // input.value
    })

    function changeInfo() {
      name.value = 'Vue JS!'
      version.value = 4

      // console.log(textInput.value) // input element
    }

    const changeVersion = (num) => {
      version.value = num
    }

    provide('name', name)
    provide('version', version)

    return {
      change: changeInfo,
      textInput,
      firstName,
      changeVersion,
      // alert,
      // toggle,
      // close
    }
  },
  components: {
    FrameworkInfo,
    AppAlert
  }
}
</script>

<style scoped>

</style>