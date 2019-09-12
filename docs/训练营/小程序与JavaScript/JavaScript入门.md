JavaScript是目前世界上最流行的编程语言之一，它也是小程序开发最重要的基础语言。要做出一个功能复杂的小程序，除了需要掌握JavaScript的基本语法，还要了解如何使用JavaScript来操作小程序（通过API接口）。
<h4>控制台Console</h4>
打开微信开发者工具，在<strong>调试器</strong>里可以看到<strong>Console</strong>、Sources、Network、Appdata、Wxml等标签，这些都是调试器的功能模块。 而<strong>控制台Console</strong>除了可以显示小程序的错误信息外，还可以用于输入和调试代码。

<b>数学运算</b>

JavaScript的算数运算符和我们常见的数学运算符没有太大区别，+加、-减、乘*、除/、指数**，我们可以在控制台Console的<span style="color: #0000ff;"><strong>&gt;</strong></span>后面逐行输入并按Enter执行以下代码：
<pre class="lang:js decode:true">136+384; //加法
(110/0.5+537-100)*2; //加减乘除
2**5; //指数运算符</pre>
<blockquote>//为JavaScript的注释，可以不用输入，输入也不会有影响；JavaScript的语句之间用英文字符的分号;分隔。</blockquote>
<strong>Console.log打印日志</strong>

在控制台输入四则运算可以直接得到结果，是因为调用了console.log()函数，我们可以把上面的四则运算在控制台里使用<code>console.log(321*3)</code>打印出来，除了四则运算，console.log()还可以打印<strong>字符串String</strong>，比如：
<pre class="lang:js decode:true">console.log("童鞋，欢迎开始JavaScript的学习~\nJavaScript是一门非常流行的编程语言，只要是有浏览器的地方就少不了JavaScript；\n网页、小程序、甚至App、桌面应用等都少不了JavaScript；\nJavaScript玩得溜的人我们可以称其为前端开发工程师；\n前端开发工程师是需求量极大的岗位\n");
console.log('%c欢迎关注小程序的云开发：https://www.zhihu.com/org/teng-xun-yun-kai-fa-tcb （用云开发可以更快速学好前端开发）','color: red' );</pre>
在实际应用中，总有一些具有特殊含义的字符无法直接输入，比如换行<code>\n</code>、Tab键<code>\t</code>、回车<code>\r</code>、反斜杠<code>\\</code>，这些我们称之为转义字符。JavaScript中单引号和双引号都表示字符串。如果字符串中存在双引号，建议最外层用单引号；如果字符串中存在单引号，建议最外层用双引号。如何在控制台给打印的字体添加颜色等，大家可以自行去研究。

<strong>console.log打印数组Array</strong>

我们可以在控制台使用console.log()打印数组，打印出来之后，结果的前面会有数字显示数组的长度length，以及可以展开。
<pre class="lang:js decode:true">console.log(["肖申克的救赎","霸王别姬","这个杀手不太冷","阿甘正传","美丽人生"])</pre>
在展开的结果里，我们可以看到数组的索引index，以及索引index对应的值（比如：<code>1: "霸王别姬"</code>）、该数组的长度length，以及数组的<strong>方法</strong>(<strong>在__proto__里可以看到，比如concat、push、shift、slice、toString等</strong>)。

我们也可以通过索引值打印数组里的单一数据，也就是通过指定数组名以及索引值，来访问某个特定的元素：
<pre class="lang:js decode:true">console.log(["肖申克的救赎","霸王别姬","这个杀手不太冷","阿甘正传","美丽人生"][3])</pre>
<strong>console.log打印对象Object</strong>

在控制台里使用console.log()函数打印一个对象Object，对象的结果仍然可以通过左侧的三角展开可以看到对象的属性以及属性对应的值。
<pre class="lang:js decode:true">console.log({name: "霸王别姬",img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.webp",desc: "风华绝代。"})</pre>
我们可以通过点表示法来访问该属性获取属性对应的值：
<pre class="lang:js decode:true ">console.log({name: "霸王别姬",img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.webp",desc: "风华绝代。"}.desc)</pre>
当我们打印数组的某一项和通过点表示法获取对象某个属性对应的值的时候，有没有觉得打印的内容太长？这个时候我们可以把数组、对象赋值给一个变量，类似于数学里的y=ax+b，就可以大大简化代码了。
<h4>变量与赋值</h4>
JavaScript可以使用<strong>let语句<span style="color: #008000;">声明变量</span></strong>，使用<strong>等号=</strong>可以<strong>给变量赋值</strong>，等号=左侧为<strong>变量名</strong>，右侧为<strong>给该变量赋的值</strong>，变量的值可以是任何<strong>数据类型</strong>。JavaScript常见的数据类型有：数值（Number）、字符串（String）、布尔值（Boolean）、对象（Object）、函数（Function）等。

<strong>将数据赋值给变量</strong>

比如我们可以在控制台里，将上面的数组和对象赋值给一个变量，然后打印该变量，先来打印数组：
<pre class="lang:js decode:true">let movielist=["肖申克的救赎","霸王别姬","这个杀手不太冷","阿甘正传","美丽人生"]
console.log(movielist)
console.log(movielist[2])</pre>
再来看打印对象的情况：
<pre class="lang:js decode:true ">let movie={name: "霸王别姬",img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.webp",desc: "风华绝代。"}
console.log(movie)
console.log(movie.name)</pre>
通过<strong>将复杂的数据信息（数组、对象）赋值给一个变量</strong>，代码得到了大大的简化，可以深刻了解到<strong>变量是用于存储信息的"容器"</strong>。

<strong>变量的冲突与覆盖</strong>

比如我们在控制台Console里使用let声明一个变量username，然后将username打印出来：
<pre class="lang:default decode:true ">let username="小明"
console.log(username)</pre>
但是如果再次使用let声明username，并给username赋值时就会出现变量名冲突的报错，比如再在控制台里输入以下代码并按Enter执行，看会报什么错？
<pre class="lang:js decode:true ">let username="小丸子"</pre>
也就是说声明了一个变量名之后，就不能再次<strong>声明这个变量名</strong>啦。但是我们却可以给该变量重新赋值，比如：
<pre class="lang:js decode:true">username="小军"
console.log(username)</pre>
我们发现给该变量重新赋值之后，变量的值就被覆盖了。所以let 变量名=值，相当于进行了两步操作，第一步是声明变量名，第二步是给变量赋值，具体可以通过控制台执行下面的代码来理解。
<pre class="lang:js decode:true">let school  //声明变量
school="清华"   //将字符串String"清华"赋值给变量
console.log(school)  //打印变量
school=["清华","北大","上交","复旦","浙大","南大","中科大"] //给变量赋值新的数据类型新的数据
console.log(school)  //打印变量</pre>
通过使用控制台实战打印具体的信息，我们就会对声明变量、赋值、覆盖（修改变量的值）有了更深的了解。
<blockquote>这个undefined是console.log()这个函数的返回值，每个函数都有返回值，如果函数没有提供返回值，会返回 undefined。</blockquote>
<blockquote class="task">小任务：那我们是否可以给一个没有声明过的变量名直接赋值呢？你知道应该如何在控制台打印测试结果吗？你的实验结果是？</blockquote>
<h4>操作数组</h4>
在前面我们已经说过，数组是一个有序的列表。下面这个数组是豆瓣电影的top5：
<pre class="lang:default decode:true">["肖申克的救赎","霸王别姬","这个杀手不太冷","阿甘正传","美丽人生"]</pre>
但是有时候我们需要操作一下该数组，比如想增加5项数据，变成top10，比如数据太多，只想要top3等等，这个时候就需要对数组进行操作了。要对数组进行操作，就有操作的方法。前面我们已经将给数组赋值给了movielist，下面我们可以直接使用该变量。也可以先在控制台再赋值一下。
<pre class="lang:js decode:true">movielist=["肖申克的救赎","霸王别姬","这个杀手不太冷","阿甘正传","美丽人生"]</pre>
<strong>分隔符join方法</strong>

join方法将数组元素拼接为字符串,以分隔符分割，默认是逗号,分割。
<pre class="lang:js decode:true ">console.log(movielist.join("、"))</pre>
<strong>添加数组push方法</strong>

push()方法向数组的末尾添加一个或更多元素，并<strong>返回新数组的长度</strong>。
<pre class="lang:js decode:true">console.log(movielist.push("千与千寻","泰坦尼克号","辛德勒的名单","盗梦空间","忠犬八公的故事"))</pre>
这里返回的是新数组的长度，那我们打印一下新数组看具体包含了哪些值，push方法在原来的数组后面（不是前面）新增了5个值（不是覆盖，重新赋值）。
<pre class="lang:js decode:true">console.log(movielist)</pre>
<strong>移除最后一项pop方法</strong>

pop() 从数组末尾<strong>移除</strong>最后一项，并返回移除的项的值：
<pre class="lang:js decode:true ">console.log(movielist.pop())</pre>
返回的是数组的最后一项，我们再来打印movielist，看看有什么变化：
<pre class="lang:js decode:true ">console.log(movielist)</pre>
以上通过一些实际的案例让大家了解如何使用控制台打印这种实战方式来了解了一些数组具体的操作方法，数组的操作方法还有很多，大家可以去查阅技术文档。

<strong>技术文档：</strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener">MDN数组Array</a>
<blockquote>如果说小程序的开发离不开小程序的官方技术文档，那MDN则是每一个前端开发工程师都必须经常去翻阅的技术文档。打上<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener">MDN数组Array</a>，在页面的左侧菜单里，我们可以看到Array有着数十种方法，而这些方法，都是我们之前打印了数组之后在__proto__里看到的方法。关于数组的prototype，学有余力的人可以去阅读<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype" target="_blank" rel="noopener">MDN Array.Prototype</a></blockquote>
<blockquote class="task"><strong>小任务：</strong>通过实战的方式了解一下数组的concat()、reverse()、shift()、slice()、sort()、splice()、unshift()方法</blockquote>
<h4>操作对象</h4>
我们可以用点表示法访问对象的属性，通过给该属性赋值就能够添加和修改对象的属性的值了。在之前我们声明过一个对象movie：
<pre class="lang:js decode:true ">movie={name: "霸王别姬",img: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.webp",desc: "风华绝代。"}</pre>
<strong>给对象添加属性</strong>

比如我们给霸王别姬增加英文名的属性，直接在控制台里输入以下代码：
<pre class="lang:js decode:true">movie.englishname="Farewell My Concubine"</pre>
然后再在控制台打印movie看看movie是否有了englishname的属性
<pre class="lang:js decode:true">console.log(movie)</pre>
<strong>删除对象的某个属性</strong>

比如我们想删除movie的img属性，可以通过delete 方法来删除
<pre class="lang:js decode:true">delete movie.img</pre>
然后再在控制台打印movie看看movie的img属性是否被删除了。
<pre class="lang:js decode:true">console.log(movie)</pre>
<strong>更新对象的某个属性</strong>

比如我们想更新movie的desc属性，可以通过重新赋值的方式来更新
<pre class="lang:js decode:true ">movie.desc="人生如戏。"</pre>
然后再在控制台打印movie看看movie的desc属性是否有了变化。
<pre class="lang:js decode:true">console.log(movie)</pre>
<h4>常量</h4>
在前面我们知道变量的值可以通过重新赋值的方式来改变，但是有些数据我们希望是固定的（写死，不会经常改变），这个时候可以使用<span style="color: #800000;"><strong>const声明</strong></span>创建一个值的<strong>只读</strong>引用。const声明和let声明挺像的。

比如开发小程序的时候，我们会确定小程序的色系、颜色等，使用const声明，以后直接调用这个常量，这样就不用记那么多复杂的参数，以后想全网改样式，直接改const的内容即可。比如：
<pre class="lang:js decode:true ">const defaultStyle = {
  color: '#7A7E83',
  selectedColor: '#3cc51f',
  backgroundColor: '#ffffff',
}</pre>
<h4>字符串的操作</h4>
前面我们已经知道字符串是JavaScript的数据类型之一，那我们可以怎么来操作字符串呢？下面我们就来结合MDN技术文档来学习。<span style="color: #800000;"><strong>MDN文档是前端最为依赖的技术文档</strong></span>，我们要像查词典一样来学习如何使用它。

<strong>技术文档：</strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener">MDN技术文档之JavaScript标准库之String</a>

首先我们在main.js里输入以下代码，然后执行，在Console控制台查看效果：
<pre class="lang:js decode:true">let lesson="云开发技术训练营";
let enname="CloudBase Camp"
console.log(lesson.length);  //返回字符串的长度
console.log(lesson[4]);  //返回在指定位置的字符
console.log(lesson.charAt(4));   //返回在指定位置的字符
console.log(lesson.substring(3,6));  //从索引3开始到6（不包括6）
console.log(lesson.substring(4));  //从索引4开始到结束
console.log(enname.toLowerCase()); //把一个字符串全部变为小写：
console.log(enname.toUpperCase());  //把一个字符串全部变为大写：
console.log(enname.indexOf('oud')); //搜索指定字符串出现的位置：
console.log(enname.concat(lesson)); //连接两个字符串
console.log(lesson.slice(4)); //提取字符串的某个部分，并以新的字符串返回被提取的部分</pre>
然后打开技术文档，在技术文档左侧菜单的<strong>属性</strong>和<strong>方法</strong>里，找到操作字符串用了哪些属性和方法，通过翻阅技术文档既加深对字符串的每个操作的理解，也知道该如何查阅技术文档。
<blockquote class="danger">字符串怎么有这么多属性和方法？多就对了，正是因为多，所以我们不能用传统的死记硬背来学习技术。技术文档怎么有这么多新词汇我见都没有见过，完全看不懂？你不需要全部都懂，就像我们不需要懂词典里的所有单词和语法一样。即使是GRE满分高手也不能认全所有单词，而通常6级单词就已经够用了，技术也是一样的道理。</blockquote>
<h4>Math对象</h4>
Math是一个内置对象， 它具有数学常数和函数的属性和方法，但<strong>它不是一个函数对象。</strong>大家可以先在控制台实战然后再来了解这句话啊含义。

<strong>技术文档：</strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" rel="noopener"> Math对象MDN文档</a>

在开发者工具的控制台console里输入以下代码，根据得到的结果来弄清楚每个函数的意思。
<pre class="lang:js decode:true">let x=3,y=4,z=5.001,a=-3,b=-4,c=-5;
console.log(Math.abs(b)); //返回b的绝对值
console.log(Math.round(z));//返回z四舍五入后的整数
console.log(Math.pow(x,y)) //返回x的y次幂
console.log(Math.max(x,y,z,a,b,c)); //返回x,y,z,a,b,c的最大值
console.log(Math.min(x,y,z,a,b,c));//返回x,y,z,a,b,c的最小值
console.log(Math.sign(a));  //返回a是正数还是负数
console.log(Math.hypot(x,y));  //返回所有x,y的平方和的平方根 
console.log(Math.PI);  //返回一个圆的周长与直径的比例，约3.1415</pre>
我们打开技术文档，在左侧菜单找一下Math对象的属性有哪些，Math对象的方法又有哪些？大致感受一下属性和方法到底是什么意思。
<blockquote>注意，在别的开发语言里面，我们想获取一个数的绝对值可以直接调用abs(x)函数即可，而JavaScript却是Math.abs(x)，这是因为前面说的Math不是函数(函数对象)，而是一个对象。</blockquote>
<h4>Date对象</h4>
Date 对象用于处理日期和时间。时间有年、月、日、星期、小时、分钟、秒、毫秒以及时区的概念，因此Date对象属性和方法也显得比较多。

<strong>技术文档：</strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank" rel="noopener">Date对象MDN文档</a>
<pre class="lang:js decode:true">let now = new Date();  //返回当日的日期和时间。
console.log(now); 
console.log(now.getFullYear()); //从 Date 对象以四位数字返回年份。
console.log(now.getMonth());  //从 Date 对象返回月份 (0 ~ 11)。
console.log(now.getDate());  //从 Date 对象返回一个月中的某一天 (1 ~ 31)。
console.log(now.getDay());  //从 Date 对象返回一周中的某一天 (0 ~ 6)。
console.log(now.getHours());  //返回 Date 对象的小时 (0 ~ 23)。
console.log(now.getMinutes());  //返回 Date 对象的分钟 (0 ~ 59)。
console.log(now.getSeconds());  //返回 Date 对象的秒数 (0 ~ 59)。
console.log(now.getMilliseconds());  //返回 Date 对象的毫秒(0 ~ 999)。
console.log(now.getTime());  //返回 1970 年 1 月 1 日至今的毫秒数。</pre>
<h4>全局对象wx</h4>
<code>wx</code>是小程序的全局对象，用于承载小程序能力相关 API。小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，了解网络状态等。大家可以在微信开发者工具的控制台Console里了解一下这个wx这个对象。
<pre class="lang:js decode:true">wx</pre>
可以看到wx的所有属性和方法，如果你对wx的哪个属性和方法不了解，你可以查阅技术文档。

<strong>技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/api.html#API" target="_blank" rel="noopener">API技术文档</a>

<strong>了解网络状态</strong>

<strong>获取网络类型技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html" target="_blank" rel="noopener">wx.getNetworkType()</a>

大家可以切换一下开发者工具的模拟器的网络，然后多次在控制台console输入以下代码查看有什么不同：
<pre class="lang:js decode:true">wx.getNetworkType({
  success(res) {
    console.log(res)
  }
});</pre>
<strong>了解用户信息</strong>

<strong>获取用户信息技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html" target="_blank" rel="noopener">wx.getUserInfo()</a>

登录开发者工具之后（大家应该已经处于登录状态），在控制台console里输入以下代码，看得到什么信息：
<pre class="lang:js decode:true">wx.getUserInfo({
  success(res) {
      console.log(res);
  }
});</pre>
然后退出开发者工具，再输入以上代码，看看是什么令人兴奋的结果？

<strong>获取设备信息</strong>

<strong>获取设备信息技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html" target="_blank" rel="noopener">wx.getSystemInfo()</a>
<pre class="lang:js decode:true">wx.getSystemInfo({
  success (res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})</pre>
<strong>页面链接跳转</strong>

<strong>页面跳转技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html" target="_blank" rel="noopener">wx.navigateTo()</a>

除了可以获取到用户、设备、网络等的信息，使用控制台来调用对象的方法也可以执行一些动作，比如页面跳转。在控制台Console里输入：
<pre class="lang:js decode:true">wx.navigateTo({
  url: '/pages/home/imgshow/imgshow'
})</pre>
还可以返回页面的上一层，在控制台里输入

<strong>页面返回技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html" target="_blank" rel="noopener">wx.navigateBack()</a>
<pre class="lang:js decode:true">wx.navigateBack({
  delta: 1
})</pre>
<b>显示消息提示框</b>

<strong>显示消息提示框技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html" target="_blank" rel="noopener">wx.showToast()</a>
<pre class="lang:js decode:true">  wx.showToast({
    title: '弹出成功',
    icon: 'success',
    duration: 1000
  })</pre>
<strong>设置当前页面的标题</strong>

<strong>设置标题技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html" target="_blank" rel="noopener">wx.setNavigationBarTitle()</a>
<pre class="lang:js decode:true ">wx.setNavigationBarTitle({
  title: '控制台更新的标题'
})</pre>
<strong>打开文件选择</strong>

<strong>打开文件选择技术文档：</strong><a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html" target="_blank" rel="noopener">wx.chooseImage()</a>
<pre class="lang:js decode:true">wx.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success (res) {
    const tempFilePaths = res.tempFilePaths
  }
})</pre>
这一部分主要是让大家明白控制台Console的强大之处，以及通过控制台实战的方法对小程序API的运行机制有一个初步的了解。