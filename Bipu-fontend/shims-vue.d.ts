/* eslint-disable */
import type { DefineComponent } from 'vue'

declare module '*.vue' {
    import { defineComponent } from 'vue';
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
  }
  