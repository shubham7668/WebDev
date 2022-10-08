<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="java.sql.*" %>
<%
final String url="jdbc:mysql://localhost/bms";
final String user="root";
final String pass="";
//this code is to register the mysql connector
Class.forName("com.mysql.cj.jdbc.Driver");
//this code is to establish the connection
Connection conn=DriverManager.getConnection(url,user,pass);
Statement st = conn.createStatement();
%>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="./CSS/style.css">
    <title>Home Page</title>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">RKK Bank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="Home.jsp">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Vac.jsp">View All Customers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Tm.jsp">Transfer Money</a>
      </li>
     
    </ul>
  </div>
</nav>
        <div class="w3-container">
            <center><input type="submit" value="Transfer Money" onclick="openForm()"></center>
            <div class="form-popup" id="myForm">
              <form action="#" method="post" class="form-container">
                
            
                <label for="fname"><b>Sender Account Number :</b></label>
                <input type="text"  placeholder="Enter Sender Account Number" name="saccnum" required>
            
                <label for="lname"><b>Reciever Account Number :</b></label>
                <input type="text" placeholder="Enter Reciever Account Number" name="raccnum" required>
            
                <label for="Roll"><b>Amount :</b></label>
                <input type="text"  placeholder="Enter Amount" name="bal" required>
                
                <button type="submit" class="btn" onclick="myFunction()">Transfer</button>
                <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
              </form>
            </div>
        </div>

    <script>//for add button
      function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
      </script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
function myFunction() {
  alert("Transaction Successful");
}
</script>
    
        <%
    String saccnum = request.getParameter("saccnum");
    String raccnum = request.getParameter("raccnum");
    String bal = request.getParameter("bal");
    String redirectUrl = "Tm.jsp";
    try{
    if(saccnum!=null && raccnum!=null && bal!=null){
    	String Query = "update cus_det set bal=bal-'"+bal+"' where accnum = '"+saccnum+"'";
    	String Queryt = "update cus_det set bal=bal+'"+bal+"' where accnum = '"+raccnum+"'";
    	PreparedStatement pst = conn.prepareStatement(Query);
    	PreparedStatement rst = conn.prepareStatement(Queryt);
    	pst.executeUpdate();  
    	rst.executeUpdate();
    	response.sendRedirect(redirectUrl);
    }
    }
catch(Exception e)
{
System.out.println(e);
e.printStackTrace();
}
    %>
  </body>
</html>