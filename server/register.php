<?php
header('Access-Control-Allow-Origin:*');
$password = $_POST['password'];
$tel = $_POST['tel'];
$code = $_POST['code'];
$coon = new Mysqli('localhost','root','','admin',3306);
$sql = "INSERT INTO MINGXIEKU (`password`,`tel`,`code`) VALUE ('$password','$tel','$code')";
$coon -> query("SET CHARACTER SET 'utf8'");
$coon -> query("SET NAMES 'utf8'");
$bool = $coon ->query($sql);
if($bool){
    echo"<script>
             alert('恭喜您注册成功');
            location.href = 'http://10.36.145.33:7777/mingxieku/dist/login.html';
        </script>";
}else{
    echo"<script>
             alert('注册失败!请重新注册');
            location.href = 'http://10.36.145.33:7777/mingxieku/dist/register.html';
        </script>";
}
?>