---
title: Quartz
icon: grip
order: 1
category:
  - 使用指南
tag:
  - Markdown
---
# Quartz

[官方文档](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/)

>1. `Job` 表示一个工作，要执行的具体内容
>2. `JobDetail` 表示一个具体的可执行的调度程序，Job 是这个可执行程调度程序所要执行的内容，另外 JobDetail 还包含了这个任务调度的方案略。
>3. `Trigger` 代表一个调度参数的配置，什么时候去调。
>4. `Scheduler` 代表一个调度容器，一个调度容器中可以注册多个 JobDetail 和 Trigger。当 Trigger 与 JobDetail 组合，就可以被 Scheduler 容器调度了。

#### 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

#### 步骤

1. ```java
   public class FirstJob implements Job {
       @Override
       public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
           System.out.println("hhhhh");
       }
   }
   ```

2. ```java
   //        定义作业 绑定到FirstJob.class
           JobDetail job = JobBuilder.newJob(FirstJob.class)
                   .withIdentity("first", "fristgroup")
                   .build();
   
   ```

3. ```java
   //        触发器 触发作业立即运行，然后每3秒重复一次
           SimpleTrigger trigger = TriggerBuilder.newTrigger()
                   .withIdentity("first", "first")// name group
                   .startNow()// 立马开始
                   .withSchedule(SimpleScheduleBuilder.simpleSchedule()
                           .withIntervalInSeconds(3) //每3秒
                           .repeatForever())// 循环
                   .build();
   
   ```

4. ```java
   //            创建调度器
               Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
               scheduler.scheduleJob(job,trigger);
   //开始
               scheduler.start();
   //结束
               scheduler.shutdown();
   ```

#### 任务传参

```java
public class FirstJob implements Job {
    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        JobDataMap jobDataMap = context.getJobDetail().getJobDataMap();//Detail
        JobDataMap jobDataMap1 = context.getTrigger().getJobDataMap();//tTrigger
        System.out.println(jobDataMap.get("hello world"));
        System.out.println(jobDataMap1.get("key"));
    }
}


//        定义作业 绑定到FirstJob.class
        JobDataMap jobDataMap = new JobDataMap();
        jobDataMap.put("hello","world");
        JobDetail job = JobBuilder.newJob(FirstJob.class)
                .setJobData(jobDataMap)
                .withIdentity("first", "fristgroup")
                .build();

//        触发器 触发作业立即运行，然后每3秒重复一次
        SimpleTrigger trigger = TriggerBuilder.newTrigger()
                .withIdentity("first", "first")// name group
                .startNow()// 立马开始
                .withSchedule(SimpleScheduleBuilder.simpleSchedule()
                        .withIntervalInSeconds(10) //每3秒
                        .repeatForever())// 循环
                .build();
        trigger.getJobDataMap().put("key","触发器的参数");
```



## 整合spring boot

[github](https://github.com/bianyueying/Quartz)

::: code-tabs#shell

@tab Service

```java
@Configuration
public class QuartzService {

    @Resource
    Scheduler scheduler;

    public void prepareJob(Scheduler scheduler) throws SchedulerException {
        JobDetail jobDetail1 = newJob(OneJob.class)
                .withIdentity("job1", "group1")
                .withDescription("任务一描述：每隔10秒输出用户一的用户名")
                .build();
        JobDetail jobDetail2 = newJob(TwoJob.class)
                .withIdentity("job2", "group1")
                .withDescription("任务二描述: 模拟每天午夜时统计一下总人数")
                .build();

        CronTrigger cronTrigger1 = newTrigger()
                .withIdentity("trigger1", "group1")
                .startNow()
                .withSchedule(
                        CronScheduleBuilder.cronSchedule("0/10 * 10-23 * * ?")
                                .withMisfireHandlingInstructionDoNothing())
                .build();
        CronTrigger cronTrigger2 = newTrigger()
                .withIdentity("trigger2", "group1")
                .startNow()
                .withSchedule(
                        CronScheduleBuilder.cronSchedule("0/30 * 10-23 * * ?")
                                .withMisfireHandlingInstructionDoNothing())
                .build();
        scheduler.scheduleJob(jobDetail1, cronTrigger1);
        scheduler.scheduleJob(jobDetail2, cronTrigger2);
    }

    public void startJob() throws SchedulerException {
        prepareJob(scheduler);
        scheduler.start();
    }


    /**
     * 获取任务列表
     */
    public List<QuartzJobVO> getList() throws SchedulerException {
        List<QuartzJobVO> list = new ArrayList<>();
        // 再获取Scheduler下的所有group
        List<String> triggerGroupNames = scheduler.getTriggerGroupNames();
        for (String groupName : triggerGroupNames) {
            // 组装group的匹配，为了模糊获取所有的triggerKey或者jobKey
            GroupMatcher groupMatcher = GroupMatcher.groupEquals(groupName);
            // 获取所有的triggerKey
            Set<TriggerKey> triggerKeySet = scheduler.getTriggerKeys(groupMatcher);
            for (TriggerKey triggerKey : triggerKeySet) {
                // 通过triggerKey在scheduler中获取trigger对象
                CronTrigger trigger = (CronTrigger) scheduler.getTrigger(triggerKey);
                // 获取trigger拥有的Job
                JobKey jobKey = trigger.getJobKey();
                JobDetailImpl jobDetail = (JobDetailImpl) scheduler.getJobDetail(jobKey);
                // 组装页面需要显示的数据
                QuartzJobVO quartzJobsVO = new QuartzJobVO();
                quartzJobsVO.setJobName(jobDetail.getName());
                quartzJobsVO.setJobGroup(groupName);
                quartzJobsVO.setDescription(jobDetail.getDescription());
                // 获取全类名 也可以获取包名
                Class<? extends Job> jobClass = jobDetail.getJobClass();
                quartzJobsVO.setJobClassName(jobClass.getName());
                quartzJobsVO.setTriggerName(triggerKey.getName());
                quartzJobsVO.setTriggerGroup(triggerKey.getGroup());
                // 任务当前状态
                quartzJobsVO.setTriggerState(scheduler.getTriggerState(triggerKey).toString());
                quartzJobsVO.setCronExpression(trigger.getCronExpression());
                quartzJobsVO.setTimeZone(trigger.getTimeZone().getID());
                list.add(quartzJobsVO);
            }
        }
        return list;
    }

    /**
     * 动态添加一个定时任务 类名一定要写全
     * @param className 根据类名得到类 比如：bml.job.job.OneJob
     */
    public void addJob(String jobName, String triggerName, String description, String className, String cron) throws SchedulerException, ClassNotFoundException {
        JobDetail jobDetail = newJob((Class<? extends Job>) Class.forName(className))
                .withIdentity(jobName, "group1")
                .withDescription(description)
                .build();
        CronTrigger cronTrigger = newTrigger()
                .withIdentity(triggerName, "group1")
                .startNow()
                .withSchedule(
                        CronScheduleBuilder.cronSchedule(cron)
                                .withMisfireHandlingInstructionDoNothing())
                .build();
        scheduler.scheduleJob(jobDetail, cronTrigger);
    }

    /**
     *  shutdown(true)表示等待所有正在执行的任务执行完毕后关闭Scheduler
     *  shutdown(false),即shutdown()表示直接关闭Scheduler
     */
    public void shutdown() throws SchedulerException {
        scheduler.shutdown(true);
    }

    /**
     * 02-暂停某个任务
     */
    public void pauseOneJob(String name, String group) throws SchedulerException {
        JobKey jobKey = new JobKey(name, group);
        JobDetail jobDetail = scheduler.getJobDetail(jobKey);
        if (jobDetail == null) {
            return;
        }
        scheduler.pauseJob(jobKey);
    }

    /**
     * 03-暂停所有任务
     * 区别在于触发失火指令应用行为.
     * 在standby()后调用start()时,任何在待机状态下出现的失火将被忽略.
     * 当您在pauseAll()之后调用resumeAll()时,将会应用在调度程序暂停时出现的所有失火.
     * standby之后就不能再条用了？
     */
    public void pauseAllJob() throws SchedulerException {
        scheduler.pauseAll();
    }

    /**
     * 04-恢复一个任务
     */
    public void resumeOneJob(String name, String group) throws SchedulerException {
        JobKey jobKey = new JobKey(name, group);
        JobDetail jobDetail = scheduler.getJobDetail(jobKey);
        if (jobDetail == null) {
            return;
        }
        scheduler.resumeJob(jobKey);
    }

    /**
     * 05-恢复所有任务
     */
    public void resumeAllJob() throws SchedulerException {
        scheduler.resumeAll();
    }

    /**
     * 06-修改某个任务的执行时间
     */
    public boolean updateJob(String name, String group, String cron) throws SchedulerException {
        Date date = null;
        TriggerKey triggerKey = new TriggerKey(name, group);
        CronTrigger cronTrigger = (CronTrigger) scheduler.getTrigger(triggerKey);
        String oldTime = cronTrigger.getCronExpression();
        if (!oldTime.equalsIgnoreCase(cron)) {
            CronScheduleBuilder cronScheduleBuilder = CronScheduleBuilder.cronSchedule(cron);
            CronTrigger trigger = TriggerBuilder.newTrigger().withIdentity(name, group).withSchedule(cronScheduleBuilder).build();
            date = scheduler.rescheduleJob(triggerKey, trigger);
        }
        return date != null;
    }

    /**
     * 07-删除某个任务 删除后该任务将不再执行
     */
    public void deleteOneJob(String name, String group) throws SchedulerException {
        JobKey jobKey = new JobKey(name, group);
        JobDetail jobDetail = scheduler.getJobDetail(jobKey);
        if (jobDetail == null) {
            return;
        }
        scheduler.deleteJob(jobKey);
    }
}


@tab mysql
```mysql
#
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

```
@tab application.yml
```yml


# mybatis-plus
mybatis-plus:
  # SQL语句输出在控制台
    # 映射文件相关
    mapper-locations: classpath*:bml/business/mapper/xml/*.xml
    type-aliases-package: bml.business.mapper

spring:
  datasource:
    # 业务数据源
    db1:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://127.0.0.1:3306/bml_base?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=false
      username: root
      password: 123456
      type: com.alibaba.druid.pool.DruidDataSource
    # Quartz数据源
    db2:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://127.0.0.1:3306/bml_quartz?useUnicode=true&characterEncoding=utf8&serverTimezone=GMT%2B8&useSSL=false
      username: root
      password: 123456
      type: com.alibaba.druid.pool.DruidDataSource

  quartz:
    properties:
      org:
        quartz:
          scheduler:
            # 默认
            instanceName: DemoScheduler
            # 如果使用集群，instanceId必须唯一，设置成AUTO
            instanceId: AUTO
          jobStore:
            # 存储方式使用JobStoreTX 也就是数据库
            class: org.quartz.impl.jdbcjobstore.JobStoreTX
            driverDelegateClass: org.quartz.impl.jdbcjobstore.StdJDBCDelegate
            # 表名前缀
            tablePrefix: QRTZ_
            # 是否使用集群
            isClustered: true
            clusterCheckinInterval: 10000
            useProperties: false
            misfireThreshold: 5000
          threadPool:
            class: org.quartz.simpl.SimpleThreadPool
            threadCount: 20
            threadPriority: 5
            threadsInheritContextClassLoaderOfInitializingThread: true
    job-store-type: jdbc
    jdbc:
      # 启动项目时是否初始化表
      initialize-schema: never

  mvc:
    # 静态资源文件
    static-path-pattern: /static/**

  thymeleaf:
    # 禁用缓存
    cache: false

```

:::
