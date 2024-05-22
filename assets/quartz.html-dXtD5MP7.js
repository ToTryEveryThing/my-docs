import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as u,c as r,a as n,b as s,d as c,w as a,f as k}from"./app-oAlAYZc-.js";const d={},m=n("h1",{id:"quartz",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quartz","aria-hidden":"true"},"#"),s(" Quartz")],-1),b={href:"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/",target:"_blank",rel:"noopener noreferrer"},v=k(`<blockquote><ol><li><code>Job</code> 表示一个工作，要执行的具体内容</li><li><code>JobDetail</code> 表示一个具体的可执行的调度程序，Job 是这个可执行程调度程序所要执行的内容，另外 JobDetail 还包含了这个任务调度的方案略。</li><li><code>Trigger</code> 代表一个调度参数的配置，什么时候去调。</li><li><code>Scheduler</code> 代表一个调度容器，一个调度容器中可以注册多个 JobDetail 和 Trigger。当 Trigger 与 JobDetail 组合，就可以被 Scheduler 容器调度了。</li></ol></blockquote><h4 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-quartz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h4><ol><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstJob</span> <span class="token keyword">implements</span> <span class="token class-name">Job</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> jobExecutionContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JobExecutionException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hhhhh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//        定义作业 绑定到FirstJob.class</span>
        <span class="token class-name">JobDetail</span> job <span class="token operator">=</span> <span class="token class-name">JobBuilder</span><span class="token punctuation">.</span><span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">FirstJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fristgroup&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//        触发器 触发作业立即运行，然后每3秒重复一次</span>
        <span class="token class-name">SimpleTrigger</span> trigger <span class="token operator">=</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">)</span><span class="token comment">// name group</span>
                <span class="token punctuation">.</span><span class="token function">startNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 立马开始</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span><span class="token class-name">SimpleScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">simpleSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withIntervalInSeconds</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//每3秒</span>
                        <span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// 循环</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//            创建调度器</span>
            <span class="token class-name">Scheduler</span> scheduler <span class="token operator">=</span> <span class="token class-name">StdSchedulerFactory</span><span class="token punctuation">.</span><span class="token function">getDefaultScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            scheduler<span class="token punctuation">.</span><span class="token function">scheduleJob</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span>trigger<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//开始</span>
            scheduler<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//结束</span>
            scheduler<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="任务传参" tabindex="-1"><a class="header-anchor" href="#任务传参" aria-hidden="true">#</a> 任务传参</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstJob</span> <span class="token keyword">implements</span> <span class="token class-name">Job</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JobExecutionException</span> <span class="token punctuation">{</span>
        <span class="token class-name">JobDataMap</span> jobDataMap <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getJobDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getJobDataMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Detail</span>
        <span class="token class-name">JobDataMap</span> jobDataMap1 <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getJobDataMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//tTrigger</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>jobDataMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>jobDataMap1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//        定义作业 绑定到FirstJob.class</span>
        <span class="token class-name">JobDataMap</span> jobDataMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JobDataMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jobDataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JobDetail</span> job <span class="token operator">=</span> <span class="token class-name">JobBuilder</span><span class="token punctuation">.</span><span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">FirstJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setJobData</span><span class="token punctuation">(</span>jobDataMap<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fristgroup&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        触发器 触发作业立即运行，然后每3秒重复一次</span>
        <span class="token class-name">SimpleTrigger</span> trigger <span class="token operator">=</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">)</span><span class="token comment">// name group</span>
                <span class="token punctuation">.</span><span class="token function">startNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 立马开始</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span><span class="token class-name">SimpleScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">simpleSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withIntervalInSeconds</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//每3秒</span>
                        <span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// 循环</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trigger<span class="token punctuation">.</span><span class="token function">getJobDataMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;触发器的参数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整合spring-boot" tabindex="-1"><a class="header-anchor" href="#整合spring-boot" aria-hidden="true">#</a> 整合spring boot</h2>`,8),R={href:"https://github.com/bianyueying/Quartz",target:"_blank",rel:"noopener noreferrer"},E=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@Configuration"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"QuartzService"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Resource"),s(`
    `),n("span",{class:"token class-name"},"Scheduler"),s(" scheduler"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"prepareJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Scheduler"),s(" scheduler"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"JobDetail"),s(" jobDetail1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"newJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"OneJob"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withIdentity"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"job1"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"group1"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withDescription"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"任务一描述：每隔10秒输出用户一的用户名"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"JobDetail"),s(" jobDetail2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"newJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TwoJob"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withIdentity"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"job2"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"group1"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withDescription"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"任务二描述: 模拟每天午夜时统计一下总人数"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"CronTrigger"),s(" cronTrigger1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"newTrigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withIdentity"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"trigger1"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"group1"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startNow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withSchedule"),n("span",{class:"token punctuation"},"("),s(`
                        `),n("span",{class:"token class-name"},"CronScheduleBuilder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cronSchedule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0/10 * 10-23 * * ?"'),n("span",{class:"token punctuation"},")"),s(`
                                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withMisfireHandlingInstructionDoNothing"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"CronTrigger"),s(" cronTrigger2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"newTrigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withIdentity"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"trigger2"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"group1"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startNow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withSchedule"),n("span",{class:"token punctuation"},"("),s(`
                        `),n("span",{class:"token class-name"},"CronScheduleBuilder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cronSchedule"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"0/30 * 10-23 * * ?"'),n("span",{class:"token punctuation"},")"),s(`
                                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withMisfireHandlingInstructionDoNothing"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"scheduleJob"),n("span",{class:"token punctuation"},"("),s("jobDetail1"),n("span",{class:"token punctuation"},","),s(" cronTrigger1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"scheduleJob"),n("span",{class:"token punctuation"},"("),s("jobDetail2"),n("span",{class:"token punctuation"},","),s(" cronTrigger2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"startJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"prepareJob"),n("span",{class:"token punctuation"},"("),s("scheduler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`


    `),n("span",{class:"token doc-comment comment"},`/**
     * 获取任务列表
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"QuartzJobVO"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getList"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"QuartzJobVO"),n("span",{class:"token punctuation"},">")]),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// 再获取Scheduler下的所有group"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},">")]),s(" triggerGroupNames "),n("span",{class:"token operator"},"="),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTriggerGroupNames"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" groupName "),n("span",{class:"token operator"},":"),s(" triggerGroupNames"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 组装group的匹配，为了模糊获取所有的triggerKey或者jobKey"),s(`
            `),n("span",{class:"token class-name"},"GroupMatcher"),s(" groupMatcher "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"GroupMatcher"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"groupEquals"),n("span",{class:"token punctuation"},"("),s("groupName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token comment"},"// 获取所有的triggerKey"),s(`
            `),n("span",{class:"token class-name"},"Set"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TriggerKey"),n("span",{class:"token punctuation"},">")]),s(" triggerKeySet "),n("span",{class:"token operator"},"="),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTriggerKeys"),n("span",{class:"token punctuation"},"("),s("groupMatcher"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"TriggerKey"),s(" triggerKey "),n("span",{class:"token operator"},":"),s(" triggerKeySet"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 通过triggerKey在scheduler中获取trigger对象"),s(`
                `),n("span",{class:"token class-name"},"CronTrigger"),s(" trigger "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"CronTrigger"),n("span",{class:"token punctuation"},")"),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTrigger"),n("span",{class:"token punctuation"},"("),s("triggerKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 获取trigger拥有的Job"),s(`
                `),n("span",{class:"token class-name"},"JobKey"),s(" jobKey "),n("span",{class:"token operator"},"="),s(" trigger"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getJobKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token class-name"},"JobDetailImpl"),s(" jobDetail "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"JobDetailImpl"),n("span",{class:"token punctuation"},")"),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getJobDetail"),n("span",{class:"token punctuation"},"("),s("jobKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 组装页面需要显示的数据"),s(`
                `),n("span",{class:"token class-name"},"QuartzJobVO"),s(" quartzJobsVO "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"QuartzJobVO"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setJobName"),n("span",{class:"token punctuation"},"("),s("jobDetail"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setJobGroup"),n("span",{class:"token punctuation"},"("),s("groupName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDescription"),n("span",{class:"token punctuation"},"("),s("jobDetail"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDescription"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 获取全类名 也可以获取包名"),s(`
                `),n("span",{class:"token class-name"},"Class"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Job"),n("span",{class:"token punctuation"},">")]),s(" jobClass "),n("span",{class:"token operator"},"="),s(" jobDetail"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getJobClass"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setJobClassName"),n("span",{class:"token punctuation"},"("),s("jobClass"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setTriggerName"),n("span",{class:"token punctuation"},"("),s("triggerKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getName"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setTriggerGroup"),n("span",{class:"token punctuation"},"("),s("triggerKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getGroup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"// 任务当前状态"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setTriggerState"),n("span",{class:"token punctuation"},"("),s("scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTriggerState"),n("span",{class:"token punctuation"},"("),s("triggerKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCronExpression"),n("span",{class:"token punctuation"},"("),s("trigger"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCronExpression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                quartzJobsVO`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setTimeZone"),n("span",{class:"token punctuation"},"("),s("trigger"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTimeZone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getID"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("quartzJobsVO"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 动态添加一个定时任务 类名一定要写全
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"className"),s(` 根据类名得到类 比如：bml.job.job.OneJob
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"addJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" jobName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" triggerName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" description"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" className"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" cron"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"ClassNotFoundException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"JobDetail"),s(" jobDetail "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"newJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Class"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Job"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token class-name"},"Class"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forName"),n("span",{class:"token punctuation"},"("),s("className"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withIdentity"),n("span",{class:"token punctuation"},"("),s("jobName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"group1"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withDescription"),n("span",{class:"token punctuation"},"("),s("description"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"CronTrigger"),s(" cronTrigger "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"newTrigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withIdentity"),n("span",{class:"token punctuation"},"("),s("triggerName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"group1"'),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startNow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withSchedule"),n("span",{class:"token punctuation"},"("),s(`
                        `),n("span",{class:"token class-name"},"CronScheduleBuilder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cronSchedule"),n("span",{class:"token punctuation"},"("),s("cron"),n("span",{class:"token punctuation"},")"),s(`
                                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withMisfireHandlingInstructionDoNothing"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"scheduleJob"),n("span",{class:"token punctuation"},"("),s("jobDetail"),n("span",{class:"token punctuation"},","),s(" cronTrigger"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     *  shutdown(true)表示等待所有正在执行的任务执行完毕后关闭Scheduler
     *  shutdown(false),即shutdown()表示直接关闭Scheduler
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"shutdown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shutdown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 02-暂停某个任务
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"pauseOneJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" group"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"JobKey"),s(" jobKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"JobKey"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" group"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"JobDetail"),s(" jobDetail "),n("span",{class:"token operator"},"="),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getJobDetail"),n("span",{class:"token punctuation"},"("),s("jobKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("jobDetail "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pauseJob"),n("span",{class:"token punctuation"},"("),s("jobKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 03-暂停所有任务
     * 区别在于触发失火指令应用行为.
     * 在standby()后调用start()时,任何在待机状态下出现的失火将被忽略.
     * 当您在pauseAll()之后调用resumeAll()时,将会应用在调度程序暂停时出现的所有失火.
     * standby之后就不能再条用了？
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"pauseAllJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pauseAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 04-恢复一个任务
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"resumeOneJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" group"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"JobKey"),s(" jobKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"JobKey"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" group"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"JobDetail"),s(" jobDetail "),n("span",{class:"token operator"},"="),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getJobDetail"),n("span",{class:"token punctuation"},"("),s("jobKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("jobDetail "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resumeJob"),n("span",{class:"token punctuation"},"("),s("jobKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 05-恢复所有任务
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"resumeAllJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resumeAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 06-修改某个任务的执行时间
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"updateJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" group"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" cron"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"Date"),s(" date "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"TriggerKey"),s(" triggerKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"TriggerKey"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" group"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"CronTrigger"),s(" cronTrigger "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"CronTrigger"),n("span",{class:"token punctuation"},")"),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTrigger"),n("span",{class:"token punctuation"},"("),s("triggerKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"String"),s(" oldTime "),n("span",{class:"token operator"},"="),s(" cronTrigger"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCronExpression"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("oldTime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"equalsIgnoreCase"),n("span",{class:"token punctuation"},"("),s("cron"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"CronScheduleBuilder"),s(" cronScheduleBuilder "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"CronScheduleBuilder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cronSchedule"),n("span",{class:"token punctuation"},"("),s("cron"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token class-name"},"CronTrigger"),s(" trigger "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"TriggerBuilder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"newTrigger"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withIdentity"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" group"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"withSchedule"),n("span",{class:"token punctuation"},"("),s("cronScheduleBuilder"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            date `),n("span",{class:"token operator"},"="),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"rescheduleJob"),n("span",{class:"token punctuation"},"("),s("triggerKey"),n("span",{class:"token punctuation"},","),s(" trigger"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" date "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 07-删除某个任务 删除后该任务将不再执行
     */`),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"deleteOneJob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),s(" group"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"SchedulerException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"JobKey"),s(" jobKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"JobKey"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" group"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"JobDetail"),s(" jobDetail "),n("span",{class:"token operator"},"="),s(" scheduler"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getJobDetail"),n("span",{class:"token punctuation"},"("),s("jobKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("jobDetail "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        scheduler`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"deleteJob"),n("span",{class:"token punctuation"},"("),s("jobKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-mysql line-numbers-mode","data-ext":"mysql"},[n("pre",{class:"language-mysql"},[n("code",null,`#
# In your Quartz properties file, you'll need to set
# org.quartz.jobStore.driverDelegateClass = org.quartz.impl.jdbcjobstore.StdJDBCDelegate
#
#
# By: Ron Cordell - roncordell
#  I didn't see this anywhere, so I thought I'd post it here. This is the script from Quartz to create the tables in a MySQL database, modified to use INNODB instead of MYISAM.

DROP TABLE IF EXISTS QRTZ_FIRED_TRIGGERS;
DROP TABLE IF EXISTS QRTZ_PAUSED_TRIGGER_GRPS;
DROP TABLE IF EXISTS QRTZ_SCHEDULER_STATE;
DROP TABLE IF EXISTS QRTZ_LOCKS;
DROP TABLE IF EXISTS QRTZ_SIMPLE_TRIGGERS;
DROP TABLE IF EXISTS QRTZ_SIMPROP_TRIGGERS;
DROP TABLE IF EXISTS QRTZ_CRON_TRIGGERS;
DROP TABLE IF EXISTS QRTZ_BLOB_TRIGGERS;
DROP TABLE IF EXISTS QRTZ_TRIGGERS;
DROP TABLE IF EXISTS QRTZ_JOB_DETAILS;
DROP TABLE IF EXISTS QRTZ_CALENDARS;

CREATE TABLE QRTZ_JOB_DETAILS(
SCHED_NAME VARCHAR(120) NOT NULL,
JOB_NAME VARCHAR(190) NOT NULL,
JOB_GROUP VARCHAR(190) NOT NULL,
DESCRIPTION VARCHAR(250) NULL,
JOB_CLASS_NAME VARCHAR(250) NOT NULL,
IS_DURABLE VARCHAR(1) NOT NULL,
IS_NONCONCURRENT VARCHAR(1) NOT NULL,
IS_UPDATE_DATA VARCHAR(1) NOT NULL,
REQUESTS_RECOVERY VARCHAR(1) NOT NULL,
JOB_DATA BLOB NULL,
PRIMARY KEY (SCHED_NAME,JOB_NAME,JOB_GROUP))
ENGINE=InnoDB;

CREATE TABLE QRTZ_TRIGGERS (
SCHED_NAME VARCHAR(120) NOT NULL,
TRIGGER_NAME VARCHAR(190) NOT NULL,
TRIGGER_GROUP VARCHAR(190) NOT NULL,
JOB_NAME VARCHAR(190) NOT NULL,
JOB_GROUP VARCHAR(190) NOT NULL,
DESCRIPTION VARCHAR(250) NULL,
NEXT_FIRE_TIME BIGINT(13) NULL,
PREV_FIRE_TIME BIGINT(13) NULL,
PRIORITY INTEGER NULL,
TRIGGER_STATE VARCHAR(16) NOT NULL,
TRIGGER_TYPE VARCHAR(8) NOT NULL,
START_TIME BIGINT(13) NOT NULL,
END_TIME BIGINT(13) NULL,
CALENDAR_NAME VARCHAR(190) NULL,
MISFIRE_INSTR SMALLINT(2) NULL,
JOB_DATA BLOB NULL,
PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP),
FOREIGN KEY (SCHED_NAME,JOB_NAME,JOB_GROUP)
REFERENCES QRTZ_JOB_DETAILS(SCHED_NAME,JOB_NAME,JOB_GROUP))
ENGINE=InnoDB;

CREATE TABLE QRTZ_SIMPLE_TRIGGERS (
SCHED_NAME VARCHAR(120) NOT NULL,
TRIGGER_NAME VARCHAR(190) NOT NULL,
TRIGGER_GROUP VARCHAR(190) NOT NULL,
REPEAT_COUNT BIGINT(7) NOT NULL,
REPEAT_INTERVAL BIGINT(12) NOT NULL,
TIMES_TRIGGERED BIGINT(10) NOT NULL,
PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP),
FOREIGN KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP)
REFERENCES QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP))
ENGINE=InnoDB;

CREATE TABLE QRTZ_CRON_TRIGGERS (
SCHED_NAME VARCHAR(120) NOT NULL,
TRIGGER_NAME VARCHAR(190) NOT NULL,
TRIGGER_GROUP VARCHAR(190) NOT NULL,
CRON_EXPRESSION VARCHAR(120) NOT NULL,
TIME_ZONE_ID VARCHAR(80),
PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP),
FOREIGN KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP)
REFERENCES QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP))
ENGINE=InnoDB;

CREATE TABLE QRTZ_SIMPROP_TRIGGERS
  (
    SCHED_NAME VARCHAR(120) NOT NULL,
    TRIGGER_NAME VARCHAR(190) NOT NULL,
    TRIGGER_GROUP VARCHAR(190) NOT NULL,
    STR_PROP_1 VARCHAR(512) NULL,
    STR_PROP_2 VARCHAR(512) NULL,
    STR_PROP_3 VARCHAR(512) NULL,
    INT_PROP_1 INT NULL,
    INT_PROP_2 INT NULL,
    LONG_PROP_1 BIGINT NULL,
    LONG_PROP_2 BIGINT NULL,
    DEC_PROP_1 NUMERIC(13,4) NULL,
    DEC_PROP_2 NUMERIC(13,4) NULL,
    BOOL_PROP_1 VARCHAR(1) NULL,
    BOOL_PROP_2 VARCHAR(1) NULL,
    PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP),
    FOREIGN KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP)
    REFERENCES QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP))
ENGINE=InnoDB;

CREATE TABLE QRTZ_BLOB_TRIGGERS (
SCHED_NAME VARCHAR(120) NOT NULL,
TRIGGER_NAME VARCHAR(190) NOT NULL,
TRIGGER_GROUP VARCHAR(190) NOT NULL,
BLOB_DATA BLOB NULL,
PRIMARY KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP),
INDEX (SCHED_NAME,TRIGGER_NAME, TRIGGER_GROUP),
FOREIGN KEY (SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP)
REFERENCES QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP))
ENGINE=InnoDB;

CREATE TABLE QRTZ_CALENDARS (
SCHED_NAME VARCHAR(120) NOT NULL,
CALENDAR_NAME VARCHAR(190) NOT NULL,
CALENDAR BLOB NOT NULL,
PRIMARY KEY (SCHED_NAME,CALENDAR_NAME))
ENGINE=InnoDB;

CREATE TABLE QRTZ_PAUSED_TRIGGER_GRPS (
SCHED_NAME VARCHAR(120) NOT NULL,
TRIGGER_GROUP VARCHAR(190) NOT NULL,
PRIMARY KEY (SCHED_NAME,TRIGGER_GROUP))
ENGINE=InnoDB;

CREATE TABLE QRTZ_FIRED_TRIGGERS (
SCHED_NAME VARCHAR(120) NOT NULL,
ENTRY_ID VARCHAR(95) NOT NULL,
TRIGGER_NAME VARCHAR(190) NOT NULL,
TRIGGER_GROUP VARCHAR(190) NOT NULL,
INSTANCE_NAME VARCHAR(190) NOT NULL,
FIRED_TIME BIGINT(13) NOT NULL,
SCHED_TIME BIGINT(13) NOT NULL,
PRIORITY INTEGER NOT NULL,
STATE VARCHAR(16) NOT NULL,
JOB_NAME VARCHAR(190) NULL,
JOB_GROUP VARCHAR(190) NULL,
IS_NONCONCURRENT VARCHAR(1) NULL,
REQUESTS_RECOVERY VARCHAR(1) NULL,
PRIMARY KEY (SCHED_NAME,ENTRY_ID))
ENGINE=InnoDB;

CREATE TABLE QRTZ_SCHEDULER_STATE (
SCHED_NAME VARCHAR(120) NOT NULL,
INSTANCE_NAME VARCHAR(190) NOT NULL,
LAST_CHECKIN_TIME BIGINT(13) NOT NULL,
CHECKIN_INTERVAL BIGINT(13) NOT NULL,
PRIMARY KEY (SCHED_NAME,INSTANCE_NAME))
ENGINE=InnoDB;

CREATE TABLE QRTZ_LOCKS (
SCHED_NAME VARCHAR(120) NOT NULL,
LOCK_NAME VARCHAR(40) NOT NULL,
PRIMARY KEY (SCHED_NAME,LOCK_NAME))
ENGINE=InnoDB;

CREATE INDEX IDX_QRTZ_J_REQ_RECOVERY ON QRTZ_JOB_DETAILS(SCHED_NAME,REQUESTS_RECOVERY);
CREATE INDEX IDX_QRTZ_J_GRP ON QRTZ_JOB_DETAILS(SCHED_NAME,JOB_GROUP);

CREATE INDEX IDX_QRTZ_T_J ON QRTZ_TRIGGERS(SCHED_NAME,JOB_NAME,JOB_GROUP);
CREATE INDEX IDX_QRTZ_T_JG ON QRTZ_TRIGGERS(SCHED_NAME,JOB_GROUP);
CREATE INDEX IDX_QRTZ_T_C ON QRTZ_TRIGGERS(SCHED_NAME,CALENDAR_NAME);
CREATE INDEX IDX_QRTZ_T_G ON QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_GROUP);
CREATE INDEX IDX_QRTZ_T_STATE ON QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_STATE);
CREATE INDEX IDX_QRTZ_T_N_STATE ON QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP,TRIGGER_STATE);
CREATE INDEX IDX_QRTZ_T_N_G_STATE ON QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_GROUP,TRIGGER_STATE);
CREATE INDEX IDX_QRTZ_T_NEXT_FIRE_TIME ON QRTZ_TRIGGERS(SCHED_NAME,NEXT_FIRE_TIME);
CREATE INDEX IDX_QRTZ_T_NFT_ST ON QRTZ_TRIGGERS(SCHED_NAME,TRIGGER_STATE,NEXT_FIRE_TIME);
CREATE INDEX IDX_QRTZ_T_NFT_MISFIRE ON QRTZ_TRIGGERS(SCHED_NAME,MISFIRE_INSTR,NEXT_FIRE_TIME);
CREATE INDEX IDX_QRTZ_T_NFT_ST_MISFIRE ON QRTZ_TRIGGERS(SCHED_NAME,MISFIRE_INSTR,NEXT_FIRE_TIME,TRIGGER_STATE);
CREATE INDEX IDX_QRTZ_T_NFT_ST_MISFIRE_GRP ON QRTZ_TRIGGERS(SCHED_NAME,MISFIRE_INSTR,NEXT_FIRE_TIME,TRIGGER_GROUP,TRIGGER_STATE);

CREATE INDEX IDX_QRTZ_FT_TRIG_INST_NAME ON QRTZ_FIRED_TRIGGERS(SCHED_NAME,INSTANCE_NAME);
CREATE INDEX IDX_QRTZ_FT_INST_JOB_REQ_RCVRY ON QRTZ_FIRED_TRIGGERS(SCHED_NAME,INSTANCE_NAME,REQUESTS_RECOVERY);
CREATE INDEX IDX_QRTZ_FT_J_G ON QRTZ_FIRED_TRIGGERS(SCHED_NAME,JOB_NAME,JOB_GROUP);
CREATE INDEX IDX_QRTZ_FT_JG ON QRTZ_FIRED_TRIGGERS(SCHED_NAME,JOB_GROUP);
CREATE INDEX IDX_QRTZ_FT_T_G ON QRTZ_FIRED_TRIGGERS(SCHED_NAME,TRIGGER_NAME,TRIGGER_GROUP);
CREATE INDEX IDX_QRTZ_FT_TG ON QRTZ_FIRED_TRIGGERS(SCHED_NAME,TRIGGER_GROUP);

commit;

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[s(`

`),n("span",{class:"token comment"},"# mybatis-plus"),s(`
`),n("span",{class:"token key atrule"},"mybatis-plus"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token comment"},"# SQL语句输出在控制台"),s(`
    `),n("span",{class:"token comment"},"# 映射文件相关"),s(`
    `),n("span",{class:"token key atrule"},"mapper-locations"),n("span",{class:"token punctuation"},":"),s(" classpath"),n("span",{class:"token important"},"*:bml/business/mapper/xml/*.xml"),s(`
    `),n("span",{class:"token key atrule"},"type-aliases-package"),n("span",{class:"token punctuation"},":"),s(` bml.business.mapper

`),n("span",{class:"token key atrule"},"spring"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"datasource"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# 业务数据源"),s(`
    `),n("span",{class:"token key atrule"},"db1"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"driver-class-name"),n("span",{class:"token punctuation"},":"),s(` com.mysql.cj.jdbc.Driver
      `),n("span",{class:"token key atrule"},"url"),n("span",{class:"token punctuation"},":"),s(" jdbc"),n("span",{class:"token punctuation"},":"),s("mysql"),n("span",{class:"token punctuation"},":"),s("//127.0.0.1"),n("span",{class:"token punctuation"},":"),s("3306/bml_base"),n("span",{class:"token punctuation"},"?"),s("useUnicode=true"),n("span",{class:"token important"},"&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=false"),s(`
      `),n("span",{class:"token key atrule"},"username"),n("span",{class:"token punctuation"},":"),s(` root
      `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"123456"),s(`
      `),n("span",{class:"token key atrule"},"type"),n("span",{class:"token punctuation"},":"),s(` com.alibaba.druid.pool.DruidDataSource
    `),n("span",{class:"token comment"},"# Quartz数据源"),s(`
    `),n("span",{class:"token key atrule"},"db2"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"driver-class-name"),n("span",{class:"token punctuation"},":"),s(` com.mysql.cj.jdbc.Driver
      `),n("span",{class:"token key atrule"},"url"),n("span",{class:"token punctuation"},":"),s(" jdbc"),n("span",{class:"token punctuation"},":"),s("mysql"),n("span",{class:"token punctuation"},":"),s("//127.0.0.1"),n("span",{class:"token punctuation"},":"),s("3306/bml_quartz"),n("span",{class:"token punctuation"},"?"),s("useUnicode=true"),n("span",{class:"token important"},"&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=false"),s(`
      `),n("span",{class:"token key atrule"},"username"),n("span",{class:"token punctuation"},":"),s(` root
      `),n("span",{class:"token key atrule"},"password"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"123456"),s(`
      `),n("span",{class:"token key atrule"},"type"),n("span",{class:"token punctuation"},":"),s(` com.alibaba.druid.pool.DruidDataSource

  `),n("span",{class:"token key atrule"},"quartz"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"properties"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"org"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"quartz"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"scheduler"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token comment"},"# 默认"),s(`
            `),n("span",{class:"token key atrule"},"instanceName"),n("span",{class:"token punctuation"},":"),s(` DemoScheduler
            `),n("span",{class:"token comment"},"# 如果使用集群，instanceId必须唯一，设置成AUTO"),s(`
            `),n("span",{class:"token key atrule"},"instanceId"),n("span",{class:"token punctuation"},":"),s(` AUTO
          `),n("span",{class:"token key atrule"},"jobStore"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token comment"},"# 存储方式使用JobStoreTX 也就是数据库"),s(`
            `),n("span",{class:"token key atrule"},"class"),n("span",{class:"token punctuation"},":"),s(` org.quartz.impl.jdbcjobstore.JobStoreTX
            `),n("span",{class:"token key atrule"},"driverDelegateClass"),n("span",{class:"token punctuation"},":"),s(` org.quartz.impl.jdbcjobstore.StdJDBCDelegate
            `),n("span",{class:"token comment"},"# 表名前缀"),s(`
            `),n("span",{class:"token key atrule"},"tablePrefix"),n("span",{class:"token punctuation"},":"),s(` QRTZ_
            `),n("span",{class:"token comment"},"# 是否使用集群"),s(`
            `),n("span",{class:"token key atrule"},"isClustered"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
            `),n("span",{class:"token key atrule"},"clusterCheckinInterval"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10000"),s(`
            `),n("span",{class:"token key atrule"},"useProperties"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`
            `),n("span",{class:"token key atrule"},"misfireThreshold"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5000"),s(`
          `),n("span",{class:"token key atrule"},"threadPool"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token key atrule"},"class"),n("span",{class:"token punctuation"},":"),s(` org.quartz.simpl.SimpleThreadPool
            `),n("span",{class:"token key atrule"},"threadCount"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"20"),s(`
            `),n("span",{class:"token key atrule"},"threadPriority"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"5"),s(`
            `),n("span",{class:"token key atrule"},"threadsInheritContextClassLoaderOfInitializingThread"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"true"),s(`
    `),n("span",{class:"token key atrule"},"job-store-type"),n("span",{class:"token punctuation"},":"),s(` jdbc
    `),n("span",{class:"token key atrule"},"jdbc"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token comment"},"# 启动项目时是否初始化表"),s(`
      `),n("span",{class:"token key atrule"},"initialize-schema"),n("span",{class:"token punctuation"},":"),s(` never

  `),n("span",{class:"token key atrule"},"mvc"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# 静态资源文件"),s(`
    `),n("span",{class:"token key atrule"},"static-path-pattern"),n("span",{class:"token punctuation"},":"),s(" /static/"),n("span",{class:"token important"},"**"),s(`

  `),n("span",{class:"token key atrule"},"thymeleaf"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"# 禁用缓存"),s(`
    `),n("span",{class:"token key atrule"},"cache"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token boolean important"},"false"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(I,g){const o=l("ExternalLinkIcon"),p=l("CodeTabs");return u(),r("div",null,[m,n("p",null,[n("a",b,[s("官方文档"),c(o)])]),v,n("p",null,[n("a",R,[s("github"),c(o)])]),c(p,{id:"61",data:[{id:"Service"},{id:"mysql"},{id:"application.yml"}],"tab-id":"shell"},{title0:a(({value:e,isActive:t})=>[s("Service")]),title1:a(({value:e,isActive:t})=>[s("mysql")]),title2:a(({value:e,isActive:t})=>[s("application.yml")]),tab0:a(({value:e,isActive:t})=>[E]),tab1:a(({value:e,isActive:t})=>[T]),tab2:a(({value:e,isActive:t})=>[N]),_:1},8,["data"])])}const G=i(d,[["render",_],["__file","quartz.html.vue"]]);export{G as default};
