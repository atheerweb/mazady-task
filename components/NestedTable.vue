<script setup lang="ts">

defineProps<{
    data: any,
}>()
</script>
<template>
    <table>
    <thead>
      <th v-for="(value, key) in data" :key="key">
        <td>{{ key }}</td>
      </th>
    </thead>
    <tbody>
      <tr>
          <div v-for="(value, key) in data" :key="key">
            <th v-if="Array.isArray(value)">
          <div class="nested-table" v-for="option , index in value" :key="index">
            <NestedTable :data="option" /> 
          </div>   
            </th>
            <th v-else>{{ value ? value : 'null' }}</th>
          </div>
      </tr>
    </tbody>
  </table>
</template>
<style lang="scss" scoped>
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 12em;
    }
  }
  tbody {
    display: flex;
    flex-direction: column;
    padding: 1em;
    tr {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      div{
        display: flex;
      justify-content: center;
      align-items: center;
      width: 10em;
      }
    }
  }
}
</style>
