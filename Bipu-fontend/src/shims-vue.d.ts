/* eslint-disable */
// import type { DefineComponent } from 'vue'

declare module '*.vue' {
    import { Component } from 'vue';
    const mod: Component<{}, {}, any>;
    export default mod;
  }
  