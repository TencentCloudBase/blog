数据和文件是小程序开发非常重要的元素，在前面的章节里，数据和文件等的存储都是在小程序的页面进行渲染、或是页面间传递或与本地手机交互。这一节我们会来介绍数据、文件如何与网络HTTP进行数据、文件的对话，如何获取并上传网络数据和文件。

#### 数据API

小程序以及很多程序的API是**预先就已经写好的函数**，使我们不需要对底层有太多了解，只需要按照技术文档进行传递参数就能调用出非常复杂的功能。而还有一类API则侧重于把**数据资源**给开放出来，我们可以通过**HTTP的方式**来使用这些数据。

**了解网络数据API**

复制以下链接地址，用浏览器打开，看看会返回什么结果：
<pre class="lang:js decode:true">//知乎日报的最新话题
https://news-at.zhihu.com/api/4/news/latest

//知乎日报某一个话题的内容
https://news-at.zhihu.com/api/4/news/9714883

//v2ex论坛的最新主题
https://www.v2ex.com/api/topics/latest.json

//CNode论坛的最新话题
https://cnodejs.org/api/v1/topics</pre>
以上所返回的数据类型都是json格式，相信大家应该比较熟悉了。那我们如何把以上数据渲染到我们的小程序页面上呢？
> 数据是一种资源，比如新闻资讯、电商商品、公众号文章、股市行情、空气质量和天气、地图、词典翻译、快递信息、书籍信息、音乐视频、财务公司信息等等这些都是数据，数据也是一种商品，一种服务，通常它的使用对象是开发者，有些免费，有些也会收取一定的费用，大家可以通过综合性API服务平台[聚合API](https://www.juhe.cn/)来对API服务有一个基础的了解。
**练手API资源推荐**

这里推荐几个程序员经常会拿来练手的API资源，你可以使用这些API来做网站、小程序、移动端（iOS、安卓）、桌面端，也可以用于各种框架比如Vue、React、Flutter等等，数据没变，只是解决方案不同。

*   [聚合API](https://www.juhe.cn/)：一个比较全面的综合性API服务平台
*   [即速API](https://www.jisuapi.com/)：也是提供一些综合性的API服务
*   [V2EX API](https://www.v2ex.com/p/7v9TEc53)：v2ex论坛是很多程序员经常会光顾的综合性技术论坛
*   [CNode API](https://cnodejs.org/api/)：Nodejs交流论坛
*   [和风天气](https://www.heweather.com/)：含天气预报、空气质量、实况天气等数据
*   [Github API](https://developer.github.com/v3/)：Github是所有程序员都（必须）会使用的网站
*   [知乎日报API](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)：知乎日报API分析
> 各大公司的开发平台：比如[微信开放平台](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;lang=zh_CN&amp;tab=dev)提供了微信账号体系的接入，[腾讯云API中心](https://cloud.tencent.com/document/api)则提供了调用云资源的能力（包含服务器、物联网、人工智能等API）、[开源网站Wordpress](https://developer.wordpress.org/rest-api/reference/)也提供API调用的服务，在API资源的开放方面，国外也做得比较领先（[国外免费API列表](https://github.com/public-apis/public-apis)）。而对于特定的数据资源，也可以通过爬虫等方式来自建。

#### 渲染网络数据到页面

要渲染从API里获取到的数据，首先我们需要对API里的字段（属性）到底是干什么的要有一定的了解。比如知乎日报的API字段如下，这个可以从<span style="color: #800000;">**API相关的文档里了解到以及需要我们结合Console.log来对比了解**</span>。

比如**date** : 日期；**stories** : 当日新闻；**title** : 新闻标题；**images** : 图像地址；**id** : **url** 与 **share_url** 中最后的数字为内容的 id；**top_stories** : 界面顶部轮播的显示内容，这些在做数据渲染前就需要有所了解。

**获取网络数据**

使用开发者工具新建一个request页面，然后在request.js里的onLoad生命周期函数里输入以下代码：
<pre class="lang:js decode:true">  onLoad: function (options) {
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest', //知乎日报最新话题
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('网络请求成功之后获取到的数据',res)
        console.log('知乎日报最新话题',res.data)
      }
    })
  },</pre>
**域名校验与白名单**

编译之后，在控制台Console你会看到如下报错，你的域名不在域名白名单里面，这是因为小程序**只可以跟指定的域名与进行网络通信**。
<pre class="lang:default decode:true ">request:fail url not in domain list</pre>
解决方法有两种，一是打开开发者工具**工具栏右上角**的**详情**，勾选**不校验合法域名、业务域名、TLS版本以及HTTPS证书**；二是你可以去小程序的[管理后台](https://mp.weixin.qq.com/)（注册小程序时的页面），点击**开发**-**开发设置**，在**request合法域名**处添加该域名（如果你不想把这个小程序发布上线，没有必要添加）。

**res对象和res.data对象**

编译之后，在控制台Console就可以看到打印的**res对象**，以及**res里的data对象**。res.data的数据正是我们使用浏览器打开链接所得到的json数据，结合我们之前学到的数据渲染方面的知识，相信大家应该对如何将数据渲染到页面就不会感到陌生了。

在打印的res对象有一些参数，比如**cookies**、**header**、**statusCode**这些是什么意思呢？我们可以来结合技术文档深入了解。

**技术文档：**[wx.request网络数据请求](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

*   **statusCode：**开发者服务器返回的** HTTP 状态码**，也就是指示HTTP请求是否成功，其中**200为请求成功**，**404请求失败**，更多状态码的知识可以查阅[MDN HTTP响应代码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)
*   **header：**开发者服务器返回的 HTTP消息头，其中Content-Type为服务器文档的**MIME 类型**，API的MIME类型通常为`"application/json; charset=UTF-8"`，建议服务器返回值使用 **UTF-8** 编码（如果你有服务器的话）。
*   wx.request只能发起 HTTPS 请求，默认超时时间为60s，最大并发限制为10个
> **小任务：**把request的链接换成v2ex、cnode论坛的API链接以及知乎日报某一个话题的内容API，看看是什么结果？你知道返回来的json数据的每一条属性代表的意思吗？

#### 将数据渲染到页面

既然我们已经从知乎日报的API取得了数据，那渲染数据的方法以及如何实现跨页面渲染，在前面的章节我们已经就有所了解了。

**简单的知乎日报首页**

使用开发者工具在request.wxml里输入weui的列表样式（需要引入weui框架哦）
<pre class="lang:xhtml decode:true">&lt;view class="page__bd"&gt;
    &lt;view class="weui-panel weui-panel_access"&gt;
        &lt;view class="weui-panel__bd" wx:for="{{stories}}" wx:for-item="stories" wx:key="*item"&gt;
            &lt;navigator url="" class="weui-media-box weui-media-box_appmsg" hover-class="weui-cell_active"&gt;
                &lt;view class="weui-media-box__hd weui-media-box__hd_in-appmsg"&gt;
                    &lt;image class="weui-media-box__thumb" mode="widthFix" src="{{stories.images[0]}}" sytle="height:auto"&gt;&lt;/image&gt;
                &lt;/view&gt;
                &lt;view class="weui-media-box__bd weui-media-box__bd_in-appmsg"&gt;
                    &lt;view class="weui-media-box__title"&gt;{{stories.title}}&lt;/view&gt;
                &lt;/view&gt;
            &lt;/navigator&gt;
        &lt;/view&gt;
    &lt;/view&gt;
&lt;/view&gt;</pre>
然后再在request.js的data里声明date、stories、top_stories的初始值（使用的变量和API的字段尽量保持一致，这样就不容易混乱）
<pre class="lang:js decode:true">  data: {
    date:"",
    stories:[],
    top_stories:[],
  },</pre>
在onLoad生命周期函数里将数据通过setData的方式给赋值给data：
<pre class="lang:js decode:true">  onLoad: function (options) {
    let that=this
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest', 
      header: {
        'content-type': 'application/json' 
      },
      success(res) {
        let date=res.data.date
        let stories=res.data.stories
        let top_stories = res.data.top_stories
        that.setData({
          date,stories,top_stories
        })
      }
    })
  },</pre>
编译之后，我们就能看到知乎日报的数据就渲染在页面上了。
> **小任务：**`top_stories` 是界面顶部轮播的显示内容，制作一个swiper轮播，将top_stories里的内容渲染到轮播上。
> 打开开发者工具调试工具栏的AppData标签页，就能看到从网络API里获取到的数据。也可以在此处编辑数据，并及时地反馈到界面上。如果AppData里有数据，可以确认页面已经取得res里的data数据，如果数据没有渲染到页面，说明列表渲染可能有误。通过这种方式可以诊断页面渲染问题所在。
**详情页数据渲染**

前面我们获取的只是知乎的最新文章列表，那文章里面的内容呢？通过API文档以及我们通过链接访问的结果来看，我们只需要取得了文章的ID，就能从API里获取到文章的详情页内容：
<pre class="lang:default decode:true">https://news-at.zhihu.com/api/4/news/9714883  //9714883是文章的ID</pre>
使用开发者工具新建一个story页面，然后在story.wxml里输入以下代码:
<pre class="lang:js decode:true">&lt;view class="page__bd"&gt;
    &lt;view class="weui-article"&gt;
        &lt;view class="weui-article__h1"&gt;{{title}}&lt;/view&gt;
        &lt;view class="weui-article__section"&gt;
            &lt;view class="weui-article__section"&gt;
                &lt;view class="weui-article__p"&gt;
                    &lt;image class="weui-article__img" src="{{image}}" mode="widthFix" style="width:100%" /&gt;
                 &lt;/view&gt;
                 &lt;view class="weui-article__p"&gt;                      
                      {{body}}                
                &lt;/view&gt;
                &lt;view class="weui-article__p"&gt;
                        知乎链接：{{share_url}}
                &lt;/view&gt;
            &lt;/view&gt; 
        &lt;/view&gt;     
    &lt;/view&gt;   
&lt;/view&gt;</pre>
然后再在request.js的data里声明title、body、image、share_url的初始值：
<pre class="lang:js decode:true">  data: {
    title:"",
    body:"",
    image:"",
    share_url:"",
  },</pre>
在onLoad生命周期函数里调用wx.request获取文章详情页的数据，并通过setData的方式给赋值给data：
<pre class="lang:js decode:true">  onLoad: function (options) {
    let stories_id=9714883
    let that = this
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/'+stories_id,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        let title = res.data.title
        let body=res.data.body
        let image=res.data.image
        let share_url=res.data.share_url
        that.setData({
          title,body,image,share_url
        })
      }
    })</pre>
编译之后，发现数据虽然渲染出来了，但是存在“乱码”（是HTML标签），那这个要如何处理呢？这个就涉及到小程序的富文本解析了。

**HTML标签解析rich-text**

只需要将富文本对象放在rich-text的nodes里，就能将富文本解析出来了，比如将上面的{{body}}替换成以下代码。
<pre class="lang:xhtml decode:true">&lt;rich-text nodes="{{body}}"&gt;&lt;/rich-text&gt;</pre>
> 小程序富文本解析的方案还有：Comi ，腾讯 Omi 团队开发的小程序代码高亮和 markdown 渲染组件，[Github地址](https://github.com/Tencent/omi/blob/master/tutorial/comi-principle.md#%E5%8E%9F%E7%90%86)，具体效果可以在微信小程序里搜索**omiCloud**；以及wxPrase，微信小程序富文本解析自定义组件，支持HTML及markdown解析，[Github地址](https://github.com/icindy/wxParse)，当你遇到更加复杂的富文本解析时，可以来深入了解。
**跨页面数据渲染**

上面我们只是渲染了单篇文章的详情页，那如何点击文章列表就能渲染与之相应的文章详情页呢？这就回到了我们之前学过的跨页面数据渲染。

首先把request页面置于首页，然后再给request.wxml里的navigator组件的链接上携带文章的id：
<div>
<pre class="lang:js decode:true">url="/pages/story/story?id={{stories.id}}"</pre>
当点击request页面的链接时，链接携带的数据就会传到story页面的生命周期函数onLoad的options对象里，将options里的id，赋值给stories_id，也就是将文章id 9714883修改为options.id
<pre class="lang:js decode:true">let stories_id=options.id</pre>
这样再来点击request页面的链接，不同的链接就会渲染不同的文章详情。

**解构赋值**

解构赋值也就是从数组Array和对象Object中提取值，按照对照的位置，对变量进行赋值。比如上面的变量声明，为了能够与API里的数据字段一一对应，我们会声明很多变量，知乎日报的API还算比较少的，多了就比较复杂了。
<pre class="lang:js decode:true ">let title = res.data.title
let body=res.data.body
let image=res.data.image
let share_url=res.data.share_url</pre>
这时可以简写成：
<pre class="lang:js decode:true">let { title, body, image, share_url}=res.data
</pre>
</div>

#### 历史上的今天

知乎日报的API是比较开放的，并不需要我们去注册API服务就能获取到这些数据，但是大多数情况下，API是商品服务，需要我们注册，那需要注册的API和开放的API有什么不同呢？

**注册历史上的今天的服务**

注册[聚合API](https://www.juhe.cn/)并认证，认证之后可以申请开通**历史上的今天**、图书电商数据等免费的API服务，并找到你的与之**对应的AppKey**。

替换下面链接**你的历史上的今天对应的key**（直接输AppKey就行），然后在浏览器打开链接（下面这个是1.0版）
<pre class="lang:xhtml decode:true">http://api.juheapi.com/japi/toh?month=9&amp;day=15&amp;key=你的历史上的今天对应的key</pre>
也可以选择事件列表的2.0版（**为了讲解方便，下面以1.0版本为主**）
<pre class="lang:js decode:true">http://v.juhe.cn/todayOnhistory/queryEvent.php?date=9/15&amp;key=你的历史上的今天对应的key</pre>
**key的存放**

通常我们会把拿到的key放在app.js的globalData里，或者在小程序里新建一个config.js，方便以后全局调用，而不是把key直接写在页面里。

**方法一：**写在app.js里的globalData，或者新建一个keyData对象，只要达到全局调用的目的都可以，以globalData为例
<pre class="lang:default decode:true ">  globalData: {
    juheKey:"366444.......00ff", //聚合AppKey
  },</pre>
这种方式调用时首先在页面的js文件里、Page()函数的前面使用
<pre class="lang:js decode:true ">const app=getApp()</pre>
之后就可以使用app.globalData.juheKey来调用它了。

**方法二：**也可以在小程序的根目录或者utils文件夹新建一个config.js，然后结合前面模块化的知识，写入以下代码：
<pre class="lang:js decode:true">module.exports = {
  juheKey:"366444.......00ff", //聚合AppKey
}</pre>
这种方式调用时我们需要先在页面的Page()函数前面引入模块化文件
<pre class="lang:js decode:true">const key = require('../../utils/config.js')</pre>
然后就可以使用key.juheKey调用它了。
> 将一些通用的数据、函数单独拿出来存放在globalData里或进行模块化，是在实际开发中会经常使用到的一种方法，它可以让数据、函数更容易管理以及可以重复利用，使得代码更加精简。
**wx.request请求数据**

使用开发者工具新建一个apidata页面，然后在apidata.js的Page()函数前面输入以下代码：
<pre class="lang:js decode:true">const app=getApp()
const now = new Date(); 
const month = now.getMonth()+1 //月份需要+1
const day = now.getDate()</pre>
然后再在生命周期函数onLoad里输入wx.request数据请求：
<pre class="lang:js decode:true">  onLoad: function (options) {
    wx.request({
      url: 'http://api.juheapi.com/japi/toh', 
      data: {
        month: month,
        day: day,
        key: app.globalData.juheKey,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
      }
    })
  },</pre>
wx.request里的data就是要传入的参数，我们把month、day、key传入到请求的链接里。它等价于以下链接（注意把data里的属性值，以免传两次参数）
<pre class="lang:js decode:true">url: "http://api.juheapi.com/japi/toh?" + "month=" + month + "&amp;day=" + day + "&amp;key=" + app.globalData.juheKey,</pre>
**模板字符串**

要将多个字符串连接起来，可以使用加号+来用作字符串的拼接，如果变量比较多，是不是很麻烦？我们还可以使用模板字符串，模板字符串使用**反引号**````来表示（在电脑键盘esc按键下面）。要在模板字符串中嵌入变量，需要将变量名写在`${}`之中，比如上面的链接也可以写成：
<pre class="lang:js decode:true">url: `http://api.juheapi.com/japi/toh?month=${month}&amp;day=${day}&amp;key=${app.globalData.juheKey}`,</pre>
在控制台我们就可以看到获取到的res.data数据，至于如何渲染到页面，这里就不多介绍了。

#### 天气API

注册[和风天气](https://www.heweather.com/)，并在控制台的**应用管理**新建一个应用，获取到该应用的key，按照上面的方法将key添加到globalData里：
<pre class="lang:js decode:true ">  globalData: {
    heweatherKey:"732c.........0b", //和风天气key
  }</pre>
通过技术文档我们可以了解到免费版和风天气API的**必备字段**为weather-type（根据不同的值可以取得不同的数据）和**请求参数**（其中location为必备参数）

**技术文档：**[和风常规天气数据API](https://dev.heweather.com/docs/api/weather)

也就是我们可以通过链接可以获取到数据，**注意now在问号?的前面，也就是它不是请求的参数**，location和key才是。
<pre class="lang:js decode:true">https://free-api.heweather.net/s6/weather/now?location=beijing&amp;key=你的key</pre>
然后再在apidata.js Page()的data里初始化声明weathertype（属性名最好不要有连接符-）和location：
<pre class="lang:js decode:true">  data: {
    weathertype:"now",
    location:"beijing"  //location的写法有很多种，具体可以参考技术文档
  },</pre>
然后再在生命周期函数里添加wx.request请求（onLoad里可以写多个wx.request请求）
<pre class="lang:js decode:true">    const weathertype=this.data.weathertype
    wx.request({
      url: `https://free-api.heweather.net/s6/weather/${weathertype}`,
      data: {
        location: that.data.location,
        key: app.globalData.heweatherKey,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
      }
    })
  },</pre>
在控制台就能看到请求到的res.data了。如果你想点击按钮切换不同城市以及不同的天气数据类型，结合前面所学的知识，我们只需要通过事件处理函数调用setData修改weathertype和location即可。

#### encodeURI与decodeURI

在浏览网页的时候我们经常看到汉字或一些字符变成了一个“乱码”，原因就在于链接进行了编码处理。encodeURI() 函数可把字符串作为 URI 进行编码，而decodeURI()函数则可以进行解码。

在开发者工具的控制台里输入以下代码
<pre class="lang:js decode:true">console.log(encodeURI("北京"))
console.log(decodeURI("%e9%85%92%e5%ba%97"))
console.log(decodeURI("https://hackwork.org/handbook/python/174/%e5%86%99%e5%87%ba%e7%ac%ac%e4%b8%80%e8%a1%8cpython%e4%bb%a3%e7%a0%81/"))
</pre>

#### 腾讯地图LBS

如果想在小程序中调用地图的POI检索（POI，即兴趣点Point of Interest，区域内搜索酒店、学校、ATM等）、 关键词输入提示、地址解析、逆地址解析、行政区划、距离计算、路径规划等数据服务，这时候就需要使用到地图类相关的API。

**地图API：**[腾讯LBS位置服务](https://lbs.qq.com/index.html)

**注册账号获取Key**

首先在注册后登录，点击**控制台** --**key管理**--**创建新密钥**，然后取得key，key的格式类似于“43UBZ-*****-*****-*****-*****-HTBIA”。

然后点击当前Key的**设置**，启动产品里勾选**微信小程序**和**WebServiceAPI里的签名校验**，获取到地图的**Secret key**。这两种API的调用方式，小程序都支持。

&nbsp;

然后将地图的两个key，写入到globalData里
<pre class="lang:js decode:true">  globalData: {
    mapKey:"43UBZ-*****-IITUH-*****-2M723-******",//你的key
    mapSecretKey:"spZwWz**********Xh20uW", //你的Secret key
  }</pre>
**md5加密算法**

在[WebServiceAPI Key配置中签名校验](https://lbs.qq.com/FAQ/key_faq.html#4)里提到我们使用WebServiceAPI的方法需要对请求路径+”?”+请求参数+SK进行拼接，并计算拼接后字符串**md5值**，即为签名(sig)。MD5是计算机安全领域广泛使用到的一种加密算法，主要用于确保消息传输的完整一致。

**md5依赖：**[md5开源项目下载链接](https://github.com/blueimp/JavaScript-MD5/archive/master.zip)

解压之后，将js文件夹里的md5.min.js复制粘贴到小程序utils文件夹下。然后再在Page()前面引入这个文件
<pre class="lang:js decode:true">const md5 = require('../../utils/md5.min.js')</pre>
**坐标逆解析**

坐标的逆解析就是坐标(latitude,longitude)转化为详细的地址名。

**技术文档：**[坐标的逆地址解析](https://lbs.qq.com/webservice_v1/guide-gcoder.html)

再在apidata.js Page()的data里初始化声明latitude,longitude，比如我们用腾讯大厦的经纬度值：
<pre class="lang:js decode:true">  data: {
    latitude:"22.540503",
    longitude: "113.934528",
  },</pre>
然后在onLoad函数里调用wx.request发起HTTPS网络请求
<pre class="lang:js decode:true ">  onLoad: function (options) {
   let that=this
    const { latitude, longitude } = that.data
    const { mapKey, mapSecretKey}=app.globalData
    let SIG = md5("/ws/geocoder/v1?key=" + mapKey + "&amp;location=" + latitude + "," + longitude + mapSecretKey)
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1',
      data: {
        key: mapKey,
        location: `${latitude},${longitude}`,
        sig: SIG
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
      }
    })   
  },</pre>
在控制台Console就可以看到当前坐标(latitude,longitude)逆解析出来的详细信息。
> 小程序使用腾讯地图位置服务，还有一种更加简单的方法，具体可以阅读《[微信小程序：个性地图使用指南](https://lbs.qq.com/product/miniapp/guide/)》