import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld";

export default defineComponent({
  props: {},
  emits: [],
  components: {},
  setup(props, ctx) {
    return () => (
      <div>
        <HelloWorld></HelloWorld>
      </div>
    );
  },
});
