---
title: POI
icon: fluent-color:text-bullet-list-square-sparkle-16
order: 2
description: POI
category:
  - work
tag:
  - POI 
---
## 依赖

```xml
<dependency>  
    <groupId>org.apache.poi</groupId>  
    <artifactId>poi</artifactId>  
    <version>5.2.4</version>  
</dependency>  
<dependency>  
    <groupId>org.apache.poi</groupId>  
    <artifactId>poi-ooxml</artifactId>  
    <version>5.2.4</version>  
</dependency>
```
## excel
::: code-tabs#shell

@tab 读

```java
import org.apache.poi.ss.usermodel.*;  
import org.apache.poi.xssf.usermodel.XSSFWorkbook;  
  
import java.io.FileInputStream;  
import java.io.IOException;  
  
/**  
 * @author mishu  
 * @since 2025/12/6  
 */
 public class ReadExcelTest {  
  
    private static final String PATH = "C:\\Users\\riceu\\Desktop\\test.xlsx";  
  
    public static void main(String[] args) throws IOException {  
  
        try (FileInputStream io = new FileInputStream(PATH)) {  
            XSSFWorkbook sheets = new XSSFWorkbook(io);  
            // 处理工作表  
            for (Sheet sheet : sheets) {  
                for (Row cells : sheet) {  
                    for (Cell cell : cells) {  
                        System.out.println(getCell(cell));  
                    }                }            }        }    }  
    /**  
     * 获取单元格数据  
     *  
     * @param cell  
     * @return  
     */  
    private static String getCell(Cell cell) {  
        if (cell == null) {  
            return "";  
        }        CellType cellType = cell.getCellType();  
        if (cellType == CellType.NUMERIC) {  
            if (DateUtil.isCellDateFormatted(cell)) {  
                return cell.getLocalDateTimeCellValue().toString();  
            }        }        return switch (cellType) {  
            case STRING -> cell.getStringCellValue();  
            case NUMERIC -> String.valueOf(cell.getNumericCellValue());  
            case BOOLEAN -> String.valueOf(cell.getBooleanCellValue());  
            case FORMULA -> cell.getCellFormula();  
            default -> "";  
        };    }    }
```


@tab 写

```java
import org.apache.poi.ss.usermodel.Row;  
import org.apache.poi.ss.usermodel.Sheet;  
import org.apache.poi.ss.usermodel.Workbook;  
import org.apache.poi.xssf.usermodel.XSSFWorkbook;  
  
import java.io.FileOutputStream;  
import java.io.IOException;  
import java.time.LocalDateTime;  
  
/**  
 * @author mishu  
 * @since 2025/12/6  
 */
 public class WriteExcelTest {  
  
    private static final String PATH = "C:\\Users\\riceu\\Desktop\\test.xlsx";  
  
    public static void main(String[] args) throws IOException {  
        try (Workbook workbook = new XSSFWorkbook()) {  
            Sheet sheet = workbook.createSheet("第一个");  
  
            Row header = sheet.createRow(0);  
            header.createCell(0).setCellValue("姓名");  
            header.createCell(1).setCellValue("年龄");  
            header.createCell(2).setCellValue("性别");  
            header.createCell(3).setCellValue("生日");  
  
            Row data = sheet.createRow(1);  
            data.createCell(0).setCellValue("小王");  
            data.createCell(1).setCellValue(18);  
            data.createCell(2).setCellValue("男");  
            data.createCell(3).setCellValue(LocalDateTime.now());  
  
            try (FileOutputStream io = new FileOutputStream("xxx.xlsx")) {  
                workbook.write(io);  
            }        }  
    }}
```

@tab 改

```java
import org.apache.poi.ss.usermodel.*;  
import org.apache.poi.xssf.usermodel.XSSFWorkbook;  
  
import java.io.FileInputStream;  
import java.io.FileOutputStream;  
import java.io.IOException;  
import java.time.LocalDateTime;  
  
/**  
 * @author mishu  
 * @since 2025/12/6  
 */
 public class UpdateExcelTest {  
  
    private static final String PATH = "C:\\Users\\riceu\\Desktop\\test.xlsx";  
  
    public static void main(String[] args) throws IOException {  
        Workbook workbook;  
        try (FileInputStream io = new FileInputStream(PATH)) {  
            workbook = new XSSFWorkbook(io);  
            Sheet sheetAt = workbook.getSheetAt(0);  
  
            // 创建单元格样式  
            CreationHelper helper = workbook.getCreationHelper();  
            CellStyle dateStyle = workbook.createCellStyle();  
            dateStyle.setDataFormat(helper.createDataFormat().getFormat("yyyy-MM-dd HH:mm:ss"));  
  
            Row row = sheetAt.getRow(1);  
            row.createCell(0).setCellValue("小王");  
            row.createCell(1).setCellValue(18);  
            Cell cell = row.createCell(2);  
            cell.setCellStyle(dateStyle);  
            cell.setCellValue(LocalDateTime.now());  
        }        FileOutputStream fileOutputStream = new FileOutputStream(PATH);  
        workbook.write(fileOutputStream);  
  
    }  
}
```
:::