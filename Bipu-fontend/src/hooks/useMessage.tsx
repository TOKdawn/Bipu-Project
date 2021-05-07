
import {  ElMessage, ElNotification } from 'element-plus';

ElNotification({
    position: 'top-right',
    duration: 4000,
});
ElMessage.error({
    type: 'error', //必须传类型
    duration: 4000,
    showClose: true
})
export function useMessage() {
    return {
      createMessage: ElMessage,
      notification: ElNotification,
    };
  }
  