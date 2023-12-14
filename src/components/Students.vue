<template>
    <div class="demo">
      <p >student name:{{name}}</p>  
      <p>student age:{{age+1}}</p>  
      <button @click="showName('jack')"></button>
    </div>

</template>

<script>

const student = {
    name:"Student",
    data(){
        return{
            msg:"i am student",
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
    props:{
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            default:99
        }
    }
}

export default student
</script>

<style>
.demo{
    background-color: orange;
}
</style>