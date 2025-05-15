import { createApp } from 'vue';
import App from './App.vue';
import naive from 'naive-ui';

import { setupCustomComponents } from '@/plugins';

async function appInit() {
	const app = createApp(App);

	// 注册全局自定义组件
	setupCustomComponents(app);

	// 挂载应用
	app.use(naive);

	// 挂载到页面
	app.mount('#app', true);
}

appInit().then(() => {
	console.log('应用挂载成功');
});
