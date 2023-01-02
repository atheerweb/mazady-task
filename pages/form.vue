<script setup lang="ts">
	import { useGetRequest } from "~/composables/apiCalls";
	const mainCategory = ref(1);
	const mainCategories = ref<[] | null>(null);
	const res = await useGetRequest("get_all_cats");
	if (res.code == 200) {
		mainCategories.value = res.data.categories;
	}
</script>

<template>
	<div class="form-wrapper">
		<form v-if="mainCategories">
		
		</form>
	</div>
</template>

<style lang="scss" scoped>
	.form-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		form {
			width: 30%;
			direction: ltr;
		}
	}
</style>
