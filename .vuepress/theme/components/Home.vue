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
    <section class="home-page-wrapper">
      <div class="home-page-columns">
        <div class="home-page-column" v-for="(item, index) in abilities" :key="index" style="width: 30%;">
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
        <div class="home-page-column" v-for="item in num2" :key="item" style="width: 30%;">
          <div class="home-page-column-card">
            <h4>Cloud Firestore</h4>
            <p>在全球范围内存储和同步应用数据</p>
          </div>
          <div class="home-page-column-card">
            <h4>Cloud Firestore</h4>
            <p>在全球范围内存储和同步应用数据</p>
          </div>
        </div>
      </div>
    </section>
    <section class="home-page-wrapper">
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
    </section>
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
          name: '云存储',
          des: 'Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users'
        },
        {
          name: '云函数',
          des: 'Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users'
        },
        {
          name: '云数据库',
          des: 'Firebase gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users'
        },
      ],
      num2: [5, 6, 7],
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
      font-size: 22px;
    }

    > p {
      color: #8c8c8c;
    }

    &-card {
      margin-bottom: 30px;
      transition: all .2s ease-out;

      &:hover {
        transform: translateY(-5px);
        cursor: pointer;
      }

      h4 {
        margin: 0;
      }

      p {
        color: #8c8c8c;
        font-size: 14px;
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

