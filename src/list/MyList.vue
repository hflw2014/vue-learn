<template>
    <div class="root">
    <a-list item-layout="horizontal" :data-source="DataItem">
      <template #renderItem="{ item }">
        <a-list-item>
            <a-checkbox>{{ item.title }}
                <a-button>delete</a-button>
            </a-checkbox>
            
        </a-list-item>
      </template>
    </a-list>
</div>
</template>

<script lang="ts">
import MyItem from './MyItem.vue';


export default{
    name:"MyList",
    components: { MyItem},
    data(){
        return{
            DataItem: [
                {
                    title: 'Ant Design Title 1',
                },
                {
                    title: 'Ant Design Title 2',
                },
                {
                    title: 'Ant Design Title 3',
                },
                {
                    title: 'Ant Design Title 4',
                },
            ]
        }
    }
}

</script>

<style scoped>
.root{
    width: 50vw;
    height: 100vw;
    background-color: lightblue;
}
</style>