<template>
    <div>
        <h1>Product List:</h1>
        <p>Here is the list of Products:</p>
        <div v-for="product in products">
            <router-link :to= "{name:'Product-Detail', params:{productId: product.id}}"> {{ product.name }}</router-link>

        </div>
        <button @click="$router.go(-1)">Back</button>

    </div>
</template>

<script setup>
const products = [
    {id:1,name:"Product 1"},
    {id:2,name:"Product 2"},
    {id:3,name:"Product 3"},
];
</script>