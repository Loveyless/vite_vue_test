import { Ref } from "vue";

//过滤空 字符串 null undefined
export function filterObject(obj: any | Ref<any>) {
  // 如果参数是 ref，则返回内部值，否则返回参数本身
  obj = unref(obj);
  let body: any = {};
  let m = new Map([
    [null, ""],
    [undefined, ""],
    ["", ""],
  ]);
  for (let key in obj) {
    if (!m.has(obj[key])) {
      body[key] = obj[key];
    }
  }

  return body;
}
