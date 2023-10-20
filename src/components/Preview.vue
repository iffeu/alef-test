<script setup>

const user = localStorage.getItem('user') != null ? JSON.parse(localStorage.user) : null

const plural = (age) => {
  switch (age % 100) {
    case 11:
    case 12:
    case 13:
    case 14:
      return 'лет';
  }
  switch (age % 10) {
    case 1:
      return 'год';
    case 2:
    case 3:
    case 4:
      return 'года';
    default:
      return 'лет';
  }
}

</script>

<template>
  <div class='wrapper'>
    <table>
      <tr>
        <th>Персональные данные</th>
      </tr>
      <tr>
        <td> {{ user?.name }} <span v-if="user?.age">, {{ user.age }} {{ plural(user.age) }}</span> </td>
      </tr>
      <tr></tr>
      <tr>
        <th>Дети</th>
      </tr>
      <tr v-for="(child, index, id) in user?.children" :key="id">
        <td>
          <div class='child'>
            {{ user.children[index].name }}<span v-if="child.age">, {{ user.children[index].age }} {{ plural(child.age)}}</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
th {
  text-align: left;
}

table {
  table-layout: auto;
  width: auto;
  border-spacing: 0 20px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

td div {
  color: var(--black);
}

th {
  color: var(--black);
}

.child {
  padding: 10px 20px;
  width: fit-content;
  border-radius: 5px;
  background: var(--gray-l);
}
</style>
