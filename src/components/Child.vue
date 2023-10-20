<script setup>
import Input from '@/components/Input.vue';

defineEmits(['remove', 'update:value', 'update:modelValue'])
defineProps(['modelValue'])

</script>

<template>
  <div>
    <div>
      <Input v-model="modelValue.name" class='input' input-name="Имя" type="text"/>
      <Input v-model="modelValue.age" class='input' input-name="Возраст" type="number"/>
    </div>
    <button @click.prevent="$emit('remove')">Удалить</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

div div {
  flex-grow: 1;
}
.input {
  flex-grow: 1;
}
button {
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  background: none;
  border: none;
  color: var(--primary);
}
</style>
