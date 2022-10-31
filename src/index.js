import { createApp } from 'vue'
import App from './App'
import router from './router'

// 整体引入：element-ui
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

createApp(App).use(router).mount(document.getElementById('app'))
