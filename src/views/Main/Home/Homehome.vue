<template>
  <div class="home-home WH">
    <div class="home-header header">
      <div class="header-left">
        <img src="@img/list.png"
          @click="test()"
          alt="">
      </div>
      <div class="header-cont">水质检测</div>
    </div>
    <div class="home-main">
      <ve-bmap height="100%"
        class="home-map"
        width="100%"
        :settings="chartSettings"
        :series="chartSeries"
        :tooltip="chartTooltip"
        :events="chartEvents"
        :set-option-opts="false"
        ref="bmap">
      </ve-bmap>
    </div>
  </div>
</template>

<script>
import { msgPush } from '@util'
export default {
  name: 'HomeHome',
  data () {
    return {
      chartSeries: {
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: [
          // 经度，维度，参数, ...
          [
            113.35,
            23.12,
            {
              name: '天香采集点',
              num: 150,
              waterLevel: 1000,
              velFlow: 1000,
              appraisal: 2
            }
          ]
        ],
        label: {
          show: true,
          position: 'top',
          formatter (params) { // 自定义绘制点的文字内容
            return [`{num|${params.data[2].num}}{name|${params.data[2].name}}`].join('\n')
          },
          rich: {
            num: {
              color: '#ed5d7d',
              fontSize: '14',
              lineHeight: 34,
              height: 34,
              backgroundColor: '#fff',
              padding: [0, 0, 0, 12],
              // borderColor: '#333',
              // borderWidth: [1, 1, 1, 0],
              borderRadius: [17, 0, 0, 17]
            },
            name: {
              color: '#333',
              fontSize: '14',
              lineHeight: 34,
              height: 34,
              backgroundColor: '#fff',
              padding: [0, 12, 0, 0],
              // borderColor: '#333',
              // borderWidth: [1, 1, 1, 0],
              borderRadius: [0, 17, 17, 0],
              align: 'center',
              textBorderColor: 'none',
              shadowOffsetX: 100
            }
          }
        },
        symbol: `image://${require('@img/location.png')}`, // 绘制点图标
        symbolSize: [60, 67],
        itemStyle: {
          opacity: 1
        }
      },
      chartSettings: {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [113.35, 23.12],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      },
      chartTooltip: {
        show: true,
        position (point, params, dom, rect, size) {
          // 自定义获得焦点时的显示dom
          let obj = params.data[2]
          let html = ''
          html = `<div class='MapTig'>
                    <div class='MapTig-title'>${obj.name}</div>
                    <div class='MapTig-cont'>
                      <ul>
                        <li class="w50"><span class='MapTig-li-title'>水位：</span><span class='MapTig-li-cont'>${obj.waterLevel}</span></li>
                        <li class="w50"><span class='MapTig-li-title'>流速：</span><span class='MapTig-li-cont'>${obj.velFlow}</span></li>
                        <li><span class='MapTig-li-title'>水质评价：</span><span class='MapTig-li-cont'>`
          for (const i in new Array(obj.appraisal).fill('')) {
            html += `<img class="xing-icon" key="${i}" src="${require('@img/xing.png')}" />`
          }
          html += `</span></li>
                        <li class="just"><a href="/#/main/home/detail"><img src="${require('@img/MenuIcon.png')}" >查看详情</a></li>
                      </ul>
                    </div>
                  </div>`
          dom.innerHTML = html
          if (!dom.classList.contains('MapTigger')) dom.classList.add('MapTigger')
          // 由于绘制点多一行标题，所以需要计算偏移上方的位置
          // 默认API是4个方向，这里需求的是2个方面，分别正上和下
          let pit = [0, 0]
          let domW = dom.clientWidth
          let domH = dom.clientHeight
          pit[0] = point[0] + domW * 0.58 - domW
          pit[1] = point[1] - 80 - domH
          return pit
        }
      },
      chartEvents: {},
      clickChange: false // 点击设备点居中且重新设置tooltip的位置
    }
  },
  created () {
    this.bmapClick()
  },
  methods: {
    test () {
      msgPush()
    },
    // 获取地图数据，重新地图默认显示位置
    bampAfterConfig (echarts) {
      if (this.chartSeries.data.length) {
        this.$nextTick(() => {
          if (echarts.getModel().getComponent('bmap') && echarts.getModel().getComponent('bmap').getBMap()) {
            let bmap = echarts.getModel().getComponent('bmap').getBMap()
            bmap.setCenter(new window.BMap.Point(this.chartSeries.data[0][0], this.chartSeries.data[0][1]))
          }
        })
      }
    },
    // 点击位移到屏幕中间
    bmapClick () {
      let that = this
      this.chartEvents = {
        click (e) {
          let bmap = that.$refs.bmap.echarts.getModel().getComponent('bmap').getBMap()
          bmap.setCenter(new window.BMap.Point(e.data[0], e.data[1]))
          that.$nextTick(() => {
            that.clickChange = true
          })
        },
        // 渲染结束时处理
        finished () {
          if (that.clickChange) {
            that.clickChange = false
            const [clW, clH] = [that.$refs.bmap.$el.clientWidth, that.$refs.bmap.$el.clientHeight]
            let dom = document.querySelector('.MapTigger')
            let pit = [0, 0]
            let domW = dom.clientWidth
            let domH = dom.clientHeight
            pit[0] = (clW / 2) + domW * 0.58 - domW
            pit[1] = (clH / 2) - 80 - domH
            dom.style.left = pit[0] + 'px'
            dom.style.top = pit[1] + 'px'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-home {
  display: flex;
  flex-direction: column;
  .home-header {
    position: relative;
    display: flex;
    align-items: center;
    .header-left {
      margin-left: 36px;
      img {
        width: 37px;
        height: 27px;
      }
    }
    .header-cont {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 34px;
    }
  }
  .home-main {
    flex-grow: 1;
    position: relative;
    .home-map {
      position: absolute !important;
    }
  }
}
</style>

<style>
.MapTigger {
  padding: 18px;
  border-radius: 5px;
  box-shadow: 0px 4px 15px #333333;
  background-color: #fff !important;
  width: 346px;
}
.MapTigger .MapTig-title {
  color: #000;
  font-size: 28px;
  font-weight: bold;
}
.MapTigger .MapTig-cont {
  width: 100%;
}
.MapTigger .MapTig-cont li {
  width: 100%;
  margin-top: 25px;
  overflow: hidden;
  float: left;
}
.MapTigger .MapTig-cont li.w50 {
  width: 50%;
}
.MapTigger .MapTig-cont li span {
  color: #333;
  font-size: 26px;
}
.MapTigger .MapTig-cont li span .xing-icon {
  width: 26px;
  height: 26px;
  margin-right: 9px;
}
.MapTigger .MapTig-cont li.just img {
  width: 20px;
  height: 18px;
  margin-right: 8px;
}
.MapTigger .MapTig-cont li.just a {
  color: #000;
  font-size: 28px;
}
</style>
