<template>
    <div class="searchContent">
        <div class="contentNotNull" v-if="List.length != 0">
            <el-table :data="List">
                <el-table-column prop="name" label="书名">
                    <template #default='scope'>
                        <el-button type="text" @click="queryChapters(scope.row)"
                        >{{scope.row.name}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="author" label="作者"></el-table-column>
                <el-table-column prop="latestChapterName" label="最后章节"></el-table-column>
                <el-table-column label="添加至书架">
                    <template #default="scope">
                        <el-button type="success" @click="addToShelf(scope.index, scope.row)">添加</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "searchContent",
    props: {
        List: {
            type: Array,
            default: null,
        },
    },
    methods: {
        queryChapters(row) {
            this.$router.push({
                name: 'chapters',
                params: {
                    url: row.url
                }
            });
        }
    },
}
</script>

<style>
.el-button::hover {
    color: red;
}
</style>