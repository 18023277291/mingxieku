<?php
 include('connet_db.php');
$tel = $_POST['tel'];
$password = $_POST['password'];
$sql = "select * from mingxieku where tel='$tel' and password='$password' ";
$db =new DB();
$resulf = $db-> fetch($sql,"object");
if($resulf){
 echo"
      <script>
      alert('登录成功');
      location.href='#';
 </script>";
}else{
    echo"
      <script>
      alert('登录失败,返回登录页面!!!');
      location.href='../login.html';
 </script>";
}






?>