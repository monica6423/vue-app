<template>
    <div class="test">
        我是test key
        {{msg}}
    </div>
</template>


<script>
export default {
    data() {
        return {
            msg:"i am from msg"
        }
    }
}
</script>

<style scoped>
.test {
    color: red;
}
</style>