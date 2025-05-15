<template>
	<div class="wrapper" :style="recStyle">
		<sketch-rule ref="$sketchRule" v-bind="post" />
	</div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

const $sketchRule = ref();
const post = reactive({
	think: 20,
	width: 1470,
	height: 700,
	showShadowText: true,
	autoCenter: false,
	canvasWidth: 1000,
	canvasHeight: 500,
	showRuler: true,
	palette: {
		backgroundColor: 'transparent',
		lineType: 'dashed',
	},
	isShowReferLine: true,
	shadow: {
		x: 0,
		y: 0,
		width: 300,
		height: 300,
	},
	line: {
		h: [0, 250],
		v: [0, 250]
	}
});

const recStyle = computed(() => {
	return {
		width: `${post.width}px`,
		height: `${post.height}px`,
	};
});

</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin: 0 auto;

}
</style>
