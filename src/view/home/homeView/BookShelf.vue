<template>
    <div class="shelf">
        <div class="content">
            <div class="total">
                <p>总共收藏 <span class="bookNumber">{{bookList.length}} </span>本小说</p>
            </div>
            <el-table :data="bookList" style="width: 100%;">
                <el-table-column prop="name" label="书名">
                    <template class="nameBtn" #default="scope">
                        <el-button type="text" @click="toChapterPage(scope.row)">{{scope.row.name}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="LatestChapterName" label="最后章节"></el-table-column>
                <el-table-column label="是否有更新">
                    <template #default="scope">
                        <span v-if='scope.row.update' class="updateTrue">已更新</span>
                        <span v-else class="updateFalse">未更新</span>
                    </template>
                </el-table-column>
                <el-table-column prop="author" label="作者"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type='danger' size="mini" @click="removeFiction(scope.$index, scope.row)">移除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "shelf",
    data() {
        return {
            bookList: [
                {
                    id: 1,
                    type: '都市',
                    name: '兵王',
                    LatestChapterName: '零零零零',
                    author: '123',
                    url:'www.baidu.com',
                    update: false,
                },
                {
                    id: 2,
                    type: '玄幻',
                    name: '万族之劫 ',
                    LatestChapterName: '发粪涂墙',
                    author: '321',
                    update: true,
                },
            ],
            bookItem: {
                id: 0,
                name: '',
                LatestChapterName: '',
                author: '',
                update: false,
                url: '',
                readingUrl: ''
            }
        }
    },
    methods: {
        removeFiction(index, row) {
            this.$confirm('确认删除该本小说？', '确认', {
                cancelButtonText: '取消',
                confirmButtonText: '确定',
                
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功'
                });
                this.bookList.splice(index, 1)
                console.log(row)
            }).catch(()=> {
                this.$message({
                    type: 'info',
                    message: "已取消"
                })
            })
        },
        toChapterPage(row) {
            console.log(row.url)
        }
    }
}
</script>

<style>
.content {
    margin-left: 20px;
    margin-right: 40px;
}
.cell {
    text-decoration: none;
    color: black;
}

.has-gutter .cell {
    font-size: 17px;
    font-family: cursive;
}

.updateFalse {
    background: rgb(231, 171, 171);
    font-weight: bold;
}

.updateTrue {
    background: rgb(178, 223, 178);
    font-weight: bold;
}

.bookNumber {
    font-size: large;
    color: red;
}

.total {
    font-size: 20px;
    text-align: right;
    margin-right: 25px;
}

span {
    padding: 10px;
}
</style>