/* eslint-disable prefer-rest-params */
//http://www.45fan.com/article.php?aid=1D2uoiOSBT1iWP57#_label3

/**
 * v-debouncer="['click',log,1000]"
 */
export const vDebouncer = {
	mounted(el, binding: any) {
		const [event = "click", fn, delayTime = "500"] = binding.value;
		el.addEventListener(event, (_event: any) => {
			if (el.myTimer) clearTimeout(el.myTimer);
			el.myTimer = setTimeout(() => {
				binding.value.fn().apply(el, ...arguments);
			}, delayTime);
		});
	},
	beforeMount(el, binding) {
		clearTimeout(el.myTimer);
		el.removeEventListener("input", binding.value.fn);
	}
};

export const vDebouncer2 = {
	mounted(el, binding) {
		// 至少需要回调函数以及监听事件类型
		if (typeof binding.value.fn !== "function" || !binding.value.event) return;
		let delay = 200; // 默认延迟时间
		el.timer = null;
		el.handler = function () {
			if (el.timer) {
				clearTimeout(el.timer);
				el.timer = null;
			}
			el.timer = setTimeout(() => {
				binding.value.fn.apply(this, ...arguments);
				el.timer = null;
			}, binding.value.delay || delay);
		};
		el.addEventListener(binding.value.event, el.handler);
	},
	// 元素卸载前也记得清理定时器并且移除监听事件
	beforeMount(el, binding) {
		if (el.timer) {
			clearTimeout(el.timer);
			el.timer = null;
		}
		el.removeEventListener(binding.value.event, el.handler);
	}
};
