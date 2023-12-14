<template>
    <MyHeader></MyHeader>
    <MyList></MyList>
    <MyFooter></MyFooter>
</template>

<script>
import MyHeader from './MyHeader.vue';
import MyFooter from './MyFooter.vue';
import MyList from './MyList.vue';

export default{
    name:"Device",
    components: { MyHeader,MyFooter, MyList},
    

}

</script>