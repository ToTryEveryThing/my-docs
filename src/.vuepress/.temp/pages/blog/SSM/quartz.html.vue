<template><div><h1 id="quartz" tabindex="-1"><a class="header-anchor" href="#quartz" aria-hidden="true">#</a> Quartz</h1>
<p><a href="https://www.quartz-scheduler.org/documentation/quartz-2.3.0/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<blockquote>
<ol>
<li><code v-pre>Job</code> 表示一个工作，要执行的具体内容</li>
<li><code v-pre>JobDetail</code> 表示一个具体的可执行的调度程序，Job 是这个可执行程调度程序所要执行的内容，另外 JobDetail 还包含了这个任务调度的方案略。</li>
<li><code v-pre>Trigger</code> 代表一个调度参数的配置，什么时候去调。</li>
<li><code v-pre>Scheduler</code> 代表一个调度容器，一个调度容器中可以注册多个 JobDetail 和 Trigger。当 Trigger 与 JobDetail 组合，就可以被 Scheduler 容器调度了。</li>
</ol>
</blockquote>
<h4 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h4>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-quartz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h4>
<ol>
<li>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstJob</span> <span class="token keyword">implements</span> <span class="token class-name">Job</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> jobExecutionContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JobExecutionException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"hhhhh"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//        定义作业 绑定到FirstJob.class</span>
        <span class="token class-name">JobDetail</span> job <span class="token operator">=</span> <span class="token class-name">JobBuilder</span><span class="token punctuation">.</span><span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">FirstJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">"first"</span><span class="token punctuation">,</span> <span class="token string">"fristgroup"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//        触发器 触发作业立即运行，然后每3秒重复一次</span>
        <span class="token class-name">SimpleTrigger</span> trigger <span class="token operator">=</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">"first"</span><span class="token punctuation">,</span> <span class="token string">"first"</span><span class="token punctuation">)</span><span class="token comment">// name group</span>
                <span class="token punctuation">.</span><span class="token function">startNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 立马开始</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span><span class="token class-name">SimpleScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">simpleSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withIntervalInSeconds</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//每3秒</span>
                        <span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// 循环</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//            创建调度器</span>
            <span class="token class-name">Scheduler</span> scheduler <span class="token operator">=</span> <span class="token class-name">StdSchedulerFactory</span><span class="token punctuation">.</span><span class="token function">getDefaultScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            scheduler<span class="token punctuation">.</span><span class="token function">scheduleJob</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span>trigger<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//开始</span>
            scheduler<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//结束</span>
            scheduler<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="任务传参" tabindex="-1"><a class="header-anchor" href="#任务传参" aria-hidden="true">#</a> 任务传参</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FirstJob</span> <span class="token keyword">implements</span> <span class="token class-name">Job</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JobExecutionException</span> <span class="token punctuation">{</span>
        <span class="token class-name">JobDataMap</span> jobDataMap <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getJobDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getJobDataMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Detail</span>
        <span class="token class-name">JobDataMap</span> jobDataMap1 <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getJobDataMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//tTrigger</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>jobDataMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>jobDataMap1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//        定义作业 绑定到FirstJob.class</span>
        <span class="token class-name">JobDataMap</span> jobDataMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JobDataMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jobDataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JobDetail</span> job <span class="token operator">=</span> <span class="token class-name">JobBuilder</span><span class="token punctuation">.</span><span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">FirstJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setJobData</span><span class="token punctuation">(</span>jobDataMap<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">"first"</span><span class="token punctuation">,</span> <span class="token string">"fristgroup"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        触发器 触发作业立即运行，然后每3秒重复一次</span>
        <span class="token class-name">SimpleTrigger</span> trigger <span class="token operator">=</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">"first"</span><span class="token punctuation">,</span> <span class="token string">"first"</span><span class="token punctuation">)</span><span class="token comment">// name group</span>
                <span class="token punctuation">.</span><span class="token function">startNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 立马开始</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span><span class="token class-name">SimpleScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">simpleSchedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">withIntervalInSeconds</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//每3秒</span>
                        <span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">// 循环</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trigger<span class="token punctuation">.</span><span class="token function">getJobDataMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">,</span><span class="token string">"触发器的参数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整合spring-boot" tabindex="-1"><a class="header-anchor" href="#整合spring-boot" aria-hidden="true">#</a> 整合spring boot</h2>
<p><a href="https://github.com/bianyueying/Quartz" target="_blank" rel="noopener noreferrer">github<ExternalLinkIcon/></a></p>
<CodeTabs id="61" :data='[{"id":"Service"},{"id":"mysql"},{"id":"application.yml"}]' tab-id="shell">
<template #title0="{ value, isActive }">Service</template>
<template #title1="{ value, isActive }">mysql</template>
<template #title2="{ value, isActive }">application.yml</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QuartzService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">Scheduler</span> scheduler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepareJob</span><span class="token punctuation">(</span><span class="token class-name">Scheduler</span> scheduler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        <span class="token class-name">JobDetail</span> jobDetail1 <span class="token operator">=</span> <span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">OneJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">"job1"</span><span class="token punctuation">,</span> <span class="token string">"group1"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withDescription</span><span class="token punctuation">(</span><span class="token string">"任务一描述：每隔10秒输出用户一的用户名"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JobDetail</span> jobDetail2 <span class="token operator">=</span> <span class="token function">newJob</span><span class="token punctuation">(</span><span class="token class-name">TwoJob</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">"job2"</span><span class="token punctuation">,</span> <span class="token string">"group1"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withDescription</span><span class="token punctuation">(</span><span class="token string">"任务二描述: 模拟每天午夜时统计一下总人数"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">CronTrigger</span> cronTrigger1 <span class="token operator">=</span> <span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">"trigger1"</span><span class="token punctuation">,</span> <span class="token string">"group1"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">startNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>
                        <span class="token class-name">CronScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">cronSchedule</span><span class="token punctuation">(</span><span class="token string">"0/10 * 10-23 * * ?"</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">withMisfireHandlingInstructionDoNothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CronTrigger</span> cronTrigger2 <span class="token operator">=</span> <span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span><span class="token string">"trigger2"</span><span class="token punctuation">,</span> <span class="token string">"group1"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">startNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>
                        <span class="token class-name">CronScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">cronSchedule</span><span class="token punctuation">(</span><span class="token string">"0/30 * 10-23 * * ?"</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">withMisfireHandlingInstructionDoNothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduler<span class="token punctuation">.</span><span class="token function">scheduleJob</span><span class="token punctuation">(</span>jobDetail1<span class="token punctuation">,</span> cronTrigger1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduler<span class="token punctuation">.</span><span class="token function">scheduleJob</span><span class="token punctuation">(</span>jobDetail2<span class="token punctuation">,</span> cronTrigger2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        <span class="token function">prepareJob</span><span class="token punctuation">(</span>scheduler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduler<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 获取任务列表
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">QuartzJobVO</span><span class="token punctuation">></span></span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">QuartzJobVO</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 再获取Scheduler下的所有group</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> triggerGroupNames <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">getTriggerGroupNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> groupName <span class="token operator">:</span> triggerGroupNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 组装group的匹配，为了模糊获取所有的triggerKey或者jobKey</span>
            <span class="token class-name">GroupMatcher</span> groupMatcher <span class="token operator">=</span> <span class="token class-name">GroupMatcher</span><span class="token punctuation">.</span><span class="token function">groupEquals</span><span class="token punctuation">(</span>groupName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取所有的triggerKey</span>
            <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TriggerKey</span><span class="token punctuation">></span></span> triggerKeySet <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">getTriggerKeys</span><span class="token punctuation">(</span>groupMatcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TriggerKey</span> triggerKey <span class="token operator">:</span> triggerKeySet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 通过triggerKey在scheduler中获取trigger对象</span>
                <span class="token class-name">CronTrigger</span> trigger <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">CronTrigger</span><span class="token punctuation">)</span> scheduler<span class="token punctuation">.</span><span class="token function">getTrigger</span><span class="token punctuation">(</span>triggerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 获取trigger拥有的Job</span>
                <span class="token class-name">JobKey</span> jobKey <span class="token operator">=</span> trigger<span class="token punctuation">.</span><span class="token function">getJobKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">JobDetailImpl</span> jobDetail <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">JobDetailImpl</span><span class="token punctuation">)</span> scheduler<span class="token punctuation">.</span><span class="token function">getJobDetail</span><span class="token punctuation">(</span>jobKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 组装页面需要显示的数据</span>
                <span class="token class-name">QuartzJobVO</span> quartzJobsVO <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QuartzJobVO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setJobName</span><span class="token punctuation">(</span>jobDetail<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setJobGroup</span><span class="token punctuation">(</span>groupName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span>jobDetail<span class="token punctuation">.</span><span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 获取全类名 也可以获取包名</span>
                <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Job</span><span class="token punctuation">></span></span> jobClass <span class="token operator">=</span> jobDetail<span class="token punctuation">.</span><span class="token function">getJobClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setJobClassName</span><span class="token punctuation">(</span>jobClass<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setTriggerName</span><span class="token punctuation">(</span>triggerKey<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setTriggerGroup</span><span class="token punctuation">(</span>triggerKey<span class="token punctuation">.</span><span class="token function">getGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 任务当前状态</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setTriggerState</span><span class="token punctuation">(</span>scheduler<span class="token punctuation">.</span><span class="token function">getTriggerState</span><span class="token punctuation">(</span>triggerKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setCronExpression</span><span class="token punctuation">(</span>trigger<span class="token punctuation">.</span><span class="token function">getCronExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                quartzJobsVO<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span>trigger<span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>quartzJobsVO<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 动态添加一个定时任务 类名一定要写全
     * <span class="token keyword">@param</span> <span class="token parameter">className</span> 根据类名得到类 比如：bml.job.job.OneJob
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addJob</span><span class="token punctuation">(</span><span class="token class-name">String</span> jobName<span class="token punctuation">,</span> <span class="token class-name">String</span> triggerName<span class="token punctuation">,</span> <span class="token class-name">String</span> description<span class="token punctuation">,</span> <span class="token class-name">String</span> className<span class="token punctuation">,</span> <span class="token class-name">String</span> cron<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">JobDetail</span> jobDetail <span class="token operator">=</span> <span class="token function">newJob</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Job</span><span class="token punctuation">></span></span><span class="token punctuation">)</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span>jobName<span class="token punctuation">,</span> <span class="token string">"group1"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withDescription</span><span class="token punctuation">(</span>description<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CronTrigger</span> cronTrigger <span class="token operator">=</span> <span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span>triggerName<span class="token punctuation">,</span> <span class="token string">"group1"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">startNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>
                        <span class="token class-name">CronScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">cronSchedule</span><span class="token punctuation">(</span>cron<span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">withMisfireHandlingInstructionDoNothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduler<span class="token punctuation">.</span><span class="token function">scheduleJob</span><span class="token punctuation">(</span>jobDetail<span class="token punctuation">,</span> cronTrigger<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *  shutdown(true)表示等待所有正在执行的任务执行完毕后关闭Scheduler
     *  shutdown(false),即shutdown()表示直接关闭Scheduler
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        scheduler<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 02-暂停某个任务
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pauseOneJob</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> group<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        <span class="token class-name">JobKey</span> jobKey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JobKey</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JobDetail</span> jobDetail <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">getJobDetail</span><span class="token punctuation">(</span>jobKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>jobDetail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        scheduler<span class="token punctuation">.</span><span class="token function">pauseJob</span><span class="token punctuation">(</span>jobKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 03-暂停所有任务
     * 区别在于触发失火指令应用行为.
     * 在standby()后调用start()时,任何在待机状态下出现的失火将被忽略.
     * 当您在pauseAll()之后调用resumeAll()时,将会应用在调度程序暂停时出现的所有失火.
     * standby之后就不能再条用了？
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pauseAllJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        scheduler<span class="token punctuation">.</span><span class="token function">pauseAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 04-恢复一个任务
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resumeOneJob</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> group<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        <span class="token class-name">JobKey</span> jobKey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JobKey</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JobDetail</span> jobDetail <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">getJobDetail</span><span class="token punctuation">(</span>jobKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>jobDetail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        scheduler<span class="token punctuation">.</span><span class="token function">resumeJob</span><span class="token punctuation">(</span>jobKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 05-恢复所有任务
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resumeAllJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        scheduler<span class="token punctuation">.</span><span class="token function">resumeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 06-修改某个任务的执行时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">updateJob</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> group<span class="token punctuation">,</span> <span class="token class-name">String</span> cron<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">TriggerKey</span> triggerKey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TriggerKey</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CronTrigger</span> cronTrigger <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">CronTrigger</span><span class="token punctuation">)</span> scheduler<span class="token punctuation">.</span><span class="token function">getTrigger</span><span class="token punctuation">(</span>triggerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> oldTime <span class="token operator">=</span> cronTrigger<span class="token punctuation">.</span><span class="token function">getCronExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>oldTime<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>cron<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">CronScheduleBuilder</span> cronScheduleBuilder <span class="token operator">=</span> <span class="token class-name">CronScheduleBuilder</span><span class="token punctuation">.</span><span class="token function">cronSchedule</span><span class="token punctuation">(</span>cron<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">CronTrigger</span> trigger <span class="token operator">=</span> <span class="token class-name">TriggerBuilder</span><span class="token punctuation">.</span><span class="token function">newTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withIdentity</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withSchedule</span><span class="token punctuation">(</span>cronScheduleBuilder<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            date <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">rescheduleJob</span><span class="token punctuation">(</span>triggerKey<span class="token punctuation">,</span> trigger<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> date <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 07-删除某个任务 删除后该任务将不再执行
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteOneJob</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> group<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SchedulerException</span> <span class="token punctuation">{</span>
        <span class="token class-name">JobKey</span> jobKey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JobKey</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JobDetail</span> jobDetail <span class="token operator">=</span> scheduler<span class="token punctuation">.</span><span class="token function">getJobDetail</span><span class="token punctuation">(</span>jobKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>jobDetail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        scheduler<span class="token punctuation">.</span><span class="token function">deleteJob</span><span class="token punctuation">(</span>jobKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>#
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>

<span class="token comment"># mybatis-plus</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token comment"># SQL语句输出在控制台</span>
    <span class="token comment"># 映射文件相关</span>
    <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token important">*:bml/business/mapper/xml/*.xml</span>
    <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> bml.business.mapper

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token comment"># 业务数据源</span>
    <span class="token key atrule">db1</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
      <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/bml_base<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8&amp;serverTimezone=GMT%2B8&amp;useSSL=false</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> root
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token comment"># Quartz数据源</span>
    <span class="token key atrule">db2</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
      <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/bml_quartz<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8&amp;serverTimezone=GMT%2B8&amp;useSSL=false</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> root
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource

  <span class="token key atrule">quartz</span><span class="token punctuation">:</span>
    <span class="token key atrule">properties</span><span class="token punctuation">:</span>
      <span class="token key atrule">org</span><span class="token punctuation">:</span>
        <span class="token key atrule">quartz</span><span class="token punctuation">:</span>
          <span class="token key atrule">scheduler</span><span class="token punctuation">:</span>
            <span class="token comment"># 默认</span>
            <span class="token key atrule">instanceName</span><span class="token punctuation">:</span> DemoScheduler
            <span class="token comment"># 如果使用集群，instanceId必须唯一，设置成AUTO</span>
            <span class="token key atrule">instanceId</span><span class="token punctuation">:</span> AUTO
          <span class="token key atrule">jobStore</span><span class="token punctuation">:</span>
            <span class="token comment"># 存储方式使用JobStoreTX 也就是数据库</span>
            <span class="token key atrule">class</span><span class="token punctuation">:</span> org.quartz.impl.jdbcjobstore.JobStoreTX
            <span class="token key atrule">driverDelegateClass</span><span class="token punctuation">:</span> org.quartz.impl.jdbcjobstore.StdJDBCDelegate
            <span class="token comment"># 表名前缀</span>
            <span class="token key atrule">tablePrefix</span><span class="token punctuation">:</span> QRTZ_
            <span class="token comment"># 是否使用集群</span>
            <span class="token key atrule">isClustered</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">clusterCheckinInterval</span><span class="token punctuation">:</span> <span class="token number">10000</span>
            <span class="token key atrule">useProperties</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
            <span class="token key atrule">misfireThreshold</span><span class="token punctuation">:</span> <span class="token number">5000</span>
          <span class="token key atrule">threadPool</span><span class="token punctuation">:</span>
            <span class="token key atrule">class</span><span class="token punctuation">:</span> org.quartz.simpl.SimpleThreadPool
            <span class="token key atrule">threadCount</span><span class="token punctuation">:</span> <span class="token number">20</span>
            <span class="token key atrule">threadPriority</span><span class="token punctuation">:</span> <span class="token number">5</span>
            <span class="token key atrule">threadsInheritContextClassLoaderOfInitializingThread</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">job-store-type</span><span class="token punctuation">:</span> jdbc
    <span class="token key atrule">jdbc</span><span class="token punctuation">:</span>
      <span class="token comment"># 启动项目时是否初始化表</span>
      <span class="token key atrule">initialize-schema</span><span class="token punctuation">:</span> never

  <span class="token key atrule">mvc</span><span class="token punctuation">:</span>
    <span class="token comment"># 静态资源文件</span>
    <span class="token key atrule">static-path-pattern</span><span class="token punctuation">:</span> /static/<span class="token important">**</span>

  <span class="token key atrule">thymeleaf</span><span class="token punctuation">:</span>
    <span class="token comment"># 禁用缓存</span>
    <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>


