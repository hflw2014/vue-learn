<template>
<div class="root">
    <button @click="showVendor">list vendor</button>
    <hr />
    <a-table :dataSource="dataSource" :columns="columns" />
</div>
</template>
  
<script>
  import {doGetAllDevices} from "../api/test"
  import {doGetAllVendors} from "../api/test"

    const VendorManagement = {
      name: 'VendorManagement',
      data() {
        return {
          title: 'Vendor Management',
          info: null,
          dataSource:[],

          columns: [
          {
            title: 'ID',
            dataIndex: 'vendorId',
            key: 'vendorId',
          },
          {
            title: '公司名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '联系人',
            dataIndex: 'userName',
            key: 'userName',
          },
        ],
        };
      },
      methods: {
        showVendor() {
          doGetAllVendors().then((res) => {
            this.dataSource = res.vendors
            console.log('res.data:', res.vendors);
          });
        },
      },
  
      mounted() {
        doGetAllVendors().then((res) => {
            this.dataSource = res.vendors
            console.log('res.data:', res.vendors);
          });
      },
    };
  
    export default VendorManagement;
</script>

<style>

</style>
  