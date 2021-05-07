declare interface Fn<T = any, R = T> {
    (...arg: T[]): R;
}
  
declare interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>;
}
declare type RefType<T> = T | null;
declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
    $el: T;
  }
  
declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;
  
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
  