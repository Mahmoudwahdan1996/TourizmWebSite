export default ({ app: { $axios } }, inject) => {
  // singleton class
  class HttpMethods {
    static instance
    constructor () {
      if (HttpMethods.instance instanceof HttpMethods) {
        return HttpMethods.instance
      }
      HttpMethods.instance = Object.freeze(this)
    }

    get ({ resource, query }) {
      return $axios({
        method: 'get',
        url: `/${resource}`,
        params: { ...query }
      })
    }

    post ({ resource, data, query }) {
      return $axios({
        method: 'post',
        url: `/${resource}`,
        data,
        params: { ...query }
      })
    }

    delete ({ resource, param }) {
      return $axios({
        method: 'delete',
        url: `/${resource}/${param}`
      })
    }
  }
  inject('http', new HttpMethods())
}
