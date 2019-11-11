<template>
  <div>
    <!--表单列表信息 -->
    <el-table
    :data="userData.slice((currPage-1)*pageSize,currPage*pageSize)" :header-cell-style="{background:'#666',color:'#fff',margin:'0 auto',width:'100%',border:'1px solid #ccc' }" class="userData">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页信息 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currPage"
    :page-sizes="[1,2,3,4]"
    :page-size="pageSize" background layout="total,sizes,prev, pager, next,jumper"
    :total="total" class="user-pagination">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        total:4,  //显示一共有多少页数
        currPage: 1,//默认前往(第几页)
        pageSize: 2,//默认显示一共有多少页
        userData: [{
          date: '2016-05-03',
          name: '张三',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '赵四',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王五',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '溜溜',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '琪琪',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '张三',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '赵四',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王五',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '溜溜',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '琪琪',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
      ],
      }
    },
    methods: {
      //分页的---每页条数
      handleSizeChange(val) {
        console.log(`每页的${val}条`);
        this.pageSize = val;
      },
      //当前页
      handleCurrentChange(val) {
        console.log(`当前页${val}`);
        this.currPage = val;
      }
    }
  }
</script>
<style lang="scss">
  .user-pagination {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
  }
</style>