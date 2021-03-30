import Vue from 'vue'

export const store = () => ({
  en: null,
  th: null
})

export const mutations = {
  setStaticContent(state, payload){
    const footer = payload.footer
    const header = payload.header
    const en = {
      footer: footer.filter(lang => lang.language == 'en'),
      header: header.filter(lang => lang.language == 'en')
    }
    const th = {
      footer: footer.filter(lang => lang.language == 'th'),
      header: header.filter(lang => lang.language == 'th')
    }
    Vue.set(state, 'en', en)
    Vue.set(state, 'th', th)
  }
}

export const actions = {}


 