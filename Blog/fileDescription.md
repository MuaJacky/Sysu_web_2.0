

    Skip to content
    Skip to breadcrumbs
    Skip to header menu
    Skip to action menu
    Skip to quick search

HCP Confluence

    Spaces

    Quick Search
    Help
    Log in


Modern Web Programming

Homework 12 Blog

    Pages
    Modern Web Programming Home
    Assignments 

Skip to end of banner

Go to start of banner
Skip to end of metadata

    Created by Unknown User (wangqing), last modified on Jan 27, 2018

Go to start of metadata

作业评分

本次作业为附加作业，不影响课程通过。但是，

    记入课程排名和评奖
    本次作业分数以附加分的形式体现在课程总成绩中

也就是说，不提交本次作业（或者分数不理想），不会拉低已有的课程分数，造成无法通过。

提交时间为寒假，提交时间统一为2018年3月1日(农历正月十四），无须互评，直接由TA打分（3月4日），确定最后分数。
题目一

无须提交，但对循序渐进，掌握技术很重要

仔细完成 https://www.codecademy.com/courses/javascript-advanced-en-2hJ3J/ 的练习

注意：虽然从 9. Routing Parameters开始，并不需要在线编辑代码，直接提交代码，也能够通过；但是，大家每一步都还是要认真阅读，结合课上老师讲解的概念，深入理解代码，弄清楚其作用和运行原理。
题目二

在种子项目： https://github.com/btford/angular-express-blog 的基础上，实现一个初具完整形态的Blog应用。

上图是种子项目运行的情况，在此基础上完成：
基本要求（80分）

    用户（20分）：用户的注册、登录、登出
        可复用Homework 11成果
    blog完善（15分）：blog的评论
    权限管理
        普通用户（15分）
            能够看到和评论所有人的blog
            只能够修改自己的blog和评论
        管理员（10分）
            可以隐藏所有人的blog或者评论，隐藏后显示“该内容已被管理员隐藏”
    UI（20分）：增加样式和必要的交互，让整个应用易于理解和使用

高级要求（加分项）

    分页（10分）：首页列表上blog条数太多时，提供分页机制，类似
     
    搜索（10分）：在首页提供搜索框，能够对blog列表，进行搜索

软件质量要求（20分）

    CSS代码符合课程要求（5分）
    HTML（Jade）代码符合课程要求（5分）
    JavaScript代码符合课程要求（10分）

技术要求（扣分项）

    SPA：必须是SPA应用，也就是说，浏览器不能够有页面刷新，否则扣30分
    持久化：所有数据，包括：blog、评论和用户，都必须持久化，一项未持久化扣10分

 

 

 

    No labels 

52 Comments

    User icon: guest
    guest

    这就是大作业么？
        Reply
        Dec 29, 2015

        User icon: wangqing
        Unknown User (wangqing)

        并不是。大作业是寒假做，开学交，仅给爱好者做。
            Reply
            Dec 29, 2015

            User icon: guest
            guest

            老师，为什么一定要用spa呢？
                Reply
                Dec 29, 2015

                User icon: wangqing
                Unknown User (wangqing)

                上了课就知道了 (smile)
                    Reply
                    Dec 29, 2015

            User icon: guest
            guest

            大作业计入排名和评奖吗。。。
                Reply
                Dec 29, 2015

    User icon: guest
    guest

    为老师对我们的体恤点赞
        Reply
        Dec 29, 2015

    User icon: guest
    guest

    感天动地！
        Reply
        Dec 29, 2015

    User icon: guest
    guest

    这个课，就算熬到尽头了吗！！！有点激动
        Reply
        Dec 29, 2015

    User icon: guest
    guest

     

    终于能抄起课本复习了
        Reply
        Dec 29, 2015

    User icon: guest
    guest

    附加分？会加入总成绩里吗
        Reply
        Dec 29, 2015

    User icon: guest
    guest

    所以学分算是拿到手了？
        Reply
        Dec 29, 2015

    User icon: guest
    guest

    前30名是两个班综合起来算吗
        Reply
        Dec 29, 2015

    User icon: 13331288
    Unknown User (13331288)

    Unknown User (wangqing) 老师，这个作业需不需要做一些安全方面的考虑，比如防XSS之类的
        Reply
        Dec 30, 2015

        User icon: wangqing
        Unknown User (wangqing)

        太早了，先不用。让同学们先专注在功能这个层面。
            Reply
            Dec 30, 2015

    User icon: guest
    guest

    请问登陆成功后能不能通过页面刷新来到博客的页面呢？还是从头到尾都不能有页面刷新呢？
        Reply
        Jan 03, 2016

    User icon: wangqing
    Unknown User (wangqing)

    都不能有刷新。
        Reply
        Jan 03, 2016

    User icon: guest
    guest

    请问管理员是先预置好一个登录帐号么？
        Reply
        Jan 24, 2016

        User icon: wangqing
        Unknown User (wangqing)

        对，管理员账号是程序预配置的，不是singup出来的。
            Reply
            Jan 24, 2016

    User icon: guest
    guest

    管理员权限管理实现难度太大，对一般用户和管理员需要两套业务逻辑和模版，实在力不从心；普通用户修改自己在别人博客下的评论也不好做
        Reply
        Jan 24, 2016

        User icon: guest
        guest

        跪求老师给一个解决的方案出来
            Reply
            Jan 24, 2016

            User icon: wangqing
            Unknown User (wangqing)

            别跪，Tips：
                这里的关键就是MVC
                不需要两套模板，用好模板的if和model的方法，类似if user.isAdmin，if comment.user == currentUser 什么的
                Reply
                Jan 24, 2016

    User icon: guest
    guest

    管理员那部分是这样理解吗：管理员隐藏了某篇博客或评论之后，普通用户看到的是 ”博客标题+该内容已被管理员隐藏“ 而看不到正文  或  ”评论者名称+该内容已被管理员隐藏“
        Reply
        Jan 24, 2016

        User icon: wangqing
        Unknown User (wangqing)

        对。
            Reply
            Jan 24, 2016

    User icon: guest
    guest

    老师这个homework11是我们上次的作业吧。。链接对么？？
        Reply
        Jan 26, 2016

        User icon: wangqing
        Unknown User (wangqing)

        已改。
            Reply
            Jan 26, 2016

    User icon: guest
    guest

    思路很乱不清晰，求王老师给一段code show
        Reply
        Jan 26, 2016

        User icon: guest
        guest

        同求..555
            Reply
            Jan 26, 2016

    User icon: guest
    guest

    blog是存在data数组中的，不用数据库么
        Reply
        Jan 27, 2016

        User icon: guest
        guest

        2.持久化：所有数据，包括：blog、评论和用户，都必须持久化，一项未持久化扣10分
            Reply
            Jan 27, 2016

    User icon: guest
    guest

    老师能否公布下总评具体怎么给分，让我们知道下目前已经拿了多少分。。心里有个底。。。
        Reply
        Jan 27, 2016

        User icon: wangqing
        Unknown User (wangqing)

        和Syllabus里面一样啊，Homeworks 70%，Course Project 30%。
            Reply
            Jan 27, 2016

            User icon: guest
            guest

             老师，假设homeworks平时都是90分，不做大作业的话，这么算总评是63分。。。大作业不是想做就能做得出来的啊。。。而且又是寒假。。。说好的不影响分数就是这样啊。。。
                Reply
                Jan 27, 2016

                User icon: wangqing
                Unknown User (wangqing)

                课上讲过啊，Homework 12和Course Project（大作业）都不记入课程分数。

                这里所说的总评，是指确定课程最后排名的总评分数，用来确定名次、奖项、实验室名额的，不是记入成绩册的课程分数。
                    Reply
                    Jan 27, 2016

    User icon: guest
    guest

    要求全部spa，页面不能刷新，所以包括注册和登陆都不可以刷新页面吗？
        Reply
        Jan 27, 2016

        User icon: wangqing
        Unknown User (wangqing)

        是的，都不能。
            Reply
            Jan 27, 2016

    User icon: guest
    guest

    gg

     
        Reply
        Sep 09, 2016

    User icon: 10389259
    Unknown User (10389259)

    mark
        Reply
        Sep 22, 2016

    User icon: guest
    guest

    可不可以使用JavaWeb + mysql写？
        Reply
        Oct 10, 2016

        User icon: guest
        guest

        膜大神
            Reply
            Oct 10, 2016

        User icon: guest
        guest

        不可以。用什么数据库倒是无所谓，但Java就算了吧。否则这门课程就失去意义了。跟着课程一步一步来吧，别跑太多弯路了。
            Reply
            Oct 11, 2016

            User icon: guest
            guest

            66666
                Reply
                Jul 28, 2017

        User icon: guest
        guest

        色色发抖
            Reply
            Oct 11, 2016

    User icon: guest
    guest

    mod
        Reply
        Dec 20, 2016

    User icon: guest
    guest

    种子项目是express2，还要自己改？
        Reply
        Dec 25, 2016

    User icon: guest
    guest

    请问可不可以不用那个现成的代码（作为参考），想自己写2333（好像添加一些功能也没什么关系）
        Reply
        Dec 28, 2016

        User icon: wangqing
        Unknown User (wangqing)

        可以
            Reply
            Dec 28, 2016

    User icon: guest
    guest

    老师，我加入了一个富文本编辑器uEditor， 它渲染上去的时候总是会短暂地刷新页面，请问这种情况可以吗？
        Reply
        Jan 22, 2017

        User icon: wangqing
        Unknown User (wangqing)

        可以的。
            Reply
            Jan 22, 2017

    User icon: guest
    guest

    我要退学，再见

     
        Reply
        Dec 12, 2017

        User icon: guest
        guest

        再见
            Reply
            Dec 13, 2017

    User icon: guest
    guest

    做还是不做，这是一个问题。
        Reply
        Feb 09, 2018

    User icon: guest
    guest

    作业什么时候改呢
        Reply
        Mar 17, 2018

User icon: Anonymous
Write a comment…

    Powered by Atlassian Confluence 6.0.0-OD-2015.48.1-0006, Team Collaboration Software Report a bug Atlassian News 

Atlassian
