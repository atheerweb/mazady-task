<template>
  <div class="select-wrapper">
    <label :for="label">{{ label }}</label>
    <div @click="toggleOptions" class="select" :name="label" :id="label">
      {{ chosenIndex !== nullx ? options[chosenIndex]?.name : "" }}
    </div>
    <div class="options" v-if="showOptions">
      <input
        v-if="searchable"
        @input="search($event.target?.value)"
        type="text"
        :placeholder="`search for ${label}`"
      />
      <p
        class="option"
        v-for="(option, index) in optionsArray"
        :key="index"
        :id="objectValue ? option[objectValue] : option"
        @click="
          $emit('update:modelValue', $event.target?.id);
          setChosen(index);
        "
      >
        {{ objectName ? option[objectName] : option }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { P } from "vitest/dist/types-bae746aa";

defineEmits(["update:modelValue"]);
interface props {
  label: string;
  options: any[];
  objectName?: string;
  objectValue?: string;
  modelValue: number | string;
  searchable?: boolean;
}
const props = withDefaults(defineProps<props>(), {
  searchable: false,
});

const chosenIndex = ref<null | number>(null);

const showOptions = ref(false);

const optionsArray = ref(props.options);

function toggleOptions() {
  showOptions.value = !showOptions.value;
}
function setChosen(optionIndex: number) {
  chosenIndex.value = optionIndex;

  toggleOptions();
}

function search(text: string) {
  if (text) {
    optionsArray.value = props.options.filter((option) => {
      return option.name.toLowerCase().startsWith(text);
    });
  } else {
    optionsArray.value = props.options;
  }
}
</script>

<style lang="scss" scoped>
.select {
  cursor: pointer;
  min-width: 5em;
  min-height: 2em;
  background-color: white;
  border: 1px solid black;
  display: flex;
  padding: 0 0.5em;
  justify-content: flex-start;
  align-items: center;
}

.options {
  background-color: white;
  padding: 0.5em;
  margin-top: 0em;
  max-height: 15em;
  overflow-y: scroll;
}
.option {
  cursor: pointer;
}

input {
  width: 100%;
  padding: 0.5em;
}
</style>
