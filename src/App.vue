<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
<!--      <div class="form-control" :class="{invalid: errors.name}">-->
<!--        <label for="name">Как тебя зовут?</label>-->
<!--        <input-->
<!--          type="text"-->
<!--          id="name"-->
<!--          placeholder="Введи имя"-->
<!--          v-model.trim="name"-->
<!--        >-->
<!--        <small v-if="errors.name">{{ errors.name }}</small>-->
<!--      </div>-->

      <app-input
        placeholder="Введи имя"
        :error="errors.name"
        :label="'Как тебя зовут?'"
        v-model:value="name"
      ></app-input>
<!--        v-model="name"                  default -->
<!--        v-model:modelValue="name"        default -->


      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
          type="number"
          id="age"
          max="999"
          v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" value="yes" name="trip"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" value="no" name="trip"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="cli"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Router"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила нашей компании</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree" /> С правилами согласен</label>
        </div>
      </div>

      <button type="submit" class="btn primary"
      >Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "./AppInput";
  export default {
    data() {
      return {
        name: '',
        age: 23,
        city: 'nsk',
        relocate: 'yes',
        skills: [],
        agree: false,
        errors: {
          name: null
        }
      }
    },
    methods: {
      formIsValid() {
        if (!this.name.length) {
          this.errors.name = 'Имя не может быть пустым'
          return false
        } else {
          this.errors.name = null
        }
        return true
      },
      submitHandler() {
        if (this.formIsValid()) {
          console.group('FORM DATA')
          console.log('name', this.name)
          console.log('age', this.age)
          console.log('city', this.city)
          console.log('relocate', this.relocate)
          console.log('skills', this.skills)
          console.log('agree', this.agree)
          console.groupEnd()
        }
      }
    },
    components: {
      AppInput
    }
  }
</script>

<style>
  .form-control small {
    color: #e53935;
  }

  .form-control.invalid input {
    border-color: #e53935;
  }
</style>
