<template>
    <div class="demo">
      <p >School name:{{name}}</p>  
      <p>School address:{{address}}</p>  
    </div>

</template>

<script>

const schools = {
    name:"Schools",
    data(){
        return{
            msg:"i am student",
            name:"beijingdaxue",
            address:"beijing"
        }
    },
    methods:{
        showName(n){
            alert(n)
        }
    },
    // props:{
    //     name: String,
    //     age: Number
    // }
    // props:{
    //     name:{
    //         type:String,
    //     },
    //     age:{
    //         type:Number,
    //         default:99
    //     }
    // }
}

export default schools
</script>

<style>
.demo{
    background-color: orange;
}
</style>