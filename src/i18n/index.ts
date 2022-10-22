import { createI18n } from "vue-i18n";
import EN from "./en.json"; //导入的源数据
import ZH from "./zh-CN.json";

//获取当前语言
const getCurrentLanguage = () => {
	//navigator获取浏览器的各种信xi
	const language: string = navigator.language; //中文就是zh 英文en
	localStorage.setItem("language", language);
	return language.includes("zh");
};

//创建i18n实例
export const i18n = createI18n({
	legacy: false, //you must set `false`, to use Composition API
	globalInjection: true, //全局函数
	locale: getCurrentLanguage() ? "en" : "en", //语言

	messages: {
		//数据源
		en: {
			...EN
		},
		zh: {
			...ZH
		}
	}
});
