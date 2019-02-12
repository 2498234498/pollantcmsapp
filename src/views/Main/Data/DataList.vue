<template>
  <div class="data-list">
    <div class="header data-header">
      <h2>数据列表</h2>
    </div>
    <div class="data-main">
      <div class="data-ban" @click="$router.push({name: 'Detail'})" v-for="(val, index) in data" :key=index>
        <h3>{{index+1}}.{{val.pointName}}</h3>
        <div class="data-row">
          <div class="data-col">
            <span class="col-name">公司:</span>
            <span>{{val.company}}</span>
          </div>
          <div class="data-col">
            <span class="col-name">区域:</span>
            <span>{{val.area}}</span>
          </div>
        </div>
        <div class="data-row">
          <div class="data-col">
            <span class="col-name">设备号:</span>
            <span>{{val.devNo}}</span>
          </div>
          <div class="data-col">
            <span class="col-name">状态:</span>
            <span>{{val.status}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataList',
  data () {
    return {
      data: [
        {
          pointName: '天香采集点',
          company: '北京少华科技',
          area: '宣武区',
          devNo: '165454',
          status: '启用'
        },
        {
          pointName: '王健采集点',
          company: '北京建健科技',
          area: '宣武区',
          devNo: '165455',
          status: '启用'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .data-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    .data-header {
      h2 {
        font-size: 34px;
        text-align: center;
        line-height: 88px;
        font-weight: normal
      }
    }
    .data-main {
      background-color: #f0f0f0;
      flex-grow: 1;
      .data-ban {
        background-color: #fff;
        height: 221px;
        border-bottom: 1px solid #ebebeb;
        padding: 0 54px;
        h3 {
          padding-top: 26px;
          font-size: 28px;
        }
        .data-row {
          display: flex;
          .data-col {
            padding-left: 24px;
            flex: 1;
            font-size: 26px;
            margin-top: 26px;
            .col-name {
              width: 98px;
              display: inline-flex;
            }
          }
        }
      }
    }
  }
</style>
