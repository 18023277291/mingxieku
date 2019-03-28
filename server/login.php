<?php
 include('connet_db.php');
 header('Access-Control-Allow-Origin:*');
$tel = $_POST['tel'];
$password = $_POST['password'];
$sql = "select * from mingxieku where tel='$tel' and password='$password' ";
$db =new DB();
$resulf = $db-> fetch($sql,"object");
if($resulf){
 echo"
      <script>
      alert('登录成功');
      location.href='../app/index.html';
 </script>";
}else{
    echo"
      <script>
      alert('登录失败,返回登录页面!!!');
      location.href='http://10.36.145.33:7777/mingxieku/dist/login.html';
 </script>";
}
?>