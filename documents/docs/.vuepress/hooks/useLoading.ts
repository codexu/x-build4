import { ref } from 'vue';
import { merge } from 'lodash';
import { ElLoading } from 'element-plus';
import { ILoadingOptions, ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type.d';

export default function useLoading(options?: ILoadingOptions) {
  let elLoading: ILoadingInstance | null = null;
  const loading = ref(false);
  const loadingTarget = ref(null);

  function openLoading() {
    loading.value = true;
    elLoading = ElLoading.service(merge(options, { target: loadingTarget.value }));
  }

  function closeLoading() {
    loading.value = true;
    if (elLoading) {
      elLoading.close();
    }
  }

  return {
    loading, loadingTarget, openLoading, closeLoading,
  };
}
