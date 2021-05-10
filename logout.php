<?php
    session_destroy();
    $prevPage = $_SERVER['HTTP_REFERER'];
    header('location:'.$prevPage);
?>