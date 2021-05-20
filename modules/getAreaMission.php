<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $param = '';
    switch ($reciveData['name']) {
        case 'Sejong':
            $param = '세종특별자치시';
            break;

        case 'jeju':
            $param = '제주특별자치도';
            break;

        case 'gyeongnam':
            $param = '경남';
            break;

        case 'gyeongbuk':
            $param = '경북';
            break;

        case 'jeonnam':
            $param = '전남';
            break;

        case 'jeonbuk':
            $param = '전북';
            break;

        case 'chungnam':
            $param = '충남';
            break;

        case 'chungbuk':
            $param = '충북';
            break;

        case 'gangwon':
            $param = '강원';
            break;

        case 'gyeonggi':
            $param = '경기';
            break;

        case 'ulsan':
            $param = '울산';
            break;

        case 'daejeon':
            $param = '대전';
            break;

        case 'gwangju':
            $param = '광주';
            break;

        case 'incheon':
            $param = '인천';
            break;

        case 'daegu':
            $param = '대구';
            break;

        case 'busan':
            $param = '부산';
            break;

        case 'seoul':
            $param = '서울';
            break;

        default:
            $param = '제주특별차지도';
    }
    $sql = "select mission.*, member.m_id from mission join member on mission.ms_writer = member.m_id where m_add1 = '$param' limit 0, 4";
    $result = getData($sql);

    print_r(json_encode($result));
?>