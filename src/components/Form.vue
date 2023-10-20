<script setup>
import { ref } from 'vue';
import Child from '@/components/Child.vue';
import Input from '@/components/Input.vue';


const user = JSON.parse(localStorage.getItem("user") ?? 'null')

const name = ref(user?.name ?? '')
const age = ref(user?.age ?? '')

const children = ref(user?.children ?? [])
let nextChildId = 1
const addChild = () => {
  children.value.push({
    id: nextChildId++,
    name: '',
    age: ''
  })
}
const removeChild = (index) => {
  children.value.splice(index, 1)
}

const savePersonalData = () => {
  const user = {
    "name": name.value,
    "age": age.value,
    "children": children.value.filter((child) => child.name.length > 0),
  }
  localStorage.setItem("user", JSON.stringify(user))
  alert('Данные сохранены')
}

</script>

<template>
  <form action="">
    <fieldset>
      <legend>Персональные данные</legend>
      <Input v-model='name' input-name="Имя" type="text" />
      <Input v-model='age' input-name="Возраст" type="number"/>
    </fieldset>
    <fieldset>
      <div>
        <legend>Дети (макс. 5)</legend>
        <button v-if="children.length < 5" @click.prevent="addChild" class='btn btn-alt'>Добавить ребенка</button>
      </div>
      <div class='children'>
        <Child 
           v-for="(child, index) in children"
           :key="child.id"
           v-model="children[index]"
           @remove="removeChild(index)"
        />
      </div>
    </fieldset>
    <input @click.prevent="savePersonalData" type="submit" value='Сохранить' class='btn'>
  </form>
</template>

<style scoped>
.children {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


form {
  width: 100%;
}

legend {
  color: var(--colors-black, #111);
}

fieldset {
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 30px 0;
  row-gap: 10px;
}

fieldset div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

fieldset legend {
  margin: 10px;
}

.btn {
  border-radius: 100px;
  background: var(--primary);
  display: inline-flex;
  color: var(--white);
  padding: 10px 20px;
  border: 2px solid var(--primary);
  border-radius: 100px;
  flex-direction: column;
  align-items: center;
}

input .btn {
  margin-bottom: 20px;
}

.btn-alt {
  padding-left: 50px;
  background: no-repeat url('@/assets/img/plus.svg');
  background-position: center left 20px;
  color: var(--primary);
}

@media (screen) and (max-width: 1000px) {
  form {
    width: 100vw;
  }
}
</style>
