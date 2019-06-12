<template>
  <div></div>
</template>

<script>
import md5 from 'blueimp-md5'
export default {
  mounted () {
    window.md5 = md5
  }
}
</script>
