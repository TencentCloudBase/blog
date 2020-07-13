(function() {
  if (!window.location) {
    return 
  }

  const REDIRECT_MAP = {
    '/': 'https://cloudbase.net/community.html',
    '/2020-03-19-edu-support/': 'https://www.cloudbase.net/community/share/articles/7853e7b85ee8cde9000340337cc24b9d.html',
    '/2020-03-24-third-docs/': 'https://cloudbase.net/community/share/articles/59747b665ee8cd02000233c512d3d22d.html',
    '/2020-04-07-preacher/': 'https://cloudbase.net/community/support/preachers.html'
  }

  const { pathname } = window.location
  if (REDIRECT_MAP[pathname]) {
    window.location.href = REDIRECT_MAP[pathname]
  }
})()