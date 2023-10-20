<script setup>
defineProps(['inputName', 'modelValue', 'type'])
defineEmits(['update:modelValue'])

const randomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const salt = randomString(6)

</script>

<template>
  <div>
    <label :for="inputName + salt" id='l'>{{ inputName }}</label>
    <input 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :id="inputName + salt"
        :type="type" 
        :placeholder="inputName"
    >
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  position: relative;
}

label {
  display: block;
  position: absolute;
  top: 8px;
  left: 16px;

  color: var(--gray);
  transition: 0.2s;

  &:has(~ input:not(:focus):placeholder-shown) {
    top: 20px;
    font-size: 1.5rem;
    transition: 0.2s;
  }
}

input {
  border-radius: 4px;
  padding-left: 14px;
  padding-top: 26px;
  padding-bottom: 6px;
  border: 1px solid #F1F1F1;
  color: var(--black);

  &:placeholder-shown::placeholder {
    color: transparent;
    cursor: default;
  }

}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>
