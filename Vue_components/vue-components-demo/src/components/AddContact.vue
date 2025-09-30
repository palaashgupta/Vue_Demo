<template>
    <div class="container border rounded p-2">
        <div class="text-center text-black">
            Add New Contact
        </div>
        <form @submit.prevent="addContact">
        <div class="row">
            <div class="col-4">
                <input type="text" class="form-control" 
                v-model="contact.name" 
                placeholder="Enter name">
            </div>
            <div class="col-4">
                <input type="text" class="form-control" 
                v-model.number="contact.phone" 
                placeholder="Enter Phone Number">
            </div>
            <div class="col-4">
                <input type="text" class="form-control" 
                v-model="contact.email" 
                placeholder="Enter Email ID">
            </div>
            <div class="col-6 offset-3 p-2">
                <button type="submit" class="btn btn-primary w-100">
                    Add Contact
                </button>

            </div>
        </div>
        </form>
    </div>

</template>

<script setup>
import { reactive,defineProps } from 'vue';
const contact = reactive({
    name: "",
    phone: "",
    email: "",
});

const prop = defineProps({onAddContact: Function});

function addContact(){
    prop.onAddContact({
        email:contact.email, 
        name:contact.name, 
        phone: contact.phone
    });
    contact.email="";
    contact.name="";
    contact.phone="";
}
</script>