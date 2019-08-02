<template>
  <div class="home-page">
    <div class="home-page-hero">
      <div class="home-page-hero-inner">
        <h1 class="home-page-hero-title">
          CloudBase帮助开发者<br/>
          快速构建Web和移动应用
        </h1>
        <p class="home-page-hero-btn">
          <a href="/guide/">
            了解更多
          </a>
        </p>
      </div>
    </div>
    <section class="home-page-wrapper" style="padding: 60px;">
      <div class="home-page-columns">
        <div class="home-page-column" v-for="(item, index) in abilities" :key="index" style="width: 18%;">
          <h4>{{item.name}}</h4>
          <p>{{item.des}}</p>
        </div>
      </div>
    </section>
    <section class="home-page-wrapper">
      <h3 class="home-page-title">
        全面的开发平台与支持
      </h3>
      <div class="home-page-columns">
        <div 
          class="home-page-column" 
          v-for="(platform, index) in platforms" 
          :key="`${platform.title}-${index}`" 
        >
          <div class="home-page-column-head">
            {{platform.title}}
          </div>
          <div 
            class="home-page-column-card"
            v-for="(row, _index) in platform.rows"
            :key="_index"
          >
            <p><a :href="row.href">{{row.name}}</a></p>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="home-page-wrapper">
      <h3 class="home-page-title">
        案例
      </h3>
      <div class="home-page-columns">
        <div class="home-page-column" v-for="item in num3" :key="item" style="width: 30%;">
          <div class="home-page-column-logo">
            <img src="https://firebase.google.com/images/integrations/google-ads.svg?hl=zh-cn" alt="图片">
            <h5>Google Ads</h5>
          </div>
        </div>
      </div>
    </section> -->
    <footer>
      Copyright © 2019 Tencent Cloud Base
    </footer>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  data() {
    return {
      abilities: [
        {
          name: '云函数',
          des: '在云端运行的代码，微信私有天然鉴权，只需编写自身业务逻辑代码'
        },
        {
          name: '数据库',
          des: '一个既可在小程序前端操作，也能在云函数中读写的 JSON 数据库'
        },
        {
          name: '存储',
          des: '天然 CDN 加速，在小程序前端直接上传/下载云端文件，可视化管理'
        },
        {
          name: 'AI智能图像',
          des: '集成智能鉴黄、人脸识别、人脸识别、人脸核身等AI视觉能力'
        },
        {
          name: '智能客服',
          des: '支持语音和文字识别，轻松构建无服务器应用'
        }
      ],
      platforms: [
        {
          title: '支持多端',
          rows: [
            {
              name: '小程序',
              href: ''
            },
            {
              name: 'Web',
              href: ''
            },
            {
              name: 'Android',
              href: ''
            },
          ]
        },
        {
          title: '基础能力',
          rows: [
            {
              name: '云函数',
              href: ''
            },
            {
              name: '数据库',
              href: ''
            },
            {
              name: '存储',
              href: ''
            },
            {
              name: '云调用',
              href: ''
            },
          ]
        },
        {
          title: '增值能力',
          rows: [
            {
              name: 'AI智能图像',
              href: ''
            },
            {
              name: '智能客服',
              href: ''
            }
          ]
        },
        {
          title: 'SDK',
          rows: [
            {
              name: 'NodeJS',
              href: ''
            },
            {
              name: 'PHP',
              href: ''
            }
          ]
        }
      ],
      num3: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  padding-top: 3.6rem;
  max-width: 1350px;
  margin: 0 auto;

  &-hero {
    min-height: 50vh;
    position: relative;

    &-inner {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &-title {
      text-align: center;
      line-height: 2.3;
      letter-spacing: 1px;
    }

    &-btn {
      text-align: center;
      padding-top: 15px;

      a {
        display: inline-block;
        font-size: 1.2rem;
        color: #fff;
        background-color: #3eaf7c;
        padding: .8rem 1.6rem;
        border-radius: 4px;
        transition: background-color .2s ease;
        box-sizing: border-box;

        &:hover {
          background-color: #4abf8a;
        }
      }
    }
  }

  &-wrapper {
    padding: 60px 100px;
    border-top: 1px solid #eaecef;
  }

  &-title {
    text-align: center;
    margin-bottom: 90px;
    font-size: 27px;
  }

  &-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    width: 100%;
    overflow: auto;
  }

  &-column {
    > h4 {
      font-size: 20px;
    }

    > p {
      color: #8c8c8c;
      font-size: 15px;
    }

    &-card {
      margin-bottom: 30px;

      p {
        font-size: 16px;
        a {
          color: #595959;
        }
      }
    }

    &-head {
      font-size: 20px;
      margin-bottom: 30px;
      color: #2c3e50;
    }

    &-logo {
      text-align: center;
      width: 150px;
      cursor: pointer;

      img {
        width: 60px;
      }

      h5 {
        color: #8c8c8c;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  footer {
    padding: 2.5rem;
    border-top: 1px solid #eaecef;
    text-align: center;
  }
}
</style>

