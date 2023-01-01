// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light :{
          colors:{
          primary: '#D20653',
          secondary: '#FF951D',
          accent: "#FBE5ED",
          error: '#b71c1c',

        }}
      },
    },
    components,
    directives
  })

  nuxtApp.vueApp.use(vuetify)
})