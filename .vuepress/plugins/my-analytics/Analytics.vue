<template>
  <div></div>
</template>

<script>
export default {
  data () {
    return {
      scripts: Array.isArray(SCRIPTS) ? SCRIPTS : [SCRIPTS]
    }
  },

  mounted () {
    // 每次路由的改变，都会触发此操作
    this.$router.afterEach((to, from) => {
      this.scripts
        .forEach(
          script => Hanlder.clear(script).load(script)
        )
    })
  }
}

function Hanlder(params) {}

Hanlder.load = function (src) {
  const script = document.createElement('script')
  script.src = src
  script.type = 'text/javascript'
  script.setAttribute('data-ts', Date.now())
  document.body.appendChild(script)
  console.log(script)
  return Hanlder
}

Hanlder.clear = function (src) {
  document.querySelectorAll(`script[src="${src}"]`)
    .forEach(script => script.remove())
  return Hanlder
}
</script>
