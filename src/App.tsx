import { reactive, ref, defineComponent } from "vue";

import HelloWorld from "@/components/HelloWorld.vue";
// eslint-disable-next-line 
const img = require('./assets/logo.png');

export default defineComponent({
  setup() {
    const state = reactive({
      name: 10,
    });
    const numberRef = ref(1);
    setInterval(() => {
      state.name += 1;
      numberRef.value += 1;
    }, 1000);
    return () => {
      const number = numberRef.value;
      return (<div id="app">
        <img src={img} alt="logo" />
        <p>name:{state.name}</p>
        <HelloWorld></HelloWorld>
        <p>value:{number}</p>
      </div>)
    };
  },
});