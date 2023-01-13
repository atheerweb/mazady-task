<script setup lang="ts">
import { stringify } from "querystring";
import chevronDown from "~/assets/images/chevronDown.svg?component";
import searchFilter from "~/logic/searchFilter";
import checkObjectName from "~/logic/checkObjectName";
import checkObjectValue from "~/logic/checkObjectValue";

const emit = defineEmits({
  updateValue(value) {
    return typeof value === "number" || "string";
  },
});
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

const searchValue = ref("");

const showOptions = ref(false);

const optionsArray = ref(props.options);

function toggleOptions() {
  showOptions.value = !showOptions.value;
}

function search(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.value) {
    optionsArray.value = searchFilter(input.value, optionsArray.value);
  } else {
    optionsArray.value = props.options;
  }
}

const chosenValue = computed(() => {
  let parsed = "";
  let chosen = "";
  if (props.modelValue) {
    parsed = JSON.parse(props.modelValue);
  }
  props.options.forEach((option) => {
    if (
      (typeof parsed === "number" && option.id === parsed) ||
      (typeof parsed === "object" && option.id === parsed.id)
    ) {
      chosen = option.name;
    }
  });
  return chosen;
});

function updateModelValue(event: MouseEvent) {
  emit("updateValue", event);
}
</script>

<template>
  <div class="select-wrapper">
    <label :for="label">{{ label }}</label>
    <div @click="toggleOptions" class="select" :name="label" :id="label">
      <chevronDown />
      {{ chosenValue }}
    </div>
    <div class="options" v-if="showOptions">
      <input
        v-model="searchValue"
        v-if="searchable"
        @input="search($event)"
        type="text"
        :placeholder="`search for ${label}`"
      />
      <p
        class="option"
        v-for="(option, index) in optionsArray"
        :key="index"
        @click="
          updateModelValue(checkObjectValue(objectValue, option));
          toggleOptions();
        "
      >
        {{ checkObjectName(objectName, option) }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select {
  cursor: pointer;
  min-width: 5em;
  min-height: 2em;
  background-color: white;
  border: 1px solid rgba(0 0 0 / 0.1);
  display: flex;
  padding: 0.6em;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  border-radius: 0.5em;
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

.option:hover {
  background-color: var(--primary-color);
  color: #fff;
}

input {
  width: 100%;
  padding: 0.7em;
  margin: 0.5em 0;
  border: solid 1px rgba(0 0 0 / 0.1);
  border-radius: 0.5em;
}

label {
  margin: 0.3em 0;
}
</style>
