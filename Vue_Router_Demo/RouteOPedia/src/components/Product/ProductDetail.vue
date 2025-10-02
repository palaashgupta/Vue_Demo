<template>
    <div>
        <h1>Product Detail</h1>
        <div v-if="route.params.productId">
            <p>Product ID: {{ route.params.productId }}</p>
        </div>
        <div v-else>
            <p> No product ID found </p>

        </div>
        <button @click="$router.go(-1)">Back</button>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route =useRoute();
console.log(route.params)
</script>