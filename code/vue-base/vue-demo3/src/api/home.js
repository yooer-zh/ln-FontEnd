import axios from 'axios'
import jsonp from 'assets/js/jsonp'
import {SUCC_CODE, TIMEOUT, HOME_RECOMMEND_PAGEE_SIZE, jsonpOptions} from './config'

// 获取幻灯片的数据
export const getHomeSlider = () => {
  // get方法返回一个promise对象
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    // 拿到数据后在这里进行校验
    if (res.data.code === SUCC_CODE) {
      return res.data.slider
    }
    throw new Error('没有成功获取到数据')
  }).catch(err => { // catch可以捕获网络错误
    if (err) {
      console.log(err)
    }

    return [{
      linkUrl: 'https://www.baidu.com',
      picUrl: require('assets/img/404.png')
    }]
  }).then(data => { // 自定义，1秒后返回数据
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  })
}

// 获取热门推荐数据 -- jsonp
export const getHomeRecommend = (page=1, psize=HOME_RECOMMEND_PAGEE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json' // 淘宝接口
  const params = {
    page, 
    psize,
    type: 0,
    frontCatId: ''
  }

  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') { // 如果成功，就往后面的then传递
      return res
    }
    console.log(res)
    throw new Error('没有获取到数据') // 不成功就抛出错误，向catch传递
  }).catch(err => {
    if (err) {
      console.log(err) // 只打印没有返回，默认返回 undefinded
    }
  }).then(data => { // 返回Promise对象，10秒后返回
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  })
}
