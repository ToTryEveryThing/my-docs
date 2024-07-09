---
title: 解析xml
icon: code
category:
  - work
tag:
  - xml 
---


## 使用JAXP
```java
public static void main(String[] args) throws ParserConfigurationException, IOException, SAXException {

	String url = "D:\\test\\test\\pom.xml";

	DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	//        忽略注释
	factory.setIgnoringComments(true);
	//        忽略空白
	factory.setIgnoringElementContentWhitespace(true);
	DocumentBuilder builder = factory.newDocumentBuilder();
	Document document = builder.parse(url);

	NodeList dependency = document.getElementsByTagName("dependencyManagement");

	System.out.println(dependency.item(0).getTextContent());
	System.out.println(dependency.getLength());

}
```
> NodeList

1. **获取节点数量**：getLength() 方法返回NodeList中的节点数量。
2. **访问节点**：item(index) 方法允许你通过索引访问NodeList中的特定节点。索引从0开始。
3. **迭代节点**：你可以使用for循环结合getLength()和item()方法来遍历NodeList中的所有节点。
4. **节点类型**：NodeList中的每个节点都是Node接口的一个实例，这意味着你可以对它们执行如获取节点名称、节点值等操作。
5. **动态更新**：在某些情况下，NodeList可以是动态的，这意味着当底层文档结构发生变化时，NodeList也会相应地更新。
6. **使用XPath表达式**：在某些实现中，如使用JDOM或DOM4J等库时，NodeList可以作为XPath查询的结果返回，允许你根据特定的XPath表达式来选择文档中的节点。
> 循环如此

示例
```java
public static void main(String[] args) throws ParserConfigurationException, IOException, SAXException {

	String url = "D:\\test\\test\\pom.xml";

	DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	//        忽略注释
	factory.setIgnoringComments(true);
	//        忽略空白
	factory.setIgnoringElementContentWhitespace(true);
	DocumentBuilder builder = factory.newDocumentBuilder();
	Document document = builder.parse(url);

	NodeList dependency = document.getElementsByTagName("dependency");

	for (int i = 0; i < dependency.getLength(); i++) {
		Node node = dependency.item(i);
	//		是否为节点
		if (node.getNodeType() == Node.ELEMENT_NODE) {
			Element element  = (Element) node;

			String groupId = element.getElementsByTagName("groupId").item(0).getTextContent();
			String artifactId = element.getElementsByTagName("artifactId").item(0).getTextContent();
			String version = element.getElementsByTagName("version").item(0).getTextContent();

			System.out.println("groupId = " + groupId);
			System.out.println("artifactId = " + artifactId);
			System.out.println("version = " + version);
			System.out.println("-----------");

		}
	}
}
```
修改原数据
```java
	// 将修改后的Document写回到新的XML文件中
	TransformerFactory transformerFactory = TransformerFactory.newInstance();
	Transformer transformer = transformerFactory.newTransformer();
	DOMSource source = new DOMSource(document);
	StreamResult result = new StreamResult(
			Files.newOutputStream(new File("pom.xml").toPath()));
	transformer.transform(source, result);
```