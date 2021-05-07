export const REDIRECT_NAME  = 'Redirect' //页面重定向

export const PARENT_LAYOUT_NAME = 'ParentLayout'; //父级布局

export const LAYOUT = () => import('/@/layouts/default/index.vue');
/**
 * @description: parent-layout
 */
 export const getParentLayout = (_name?: string) => {
    return () =>
      new Promise((resolve) => {
        resolve({
          name: PARENT_LAYOUT_NAME,
        });
      });
  };
  