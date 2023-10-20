<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="page-wrapper">
    <Header />
    <router-view />
    <Footer />
  </div>
  </template>

<style scoped>
  .page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  footer {
    margin-top: auto;
  }
</style>
