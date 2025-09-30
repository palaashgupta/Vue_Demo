<template>
    <div class="bg-info rounded p-1 pb-4 m-1">
        <div class="row">
            <div class="col-6">
                <h3>Name:{{ name }}</h3>
                <p>Email: {{ email }}</p>
                <p>Phone: {{ phone }}</p>
            </div>
            <div class="col-5">
                <button 
                @click="toggleFavorite"
                :class="[isFavorite?'btn btn-warning':'btn btn-success']">
                    {{ isFavorite?'Remove from':'Add to' }} Favorite
                </button>
            </div>
            <div class="col-4">
                <LuckyNumber></LuckyNumber>
            </div>
        </div>
        <span class="float-end small" v-if="ownername!=''">
                    **This contact info belongs to {{ ownername }}
        </span>
        
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
import LuckyNumber from './LuckyNumber.vue';

const props = defineProps({
    name:{type:String,required:true},
    phone:Number,
    ownername:String,
    email: {type:String,required:false, default:"Test@test.com"},
    isFavorite: Boolean,
    });

const emit= defineEmits(["update-favorite"]);

function toggleFavorite(){
    emit("update-favorite",{isFavorite: props.isFavorite, name:props.name});
}
</script>