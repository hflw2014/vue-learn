<script lang="ts" setup>
import {reactive} from "vue";
import {doGetAllDevices} from "../../api/test"


interface FormState {
  user: string;
  password: string;
}
const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
const handleFinish = (values: FormState) => {
    console.log("hf_dbg:handleFinish  user:",formState.user," password:",formState.password)
    doGetAllDevices().then(res => {
        console.log("res:",res)
    })
};
const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
  console.log(errors);
};

const dt = {
  data() {
    return {
      message: 'Hello Vue!!',
      imageSrc:'https://static.runoob.com/images/code-icon-script.png',
      showMsg:false,
      stu:[
        {id:1,name: 'tom'},
        {id:2,name: 'tony'},
      ],
      lightOn:false
    }
  }
}




</script>
<template>
  {{message}}
  <a-form
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>