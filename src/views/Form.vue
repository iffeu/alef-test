<script setup>
import Form from '@/components/Form.vue'
</script>

<template>
  <div>
    <Form />
  </div>
</template>

<style scoped>
 div{
  margin: 0 auto;
  width: 45vw;
  max-width: 616px;
 }

@media (max-width: 490px) {
  div {
    width: 100%;
    padding: 20px;
  }
}
</style>
