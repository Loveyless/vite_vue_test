import { defineStore } from "pinia";

// 使用setup模式定义
export const Global = defineStore(
  "Global",
  () => {
    const count = ref<number>(1);

    function countAdd() {
      count.value++;
    }

    function doubleCount() {
      return count.value * 2;
    }

    return { count, countAdd, doubleCount };
  },
  {
    persist: true,
  }
);

// 使用options API模式定义
// export const Global = defineStore("Global", {
//   // 定义state
//   state: () => ({
//     count1: 1,
//   }),
//   // 定义action
//   actions: {
//     increment() {
//       this.count1++;
//     },
//   },
//   // 定义getters
//   getters: {
//     doubleCount(state) {
//       return state.count1 * 2;
//     },
//   },
// });
