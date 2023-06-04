export default {
  install(app, options) {
    let current = 'ru'

    const changeLanguage = name => {
      current = name
    }

    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    }

    app.config.globalProperties.$i18n = (key) => {
      return key.split('.').reduce((words, idx) => {
        return words[idx] || ' ++ UNKNOW ++ '
      }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}