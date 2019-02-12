/* eslint-disable */
import router from '@/router'
/**
 * 通用类，兼容安卓和苹果两端
 */
class Common {
  constructor () {
    // this.test()
  }
}

/**
 * 安卓原生事件
 * @class Android
 */
class Android extends Common {
  constructor () {
    super()
    this.routeTopName = ['Login', 'Homehome', 'Data'] // 顶级路由名称，route.name

    this.onBack()
  }

  /**
   * 监听物理返回键，非首页返回上一页，首页则默认
   */
  onBack () {
    let webview = plus.webview.currentWebview()
    plus.key.addEventListener('backbutton', () => {
      webview.canBack((e) => {
        if (!this.routeTopName.includes(router.app.$route.name)) {
          // 返回上一页
          router.back(-1)
        } else {
          // 退出APP
          plus.runtime.quit()
        }
      })
    }, false)
  }
}

/**
 * 苹果原生事件
 * @class IOS
 */
class IOS extends Common {
  constructor () {
    super()
    console.log('IOS')
  }
}

// 等待自带的native初始化后再调用相对应的事件
let native = new Promise((resolve, reject) => {
  document.addEventListener('plusready', () => {
    let name = plus.os.name
    switch (name) {
      case 'Android':
        new Android()
        resolve()
        break
      case 'IOS':
        new IOS()
        resolve()
        break
      default:
        resolve()
        break
    }
  }, false)
})

export default native
