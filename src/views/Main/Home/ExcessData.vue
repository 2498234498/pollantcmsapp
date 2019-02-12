<template>
  <div class="excess-data">
    <div class="header data-header">
      <h2>
        <i class="return" @click="$router.go(-1)"></i>
        超标数据
        <i class="excess" @click="$router.push({name: 'Detail'})"></i>
      </h2>
    </div>
    <div class="select">
      <div class="time">
        <span class="time-tit">开始时间:</span>
        <input type="text" value="2017-11-12">
      </div>
      <div class="time">
        <span class="time-tit">结束时间:</span>
        <input type="text" value="2017-12-12">
      </div>
      <div class="time">
        <button class="search">查询</button>
      </div>
    </div>
    <div class="data-main">
      <h3>{{pointName}}</h3>
      <div class="data-ban" v-for="(val, index) in data" :key=index>
        <div class="ban-row">
          <span class="title">超标时间:</span>
          <span>{{val.time}}</span>
        </div>
        <div class="ban-row">
          <span class="title">污染物:</span>
          <span>{{val.pollution}}</span>
        </div>
        <div class="ban-row">
          <span class="title">当前值:</span>
          <span>{{val.current}}</span>
        </div>
        <div class="ban-row">
          <span class="title">超标上限:</span>
          <span>{{val.limitup}}</span>
        </div>
        <div class="ban-row">
          <span class="title">超标下限:</span>
          <span>{{val.limitdown}}</span>
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
          time: '2017-11-12',
          pollution: '镉',
          current: '8.0',
          limitup: '10.0',
          limitdown: '9.0'
        }, {
          time: '2017-11-13',
          pollution: '氨氮',
          current: '6.0',
          limitup: '7.0',
          limitdown: '8.0'
        }
      ],
      pointName: '天香采集点'
    }
  }
}
</script>

<style lang='scss' scoped>
  .excess-data {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
    .data-header {
      h2 {
        font-size: 34px;
        line-height: 88px;
        text-align: center;
        font-weight: normal;
        position: relative;
        .return {
          width: 31px;
          height: 32px;
          position: absolute;
          left: 28px;
          top: 28px;
          background: url('~@img/return.png') no-repeat;
          background-size: 100% 100%;
        }
        .excess {
          width: 36px;
          height: 36px;
          position: absolute;
          right: 28px;
          top: 26px;
          background: url('~@img/excess.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .select {
      background-color: #fff;
      padding: 0 58px;
      .time {
        font-size: 26px;
        position: relative;
        height: 74px;
        line-height: 74px;
        .time-tit {
          display: inline-block;
          width: 168px;
        }
        input {
          width: 245px;
          border: 1px solid #ccc;
          height: 46px;
          text-indent: 24px;
        }
        .search {
          width: 202px;
          height: 50px;
          color: #fff;
          background-color: #427fdc;
          border-radius: 10px;
          position: absolute;
          top: 10px;
          right: 40px;
        }
      }
    }
    .data-main {
      background-color: #fff;
      flex-grow: 1;
      margin-top: 20px;
      h3 {
        font-size: 30px;
        height: 77px;
        line-height: 77px;
        padding-left: 52px;
      }
      .data-ban {
        height: 234px;
        margin: 0 25px;
        border: 2px solid #ececec;
        border-radius: 10px;
        margin-bottom: 25px;
        .ban-row{
          font-size: 26px;
          margin-top: 11px;
          .title {
            display: inline-block;
            width: 160px;
            margin-left: 31px;
          }
        }
      }
    }
  }
</style>
