export const vFocus = (el: any, binding: any) => {
  el.focus() //element是div包着input 所以这里没办法focus
  // el.children[0].children[0].focus()  //需要这样才能focus
  console.log(binding);  //如果用element的input 这个自定义指令在第一次进入页面会执行两次 并不清楚原因 并且 我点击图片也会触发两次 我去什么意思
}