window.fbAsyncInit = function () {
  FB.init({
    appId: 955158271494910,
    cookie: true,
    xfbml: true,
    version: 'v4.0'
  })
  FB.AppEvents.logPageView()
}
;(function (d, s, id) {
  let js
  const fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'facebook-jssdk')
