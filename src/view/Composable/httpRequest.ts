//单次请求
export function useHttp(url: string) {
  const data = ref<string | null>(null);
  const error = ref<string | null>(null);

  http
    .get("https://jsonplaceholder.typicode.com/todos/1", {
      headers: {
        loading: 1,
      },
    })
    .then((result) => {
      setTimeout(() => {
        data.value = result.data;
      }, 1000);
      setTimeout(() => {
        error.value = "Error";
      }, 3000);
    })
    .catch((err) => {
      setTimeout(() => {
        error.value = "Error";
      }, 3000);
    });

  return { data, error };
}

// 如何在每次 URL 变化时都重新请求呢？那我们可以让它同时允许接收 ref 作为参数：
// 这个版本的 useFetch() 现在同时可以接收静态的 URL 字符串和 URL 字符串的 ref。
// 当通过 isRef() 检测到 URL 是一个动态 ref 时，它会使用 watchEffect() 启动一个响应式的 effect。
// 该 effect 会立刻执行一次，并在此过程中将 URL 的 ref 作为依赖进行跟踪。
// 当 URL 的 ref 发生改变时，数据就会被重置，并重新请求。
export function useHttp2(url: string | any) {
  const data = ref<string | null>(null);
  const error = ref<string | null>(null);

  function doSomething() {
    // 在请求之前重设状态...
    data.value = null;
    error.value = null;
    // unref() 解包可能为 ref 的值
    http
      .get(unref(url), {
        headers: {
          loading: 1,
        },
      })
      .then((result) => {
        setTimeout(() => {
          data.value = result.data;
        }, 1000);
        setTimeout(() => {
          error.value = "Error";
        }, 3000);
      })
      .catch((err) => {
        setTimeout(() => {
          error.value = "Error";
        }, 3000);
      });
  }

  if (isRef(url)) {
    // 若输入的 URL 是一个 ref，那么启动一个响应式的请求
    watchEffect(doSomething);
  } else {
    // 否则只请求一次
    // 避免监听器的额外开销
    doSomething();
  }

  return { data, error };
}
