<template>
	<label for="pet-select">Choose Main Category:</label>
	<select name="main-categories" id="main-categories">
		<option v-for="(option, index) in options" :key="index" :value="objectValue ? options[objectV] : ">
			{{ option?.name }}
		</option>
	</select>
</template>

<script setup lang="ts">
	defineProps<{
		label: string;
		options: any[];
		objectName: string;
		objectValue: string;
	}>();
</script>
