<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>用户列表</title>
<style>
th, td {
	width: 150px;
	border: 2px solid gray;
	text-align: center;
	padding: 2px 10px;
}

table {
	border-collapse: collapse;
}

body {
	text-align: center;
}

a {
	text-decoration: none;
}
</style>
</head>
<body>
	<c:if test="${pageCount>0}">
		<h2>所有用户信息</h2>
		<%-- 共有${pageCount}页，这是第${pageNo}页。
      <c:if test="${pageNo>1}">
         <a href="ShowAllUserServlet?pageNo=1">第一页</a>
         <a href="ShowAllUserServlet?pageNo=${pageNo-1}">上一页</a>
      </c:if>
      <c:if test="${pageNo!=pageCount}">
         <a href="ShowAllUserServlet?pageNo=${pageNo+1}">下一页</a>
         <a href="ShowAllUserServlet?pageNo=${pageCount}">最后一页</a>
      </c:if> --%>
		<table>
			<tr>
				<th>用户名</th>
				<th>性别</th>
			</tr>
			<c:forEach items="${userlist}" var="user">
				<tr>
					<td>${user.username}</td>
					<td>${user.password}</td>
				</tr>
			</c:forEach>
		</table>
		<br>
	</c:if>
	<c:if test="${pageCount==0}">
		<p>目前没有记录</p>
	</c:if>
</body>
</html>