<template>
  <div class="my-popup" v-show="shown" @click="closePopup">
    <div class="my-popup-container" @click.stop="() => {}">
      <div class="my-popup-exit" @click="closePopup"></div>
      <img :src="imgSrc" alt="" @click="dumpInNewTab">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgSrc: '',
      shown: false
    }
  },

  mounted () {
    const imgs = []

    const handleClick = (ev) => {
      this.imgSrc = ev.target.getAttribute('src')
      this.shown = true
    }

    const bindClick = () => {
      const newImgs = Array.prototype.slice.call(document.querySelectorAll('img')).filter(img => !findClsInParent(img, 'my-popup'))

      const hasNew = 
        newImgs.length !== imgs.length ||
        newImgs.some((img, index) => img !== imgs[index])

      if (!hasNew) {
        return
      }

      imgs.length = 0
      imgs.forEach(img => img.onclick = null)
      newImgs.forEach(img => imgs.push(img))
      imgs.forEach(img => {
        img.style.cursor = 'pointer'
        img.onclick = handleClick
      })
    }
    
    bindClick()
    setInterval(bindClick, 500)
  },

  methods: {
    closePopup () {
      this.shown = false
    },

    dumpInNewTab (ev) {
      const { target } = ev
      const tabUrl = target.getAttribute('src')
      window.open(tabUrl, "_blank")
    }
  }
}

/**
 * Check if the class of parent dom matches 'cls'
 */
function findClsInParent (dom, cls) {
  if (!dom) {
    return false
  }

  const _ = ele => {
    if (!ele) {
      return false
    }  

    if (typeof ele.className === 'string' && ele.className.indexOf(cls) !== -1) {
      return true
    }

    return _(ele.parentNode)
  }

  return _(dom.parentNode)
}

</script>

<style scoped>
.my-popup {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 600;
}

.my-popup-container {
  position: relative;
  z-index: 900;
  width: 1032px;
  height: 647px;
  max-width: 90vw;
  max-height: 80vh;
  background-color: white;
  border-radius: 7px;
  overflow: visible;
  padding: 15px;
  box-sizing: border-box;
}

.my-popup-exit {
  position: absolute;
  right: 0;
  top: 0;
  height: 36px;
  width: 36px;
  transform: translate(50%, -50%);
  border-radius: 50%;
  background: #4abf8a;
  transition: transform .3s ease-in-out;
}

.my-popup-exit::before, .my-popup-exit::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 3px;
  top: 50%;
  left: 50%;
  background: white;
}

.my-popup-exit::before {
  transform: translate(-50%, -50%) rotate(45deg); 
}

.my-popup-exit::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.my-popup-exit:hover {
  cursor: pointer;
  transform: translate(50%, -50%) rotate(90deg);
}

.my-popup-container img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
  cursor: zoom-in;
}
</style>

