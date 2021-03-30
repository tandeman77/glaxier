import { groq } from '@nuxtjs/sanity'

const actions = {
  async nuxtServerInit({commit}, {app, $sanity}) {
    return new Promise(async (resolve, reject) => {
        try {
          const locale = app.i18n.locale
          const query = groq`{
            "header": *[_type == 'header'],
            "footer": *[_type == 'footer']
          }`
          console.log(app.i18n.locale)
          const content = await app.$sanity.fetch(query)
          await commit('staticContent/setStaticContent', content)
          resolve()
        } catch (err) {
          reject(err)
        }
    });
  }
}

export default { actions }