---
title: 导出pdf
icon: catppuccin:pdf
order: 2
description: java使用itext5导出pdf
category:
  - work
tag:
  - pdf 
---

# 使用itext5导出pdf

[IText7使用（超详解） - 明小子@ - 博客园 (cnblogs.com)](https://www.cnblogs.com/hm201402/p/17803521.html)

[关于HTML页面转pdf的一点经验_使用 htmlworker 解析html为pdf-CSDN博客](https://blog.csdn.net/ZF_On_The_Way/article/details/134412191)

[itext5 html转pdf-CSDN博客](https://blog.csdn.net/cjqcsdn/article/details/105608028)

## 依赖
```xml
    <!--        生成pdf-->
    <dependency>
        <groupId>com.itextpdf</groupId>
        <artifactId>itextpdf</artifactId>
        <version>5.5.13</version>
    </dependency>
    <!--        字体-->
    <dependency>
        <groupId>com.itextpdf</groupId>
        <artifactId>itext-asian</artifactId>
        <version>5.2.0</version>
    </dependency>
    <!--        工具类-->
    <dependency>
        <groupId>com.itextpdf.tool</groupId>
        <artifactId>xmlworker</artifactId>
        <version>5.5.13</version>
    </dependency>
```
## 配置中文字体

```java
/**
 * @author mishu
 * @since 2024/7/17
 * @description 解决pdf文件中文不显示的问题
 */
@Slf4j
public class AsianFontProvider extends XMLWorkerFontProvider {

    public Font getFont(final String fontname, final String encoding,
                        final boolean embedded, final float size, final int style,
                        final BaseColor color) {
        BaseFont bf = null;
        try {
            bf = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
        } catch (Exception e) {
            log.error("生成pdf文件，添加字体失败", e);
        }
        Font font = new Font(bf, size, style, color);
        font.setColor(color);
        return font;
    }
}
```
## 初始化

```java
@GetMapping("/downloadPdf")
public void downloadPdf(HttpServletResponse response) throws IOException, DocumentException {
    // 设置响应的内容类型和头部，建议使用PDF的MIME类型
    response.setContentType("application/pdf");
    response.setHeader("Content-Disposition", "attachment; filename=hello-pdf.pdf");

    Document document = new Document();
    PdfWriter writer = PdfWriter.getInstance(document, response.getOutputStream());
    document.open();

    // 使用itext-asian库中的中文字体
    BaseFont bf = BaseFont.createFont("STSong-Light", "UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
    Font font = new Font(bf, 12, Font.NORMAL);

    //添加要写入的内容
    //。。。。。。        

    document.close();
    writer.close();
}
```
### Paragraph

```java
    // 创建一个段落并添加到文档中
    Paragraph paragraph = new Paragraph("段落", font);
    //居中
    paragraph.setAlignment(Paragraph.ALIGN_CENTER);
    // 添加到doc中      
    document.add(paragraph);
    // 其他
    // 。。。
```
### Chunk

> 可以用来设置段落的某些文本样式

```java
// 创建段落
    Paragraph paragraph = new Paragraph();

// 创建一个普通的Chunk
    Chunk simpleChunk = new Chunk("这是普通的文本。", font);
    paragraph.add(simpleChunk);

// 创建一个带超链接的Chunk
    Chunk linkChunk = new Chunk("点击这里访问iText官网", new Font(bf, 12, Font.NORMAL, BaseColor.RED));
    linkChunk.setAnchor("http://itextpdf.com/");
    paragraph.add(linkChunk);

// 创建带颜色的Chunk
    Chunk coloredChunk = new Chunk("这是彩色的文本。", new Font(bf, 12, Font.NORMAL, BaseColor.RED));
    paragraph.add(coloredChunk);

// 创建带下划线的Chunk
    Chunk underlineChunk = new Chunk("这是带下划线的文本。", new Font(bf, 12, Font.UNDERLINE, BaseColor.BLACK));
    paragraph.add(underlineChunk);

// 创建带删除线的Chunk
    Chunk strikeChunk = new Chunk("这是带删除线的文本。", new Font(bf, 12, Font.STRIKETHRU, BaseColor.BLACK));
    paragraph.add(strikeChunk);

// 创建斜体Chunk
    Chunk italicChunk = new Chunk("这是斜体文本。", new Font(bf, 12, Font.ITALIC, BaseColor.BLACK));
    paragraph.add(italicChunk);

// 创建粗体Chunk
    Chunk boldChunk = new Chunk("这是粗体文本。", new Font(bf, 12, Font.BOLD, BaseColor.BLACK));
    paragraph.add(boldChunk);

// 创建上标Chunk
    Chunk superscriptChunk = new Chunk("2", new Font(bf, 12, Font.NORMAL, BaseColor.BLACK));
    superscriptChunk.setTextRise(5); // 设置文本上移
    paragraph.add(superscriptChunk);

// 创建下标Chunk
    Chunk subscriptChunk = new Chunk("1", new Font(bf, 12, Font.NORMAL, BaseColor.BLACK));
    subscriptChunk.setTextRise(-5); // 设置文本下移
    paragraph.add(subscriptChunk);

// 将段落添加到文档中
    document.add(paragraph);
```
### Table
```java
// 创建PdfPTable对象，这里创建一个3列的表格
    PdfPTable table = new PdfPTable(3);


// 设置表格宽度百分比
    table.setWidthPercentage(100);

// 设置表格的列宽比例
    float[] columnWidths = {1f, 2f, 1f};
    table.setWidths(columnWidths);

// 添加单元格到表格
    PdfPCell cell;


// 添加一行数据
    cell = new PdfPCell(new Phrase("列1",font));
    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
    cell.setBorder(PdfPCell.NO_BORDER); // 设置单元格内部没有边框
    table.addCell(cell);
    cell = new PdfPCell(new Phrase("列2",font));
    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
    cell.setBorder(PdfPCell.NO_BORDER); // 设置单元格内部没有边框
    table.addCell(cell);
    cell = new PdfPCell(new Phrase("列3",font));
    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
    cell.setBorder(PdfPCell.NO_BORDER); // 设置单元格内部没有边框
    //        行高
    cell.setFixedHeight(30);
    table.addCell(cell);


// 继续添加更多行数据
    for (int i = 0; i < 5; i++) {
        table.addCell(new Paragraph("行 " + (i + 2) + " 列 1",font));
        table.addCell(new Paragraph("行 " + (i + 2) + " 列 2",font));
        table.addCell(new Paragraph("行 " + (i + 2) + " 列 3",font));
    }

// 设置表格的样式
    table.setSpacingBefore(10); // 设置表格前间距
    table.setSpacingAfter(5); // 设置表格后间距

// 将表格添加到文档中
    document.add(table);
```
### Image 
> 图片
```java
    String url = "";
    Image image = Image.getInstance(url);
    //位置
    image.setAbsolutePosition(380f,460f);
    //设置图片相对大小
    image.scaleAbsolute(90f, 120f);
    //放入图片带文档中
    document.add(image);
```

### Rectangle
> 绘制图案
```java
    Rectangle rect = new Rectangle(100, 100, 200, 200);
    PdfContentByte canvas = writer.getDirectContent();
    canvas.saveState();
    canvas.setColorStroke(BaseColor.BLACK);
    canvas.rectangle(rect.getLeft(), rect.getBottom(), rect.getRight(), rect.getTop());
    canvas.stroke();
    canvas.restoreState();
```