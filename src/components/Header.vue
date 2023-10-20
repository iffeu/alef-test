import { RouterLink } from 'vue-router';
<template>
  <header>
    <router-link class="logo" to='/'><img src="@/assets/img/Logo_imi_horizontal.png" alt="Лого компании" /></router-link>
    <nav>
      <ul>
        <li><router-link to="/form">Форма</router-link></li>
        <li><router-link to="/preview">Превью</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #DEDEDE;
}

img {
  margin-left: 20px;
  margin-right: 20px;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

ul {
  padding-left: 0;
  display: flex;
  list-style: none;
  justify-content: space-between;
  gap: 24px;
}

a {
  text-decoration: none;
  color: var(--gray);
}
</style>
