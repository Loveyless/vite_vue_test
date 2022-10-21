// v-freedom
// params: {x} left
// params: {y} top

export const vFreedom = (el: any, binding: any) => {
	//设置基础样式
	el.style.position = "fixed";
	el.style.left = binding.value.x + "px";
	el.style.top = binding.value.y + "px";
	el.style["z-index"] = "999";

	//鼠标按下
	el.addEventListener("mousedown", (event: any) => {
		let disX, disY; //https://blog.csdn.net/zhangpu_/article/details/121712302
		// disX = el.pageX - parseInt(el.style.left);
		// disY = el.pageY - parseInt(el.style.top);
		disX = event.pageX - parseInt(getComputedStyle(el).left.replace("px", ""), 10);
		disY = event.pageY - parseInt(getComputedStyle(el).top.replace("px", ""), 10);

		function handle(event) {
			el.style.left = event.pageX - disX + "px";
			el.style.top = event.pageY - disY + "px";
		}

		//鼠标移动
		document.addEventListener("mousemove", handle);
		//松开鼠标时
		document.addEventListener("mouseup", () => {
			//移除事件
			document.removeEventListener("mousemove", handle);
		});
	});
};

// export const vFreedom = {
//   mounted(el: any, binding: any) {

//     //设置基础样式
//     el.style.position = 'fixed'
//     el.style.left = binding.value.x + 'px'
//     el.style.top = binding.value.y + 'px'
//     el.style.zindex = "999"

//     //鼠标按下
//     el.addEventListener('mousedown', (event: any) => {

//       let disX, disY;  //https://blog.csdn.net/zhangpu_/article/details/121712302
//       // disX = el.pageX - parseInt(el.style.left);
//       // disY = el.pageY - parseInt(el.style.top);
//       disX = event.pageX - parseInt(getComputedStyle(el).left.replace('px', ''), 10);
//       disY = event.pageY - parseInt(getComputedStyle(el).top.replace('px', ''), 10);

//       function handle(event) {
//         el.style.left = (event.pageX - disX) + 'px'
//         el.style.top = (event.pageY - disY) + 'px'
//       }

//       //鼠标移动
//       document.addEventListener('mousemove', handle)
//       //松开鼠标时
//       document.addEventListener('mouseup', () => {
//         //移除事件
//         document.removeEventListener('mousemove', handle)
//       })

//     })

//   },
// }
