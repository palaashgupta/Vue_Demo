<template>
    <div>
        <h1>{{message}} </h1>
    </div>
</template>

<script>
export default{
        setup(){
            const message="Hello Vue";
            return{
                message
            };
        },
}
</script>

<style></style>
