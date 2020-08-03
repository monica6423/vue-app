<template>
    <div class="nav">
        <router-link to="/goods">goods</router-link>
        <router-link to="/ratings">ratings</router-link>
        <router-link to="/seller">sellers</router-link>
    </div> 
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .nav {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }

    .nav .nav-item {
        flex: 1;
        text-align: center;
    }
</style>