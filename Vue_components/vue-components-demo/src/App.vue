<template>
    <button @click="increment">
        Increment
    </button>
    <button @click="decrement">
        Decrement
    </button>
    <p>{{ count }}</p>
    <br><br>
    <ButtonCounter></ButtonCounter>
</template>

<script setup>
import { useCounter } from './composibles/useCounter';
const { count, increment, decrement} = useCounter(100,10);
import ButtonCounter from './components/ButtonCounter.vue';

</script>