<script setup lang="ts">
import { useGetRequest } from "~/composables/apiCalls";
import { MainCategory } from "~/types/MainCategory";
import { SubCategory } from "~/types/SubCategory";
import { CategoryProperties } from "~/types/CategoryProperties";
import { Data, PropsValues } from "~/types/Data";
import { isArray } from "@vue/shared";
import { Console } from "console";

const data = ref<Data>({
  selected_main_category: "",
  selected_sub_category: "",
  props_values: [],
});
const subKey = ref(0);
const propKey = ref(0);
const propCKey = ref(0);
const submitted = ref(false);
const subCategories = ref<SubCategory[] | null>(null);
const mainCategories = ref<MainCategory[] | null>(null);
const categoryProperties = ref<CategoryProperties[] | null>(null);
getMainCategories();

watch(
  () => data.value.selected_main_category,
  (newV) => {
    const mainCategoryObject = mainCategories.value!.filter(
      (value) => value.id === parseInt(newV)
    );
    subCategories.value = mainCategoryObject[0].children;
    categoryProperties.value = null;
    subKey.value++;
  }
);
watch(
  () => data.value.selected_sub_category,
  async (newV) => {
    let res = await getCategoryProps(newV);
    if (res) {
      res = pushOtherIntoNestedArray(res, "options");
    }
    categoryProperties.value = res;
    propKey.value++;
  }
);

function pushOtherIntoNestedArray(array: any[], key: string) {
  const modifiedArray = array;
  modifiedArray.forEach((arry) => {
    arry[key] = pushOtherIntoArray(arry[key]);
  });
  return modifiedArray;
}
function pushOtherIntoArray(array: option[]) {
  let modifiedArray: option[] = array;
  modifiedArray.push({ id: "other", name: "other" });
  return modifiedArray;
}

async function getMainCategories() {
  const res = await useGetRequest("get_all_cats");
  if (res.code == 200) {
    mainCategories.value = res.data.categories;
  }
}

async function getCategoryProps(
  catId: string
): Promise<null | CategoryProperties[]> {
  const res = await useGetRequest(`properties?cat=${catId}`);
  if (res.code == 200) {
    return res.data;
  }
  return null;
}
function pushIntoCategoryProperties(
  data: CategoryProperties[],
  propId: number,
  clear?: boolean
) {
  categoryProperties.value?.forEach((prop) => {
    if (prop.id === propId) {
      if (!prop.optionsChildren || clear) {
        prop.optionsChildren = [];
      }
      let exists = false;
      prop.optionsChildren.forEach((child) => {
        data.forEach((nChild) => {
          if (child.name === nChild.name) {
            child.options = nChild.options;
            exists = true;
            propCKey.value++;
          }
        });
      });
      if (!exists) {
        prop.optionsChildren.push(...data);
      }
    }
  });
}

async function fetchOptions(
  propId: number,
  selectedOption: string,
  clear?: boolean
) {
  const parsedObject = JSON.parse(selectedOption);
  const res = await useGetRequest(`get-options-child/${parsedObject.id}`);
  if (res.code == 200) {
    res.data = pushOtherIntoNestedArray(res.data, "options");
    res.data = pushIntoCategoryProperties(res.data, propId, clear);
  }
}
function setOptionsChildren(prop: CategoryProperties) {
  let options: PropsValues[] = [];
  if (prop.optionsChildren?.length && Array.isArray(prop.optionsChildren)) {
    options = prop.optionsChildren.map((option) => {
      return {
        [`${option.name}`]: option.other_value
          ? { id: option.name, value: option.other_value }
          : option.value,
      };
    });
  }
  return options;
}

function mapPropsValues() {
  const array = categoryProperties.value?.map((prop) => {
    return {
      [`${prop.name}`]: prop.other_value
        ? { id: prop.name, value: prop.other_value }
        : prop.value,
      optionsChildren: setOptionsChildren(prop),
    };
  });
  if (Array.isArray(array)) {
    data.value.props_values = array;
  }
}

function submit() {
  submitted.value = true;
  mapPropsValues();
}
</script>

<template>
  <div class="form-wrapper">
    <form @submit.prevent="submit">
      <BaseSelect
        :searchable="true"
        v-if="mainCategories"
        v-model="data.selected_main_category"
        label="Select Main Category"
        :options="mainCategories"
        object-name="name"
        object-value="id"
      />
      <BaseSelect
        :searchable="true"
        v-if="subCategories"
        v-model="data.selected_sub_category"
        label="Select sub Category"
        :options="subCategories"
        object-name="name"
        object-value="id"
        :key="subKey"
      />
      <fieldset
        v-for="(prop, propIndex) in categoryProperties"
        :key="propIndex"
      >
        <legend>choose {{ prop.name }}</legend>
        <BaseSelect
          :searchable="true"
          v-model="prop.value"
          :label="prop.name"
          :options="prop.options"
          object-name="name"
          @update:model-value="fetchOptions(prop.id, prop.value, true)"
          :key="propKey"
        />

        <BaseInput
          v-if="prop.value.includes('other')"
          v-model="prop.other_value"
          placeholder="from user"
        />

        <div v-for="option in prop.optionsChildren" :key="option.id">
          <BaseSelect
            :searchable="true"
            v-model="option.value"
            :label="option.name"
            :options="option.options"
            object-name="name"
            @update:model-value="fetchOptions(prop.id, option.value)"
            :key="propCKey"
          />
          <BaseInput
            v-if="option.value.includes('other')"
            v-model="option.other_value"
            placeholder="from user"
          />
        </div>
      </fieldset>
      <input type="submit" value="تأكيد" class="submit form-button" />
    </form>
    <div v-if="submitted">
      <NestedTable :data="data" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5em;
  margin: 1em 0;
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 30%;
    direction: ltr;
    .form-button {
      font-size: 1rem;
      font-weight: 700;
    }
  }
  b {
    direction: ltr;
  }
}

table {
  background-color: white;

  border-radius: 0.5em;
  thead {
    display: flex;
    justify-content: center;
    gap: 1em;
    align-items: center;
    font-weight: bold;
    padding: 1em;
    border-bottom: 1px solid grey;
    th {
      text-align: center;
    }
  }
  tbody {
    display: flex;
    flex-direction: column;
    padding: 1em;
    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
