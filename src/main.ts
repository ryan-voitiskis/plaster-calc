import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import "./assets/styles/colours.scss"
import "./assets/styles/buttons.scss"
import "./assets/styles/global.scss"
import "./assets/styles/forms.scss"

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount("#app")
