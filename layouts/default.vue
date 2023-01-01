<script setup lang="ts">
const searchText = ref("");
const selected = ref<null | string>(null);
const items = ["مزاد مباشر متعدد"];
const routes = ["الرئيسيه", "التصنيفات", "مشترياتي", "حسابي"];
const languages = ["العربيه", "الإنجليزيه"];
const selectedLanguage = languages[0];
selected.value = items[0];
</script>
<template>
  <nav class="navigation">
    <div class="logo-search-bar layout-padding">
      <img class="logo-img" src="~/assets/images/logo.png" alt="logo" />

      <div class="search-bar">
        <v-btn class="navigation__button white bg-primary rounded">
          <v-icon x-large> mdi-magnify </v-icon>
        </v-btn>

        <v-text-field
          v-model="searchText"
          bg-color="accent"
          color="accent"
          class="text-direction text-input"
          placeholder="إبحث هنا"
        ></v-text-field>

        <v-select
          v-model="selected"
          :items="items"
          bg-color="accent"
          color="accent"
          class="select-input"
        ></v-select>
      </div>
    </div>
    <div class="routes-icons layout-padding">
      <ul class="routes">
        <li v-for="(route, index) in routes" :key="index">{{ route }}</li>
      </ul>
      <div class="options">
        <v-icon x-large color="white"> mdi-gift </v-icon>
        <v-icon x-large color="white"> mdi-bell </v-icon>
        <v-icon x-large color="white"> mdi-heart </v-icon>
        <v-select
          class="language-input"
          v-model="selectedLanguage"
          :items="languages"
          bg-color="secondary"
          color="secondary"
          item-color="primary"
        ></v-select>
      </div>
    </div>
  </nav>

  <slot />
</template>
<style lang="scss" scoped>
* {
  direction: rtl;
}

.navigation {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
  width: 100%;
  .logo-search-bar {
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    height: 4.6em;
    .logo-img {
      width: 9em;
      height: 9em;
      object-fit: scale-down;
    }
    .search-bar {
      height: 3.4em;
      width: 54.25em;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: row-reverse;

      .navigation__button {
        height: inherit;
      }
    }
  }
  .routes-icons {
    background: linear-gradient(45deg, var(--primary-color), #9d0257);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.6em;
    .routes {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      list-style: none;
    }
    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
    }
  }
}
</style>
