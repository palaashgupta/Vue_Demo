import { defineStore } from "pinia";


export const useGameStore=defineStore("gameStore",{
    state:()=> ({
        score:0,
        maxHealth:100,
        maxAttack:30,
        maxDefence:10,
    }),
    getters:{
        getScore(){
            return this.score;
        },
        getWinningScore(){
            return this.maxHealth;
        }
    },
    actions:{
         setNextAttack(){
            console.log('getNectAttack');
            let attack = Math.floor(Math.random()*this.maxAttack)+1;
            console.log("attack:",attack)
            this.score += attack;
        },
        setNextDefense(){
            console.log('getNextAttack');
            let defence = Math.floor(Math.random()* this.maxDefence)+1;
            console.log("Defence:",defence)
            this.score -= defence;
        },
        resetScore(){
            this.score =0;
        }
    }
});
