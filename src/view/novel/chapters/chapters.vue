<template>
    <div class="chapters">
        <el-scrollbar>
            <div class="content">
                    <div class="eachChapters">
                        <p v-for="chapter in chapters" :key='chapter.url' class="chapter">
                                {{chapter.name}}
                        </p>
                    </div>
            </div>
        </el-scrollbar>
    </div>
</template>
<script>
import { getChapters } from "@/network/getChapters";

export default {
    name: "chapters",
    methods: {
    },
    data() {
        return {
            url: '',
            chapters: [
                {name:'11111111111', url:'1111'},
                {name:'11111111112', url:'1111'},
                {name:'11111111113', url:'1111'},
                {name:'11111111114', url:'1111'},
                {name:'11111111115', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
                {name:'11111111111', url:'1111'},
            ]
        }
    },
    async mounted() {
        this.url = this.$route.params.url;
        try {
            const result = await getChapters(this.url);
            console.log(result.data.length)
            this.chapters = result.data
        } catch(err) {
            console.log(err)
        }
    }
}   
</script>

<style>
.chapters {
    background-color: #c7e7f6;
    height: 100vh;
}
.content {
    display: flex;
    justify-content: center;
}
.chapter {
    width: 30%;
    border-bottom: 1px dotted rgb(175, 172, 172);
    margin-left: 15px;
}
.eachChapters {
    margin-top: 10px;
    width: 70%;

    border-color: #49b5eb;
    border-width: 2px;
    border-style: solid;
    
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    background-color: #b8dff3;
    font-family:serif;
}
</style>