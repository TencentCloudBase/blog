相信通过前面的学习，大家对一个完整的小程序的文件结构有了一个大致的了解，对小程序的开发者工具也有了一定的认识，那这节我们来开始动手写一下小程序的代码。

#### **编辑WXML文件**

我们在开发者工具里打开之前修改的模板小程序home文件夹下的home.wxml，里面有如下代码
<pre class="lang:xhtml decode:true">&lt;!--pages/home/home.wxml--&gt;
&lt;text&gt;pages/home/home.wxml&lt;/text&gt;</pre>
这个第1行，是一句注释，也就是一句说明，不会显示在小程序的前端，第2行就是一个**&lt;text&gt;组件**。

接下来我们会广泛使用到小程序的&lt;view&gt;组件。比如我们在上面的代码下面加一下下面的代码，大家再来看效果：
<pre class="lang:xhtml decode:true">&lt;view&gt;
    &lt;view&gt;
        &lt;view&gt;WXML 模板&lt;/view&gt;
        &lt;view&gt;从事过网页编程的人知道，网页编程采用的是 HTML + CSS + JS 这样的组合，其中 HTML 是用来描述当前这个页面的结构，CSS 用来描述页面的样子，JS 通常是用来处理这个页面和用户的交互。&lt;/view&gt;
    &lt;/view&gt;
&lt;/view&gt;</pre>
大家可以结合上面的代码，来了解一下组件的基本写法

*   &lt;view&gt;组件和&lt;text&gt;组件类似，他们都是成对出现的，比如&lt;text&gt;&lt;/text&gt;，&lt;view&gt;&lt;/view&gt;，两个要一起写，有前面的开始标签，后面就要有一个闭合标签，闭合标签前面有一个“/”
*   view组件是可以嵌套写的，
*   为了让视觉上更好看，写代码的时候要有缩进（虽然不缩进也不会有影响）
我们可以把这个页面写的更加复杂一点。
<pre class="lang:xhtml decode:true">&lt;view&gt;
    &lt;view&gt;
        &lt;view&gt;
            &lt;view&gt;技术学习说明&lt;/view&gt;
            &lt;view&gt;技术和我们以往所接触的一些知识有很大的不同，比如英文非常强调词汇量，需要你多说多背；数学需要你记住公式，反复练习；在教学的方式上也有很大的不同，以前都是有专门的老师手把手教你，而且还有同学交流。那要学好技术，应该依循什么样的学习方法和教学方法呢？
            &lt;/view&gt;
        &lt;/view&gt;
        &lt;view&gt;
            &lt;view&gt;
                &lt;view&gt;自学而非手把手&lt;/view&gt;
                &lt;view&gt;技术的方向众多，而且知识点也是非常庞杂，需要你具备一定的自学能力，所谓自学能力就是要求你遇到问题能够勤于思考，擅于搜索，能够不断实践探索。在实际工作中，也要求你能根据技术文档可以迅速掌握前沿的技术，而同事不会有时间教你，如果没有自学能力，是很难胜任很多工作的。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view&gt;
                &lt;view&gt;查阅文档而非死记知识点&lt;/view&gt;
                &lt;view&gt;在高中一学期一门课只有很薄的一本书，老师会反复讲解知识点，强化你的记忆，考试也是闭卷；而技术一个很小的分支，内容就有几千页甚至更多，强记知识点显然不合适。学习技术要像查词典一样来查阅技术文档，你只需要掌握基本的语法和用法，在编程的时候随时查阅，就像你不需要背诵上万的单词也能知道它的意思用法一样，所以技术文档是学习技术最为重要的参考资料。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view&gt;
                &lt;view&gt;实战而非不动手的看书&lt;/view&gt;
                &lt;view&gt;技术是最强调结果的技能，你看了再多书，如果不知道技术成品是怎么写出来的，都是枉然。很多朋友有收集癖，下载了很多电子资源，收藏了很多高赞的技术文章，但是却没有动手去消化去理解，把时间和精力都浪费了。不动手在开发者工具里去写代码，不动手配置开发环境，缺乏实战的经验，都是阻碍你学好技术的坏习惯。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view&gt;
                &lt;view&gt;搜索而非做伸手党&lt;/view&gt;
                &lt;view&gt;在以前，我们遇到技术问题，我们可以问老师问同学，于是很多人把这种不良的习惯也带到了技术的学习当中，遇到问题也总喜欢求助于别人。技术的方向众多，环境复杂，问题也是很多，如果你总是依赖别人的解答，是很难学好技术的。一定要学会在网上通过搜索遇到的问题来找答案。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view&gt;
                &lt;view&gt;团队协作，而非单打独斗&lt;/view&gt;
                &lt;view&gt;一个产品涉及的技术非常多，需要很多人来一起配合才能开发好，所以学习技术的时候我们需要了解一些代码规范、工作的流程、项目管理等，在技术方面也会有API接口，接口文档这些，还要懂得如何和同职业的同事以及不同角色的人如设计师等一起配合，而不是自己一个人单打独斗。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view&gt;
                &lt;view&gt;系统的指导而非茫然无序&lt;/view&gt;
                &lt;view&gt;学好技术最依赖你自学，但是如果没有人指导你，你可能会像苍蝇一样陷入众多资料中茫然无序，抓不住一个技术的重点，也不清楚哪些技术才值得你深入学习，最好是有经验的人可以指点你应该看什么，学什么，什么才是重点，当然不是手把手教你。
                &lt;/view&gt;
            &lt;/view&gt;
        &lt;/view&gt;
    &lt;/view&gt;   
&lt;/view&gt;</pre>

#### WXSS选择器

大家是不是已经发现我们写的小程序页面有点丑？那我们需要对这个小程序页面进行美化。但是我们的代码里面&lt;view&gt;组件这么多，要是不对每个组件进行区分，就很难对每个组件进行美化了。

**id与class选择器**

这个时候我们就要先了解一下选择器的概念。选择器是用来干什么的呢？从名字里我们就可以看出来，就是为了选择。比如学校有1000个人，我们要选择出其中一个人，那我们可以给所有人一个学号，这个学号是唯一的，我们可以称这个学号为**id**，用于精准的选择；还有的时候我们需要对一群人进行分类选择，比如整个班级或者所有男生，这个班级、性别，我们可以称为**class**，用于分类选择。

在wxss技术文档这里有关于选择器的描述。

**技术文档**：[WXSS技术文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)

**给组件增加属性**

比如上面的view组件实在太多了，为了区分它们，我们给他们加一些属性，这样我们就可以用选择器选择它们了。
<pre class="lang:xhtml decode:true">&lt;view id="wxmlinfo"&gt;
    &lt;view class="content"&gt;
        &lt;view class="title"&gt;WXML 模板&lt;/view&gt;
        &lt;view class="desc"&gt;从事过网页编程的人知道，网页编程采用的是 HTML + CSS + JS 这样的组合，其中 HTML 是用来描述当前这个页面的结构，CSS 用来描述页面的样子，JS 通常是用来处理这个页面和用户的交互。
        &lt;/view&gt;
    &lt;/view&gt;
&lt;/view&gt;</pre>
以及比较复杂的那一段代码的view组件也加上属性。给组件添加属性在外观上并不会有什么效果哦~
<pre class="lang:xhtml decode:true">&lt;view id="studyweapp"&gt;
    &lt;view class="content"&gt;
        &lt;view class="header"&gt;
            &lt;view class="title"&gt;技术学习说明&lt;/view&gt;
            &lt;view class="desc"&gt;技术和我们以往所接触的一些知识有很大的不同，比如英文非常强调词汇量，需要你多说多背；数学需要你记住公式，反复练习；在教学的方式上也有很大的不同，以前都是有专门的老师手把手教你，而且还有同学交流。
            那要学好技术，应该依循什么样的学习方法和教学方法呢？
            &lt;/view&gt;
        &lt;/view&gt;
        &lt;view class="lists"&gt;
            &lt;view class="item"&gt;
                &lt;view class="item-title"&gt;自学而非手把手&lt;/view&gt;
                &lt;view class="item-desc"&gt;技术的方向众多，而且知识点也是非常庞杂，需要你具备一定的自学能力，所谓自学能力就是要求你遇到问题能够勤于思考，擅于搜索，能够不断实践探索。在实际工作中，也要求你能根据技术文档可以迅速掌握前沿的技术，而同事不会有时间教你，如果没有自学能力，是很难胜任很多工作的。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view class="item"&gt;
                &lt;view class="item-title"&gt;查阅文档而非死记知识点&lt;/view&gt;
                &lt;view class="item-desc"&gt;在高中一学期一门课只有很薄的一本书，老师会反复讲解知识点，强化你的记忆，考试也是闭卷；而技术一个很小的分支，内容就有几千页甚至更多，强记知识点显然不合适。学习技术要像查词典一样来查阅技术文档，你只需要掌握基本的语法和用法，在编程的时候随时查阅，就像你不需要背诵上万的单词也能知道它的意思用法一样，所以技术文档是学习技术最为重要的参考资料。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view class="item"&gt;
                &lt;view class="item-title"&gt;实战而非不动手的看书&lt;/view&gt;
                &lt;view class="item-desc"&gt;技术是最强调结果的技能，你看了再多书，如果不知道技术成品是怎么写出来的，都是枉然。很多朋友有收集癖，下载了很多电子资源，收藏了很多高赞的技术文章，但是却没有动手去消化去理解，把时间和精力都浪费了。不动手在开发者工具里去写代码，不动手配置开发环境，缺乏实战的经验，都是阻碍你学好技术的坏习惯。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view class="item"&gt;
                &lt;view class="item-title"&gt;搜索而非做伸手党&lt;/view&gt;
                &lt;view class="item-desc"&gt;在以前，我们遇到技术问题，我们可以问老师问同学，于是很多人把这种不良的习惯也带到了技术的学习当中，遇到问题也总喜欢求助于别人。技术的方向众多，环境复杂，问题也是很多，如果你总是依赖别人的解答，是很难学好技术的。一定要学会在网上通过搜索遇到的问题来找答案。
                &lt;/view&gt;
            &lt;/view&gt;
            &lt;view class="item"&gt;
                &lt;view class="item-title"&gt;团队协作，而非单打独斗&lt;/view&gt;
                &lt;view class="item-desc"&gt;一个产品涉及的技术非常多，需要很多人来一起配合才能开发好，所以学习技术的时候我们需要了解一些代码规范、工作的流程、项目管理等，在技术方面也会有API接口，接口文档这些，还要懂得如何和同职业的同事以及不同角色的人如设计师等一起配合，而不是自己一个人单打独斗。&lt;/view&gt;
            &lt;/view&gt;
            &lt;view class="item"&gt;
                &lt;view class="item-title"&gt;系统的指导而非茫然无序&lt;/view&gt;
                &lt;view class="item-desc"&gt;学好技术最依赖你自学，但是如果没有人指导你，你可能会像苍蝇一样陷入众多资料中茫然无序，抓不住一个技术的重点，也不清楚哪些技术才值得你深入学习，最好是有经验的人可以指点你应该看什么，学什么，什么才是重点，当然不是手把手教你。
                &lt;/view&gt;
            &lt;/view&gt;
        &lt;/view&gt;
    &lt;/view&gt;   
&lt;/view&gt;</pre>
> 大家在学习的过程中，要随时在开发者工具的模拟器上查看效果，也要经常用微信扫码**预览**所生成的二维码来查看效果，千万不要只看教程怎么说，而是自己要动手去实战。

#### CSS参考手册

给wxml文件的组件加了选择器之后，我们就可以在wxss文件里给指定的某个&lt;view&gt;组件以及某类&lt;view&gt;组件添加一些美化了，这里我们需要编辑home.wxss文件。wxss美化的知识和css是一样的，所以小程序的技术文档里面没有，大家可以看一下w3shool的CSS参考手册。CSS文件的作用就是来美化组件的。

技术文档：[CSS参考手册](http://www.w3school.com.cn/cssref/index.asp)

这里大家只需要了解CSS的**字体属性**、**文本属性**、**背景属性**、**边框属性**、**盒模型**
> CSS涉及的知识点非常多，现在大家也只需要知道有这些概念即可，学技术千万不要在**没有看到实际效果的情况下**来死记概念。概念没有记住一点关系都没有，因为大家可以随时来查文档。接下来我们也会有实际的例子让大家看到效果，大家想深入学习的时候可以回头再看这些文档。

#### 字体属性与文本属性

> 下面这些关于CSS的基础知识点，大家可以结合我们是如何调整Word、PPT的样式的来理解，比如我们是怎么调整文本的大小、颜色、粗细等等的，添加样式的时候要注意随手实战了解了效果再说。
比如class为title的&lt;view&gt;组件里面的文字是标题，我们需要对标题的字体进行加大、加粗以及居中处理，这时候我们就可以在home.wxss文件里加入以下代码，然后大家看看有什么效果。
<pre class="lang:css decode:true">.title{
  font-size: 20px; 
  font-weight: 600;
  text-align: center;
  }</pre>
通过`.title`这个选择器，我们就选择到了类class为`title`的&lt;view&gt;组件，然后就可以精准地对它进行美化，对它的美化代码不会用在其他组件上了。
> 大家也要留意css的写法，这里font-size，font-weight，text-align外面称之为属性，冒号:后面的我们称之为值，属性:值这一整个我们叫做声明，每个声明我们用分号;隔开。大家不要记这些概念，知道是个什么东西就行了。
class为item-title的&lt;view&gt;组件里面的文字是一个列表的标题，我们希望它和其他文字的样式有所不同，不过这个标题要比title的字体小一些；比其他文字更粗，但是比title更细；颜色我们可以添加一个彩色字体，
<pre class="lang:css decode:true">.item-title{
  font-size:18px;
  font-weight:500;
  color: #c60;
}
</pre>
我们希望描述类的文字颜色浅一点，不要那么黑，我们可以换一个浅一点的颜色，我们在home.wxss下面继续加代码。
<pre class="lang:css decode:true">.desc,.item-desc{
  color: #333;
}</pre>
> 大家注意，我们这里有两个选择器，一个是desc，一个是item-desc，当我们希望两个不同的选择器有相同的css代码时，可以简化一起写，然后用逗号,隔开。
除了标题（class为title和item-title的&lt;view&gt;组件）我们都给他们加了字体大小，我们希望所有的文字大小、行间距有一个统一的设定。
<pre class="lang:css decode:true">#wxmlinfo,#studyweapp{
  font-size:16px;
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
  line-height: 1.6;
}</pre>
为了大家方便查阅技术文档，我们把这些常用的css技术文档整理到以下表格，方便大家更深入的去学习。
<table class="table table-bordered table-striped">
<thead>
<tr>
<th colspan="2">字体属性</th>
</tr>
</thead>
<tbody>
<tr>
<th>[font-family](http://www.w3school.com.cn/cssref/pr_font_font-family.asp)</th>
<td>规定文本的字体系列。</td>
</tr>
<tr>
<th>[font-size](http://www.w3school.com.cn/cssref/pr_font_font-size.asp)</th>
<td>规定文本的字体尺寸。</td>
</tr>
<tr>
<th>[font-weight](http://www.w3school.com.cn/cssref/pr_font_weight.asp)</th>
<td>规定字体的粗细。</td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="2">文本属性</th>
</tr>
</thead>
<tbody>
<tr>
<th>[color](http://www.w3school.com.cn/cssref/pr_text_color.asp)</th>
<td>设置文本的颜色。</td>
</tr>
<tr>
<th>[line-height](http://www.w3school.com.cn/cssref/pr_dim_line-height.asp)</th>
<td>设置行高。</td>
</tr>
<tr>
<th>[text-align](http://www.w3school.com.cn/cssref/pr_text_text-align.asp)</th>
<td>规定文本的水平对齐方式。</td>
</tr>
</tbody>
</table>

#### 盒模型

大家有没有发现段落之间的距离、文字之间的距离，以及与边框之间的距离都比较拥挤？这个时候就需要用到盒子模型啦。盒子模型就像一个长方形的盒子，它有长度、高度、也有边框，以及内边距与外边距。我们通过实战来了解一下。
> 长度、高度、边框我们比较好理解，那这个内边距和外边距是什么意思呢？
> 
> 内边距就是这个长方形的边框与长方形里面的内容之间的距离，有上边距，右边距、下边距、左边距这个四个内边距，分别为padding-top，padding-right，padding-bottom，padding-left。注意是上、右、下、左，这样一个顺时针。
> 
> 那外边距就是这个长方形的边框与长方形外面的内容之间的距离，同样也有上边距margin-top，右边距margin-right，下边距margin-bottom，左边距margin-left这个四个边距。同样也是上、右、下、左这个顺时针。
比如我们给id为lesson3和study的&lt;view&gt;组件加一个内部距，让文字
<pre class="lang:css decode:true">#wxmlinfo,#studyweapp{
  padding-top:20px;
  padding-right:15px;
  padding-bottom:20px;
  padding-left:15px;
}</pre>
> **padding的简写  **上面这四个padding是可以做一定的简写的，关于padding的简写，大家可以去阅读以下技术文档，多用就会了，[CSS padding属性 ](http://www.w3school.com.cn/cssref/pr_padding.asp)，在这里有四个padding简写的案例，比如上面的这四条声明可以简写成padding:20px 15px。大家可以业余深入了解一下。
class为title的view组件是标题，我们希望它和下面的文字距离大一点，我们可以添加以下样式:
<pre class="lang:css decode:true">.title,.item-title{
  margin-bottom:0.9em;
  }</pre>
这里咋又冒出了一个em的单位，em是相对于当前字体尺寸而言的单位，如果当前你的字体大小为16px，那1em为16px；如果当前你的字体大小为18px，那1em为18px。

为了让class为item-title的&lt;view&gt;组件，也就是列表的标题更加突出，我们可以给它左边加一个边框，
<pre class="lang:css decode:true">.item-title{
  border-left: 3px solid #c60;
  padding-left: 15px;
}</pre>
这样，小程序的一篇文章的样式看起来就算马马虎虎可以接受啦~为了便于大家查阅，我们也把盒子模型的三类属性整合在了一起
<table class="table table-bordered table-striped">
<thead>
<tr>
<th colspan="2">内边距属性</th>
</tr>
</thead>
<tbody>
<tr>
<th>[padding](http://www.w3school.com.cn/cssref/pr_font_font-family.asp)</th>
<td>在一个声明中设置所有内边距属性。</td>
</tr>
<tr>
<th>[padding-top](http://www.w3school.com.cn/cssref/pr_font_font-size.asp)</th>
<td>设置元素的上内边距。</td>
</tr>
<tr>
<th>[padding-right](http://www.w3school.com.cn/cssref/pr_font_weight.asp)</th>
<td>设置元素的右内边距。</td>
</tr>
<tr>
<th>[padding-bottom](http://www.w3school.com.cn/cssref/pr_font_weight.asp)</th>
<td>设置元素的下内边距。</td>
</tr>
<tr>
<th>[padding-left](http://www.w3school.com.cn/cssref/pr_font_weight.asp)</th>
<td>设置元素的左内边距。</td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="2">外边距属性</th>
</tr>
</thead>
<tbody>
<tr>
<th>[margin](http://www.w3school.com.cn/cssref/pr_margin.asp)</th>
<td>在一个声明中设置所有外边距属性。</td>
</tr>
<tr>
<th>[margin-top](http://www.w3school.com.cn/cssref/pr_margin-top.asp)</th>
<td>设置元素的上外边距。</td>
</tr>
<tr>
<th>[margin-right](http://www.w3school.com.cn/cssref/pr_margin-right.asp)</th>
<td>设置元素的右外边距</td>
</tr>
<tr>
<th>[margin-bottom](http://www.w3school.com.cn/cssref/pr_margin-bottom.asp)</th>
<td>设置元素的下外边距。</td>
</tr>
<tr>
<th>[margin-left](http://www.w3school.com.cn/cssref/pr_margin-left.asp)</th>
<td>设置元素的左外边距。</td>
</tr>
</tbody>
<thead>
<tr>
<th colspan="2">边框属性</th>
</tr>
</thead>
<tbody>
<tr>
<th>[border](http://www.w3school.com.cn/cssref/pr_border.asp)</th>
<td>在一个声明中设置所有的边框属性。比如border:1px solid #ccc;</td>
</tr>
<tr>
<th>[border-top](http://www.w3school.com.cn/cssref/pr_border-top.asp)</th>
<td>在一个声明中设置所有的上边框属性。</td>
</tr>
<tr>
<th>[border-right](http://www.w3school.com.cn/cssref/pr_border-right.asp)</th>
<td>在一个声明中设置所有的右边框属性。</td>
</tr>
<tr>
<th>[border-bottom](http://www.w3school.com.cn/cssref/pr_border-bottom.asp)</th>
<td>在一个声明中设置所有的下边框属性。</td>
</tr>
<tr>
<th>[border-left](http://www.w3school.com.cn/cssref/pr_border-left.asp)</th>
<td>在一个声明中设置所有的左边框属性。</td>
</tr>
<tr>
<th>[border-width](http://www.w3school.com.cn/cssref/pr_border-width.asp)</th>
<td>设置四条边框的宽度。</td>
</tr>
<tr>
<th>[border-style](http://www.w3school.com.cn/cssref/pr_border-style.asp)</th>
<td>设置四条边框的样式。</td>
</tr>
<tr>
<th>[border-color](http://www.w3school.com.cn/cssref/pr_border-color.asp)</th>
<td>设置四条边框的颜色。</td>
</tr>
<tr>
<th>[border-radius](http://www.w3school.com.cn/cssref/pr_border-radius.asp)</th>
<td>简写属性，设置所有四个 border-*-radius 属性。</td>
</tr>
<tr>
<th>[box-shadow](http://www.w3school.com.cn/cssref/pr_box-shadow.asp)</th>
<td>向方框添加一个或多个阴影。</td>
</tr>
</tbody>
</table>
更多的设计样式，大家可以根据上面的技术文档，在开发者工具里像做实验一样的来测试学习。