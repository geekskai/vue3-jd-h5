import { createApp, h, defineComponent } from 'vue';
import App from './App';
import router from './router';
import store from './store';

import { Button } from 'vant';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .mount('#app');
