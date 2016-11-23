<?php
echo "连在一起输出：<br/>";

echo "用户名".$_POST['name']." <br/>密码:".$_POST['password'];
echo "<br/>分开输出：<br/>";
echo "用户名:".$_POST['name'];
echo "<br/>";
echo "密码:".$_POST['password'];