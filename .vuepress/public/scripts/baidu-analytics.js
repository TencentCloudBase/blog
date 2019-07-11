(() => {
  var _hmt = _hmt || []
  
  var hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?b6d2224f91b179ba6a530f883303008c'
  var s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(hm, s)

  _hmt.push('_requirePlugin', 'UrlChangeTracker', {
    shouldTrackUrlChange: function (newPath, oldPath) {
      return newPath && oldPath
    }
  })
})()