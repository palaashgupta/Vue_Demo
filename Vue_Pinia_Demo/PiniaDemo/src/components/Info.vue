<template>
    <div>
        <h1 class="text-center">
            INFO
        </h1>
        <p class="text-center">
            This is the Info Page.
        </p>
        <p>
            This is a simple game where you can increment, decrement, or randomize the score. The score starts at 0 and you can win by reaching {{ gameStore.getWinningScore}}.
        </p>
        <input type="number" v-model="gameStore.maxHealth">
    </div>
</template>

<script setup>
import { useGameStore } from '@/store/gameStore';
const gameStore = useGameStore()

</script>