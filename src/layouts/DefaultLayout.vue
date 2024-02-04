<script setup lang="ts"></script>

<template>
  <aside>
    <ul>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
      <li><router-link :to="{ name: 'login' }">Entrar</router-link></li>
    </ul>
  </aside>
  <router-view></router-view>
</template>
