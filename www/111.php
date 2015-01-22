<?php
// Загрузка штампа и фото, для которого применяется водяной знак (называется штамп или печать)

$sel = ($_GET['sel']);

$URL_img = urldecode($_GET['tp']);
$URL_s = 's.png';

   //Массив емейлов
       
        $pieces = explode(".", $URL_img);
        $end_index = count($pieces) -1;
        $end_str = $pieces[$end_index];
        


if (stristr($end_str, 'jpg')) {$im = imagecreatefromjpeg($URL_img);  } 
            else { $im = imagecreatefrompng($URL_img);}

$stamp = imagecreatefrompng('s.png');


// получаем массив, содержащий размеры изображения
$size = getimagesize ($URL_img);

// Значение флага, 
// возвращаемого функцией getimagesize() под индексом 2
// после определения размера изображения
$flag = array(1=>'GIF',
             2=>'JPG',
             3=>'PNG',
             4=>'SWF',
             5=>'PSD',
             6=>'BMP',
             7=>'TIFF(байтовый порядок intel)',
             8=>'TIFF(байтовый порядок motorola)',
             9=>'JPC',
             10=>'JP2',
             11=>'JPX');
/*
echo "Ширина: " . $size[0] .'<br>';
echo "Высота: " . $size[1] .'<br>';
echo "Тип изображения: " . $flag[$size[2]] .'<br>';
echo "Ширина и Высота: " . $size[3] .'<br>'; 

*/


// Установка полей для штампа и получение высоты/ширины штампа
if (!empty($sel)) {
    $marge_right = $size[0] / 2 -90;
    $marge_bottom = $size[1]/2 -20;
} else {
  $marge_right = 5;
$marge_bottom = 10;  
}

$sx = imagesx($stamp);
$sy = imagesy($stamp);

// Копирование изображения штампа на фотографию с помощью смещения края
// и ширины фотографии для расчета позиционирования штампа. 
imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));

// Вывод и освобождение памяти
header('Content-type: image/png');
imagepng($im);
imagedestroy($im);
?>
