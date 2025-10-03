import { defineStore } from "pinia";
import { ref,computed } from "vue";


export const useGameStore=defineStore("gameStore",()=>{
    
    const score = ref(0);
    const maxHealth=ref(100);
    const maxAttack = ref(30);
    const maxDefence = ref(10);


    const getScore = computed(()=> score.value);
        
    const getWinningScore = computed(()=>maxHealth.value);
    
    const setNextAttack=()=>{
    console.log('getNectAttack');
    let attack = Math.floor(Math.random()*maxAttack.value)+1;
    console.log("attack:",attack)
    score.value += attack;
    };
    const setNextDefense=()=>{
        console.log('getNextAttack');
        let defence = Math.floor(Math.random()* maxDefence.value)+1;
        console.log("Defence:",defence)
        score.value -= defence;
    };
    const resetScore=()=>{
        score.value =0;
    };
    return{
        score,maxAttack,maxDefence,maxHealth,
        getScore,getWinningScore, setNextAttack, setNextDefense, resetScore
    }
    }
);
