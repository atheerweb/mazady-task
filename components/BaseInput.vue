<script setup lang="ts">
defineEmits(["update:modelValue"]);
interface inputProps {
  label?: string;
  type: string;
  modelValue: string;
  placeholder: string;
}
withDefaults(defineProps<inputProps>(), {
  type: "text",
});
</script>

<template>
  <label :for="label">{{ label }}</label>

  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style>
input {
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid rgba(0 0 0 / 0.1);
}
</style>
