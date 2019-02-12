/* eslint-disable */

/**
 * 根据移动设备执行相对应的方法
 * 此方法包括调用此方法的只在移动设备中生效
 */
export function equipment () {
  try {
    return plus.os.name
  } catch (e) {
    // console.log(e)
    return 'PC'
  }
}

/**
 * 设置状态栏前景色，只支持两种颜色，黑色(dark)，白色(light)
 * !- Android5只有小米和魅族支持，Android6及以上所有安卓支持；
 * !- iOS7及以上支持
 * @param {String} color - 颜色值，黑色(dark)，白色(light)，默认为白色(light)
 */
export function setStatusBarStyle (color = 'light') {
  if (equipment() === 'PC') return
  plus.navigator.setStatusBarStyle(color)
}

/**
 * 设置状态栏背景色
 * !- Android5及以上系统支持
 * !- iOS7.0及以上系统支持
 * @param {String} color - 十六制颜色(#333)，不传不设置
 */
export function setStatusBarBackground (color) {
  if (equipment() === 'PC') return
  if (!color) return
  plus.navigator.setStatusBarBackground(color)
}

/**
 * 消息推送
 */
export function msgPush () {
  var NotifyID = 1
  var main = plus.android.runtimeMainActivity()
  var Context = plus.android.importClass('android.content.Context')
  var Noti = plus.android.importClass('android.app.Notification')
  var NotificationManager = plus.android.importClass(
    'android.app.NotificationManager'
  )
  var nm = main.getSystemService(Context.NOTIFICATION_SERVICE)
  var Notification = plus.android.importClass('android.app.Notification')
  var mNotification = new Notification.Builder(main)
  // 新增 810726685@qq.com 的代码
  var Intent = plus.android.importClass('android.content.Intent')
  var PendingIntent = plus.android.importClass('android.app.PendingIntent')
  var intent = new Intent(main, main.getClass())
  var pendingIntent = PendingIntent.getActivity(
    main,
    0,
    intent,
    PendingIntent.FLAG_CANCEL_CURRENT
  )
  // 新增代码
  var r = plus.android.importClass('android.R')

  // mNotification.setOngoing(true)
  mNotification.setContentTitle('水质监控')
  mNotification.setContentText('天香监控点，当前水位值为：10，报警下限值为：0，报警上限值为：8。请查看处理！')

  // 新增代码
  mNotification.setSmallIcon(r.drawable.ic_notification_overlay)
  mNotification.setTicker('PadInfo')

  // 新增 810726685@qq.com 的代码
  mNotification.setContentIntent(pendingIntent)
  mNotification.setNumber(10)
  var mNb = mNotification.build()
  nm.notify(NotifyID, mNb)
}
