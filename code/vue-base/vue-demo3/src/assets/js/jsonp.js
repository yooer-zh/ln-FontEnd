import jsonp from 'jsonp'

const parseParam = (param) => {
  /**
   * 将 {
   *  page: 1,
   *  psize: 20
   * }  这样的对象转化为
   * page=1&psize=20 
   * 字符串
   */
  let params = []
  for (const key in param) {
    params.push([key, param[key]]) // 每次遍历出的key放在数组第一个，value放在第二个
    // [['page', '1'], ['psize', '20']]
  }
  // params.map(value => value.join('='))
  // ['page=1', 'psize=20']
  return params.map(value => value.join('=')).join('&')
}

export default (url, data, options) => {
  // 拼接url
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data)

  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
