<template>
    <div class="nav">
        <router-link class="nav-item" to="/goods">
            goods
            <i class="line"></i>
        </router-link>
        <router-link class="nav-item" to="/ratings">
            ratings
            <i class="line"></i>
        </router-link>
        <router-link class="nav-item" to="/seller">
            sellers
            <i class="line"></i>
        </router-link>
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
        border-bottom: 1px solid #e4e4e4;
    }

    .nav .nav-item {
        flex: 1;
        text-align: center;
        font-size: 13px;
        text-decoration: none;
        color: #666666;
        position: relative;
    }

    .nav .active {
        color: #ffbb22;
    }

    .nav .active .line {
        width: 21px;
        height: 2px;
        display: inline-block;
        background-color: #ffbb22;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -10px;

    }
</style>