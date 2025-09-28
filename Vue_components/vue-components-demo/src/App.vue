<template>
    <div class="container">
        <div>
            <h1>{{message}}</h1>
        </div>
        
        <Contact name="Palaash" :phone= "12312313" :ownername="contactsowner" email="gpalaash@gmail.com"></Contact>

        <Contact name="Gupta" :phone= "7482373723" :ownername="contactsowner2" email="palaashgupta2584@gmail.com"></Contact>

    </div>
</template>

<script setup>
import Contact from './components/Contact.vue';

const message="Hello Vue";
const contactsowner ="TEST";
const contactsowner2 ="Exam";
</script>

<style></style>
