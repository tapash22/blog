import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'

// import VueVideoPlayer from '@videojs-player/vue'
// import 'video.js/dist/video-js.css'


createApp(App).use(router).use(vuetify).mount('#app')