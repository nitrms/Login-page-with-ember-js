<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


if(function_exists($_GET['f'])) {
   $_GET['f']();
}
function connectToDB() {
   
    $username=""; // mention your credintials here
    $password="";
    $server = "localhost";
    $database="your_database";
        $db = mysql_connect($server, $username, $password);
    if($db){
        $arr = array('cart_id'=> 1, 'total' => 1);
        echo json_encode($arr);
        return json_encode($arr);
    }else{
       die("Unable to connect to MySQL"); 

    }
}


  

?>
