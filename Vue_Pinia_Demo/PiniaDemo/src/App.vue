<template>
  <header>
    <div class="text-center pt-3 text-success h3">
      CountOPedia
    </div>
    <hr>
    <div class="row">
      <div class="col-4 offset-1">
        <router-link to="/" class="form-control badge rounded-pill text-bg-warning p-4" aria-current="page">Home</router-link>
      </div>
      <div class="col-4 offset-1">
        <router-link to="/info" class="form-control badge rounded-pill text-bg-warning p-4" aria-current="page">Info</router-link>
      </div>
    </div>
  </header>

  <RouterView/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>


<style scoped></style>
