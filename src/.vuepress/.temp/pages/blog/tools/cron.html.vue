<template><div><h1 id="cron" tabindex="-1"><a class="header-anchor" href="#cron"><span>cron</span></a></h1>
<p><a href="https://crontab.guru/" target="_blank" rel="noopener noreferrer">在线测试</a></p>
<blockquote>
<p>Cron适用于周期性执行、日常维护、在某时刻需要完成的单次任务等场景。Cron表达式是一个具有时间含义的字符串，字符串以5个空格隔开，分为6个域，格式为<code v-pre>X X X X X X</code>。其中<code v-pre>X</code>是一个域的占位符。单个域有多个取值时，使用半角逗号<code v-pre>,</code>隔开取值。每个域可以是确定的取值，也可以是具有逻辑意义的特殊字符。</p>
</blockquote>
<p>秒 分 时 日 月 周</p>
<h2 id="取值范围" tabindex="-1"><a class="header-anchor" href="#取值范围"><span>取值范围</span></a></h2>
<table>
<thead>
<tr>
<th>域</th>
<th>是否必需</th>
<th>取值范围</th>
<th>特殊字符</th>
</tr>
</thead>
<tbody>
<tr>
<td>秒</td>
<td>是</td>
<td>[0, 59]</td>
<td>不支持</td>
</tr>
<tr>
<td>分钟</td>
<td>是</td>
<td>[0, 59]</td>
<td>对, 和/有限支持（如果使用逗号，数字之间的间隔必须大于等于30分钟；如果使用/ ，/后面的数字必须大于等于30）。</td>
</tr>
<tr>
<td>小时</td>
<td>是</td>
<td>[0, 23]</td>
<td>* , - /</td>
</tr>
<tr>
<td>日期</td>
<td>是</td>
<td>[1, 31]</td>
<td>* , - / ? L</td>
</tr>
<tr>
<td>月份</td>
<td>是</td>
<td>[1, 12]或[JAN, DEC]</td>
<td>* , - /</td>
</tr>
<tr>
<td>星期</td>
<td>是</td>
<td>[1, 7]或[SUN, SAT]若您使用[1, 7]表达方式，<code v-pre>1</code>代表星期天，<code v-pre>2</code>代表星期一。</td>
<td>* , ?</td>
</tr>
</tbody>
</table>
<h2 id="连接符" tabindex="-1"><a class="header-anchor" href="#连接符"><span>连接符</span></a></h2>
<ul>
<li>【*】：每的意思。在不同的字段上，就代表每秒，每分，每小时等。</li>
<li>【-】：指定值的范围。比如[1-10]，在秒字段里就是每分钟的第1到10秒，在分就是每小时的第1到10分钟，以此类推。</li>
<li>【,】：指定某几个值。比如[2,4,5]，在秒字段里就是每分钟的第2，第4，第5秒，以此类推。</li>
<li>【/】：指定值的起始和增加幅度。比如[3/5]，在秒字段就是每分钟的第3秒开始，每隔5秒生效一次，也就是第3秒、8秒、13秒，以此类推。</li>
<li>【?】：仅用于【日】和【周】字段。因为在指定某日和周几的时候，这两个值实际上是冲突的，所以需要用【?】标识不生效的字段。比如【0 1 * * * ?】就代表每年每月每日每小时的1分0秒触发任务。这里的周就没有效果了。</li>
</ul>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<table>
<thead>
<tr>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>0 15 10 ? * *</code></td>
<td>每天上午10:15执行任务</td>
</tr>
<tr>
<td><code v-pre>0 15 10 * * ?</code></td>
<td>每天上午10:15执行任务</td>
</tr>
<tr>
<td><code v-pre>0 0 12 * * ?</code></td>
<td>每天中午12:00执行任务</td>
</tr>
<tr>
<td><code v-pre>0 0 10,14,16 * * ?</code></td>
<td>每天上午10:00点、下午14:00以及下午16:00执行任务</td>
</tr>
<tr>
<td><code v-pre>0 0/40 9-17 * * ?</code></td>
<td>每天上午09:00到下午17:00时间段内每隔40分钟执行任务</td>
</tr>
<tr>
<td><code v-pre>0 0 12 ? * WED</code></td>
<td>每个星期三中午12:00执行任务</td>
</tr>
<tr>
<td><code v-pre>0 15 10 15 * ?</code></td>
<td>每月15日上午10:15执行任务</td>
</tr>
<tr>
<td><code v-pre>0 15 10 L * ?</code></td>
<td>每月最后一日上午10:15执行任务</td>
</tr>
<tr>
<td><code v-pre>0 0,30 14 ? 3 WED</code></td>
<td>每年3月的每个星期三下午14:00和14:30各执行一次任务</td>
</tr>
</tbody>
</table>
</div></template>


