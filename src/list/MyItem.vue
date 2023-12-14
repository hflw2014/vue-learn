<template>
 <a-checkbox v-model:checked="checked">Checkbox</a-checkbox>
 <a-button></a-button>
</template>

<script>

export default{
    name:"MyItem",
    data(){
        return{
            checked:false
        }
    }

}

</script>