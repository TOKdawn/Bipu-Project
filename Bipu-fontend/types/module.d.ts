declare module '*.vue' { //vue文件类型识别
    import { defineComponent } from 'vue';
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
} 

declare module 'moment/dist/locale/*' { //
    import { LocaleSpecification } from 'moment';
    const locale: LocaleSpecification & ReadonlyRecordable;
    export default locale;
}