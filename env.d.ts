/* 全局类型声明文件 */

/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component;
}

declare type Nullable<T> = T | null; // 可空类型
