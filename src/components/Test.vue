<template>
<div class="root">
  <h1>{{ title }}</h1>
  <hr />
  <a-button  @click="showInfo">Default Button</a-button>
  <a-button  @click="showInfo2('hello',$event)">show 66</a-button>
  <!-- prevent 为事件修饰符，默认跳转到网站被禁掉, prevent,stop,once -->
  <a href="www.baidu.com"  @click.prevent="showInfo">baidu</a>
  <hr />
  <div>
    firstName:<input type="text" v-model="firstName"><br/>
    lastName:<input type="text" v-model="lastName"><br/>
    name:<span>{{ fullName }} </span>
    <hr />
    <h2>today is {{ weaterInfo }}</h2>
    <a-button  @click="changeWeather">change weather</a-button>
    <hr />
    <div>
      <h2 :class="myStyle">this is style</h2>
      <a-button @click="changeStyle">change style</a-button>
    </div>
    <hr />
    <div>
      <li v-for="item in students" :key="item.id">{{item.id}}:{{item.name}}</li>

    </div>

  </div>
</div>
</template>
  
<script>
    const TestManagement = {
      name: 'TestManagement',
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
          ]
        };
      },
      //计算属性
      computed:{
        fullName:{
          get(){
            console.log("@",this.firstName)
            return this.firstName.slice(0,3) + '-' + this.lastName
          },
          set(v){
            console.log("@set is call")
          }
        },
        weaterInfo:function() {
          return this.isHot ? "hot" : "cold"
        }
      },
      methods:{
        showInfo(e){
          console.log("e:",e)
          alert("ni hao")
        },
        ///按钮函数调用，带参数
        showInfo2(s,e){
          console.log("e:",e)
          alert(s)
        },
        handleName(s){
          return s.slice(0,3)
        },
        changeWeather(){
          this.isHot = !this.isHot
        },
        changeStyle(){
          this.myStyle = this.myStyle === 'green' ? 'blue' : 'green'
        }
      },
      watch:{
        isHot:{
          immediate:true, //init call handler funcion
          handler(newValue,oldValue){
            console.log("@ isHot changed,oldValue:",oldValue," newValue:",newValue)
          }
        }
      }
      // components: { Button },
    };
  
    export default TestManagement;
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
  