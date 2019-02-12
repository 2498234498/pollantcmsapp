<template>
  <div class="login">
    <h1 class="title">水质监控移动应用</h1>
    <ul>
      <li>
        <img class="usr" src="@img/Login/usr.png" alt="">
        <input type="text" placeholder="请输入用户名">
      </li>
      <li>
        <img class="password" src="@img/Login/psd.png" alt="">
        <input type="password" placeholder="请输入密码">
      </li>
    </ul>
    <div class="psd">
      <span class="span">记住密码</span>
      <div class="switch-container">
        <input class="switch switch-anim" type="checkbox" checked>
      </div>
    </div>
    <div class="btn clear">
      <button class="ripple" @click="$router.push({ path: '/main' })">登 陆</button>
    </div>
    <div class="forgetPsd clear">
      <span>忘记密码</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background: #e5e5e5;
  overflow: hidden;
  .title {
    width: 100%;
    text-align: center;
    height: 31px;
    line-height: 31px;
    margin-top: 254px;
    font-size: 31px;
    margin-bottom: 64px;
  }
  ul {
    width: calc(100% - 226px);
    margin: 0 auto;
    background: #fff;
    height: 205px;
    border: 1px solid #c9caca;
    box-shadow:0px 5px 5px #d0d2d1;
    li {
      margin-left: 6px;
      margin-right: 6px;
      height: 76px;
      border-bottom: 1px solid #f4f4f4;
      overflow: hidden;
      &:first-child {
        margin-top: 18px;
      }
      .usr {
        float: left;
        width: 35px;
        height: 37px;
        margin-top: 20px;
        margin-left: 37px;
        margin-right: 42px;
      }
      .password {
        float: left;
        width: 31px;
        height: 37px;
        margin-top: 20px;
        margin-left: 37px;
        margin-right: 42px;
      }
      input {
        float: left;
        height: 60px;
        width: 300px;
        margin-top: 8px;
      }
    }
  }
  .psd {
    width: calc(100% - 226px);
    margin: 0 auto;
    background: #fff;
    height: 64px;
    line-height: 64px;
    border: 1px solid #c9caca;
    margin-top: 32px;
    box-shadow:0px 5px 5px #d0d2d1;
    .span {
      float: left;
      margin-left: 34px;
      font-size: 33px;
      color: #000;
    }
    .switch-container {
      width: 114px;
      height: 49px;
      position: relative;
      float: right;
      margin-right: 27px;
      margin-top: 8px;
    }
    .switch {
      width: 114px;
      height: 49px;
      position: relative;
      border: 2px solid #40ba55;
      background-color: #fdfdfd;
      box-shadow: #dfdfdf 0 0 0 0 inset;
      border-radius: 31.5px;
      background-clip: content-box;
      display: inline-block;
      -webkit-appearance: none;
      user-select: none;
      outline: none;
      transition: background 0.3s, box-shadow 0.3s;
      display: flex;
      align-items: center;
    }
    .switch:after {
      position: absolute;
      content: 'OFF';
      font-size: 24px;
      line-height: 49px;
      right: 18px;
      left: auto;
      color: #64bd63;
    }
    .switch:checked:after {
      content: 'ON';
      font-size: 24px;
      left: 22px;
      line-height: 49px;
      right: auto;
      color: #fff;
    }
    .switch:before {
      content: '';
      width: 39px;
      height: 39px;
      position: absolute;
      top: 2px;
      left: 0;
      border-radius: 50px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      z-index: 10;
    }
    .switch:checked {
      border-color: #64bd63;
      box-shadow: #64bd63 0 0 0 16px inset;
      background-color: #4bd963;
    }
    .switch:checked:before {
      left: 70px;
    }
    .switch.switch-anim:before {
      transition: left 0.3s;
    }
    .switch.switch-anim:checked {
      box-shadow: #64bd63 0 0 0 16px inset;
      background-color: #64bd63;
    }
    .switch.switch-anim:checked:before {
      transition: left 0.3s;
    }
  }
  .btn {
    width: calc(100% - 226px);
    height: 73px;
    margin: 0 auto;
    margin-top: 74px;
    button {
      width: 100%;
      height: 73px;
      line-height: 73px;
      text-align: center;
      font-size: 32px;
      font-weight: bolder;
      background: #4bd963;
      color: #fff;
      border-radius: 5px;
      outline: none;
    }
  }
  .forgetPsd {
    width: calc(100% - 226px);
    margin: 0 auto;
    span {
      font-size: 28px;
      color: #a1a1a1;
      float: right;
      margin-top: 40px;
    }
  }
}
</style>
