<?php 
ini_set('display_errors',1);
include 'configuration.php';
$postValue = file_get_contents("php://input"); 
$value =  json_decode($postValue); 
$search = $value->search; 
$searchBy = $value->searchBy; 
$arr =array() ; 
switch ($searchBy) {
    case "search_by_name":
             $query = "select * from user where name LIKE '%$search%' ";
             $result = mysqli_query($conn, $query); 
             if ( mysqli_num_rows($result) != 0) { 
                 while($row = mysqli_fetch_assoc($result)) {
                      $arr[] = $row;
                 }
             } 
             echo $json_info = json_encode($arr);   
             break;
    case "search_by_job_id":
        echo "search by job id!";
        break;
    
    default:
        echo "some error occured ";
}


?>

