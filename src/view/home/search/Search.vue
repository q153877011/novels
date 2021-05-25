<template>
    <div class="search">
        <div class="content">
            <div class="searchArea">
                <el-input v-model="searchText" placeholder="请输入查询内容" prefix-icon="el-icon-search"
                    @keyup.enter="startSearch()"
                ></el-input>
                <el-button @click="startSearch()" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <div v-if="searchText.length != 0">
                <div class="searchResult" v-if='this.resultList.length != 0'> 
                    <search-content :List='this.resultList'></search-content>
                </div>
                <div v-else>
                    <p class="nullResult">无查询结果</p>
                </div>
            </div>
            <div v-else>
                <p>请输入查询内容</p>
            </div>
        </div>
    </div>
</template>

<script>
import {novalSearch} from "@/network/search"
import searchContent from "./searContent"
export default {
    name: 'search', 
    data() {
        return {
            searchText: '',
            resultList: [
            ],
        }
    },
    methods: {
        async startSearch() {
            try {
                const result = await novalSearch(this.searchText);
                this.resultList = result.data;
            } catch(err) {
                console.log(err)
            }
        }
    },
    components: {
        searchContent 
    }
}
</script>

<style>
.el-input {
    width: 50%;
}

.searchArea {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.el-button {
    margin-left: 10px;
}

.search p {
    text-align: center;
    font-family: cursive;
    font-size: larger;
    font-weight: bold;
}

.nullResult {
    color: red;
}
</style>