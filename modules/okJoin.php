<?php
    include('./modules.php');
    
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);

    printf($reciveData);

?>