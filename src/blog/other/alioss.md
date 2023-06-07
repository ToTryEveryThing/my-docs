---
title: 阿里云对象存储
icon: image
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

# Java 上传 aliyun OSS 
[阿里官方文档](https://help.aliyun.com/document_detail/32008.html)
[Java上传文件概述和文件下载](https://help.aliyun.com/document_detail/32013.html?spm=a2c4g.84796.0.0.65b05266v925WX)
---
####  使用RAM访问 更安全
:::danger
主账号AccessKey泄露会威胁您所有资源的安全。建议使用子账号（RAM用户）AccessKey进行操作，可以有效降低AccessKey泄露的风险。
:::

> ① [使用RAM用户访问密钥发起请求](https://help.aliyun.com/document_detail/375246.html)
>  ② "Action": [
        "oss:PutObject",
        "oss:ListObjects",
        "oss:DeleteObject"
      ],放行权限 上传/目录/删除 权限 
      ③ 跨域放行
     
#### 上传图片
```java
public List uploadObject(MultipartFile file) throws IOException {
        // Endpoint以华东1（杭州）为例，其它Region请按实际情况填写。
        String Endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
        String AccessKeyId = "yourAccessKeyId";
        String AccessKeySecret = "yourAccessKeySecret";
        // 填写Bucket名称，例如examplebucket。
        String BucketName = "examplebucket";

        String originalFilename = file.getOriginalFilename();
        OSS  os = new OSSClientBuilder().build(
                Endpoint ,
                AccessKeyId ,
                AccessKeySecret );
        os.putObject(
                BucketName ,
                originalFilename,
                file.getInputStream()
        );
        os.shutdown();
        return getList();

    }
```
#### 目录列表
```java
public List getList(){
       OSS ossClient = new OSSClientBuilder().build(
                 Endpoint
                ,AccessKeyId
                ,AccessKeySecert);

        try {
            // 列举文件。如果不设置keyPrefix，则列举存储空间下的所有文件。如果设置keyPrefix，则列举包含指定前缀的文件。
            ObjectListing objectListing = ossClient.listObjects(Bucket);
            List<OSSObjectSummary> sums = objectListing.getObjectSummaries();
            ArrayList<String> list = new ArrayList<>();
            for (OSSObjectSummary s : sums) {
//                System.out.println("\t" + s.getKey());
                list.add(s.getKey());//返回所有的链接
            }
            return list;
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
        return null;
}
```
#### 删除图片
````java
public List deleteObject(String s){
//s为图片的名字
        OSS ossClient = new OSSClientBuilder().build(
                 Endpoint()
                ,AccessKeyId()
                ,AccessKeySecert());
        try {
            // 删除文件或目录。如果要删除目录，目录必须为空。
            ossClient.deleteObject(Bucket(), s);
            return this.getList();
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
        return null;
    }
````


