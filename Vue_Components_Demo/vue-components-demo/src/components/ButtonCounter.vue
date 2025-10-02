<template>
    <button @click="increment">
        ++
    </button>
    <p>{{ count }}</p>
    <button @click="decrement">
        --
    </button>
    
</template>

<script setup>
import { useCounter } from '../composibles/useCounter';
const { count, increment, decrement} = useCounter(10,1);

</script>