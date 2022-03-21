import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createPinia } from 'pinia'

import { faUserSecret, faPhone, faCannabis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faPhone)
library.add(faCannabis)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(createPinia()).use(router).mount('#app')
