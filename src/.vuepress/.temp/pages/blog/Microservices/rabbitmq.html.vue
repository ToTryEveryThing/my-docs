<template><div><h1 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h1>
<blockquote>
<p>安装地址 <a href="https://www.cnblogs.com/Aamir-Ye/p/16832374.html" target="_blank" rel="noopener noreferrer">Docker安装RabbitMQ详细步骤 - 逊老头 - 博客园 (cnblogs.com)<ExternalLinkIcon/></a><br>
学习地址 <a href="https://www.bilibili.com/video/BV1dE411K7MG?p=7&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">MQ的引言和不同MQ的特点_哔哩哔哩_bilibili<ExternalLinkIcon/></a><br>
<a href="https://blog.csdn.net/weixin_44467567/article/details/136713078" target="_blank" rel="noopener noreferrer">完美解决 RabbitMQ可视化界面Overview不显示折线图和队列不显示Messages<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="基础部分" tabindex="-1"><a class="header-anchor" href="#基础部分" aria-hidden="true">#</a> 基础部分</h2>
<h3 id="simple简单模式" tabindex="-1"><a class="header-anchor" href="#simple简单模式" aria-hidden="true">#</a> simple简单模式</h3>
<figure><img src="https://cdn.beink.cn/study/yXPg2WxAvPSWeEtqSwEX5.png" alt="study" tabindex="0" loading="lazy"><figcaption>study</figcaption></figure>
<blockquote>
<ol>
<li>消息产生者将消息放入队列</li>
<li>消息的消费者(consumer) 监听(while) 消息队列,如果队列中有消息,就消费掉,消息被拿走后,自动从队列中删除(隐患 消息可能没有被消费者正确处理,已经从队列中消失了,造成消息的丢失)应用场景:聊天(中间有一个过度的服务器;p端,c端)</li>
</ol>
</blockquote>
<h4 id="生产消息" tabindex="-1"><a class="header-anchor" href="#生产消息" aria-hidden="true">#</a> 生产消息</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//生产者</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
<span class="token comment">//        创建MQ的连接工厂对象 </span>
        <span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        设置连接mq主机</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        端口号</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        设置连接哪一个虚拟主机</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">"/ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//         设置用户名和密码</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        获取连接对象</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        获取连接中的通道</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//          通道绑定对应的消息队列</span>
<span class="token comment">//        s：队列名称  b:队列是否持久化  b1:是否独占队列(其他的连接不可用)</span>
<span class="token comment">//        b2: 是否消费结束后自动删除  map:</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//       发布消息</span>
<span class="token comment">//        s： 交换机名称 s1:通道名称 b: MessageProperties.MINIMAL_PERSISTENT_BASIC（ 重启消息也在 )</span>
<span class="token comment">//       最后：内容</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">"hello rabbit"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="消费消息" tabindex="-1"><a class="header-anchor" href="#消费消息" aria-hidden="true">#</a> 消费消息</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
<span class="token comment">//    消费者</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
<span class="token comment">//        创建MQ的连接工厂对象</span>
        <span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        设置连接mq主机</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        端口号</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        设置连接哪一个虚拟主机</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">"/ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//         设置用户名和密码</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        获取连接对象</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        获取连接中的通道</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//          通道绑定对应的消息队列</span>
<span class="token comment">//        s：队列名称  b:队列是否持久化  b1:是否独占队列(其他的连接不可用)</span>
<span class="token comment">//        b2: 是否消费结束后自动删除  map:</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//       消费消息</span>
<span class="token comment">//        s： 交换机名称 s1:开始消息的自动确认机制 最后：消费时的回调接口</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>
          
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"new String (body) = "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span> <span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">//不关闭 为了一直消费信息</span>
       <span class="token comment">// channel.close();</span>
       <span class="token comment">// connection.close();</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现工具类" tabindex="-1"><a class="header-anchor" href="#实现工具类" aria-hidden="true">#</a> 实现工具类</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQConnection</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ConnectionFactory</span> connectionFactory<span class="token punctuation">;</span>
<span class="token comment">//静态代码块  只执行一次</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//        设置连接mq主机</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//        端口号</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">"/ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//        设置连接哪一个虚拟主机</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//         设置用户名和密码</span>
        connectionFactory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"ems"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token comment">//    获取 连接对象方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
<span class="token comment">//        获取连接对象</span>
        <span class="token keyword">return</span> connectionFactory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token comment">//    关闭通道和连接</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeChannelAndConnection</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> con<span class="token punctuation">,</span> <span class="token class-name">Channel</span> channel<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>con<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span>con<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>channel<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span>channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> <span class="token operator">|</span> <span class="token class-name">TimeoutException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任务模型" tabindex="-1"><a class="header-anchor" href="#任务模型" aria-hidden="true">#</a> 任务模型</h3>
<figure><img src="https://cdn.beink.cn/study/WK27DmlxzPPOTI-buJtnM.png" alt="study" tabindex="0" loading="lazy"><figcaption>study</figcaption></figure>
<blockquote>
<p>两个消费者  消费同一个队列  默认会平均分配内容 叫做循环</p>
</blockquote>
<blockquote>
<p>目前要求能者多劳！！！</p>
</blockquote>
<ul>
<li>设置通道一次只能消费一个消息</li>
<li>关闭消息的自动确认，开始手动确认消息</li>
</ul>
<h4 id="consumer" tabindex="-1"><a class="header-anchor" href="#consumer" aria-hidden="true">#</a> Consumer</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> consumer2 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitMQConnection</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">"word"</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//        每次消费一个</span>
        <span class="token comment">// false  关闭自动确定</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">"word"</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@SneakyThrows</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//模拟执行的漫</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"new String (body) = "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span> <span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token doc-comment comment">/**
                 * 参数
                 * - 手动确认的表示
                 * -  false  是否开启多个消息同时确认
                 */</span>
                channel<span class="token punctuation">.</span><span class="token function">basicAck</span><span class="token punctuation">(</span>envelope<span class="token punctuation">.</span><span class="token function">getDeliveryTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="广播" tabindex="-1"><a class="header-anchor" href="#广播" aria-hidden="true">#</a> 广播</h3>
<p><img src="https://cdn.beink.cn/study/image-20240816150952709.png" alt="广播" loading="lazy"><br>
流程如下：</p>
<ul>
<li>有多个消费者</li>
<li>每个<strong>消费者有自己的队列</strong></li>
<li>每个队列都绑定了交换机</li>
<li>生产者只能向交换机发送消息，再有交换机发给队列，生产者无权决定</li>
<li>交换机吧消息发给和自己绑定的队列</li>
<li>队列中的消费者都可以拿到消息</li>
</ul>
<h4 id="生产者" tabindex="-1"><a class="header-anchor" href="#生产者" aria-hidden="true">#</a> 生产者</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> producer <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
<span class="token comment">//        创建连接对象</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitMQConnection</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      将通道声明到交换机 (交换机名称，类型)</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">"one"</span><span class="token punctuation">,</span><span class="token string">"fanout"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">"one"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">"hello world"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="消费者" tabindex="-1"><a class="header-anchor" href="#消费者" aria-hidden="true">#</a> 消费者</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> consumerOne <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitMQConnection</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      通道绑定交换机</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">"one"</span><span class="token punctuation">,</span><span class="token string">"fanout"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      临时队列</span>
        <span class="token class-name">String</span> queue <span class="token operator">=</span> channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      交换机和队列绑定</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">"one"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        消费消息</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"new String(body) = "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由模型" tabindex="-1"><a class="header-anchor" href="#路由模型" aria-hidden="true">#</a> 路由模型</h3>
<h4 id="直连" tabindex="-1"><a class="header-anchor" href="#直连" aria-hidden="true">#</a> 直连</h4>
<figure><img src="https://cdn.beink.cn/study/image-20240816151030389.png" alt="直连路由" tabindex="0" loading="lazy"><figcaption>直连路由</figcaption></figure>
<blockquote>
<p>在fanout的模式下，一条消息，会被订阅的队列消费。但有时我们希望不同的消息被不同的队列消费，</p>
<p>此时就用到了 Direct类型的Exchange</p>
</blockquote>
<ul>
<li>队列与交换机绑定，不再是任意绑定了，而是要指定一个<code v-pre>RoutingKey</code>(路由key)</li>
<li>消息 的发送方在向exchang发送消息时，也必须要指定一个<code v-pre>RoutingKey</code></li>
<li>Exchange在发送消息时，会根据指定的RoutingKey进行判断，只有队列的<code v-pre>RoutingKey</code>与消息的<code v-pre>RoutingKey</code>完全一致，才会收到消息</li>
</ul>
<h4 id="生产者-1" tabindex="-1"><a class="header-anchor" href="#生产者-1" aria-hidden="true">#</a> 生产者</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> producer <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitMQConnection</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span><span class="token string">"direct"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> <span class="token class-name">RoutingKey</span> <span class="token operator">=</span> <span class="token string">"warn"</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span>
                <span class="token class-name">RoutingKey</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>
                <span class="token string">"这是direct发布于的"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="消费者-1" tabindex="-1"><a class="header-anchor" href="#消费者-1" aria-hidden="true">#</a> 消费者</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> consumerOne <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitMQConnection</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      通道绑定交换机</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span><span class="token string">"direct"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      临时队列</span>
        <span class="token class-name">String</span> queue <span class="token operator">=</span> channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      交换机和队列绑定和 RoutingKey</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span><span class="token string">"error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span><span class="token string">"info"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span><span class="token string">"warn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        消费消息</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"error "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> consumerTwo <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitMQConnection</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      通道绑定交换机</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span><span class="token string">"direct"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      临时队列</span>
        <span class="token class-name">String</span> queue <span class="token operator">=</span> channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      交换机和队列绑定和 RoutingKey</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span><span class="token string">"warn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        消费消息</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"info "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动态" tabindex="-1"><a class="header-anchor" href="#动态" aria-hidden="true">#</a> 动态</h4>
<figure><img src="https://cdn.beink.cn/study/image-20240816151041571.png" alt="动态路由" tabindex="0" loading="lazy"><figcaption>动态路由</figcaption></figure>
<blockquote>
<p>Topic类型的<code v-pre>Exchange</code>与<code v-pre>Direct </code>相比，都是可以根据<code v-pre>Routinghey</code>把消息路由到不同的队列。只不过<code v-pre>Topic </code>类型Exchange可以让队列在绑定Routing key的时候使用通配符!这种模型Routingkey一般都是由一个或多个单词组成，多个单词之间以<code v-pre>&quot;.	&quot;</code>分割，例如:<code v-pre>item.insert</code></p>
</blockquote>
<ul>
<li>
<p><code v-pre>*</code> 匹配不多不少恰好一个单词</p>
</li>
<li>
<blockquote>
<p><code v-pre>admin.*</code> --&gt; <code v-pre>admin.hh.abc</code> | <code v-pre>admin.hh</code></p>
</blockquote>
</li>
<li>
<p><code v-pre>#</code> 匹配一个或多个单词</p>
</li>
<li>
<blockquote>
<p><code v-pre>admin.#</code> --&gt; <code v-pre>admin.hh</code></p>
</blockquote>
</li>
</ul>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> producer <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitMQConnection</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">"name_topic"</span><span class="token punctuation">,</span><span class="token string">"topic"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> <span class="token class-name">RoutingKey</span> <span class="token operator">=</span> <span class="token string">"warn.js"</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">"name_direct"</span><span class="token punctuation">,</span>
                <span class="token class-name">RoutingKey</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>
                <span class="token string">"这是direct发布于的"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> consumerOne <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitMQConnection</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      通道绑定交换机</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">"name_topic"</span><span class="token punctuation">,</span><span class="token string">"topic"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      临时队列</span>
        <span class="token class-name">String</span> queue <span class="token operator">=</span> channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      交换机和队列绑定和 RoutingKey</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">"name_topic"</span><span class="token punctuation">,</span><span class="token string">"error.*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//error.xxx  | error.aaa</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">"name_topic"</span><span class="token punctuation">,</span><span class="token string">"info.#"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//info.gag.agsdga | info.gas.gas.g.asg.</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">"name_topic"</span><span class="token punctuation">,</span><span class="token string">"warn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        消费消息</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"error "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-boot-整合" tabindex="-1"><a class="header-anchor" href="#spring-boot-整合" aria-hidden="true">#</a> spring boot 整合</h2>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5672</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> ems
    <span class="token key atrule">password</span><span class="token punctuation">:</span> ems
    <span class="token key atrule">virtual-host</span><span class="token punctuation">:</span> /ems
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> rabbitMQTest <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

<span class="token comment">//    hello</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//  work</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">"work"</span><span class="token punctuation">,</span><span class="token string">"hello work"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token comment">//fanout</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">fanout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">"fanout"</span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token string">"hello fanout"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//    route</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">direct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">"direct"</span><span class="token punctuation">,</span><span class="token string">"warn"</span><span class="token punctuation">,</span><span class="token string">"hello direct"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//    动态路由</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token class-name">Topic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">"topic"</span><span class="token punctuation">,</span><span class="token string">"user.hh.gash"</span><span class="token punctuation">,</span><span class="token string">"hello topic"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简单" tabindex="-1"><a class="header-anchor" href="#简单" aria-hidden="true">#</a> 简单</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span> <span class="token comment">//默认队列持久化 非独占 不是autodelete</span>
<span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQ</span> <span class="token punctuation">{</span>
<span class="token comment">//    第一种模式</span>
    <span class="token annotation punctuation">@RabbitHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">recrive</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> workConsumer <span class="token punctuation">{</span>
  <span class="token comment">//公平消费</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span><span class="token string">"work"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">work1</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message1 = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span><span class="token string">"work"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">work2</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message2 = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="广播-1" tabindex="-1"><a class="header-anchor" href="#广播-1" aria-hidden="true">#</a> 广播</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> fanoutConsumer <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"fanout"</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">"fanout"</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fanout1</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message1 = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"fanout"</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">"fanout"</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fanout2</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message2 = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="静态路由" tabindex="-1"><a class="header-anchor" href="#静态路由" aria-hidden="true">#</a> 静态路由</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> routeConsumer <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"direct"</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">"direct"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"info"</span><span class="token punctuation">,</span><span class="token string">"warn"</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">route1</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message1 = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

 
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"direct"</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">"direct"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"warn"</span><span class="token punctuation">,</span><span class="token string">"message"</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">route2</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message2 = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> topicConsumer <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"topic"</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">"topic"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"user.*"</span><span class="token punctuation">,</span><span class="token string">"user.#"</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">topic1</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message1 = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"topic"</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token string">"topic"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"user.*"</span><span class="token punctuation">,</span><span class="token string">"message"</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">topic2</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"message2 = "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h2>
<p>来自：<a href="https://www.bilibili.com/video/BV1S142197x7?p=101" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1S142197x7?p=101<ExternalLinkIcon/></a></p>
<p>必须尽可能确保MQ消息的可靠性，即：消息应该至少被消费者处理1次<br>
那么问题来了：</p>
<ul>
<li><strong>我们该如何确保MQ消息的可靠性</strong>？</li>
<li><strong>如果真的发送失败，有没有其它的兜底方案？</strong></li>
</ul>
<h3 id="发送者的可靠性" tabindex="-1"><a class="header-anchor" href="#发送者的可靠性" aria-hidden="true">#</a> 发送者的可靠性</h3>
<p>首先，我们一起分析一下消息丢失的可能性有哪些。<br>
消息从发送者发送消息，到消费者处理消息，需要经过的流程是这样的：</p>
<p><img src="@source/../src/.vuepress/public/assets/img/mq/image.png" alt="" loading="lazy"><br>
消息从生产者到消费者的每一步都可能导致消息丢失：</p>
<ul>
<li>发送消息时丢失：
<ul>
<li>生产者发送消息时连接MQ失败</li>
<li>生产者发送消息到达MQ后未找到<code v-pre>Exchange</code></li>
<li>生产者发送消息到达MQ的<code v-pre>Exchange</code>后，未找到合适的<code v-pre>Queue</code></li>
<li>消息到达MQ后，处理消息的进程发生异常</li>
</ul>
</li>
<li>MQ导致消息丢失：
<ul>
<li>消息到达MQ，保存到队列后，尚未消费就突然宕机</li>
</ul>
</li>
<li>消费者处理消息时：
<ul>
<li>消息接收后尚未处理突然宕机</li>
<li>消息接收后处理过程中抛出异常</li>
</ul>
</li>
</ul>
<p>综上，我们要解决消息丢失问题，保证MQ的可靠性，就必须从3个方面入手：</p>
<ul>
<li>确保生产者一定把消息发送到MQ</li>
<li>确保MQ不会将消息弄丢</li>
<li>确保消费者一定要处理消息</li>
</ul>
<p>这一章我们先来看如何确保生产者一定能把消息发送到MQ。</p>
<ol>
<li>生产者重试机制<br>
首先第一种情况，就是生产者发送消息时，出现了网络故障，导致与MQ的连接中断。</li>
</ol>
<p>为了解决这个问题，SpringAMQP提供的消息发送时的重试机制。即：当<code v-pre>RabbitTemplate</code>与MQ连接超时后，多次重试。</p>
<p>修改<code v-pre>publisher</code>模块的<code v-pre>application.yaml</code>文件，添加下面的内容：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">connection-timeout</span><span class="token punctuation">:</span> 1s <span class="token comment"># 设置MQ的连接超时时间</span>
    <span class="token key atrule">template</span><span class="token punctuation">:</span>
      <span class="token key atrule">retry</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 开启超时重试机制</span>
        <span class="token key atrule">initial-interval</span><span class="token punctuation">:</span> 1000ms <span class="token comment"># 失败后的初始等待时间</span>
        <span class="token key atrule">multiplier</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 失败后下次的等待时长倍数，下次等待时长 = initial-interval * multiplier</span>
        <span class="token key atrule">max-attempts</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 最大重试次数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们利用命令停掉RabbitMQ服务：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> stop mq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后测试发送一条消息，会发现会每隔1秒重试1次，总共重试了3次。消息发送的超时重试机制配置成功了！</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><strong>注意</strong>：当网络不稳定的时候，利用重试机制可以有效提高消息发送的成功率。不过SpringAMQP提供的重试机制是<strong>阻塞式</strong>的重试，也就是说多次重试等待的过程中，当前线程是被阻塞的。<br>
如果对于业务性能有要求，建议禁用重试机制。如果一定要使用，请合理配置等待时长和重试次数，当然也可以考虑使用异步线程来执行发送消息的代码。</p>
</div>
<ol start="2">
<li>生产者确认机制<br>
一般情况下，只要生产者与MQ之间的网路连接顺畅，基本不会出现发送消息丢失的情况，因此大多数情况下我们无需考虑这种问题。<br>
不过，在少数情况下，也会出现消息发送到MQ之后丢失的现象，比如：</li>
</ol>
<ul>
<li>MQ内部处理消息的进程发生了异常</li>
<li>生产者发送消息到达MQ后未找到<code v-pre>Exchange</code></li>
<li>生产者发送消息到达MQ的<code v-pre>Exchange</code>后，未找到合适的<code v-pre>Queue</code>，因此无法路由</li>
</ul>
<p>针对上述情况，RabbitMQ提供了生产者消息确认机制，包括<code v-pre>Publisher Confirm</code>和<code v-pre>Publisher Return</code>两种。在开启确认机制的情况下，当生产者发送消息给MQ后，MQ会根据消息处理的情况返回不同的<strong>回执</strong>。<br>
具体如图所示：</p>
<figure><img src="@source/../src/.vuepress/public/assets/img/mq/image01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>总结如下：</p>
<ul>
<li>当消息投递到MQ，但是路由失败时，通过<strong>Publisher Return</strong>返回异常信息，同时返回ack的确认信息，代表投递成功</li>
<li>临时消息投递到了MQ，并且入队成功，返回ACK，告知投递成功</li>
<li>持久消息投递到了MQ，并且入队完成持久化，返回ACK ，告知投递成功</li>
<li>其它情况都会返回NACK，告知投递失败</li>
</ul>
<p>其中<code v-pre>ack</code>和<code v-pre>nack</code>属于<strong>Publisher Confirm</strong>机制，<code v-pre>ack</code>是投递成功；<code v-pre>nack</code>是投递失败。而<code v-pre>return</code>则属于<strong>Publisher Return</strong>机制。<br>
默认两种机制都是关闭状态，需要通过配置文件来开启。</p>
<h3 id="mq的可靠性" tabindex="-1"><a class="header-anchor" href="#mq的可靠性" aria-hidden="true">#</a> MQ的可靠性</h3>
<p>消息到达MQ以后，如果MQ不能及时保存，也会导致消息丢失，所以MQ的可靠性也非常重要。</p>
<h4 id="数据持久化" tabindex="-1"><a class="header-anchor" href="#数据持久化" aria-hidden="true">#</a> 数据持久化</h4>
<figure><img src="@source/../src/.vuepress/public/assets/img/mq/durable.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><strong>说明</strong>：在开启持久化机制以后，如果同时还开启了生产者确认，那么MQ会在消息持久化以后才发送ACK回执，进一步确保消息的可靠性。<br>
不过出于性能考虑，为了减少IO次数，发送到MQ的消息并不是逐条持久化到数据库的，而是每隔一段时间批量持久化。一般间隔在100毫秒左右，这就会导致ACK有一定的延迟，因此建议生产者确认全部采用异步方式。</p>
</div>
<h4 id="lazyqueue" tabindex="-1"><a class="header-anchor" href="#lazyqueue" aria-hidden="true">#</a> LazyQueue</h4>
<p>在默认情况下，RabbitMQ会将接收到的信息保存在内存中以降低消息收发的延迟。但在某些特殊情况下，这会导致消息积压，比如：</p>
<ul>
<li>消费者宕机或出现网络故障</li>
<li>消息发送量激增，超过了消费者处理速度</li>
<li>消费者处理业务发生阻塞</li>
</ul>
<p>一旦出现消息堆积问题，RabbitMQ的内存占用就会越来越高，直到触发内存预警上限。此时RabbitMQ会将内存消息刷到磁盘上，这个行为成为<code v-pre>PageOut</code>. <code v-pre>PageOut</code>会耗费一段时间，并且会阻塞队列进程。因此在这个过程中RabbitMQ不会再处理新的消息，生产者的所有请求都会被阻塞。</p>
<p>为了解决这个问题，从RabbitMQ的3.6.0版本开始，就增加了Lazy Queues的模式，也就是惰性队列。惰性队列的特征如下：</p>
<ul>
<li>接收到消息后直接存入磁盘而非内存</li>
<li>消费者要消费消息时才会从磁盘中读取并加载到内存（也就是懒加载）</li>
<li>支持数百万条的消息存储</li>
</ul>
<p>而在3.12版本之后，LazyQueue已经成为所有队列的默认格式。因此官方推荐升级MQ为3.12版本或者所有队列都设置为LazyQueue模式。</p>
<h5 id="代码配置lazy模式" tabindex="-1"><a class="header-anchor" href="#代码配置lazy模式" aria-hidden="true">#</a> 代码配置Lazy模式</h5>
<p>在利用SpringAMQP声明队列的时候，添加<code v-pre>x-queue-mod=lazy</code>参数也可设置队列为Lazy模式：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">lazyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">QueueBuilder</span>
            <span class="token punctuation">.</span><span class="token function">durable</span><span class="token punctuation">(</span><span class="token string">"lazy.queue"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 开启Lazy模式</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们也可以基于注解来声明队列并设置为Lazy模式：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>
        name <span class="token operator">=</span> <span class="token string">"lazy.queue"</span><span class="token punctuation">,</span>
        durable <span class="token operator">=</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
        arguments <span class="token operator">=</span> <span class="token annotation punctuation">@Argument</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"x-queue-mode"</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">"lazy"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenLazyQueue</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"接收到 lazy.queue的消息：{}"</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消费者的可靠性" tabindex="-1"><a class="header-anchor" href="#消费者的可靠性" aria-hidden="true">#</a> 消费者的可靠性</h3>
<h4 id="消费者确认机制" tabindex="-1"><a class="header-anchor" href="#消费者确认机制" aria-hidden="true">#</a> 消费者确认机制</h4>
<blockquote>
<p>为了确认消费者是否成功处理消息，RabbitMQ提供了消费者确认机制（<strong>Consumer Acknowledgement</strong>）。即：当消费者处理消息结束后，应该向RabbitMQ发送一个回执，告知RabbitMQ自己消息处理状态。回执有三种可选值：</p>
<ul>
<li>ack：成功处理消息，RabbitMQ从队列中删除该消息</li>
<li>nack：消息处理失败，RabbitMQ需要再次投递消息</li>
<li>reject：消息处理失败并拒绝该消息，RabbitMQ从队列中删除该消息</li>
</ul>
<p>一般reject方式用的较少，除非是消息格式有问题，那就是开发问题了。因此大多数情况下我&gt;们需要将消息处理的代码通过<code v-pre>try catch</code>机制捕获，消息处理成功时返回ack，处理失败时返&gt;回nack.</p>
<p>由于消息回执的处理代码比较统一，因此SpringAMQP帮我们实现了消息确认。并允许我们通过&gt;配置文件设置ACK处理方式，有三种模式：</p>
<ul>
<li><code v-pre>none</code>：不处理。即消息投递给消费者后立刻ack，消息会立刻从MQ删除。非常不安全，不建&gt;议使用</li>
<li><code v-pre>manual</code>：手动模式。需要自己在业务代码中调用api，发送<code v-pre>ack</code>或<code v-pre>reject</code>，存在业务入&gt;侵，但更灵活</li>
<li><code v-pre>auto</code>：自动模式。SpringAMQP利用AOP对我们的消息处理逻辑做了环绕增强，当业务正常&gt;执行时则自动返回<code v-pre>ack</code>.  当业务出现异常时，根据异常判断返回不同结果：
<ul>
<li>如果是<strong>业务异常</strong>，会自动返回<code v-pre>nack</code>；</li>
<li>如果是<strong>消息处理或校验异常</strong>，自动返回<code v-pre>reject</code>;</li>
</ul>
</li>
</ul>
</blockquote>
<p>通过下面的配置可以修改SpringAMQP的ACK处理方式：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">listener</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple</span><span class="token punctuation">:</span>
        <span class="token key atrule">acknowledge-mode</span><span class="token punctuation">:</span> none <span class="token comment"># 不做处理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="失败重试机制" tabindex="-1"><a class="header-anchor" href="#失败重试机制" aria-hidden="true">#</a> 失败重试机制</h4>
<p>当消费者出现异常后，消息会不断requeue（重入队）到队列，再重新发送给消费者。如果消费者再次执行依然出错，消息会再次requeue到队列，再次投递，直到消息处理成功为止。<br>
极端情况就是消费者一直无法执行成功，那么消息requeue就会无限循环，导致mq的消息处理飙升，带来不必要的压力：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">listener</span><span class="token punctuation">:</span>
      <span class="token key atrule">simple</span><span class="token punctuation">:</span>
        <span class="token key atrule">retry</span><span class="token punctuation">:</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 开启消费者失败重试</span>
          <span class="token key atrule">initial-interval</span><span class="token punctuation">:</span> 1000ms <span class="token comment"># 初识的失败等待时长为1秒</span>
          <span class="token key atrule">multiplier</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 失败的等待时长倍数，下次等待时长 = multiplier * last-interval</span>
          <span class="token key atrule">max-attempts</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 最大重试次数</span>
          <span class="token key atrule">stateless</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># true无状态；false有状态。如果业务中包含事务，这里改为false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启consumer服务，重复之前的测试。可以发现：</p>
<ul>
<li>消费者在失败后消息没有重新回到MQ无限重新投递，而是在本地重试了3次</li>
<li>本地重试3次以后，抛出了<code v-pre>AmqpRejectAndDontRequeueException</code>异常。查看RabbitMQ控制台，发现消息被删除了，说明最后SpringAMQP返回的是<code v-pre>reject</code></li>
</ul>
<p>结论：</p>
<ul>
<li>开启本地重试时，消息处理过程中抛出异常，不会requeue到队列，而是在消费者本地重试</li>
<li>重试达到最大次数后，Spring会返回reject，消息会被丢弃</li>
</ul>
<h4 id="失败处理策略" tabindex="-1"><a class="header-anchor" href="#失败处理策略" aria-hidden="true">#</a> 失败处理策略</h4>
<p>在之前的测试中，本地测试达到最大重试次数后，消息会被丢弃。这在某些对于消息可靠性要求较高的业务场景下，显然不太合适了。<br>
因此Spring允许我们自定义重试次数耗尽后的消息处理策略，这个策略是由<code v-pre>MessageRecovery</code>接口来定义的，它有3个不同实现：</p>
<ul>
<li><code v-pre>RejectAndDontRequeueRecoverer</code>：重试耗尽后，直接<code v-pre>reject</code>，丢弃消息。默认就是这种方式</li>
<li><code v-pre>ImmediateRequeueMessageRecoverer</code>：重试耗尽后，返回<code v-pre>nack</code>，消息重新入队</li>
<li><code v-pre>RepublishMessageRecoverer</code>：重试耗尽后，将失败消息投递到指定的交换机</li>
</ul>
<p>比较优雅的一种处理方案是<code v-pre>RepublishMessageRecoverer</code>，失败后将消息投递到一个指定的，专门存放异常消息的队列，后续由人工集中处理。</p>
<p>1）在consumer服务中定义处理失败消息的交换机和队列</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">DirectExchange</span> <span class="token function">errorMessageExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DirectExchange</span><span class="token punctuation">(</span><span class="token string">"error.direct"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">errorQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">"error.queue"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">errorBinding</span><span class="token punctuation">(</span><span class="token class-name">Queue</span> errorQueue<span class="token punctuation">,</span> <span class="token class-name">DirectExchange</span> errorMessageExchange<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>errorQueue<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span>errorMessageExchange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）定义一个RepublishMessageRecoverer，关联队列和交换机</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">MessageRecoverer</span> <span class="token function">republishMessageRecoverer</span><span class="token punctuation">(</span><span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RepublishMessageRecoverer</span><span class="token punctuation">(</span>rabbitTemplate<span class="token punctuation">,</span> <span class="token string">"error.direct"</span><span class="token punctuation">,</span> <span class="token string">"error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>consumer<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">Binding</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">BindingBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">DirectExchange</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">Queue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RabbitTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>retry<span class="token punctuation">.</span></span><span class="token class-name">MessageRecoverer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>retry<span class="token punctuation">.</span></span><span class="token class-name">RepublishMessageRecoverer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"spring.rabbitmq.listener.simple.retry.enabled"</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string">"true"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ErrorMessageConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DirectExchange</span> <span class="token function">errorMessageExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DirectExchange</span><span class="token punctuation">(</span><span class="token string">"error.direct"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">errorQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token string">"error.queue"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">errorBinding</span><span class="token punctuation">(</span><span class="token class-name">Queue</span> errorQueue<span class="token punctuation">,</span> <span class="token class-name">DirectExchange</span> errorMessageExchange<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>errorQueue<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span>errorMessageExchange<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MessageRecoverer</span> <span class="token function">republishMessageRecoverer</span><span class="token punctuation">(</span><span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RepublishMessageRecoverer</span><span class="token punctuation">(</span>rabbitTemplate<span class="token punctuation">,</span> <span class="token string">"error.direct"</span><span class="token punctuation">,</span> <span class="token string">"error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="业务幂等性" tabindex="-1"><a class="header-anchor" href="#业务幂等性" aria-hidden="true">#</a> 业务幂等性</h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><strong>幂等</strong>是一个数学概念，用函数表达式来描述是这样的：<code v-pre>f(x) = f(f(x))</code>，例如求绝对值函数。<br>
在程序开发中，则是指同一个业务，执行一次或多次对业务状态的影响是一致的。例如：</p>
<ul>
<li>根据id删除数据</li>
<li>查询数据</li>
<li>新增数据</li>
</ul>
<p>但数据的更新往往不是幂等的，如果重复执行可能造成不一样的后果。比如：</p>
<ul>
<li>取消订单，恢复库存的业务。如果多次恢复就会出现库存重复增加的情况</li>
<li>退款业务。重复退款对商家而言会有经济损失。</li>
</ul>
</div>
<p>因此，我们必须想办法保证消息处理的幂等性。这里给出两种方案：</p>
<blockquote>
<ul>
<li>唯一消息ID</li>
<li>业务状态判断</li>
</ul>
</blockquote>
<hr>
<ul>
<li>唯一消息ID</li>
</ul>
<blockquote>
<ol>
<li>每一条消息都生成一个唯一的id，与消息一起投递给消费者。</li>
<li>消费者接收到消息后处理自己的业务，业务处理成功后将消息ID保存到数据库</li>
<li>如果下次又收到相同消息，去数据库查询判断是否存在，存在则为重复消息放弃处理。</li>
</ol>
</blockquote>
<p>我们该如何给消息添加唯一ID呢？<br>
其实很简单，SpringAMQP的MessageConverter自带了MessageID的功能，我们只要开启这个功能即可。<br>
以Jackson的消息转换器为例：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">MessageConverter</span> <span class="token function">messageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.定义消息转换器</span>
    <span class="token class-name">Jackson2JsonMessageConverter</span> jjmc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2.配置自动创建消息id，用于识别不同消息，也可以在业务中基于ID判断是否是重复消息</span>
    jjmc<span class="token punctuation">.</span><span class="token function">setCreateMessageIds</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> jjmc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>业务判断</li>
</ul>
<p>业务判断就是基于业务本身的逻辑或状态来判断是否是重复的请求或消息，不同的业务场景判断的思路也不一样。<br>
例如我们当前案例中，处理消息的业务逻辑是把订单状态从未支付修改为已支付。因此我们就可以在执行业务时判断订单状态是否是未支付，如果不是则证明订单已经被处理过，无需重复处理。</p>
<p>相比较而言，消息ID的方案需要改造原有的数据库，所以我更推荐使用业务判断的方案。</p>
<p>以支付修改订单的业务为例，我们需要修改<code v-pre>OrderServiceImpl</code>中的<code v-pre>markOrderPaySuccess</code>方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">markOrderPaySuccess</span><span class="token punctuation">(</span><span class="token class-name">Long</span> orderId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.查询订单</span>
        <span class="token class-name">Order</span> old <span class="token operator">=</span> <span class="token function">getById</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.判断订单状态</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>old <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> old<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 订单不存在或者订单状态不是1，放弃处理</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 3.尝试更新订单</span>
        <span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        order<span class="token punctuation">.</span><span class="token function">setPayTime</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">updateById</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码逻辑上符合了幂等判断的需求，但是由于判断和更新是两步动作，因此在极小概率下可能存在线程安全问题。</p>
<p>我们可以合并上述操作为这样：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">markOrderPaySuccess</span><span class="token punctuation">(</span><span class="token class-name">Long</span> orderId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// UPDATE `order` SET status = ? , pay_time = ? WHERE id = ? AND status = 1</span>
    <span class="token function">lambdaUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Order</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Order</span><span class="token operator">::</span><span class="token function">getPayTime</span><span class="token punctuation">,</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">Order</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> orderId<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">Order</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意看，上述代码等同于这样的SQL语句：</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> <span class="token identifier"><span class="token punctuation">`</span>order<span class="token punctuation">`</span></span> <span class="token keyword">SET</span> <span class="token keyword">status</span> <span class="token operator">=</span> ? <span class="token punctuation">,</span> pay_time <span class="token operator">=</span> ? <span class="token keyword">WHERE</span> id <span class="token operator">=</span> ? <span class="token operator">AND</span> <span class="token keyword">status</span> <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们在where条件中除了判断id以外，还加上了status必须为1的条件。如果条件不符（说明订单已支付），则SQL匹配不到数据，根本不会执行。</p>
<h4 id="兜底方案" tabindex="-1"><a class="header-anchor" href="#兜底方案" aria-hidden="true">#</a> 兜底方案</h4>
<p>虽然我们利用各种机制尽可能增加了消息的可靠性，但也不好说能保证消息100%的可靠。万一真的MQ通知失败该怎么办呢？<br>
有没有其它兜底方案，能够确保订单的支付状态一致呢？</p>
<p>其实思想很简单：既然MQ通知不一定发送到交易服务，那么交易服务就必须自己<strong>主动去查询</strong>支付状态。这样即便支付服务的MQ通知失败，我们依然能通过主动查询来保证订单状态的一致。<br>
流程如下：<br>
<img src="https://cdn.nlark.com/yuque/0/2023/jpeg/27967491/1687521150465-25b54b36-b64a-4b2d-90b7-8dff12fb075b.jpeg" alt="" loading="lazy"></p>
<p>图中黄色线圈起来的部分就是MQ通知失败后的兜底处理方案，由交易服务自己主动去查询支付状态。</p>
<p>不过需要注意的是，交易服务并不知道用户会在什么时候支付，如果查询的时机不正确（比如查询的时候用户正在支付中），可能查询到的支付状态也不正确。<br>
那么问题来了，我们到底该在什么时间主动查询支付状态呢？</p>
<p>这个时间是无法确定的，因此，通常我们采取的措施就是利用<strong>定时任务</strong>定期查询，例如每隔20秒就查询一次，并判断支付状态。如果发现订单已经支付，则立刻更新订单状态为已支付即可。<br>
定时任务大家之前学习过，具体的实现这里就不再赘述了。</p>
<p>至此，消息可靠性的问题已经解决了。</p>
<p>综上，支付服务与交易服务之间的订单状态一致性是如何保证的？</p>
<ul>
<li>首先，支付服务会正在用户支付成功以后利用MQ消息通知交易服务，完成订单状态同步。</li>
<li>其次，为了保证MQ消息的可靠性，我们采用了生产者确认机制、消费者确认、消费者失败重试等策略，确保消息投递的可靠性</li>
<li>最后，我们还在交易服务设置了定时任务，定期查询订单支付状态。这样即便MQ通知失败，还可以利用定时任务作为兜底方案，确保订单支付状态的最终一致性。</li>
</ul>
<h3 id="延迟队列" tabindex="-1"><a class="header-anchor" href="#延迟队列" aria-hidden="true">#</a> 延迟队列</h3>
<p><a href="https://blog.csdn.net/coderyjz/article/details/107378451" target="_blank" rel="noopener noreferrer">安装插件以及使用<ExternalLinkIcon/></a><br>
config</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestDelayQueueConfig</span> <span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEAD_EXCHANGE</span> <span class="token operator">=</span> <span class="token string">"delay_exchange"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEAD_QUEUE</span> <span class="token operator">=</span> <span class="token string">"delay_queue"</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEAD_ROUTING</span> <span class="token operator">=</span> <span class="token string">"delay_key"</span><span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CustomExchange</span> <span class="token function">delayExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> args <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        args<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"x-delayed-type"</span><span class="token punctuation">,</span> <span class="token string">"direct"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CustomExchange</span><span class="token punctuation">(</span><span class="token constant">DEAD_EXCHANGE</span><span class="token punctuation">,</span> <span class="token string">"x-delayed-message"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 延迟消息队列
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">delayQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token constant">DEAD_QUEUE</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">deplyBinding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span>
                <span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token function">delayQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token function">delayExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token constant">DEAD_ROUTING</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">noargs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生产者-2" tabindex="-1"><a class="header-anchor" href="#生产者-2" aria-hidden="true">#</a> 生产者</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeplyProducer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">Integer</span> delayTime<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//        MessageProperties messageProperties = new MessageProperties();</span>
<span class="token comment">//        messageProperties.setDelay(delayTime);</span>
<span class="token comment">//        Message message = new Message(msg.getBytes(), messageProperties);</span>
<span class="token comment">//        rabbitTemplate.convertAndSend(DEAD_EXCHANGE, DEAD_ROUTING, message);</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token constant">DEAD_EXCHANGE</span><span class="token punctuation">,</span> <span class="token constant">DEAD_ROUTING</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span>
                message1 <span class="token operator">-></span> <span class="token punctuation">{</span>
                   message1<span class="token punctuation">.</span><span class="token function">getMessageProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDelay</span><span class="token punctuation">(</span>delayTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
                   <span class="token keyword">return</span> message1<span class="token punctuation">;</span><span class="token punctuation">}</span>

                <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="消费者-2" tabindex="-1"><a class="header-anchor" href="#消费者-2" aria-hidden="true">#</a> 消费者</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeplyConsumer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token constant">DEAD_QUEUE</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"收到信息了  msg = "</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


