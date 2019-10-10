<template>
  <div class="home-page">
    <div class="home-page-hero">
      <div class="home-page-hero-inner">
        <h1 class="home-page-hero-title">
          云+端一体化<br/>
          快速构建小程序、Web和移动应用
        </h1>
        <p class="home-page-hero-btn">
          <a href="/docs/">
            快速上手
          </a>
        </p>
      </div>
    </div>
    <section class="home-page-wrapper">
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
            <p>
              <a v-if=row.href class="home-page-column-card__name--linked" :href="row.href">{{row.name}}</a>
              <span v-else class="home-page-column-card__name--disabled">{{row.name}}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="home-page-wrapper">
      <h3 class="home-page-title">
        更多内容
      </h3>
      <div class="home-page-columns" style="padding: 0 30px;">
        <div class="home-page-column">
          <img src="/qrcode.png" alt="腾讯云·云开发公众号">
        </div>
        <div class="home-page-others">
          <p
            v-for="(item, index) in others" 
            :key="index"
          >
            <a :href="item.href">{{item.name}}</a>
          </p>
        </div>
      </div>
    </section>
    <footer>
      Copyright © 2019 <a href="https://cloud.tencent.com/product/tcb" target="_blank">Tencent Cloud Base</a>. All Rights Reserved.
    </footer>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  data() {
    return {
      platforms: [
        {
          title: '支持多端',
          rows: [
            {
              name: '小程序',
              href: '/docs/wx-dev-guide-summary/'
            },
            {
              name: 'Web&H5',
              href: '/docs/web-dev-guide-summary/'
            },
            {
              name: '移动应用(即将推出)',
              href: ''
            },
          ]
        },
        {
          title: '基础能力',
          rows: [
            {
              name: '云函数',
              href: '/docs/cloudfunction-summary/'
            },
            {
              name: '云数据库',
              href: '/docs/clouddatabase-summary/'
            },
            {
              name: '云存储',
              href: '/docs/cloudstorage-summary/'
            },
          ]
        },
        {
          title: '增值能力',
          rows: [
            {
              name: 'AI智能图像',
              href: '/docs/value-added-AI-face-detection-intro/'
            },
            {
              name: '实时音视频',
              href: 'https://cloud.tencent.com/document/product/876/32344'
            }
          ]
        },
        {
          title: 'SDK',
          rows: [
            {
              name: '小程序SDK',
              href: 'https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html'
            },
            {
              name: 'JavaScript SDK',
              href: '/docs/WEB-SDK-overview/'
            },
            {
              name: 'NodeJS SDK',
              href: '/docs/NODEJS-SDK-overview/'
            },
            {
              name: 'PHP SDK',
              href: '/docs/PHP-SDK-introduction/'
            }
          ]
        }
      ],
      others: [
        {
          name: '云+社区',
          href: 'https://cloud.tencent.com/developer/team/tcb'
        },
        {
          name: '微信开放社区',
          href: 'https://developers.weixin.qq.com/community/develop/mixflow'
        },
        {
          name: '快速访问云开发Web服务',
          href: 'https://cloud.tencent.com/product/tcb'
        },
        {
          name: '快速访问小程序·云开发解决方案',
          href: 'https://cloud.tencent.com/solution/la'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$mobile-width: 1023px;

.home-page {
  padding-top: 3.6rem;
  max-width: 1350px;
  margin: 0 auto;

  &-hero {
    min-height: calc((100vh - 3.6rem) / 2);
    position: relative;

    &-inner {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      @media (max-width: $mobile-width) {
        width: 90vw;
      }
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
        background-color: #006eff;
        padding: .8rem 1.6rem;
        border-radius: 4px;
        transition: background-color .2s ease;
        box-sizing: border-box;

        &:hover {
          background-color: #006eff;
        }
      }
    }
  }

  &-wrapper {
    padding: 60px 100px;
    border-top: 1px solid #eaecef;

    @media (max-width: $mobile-width) {
      padding: 20px 30px;
    }
  }

  &-title {
    text-align: center;
    margin-bottom: 90px;
    font-size: 27px;

    @media (max-width: $mobile-width) {
      margin-bottom: 50px;
      font-size: 25px;
    }
  }

  &-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    width: 100%;
    overflow: auto;

    @media (max-width: $mobile-width) {
      flex-wrap: wrap;
    }
  }

  &-others {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    a {
      color: #2c3e50;
      font-size: 18px;

      @media (max-width: $mobile-width) {
        font-size: 16px;
      }
    }
  }

  &-column {
    text-align: center;
    a {
      color: #595959;
    }

    &-card {
      margin-bottom: 30px;

      p {
        font-size: 16px;

        @media (max-width: $mobile-width) {
          font-size: 14px;
        }
      }
      &__name{
        &--disabled{
          color:#8c8c8c;
          cursor: normal;
        }
      }
    }

    &-head {
      font-size: 22px;
      margin-bottom: 30px;
      line-height: 30px;
      height: 30px;
      color: #2c3e50;
      font-weight: bold;

      @media (max-width: $mobile-width) {
        font-size: 18px;
      }
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

