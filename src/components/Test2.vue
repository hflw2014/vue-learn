<template>
<div class="root">
  <h1>{{ title }}</h1>
  <hr />
  <div>
    <!-- 列表过滤 -->
    <a-input v-model:value="keyWord" placeholder="input name" />
    <li v-for="item in filStudents" :key="item.id">{{item.id}}:{{item.name}}</li>

  </div>
</div>

</template>
  
<script>
    const Test2Management = {
      name: 'Test2Management',
      data() {
        return {
          title: 'Test Management',
          info: null,
          dataSource:[],
          firstName:'liu',
          lastName:'tao',
          isHot:false,
          myStyle:'green',
          students:[
            {id:1,name:'lili'},
            {id:2,name:'tom'},
            {id:3,name:'jack'},
            {id:4,name:'tony'},
          ],
          keyWord:''
        };
      },
      computed:{
        filStudents:{
          get(){
            return this.students.filter((p)=>{
              return p.name.indexOf(this.keyWord) != -1
            })
          }
        }
      },
      
      methods:{
        showInfo(e){
          console.log("e:",e)
          alert("ni hao")
        },
      
      },
      // components: { Button },
    };
  
    export default Test2Management;
</script>

<style scoped>
.root {
  background-color: powderblue;
}
.ant-layout {
  display: flex;
  width: 100%;
  min-height: 100%;
}
.green{
  background-color: green;
}
.blue{
  background-color: blue;
}
</style>
  