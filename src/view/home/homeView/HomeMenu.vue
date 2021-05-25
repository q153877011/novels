<template>
    <div class="HomeMenu">
        <el-menu text-color="white" active-text-color="yellow" background-color= "rgb(84, 92, 100)"
            mode="horizontal" @select="handleSelect" default-active="1"
        >   
            <el-menu-item index="1">我的书架</el-menu-item>
            <el-menu-item index="2">搜索</el-menu-item>
            <div class="description"> <el-menu-item>个人中心</el-menu-item> </div>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'HomeMenu',
    methods: {
        handleSelect(key) {
            switch(key) { 
                case "1":
                    this.$router.push({name: 'homeShelf'})
                    break; 
                case "2":
                    this.$router.push({name: 'homeSearch'})
                    break;
            }
        }
    }
}
</script>

<style>
.el-menu {
    background-color: rgb(84, 92, 100);
    display: flex;
    flex: 1;
}
.el-menu-item {
    flex: 1;
    width: 180px;
    text-align: center;
}

.description {
    display: inline-block;
    width: 200px;
    font-weight: bold;
    font-size: large;
}

.description .el-menu-item {
    padding-left: 45px;
}
</style>