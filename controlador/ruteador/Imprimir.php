<?php  
require_once('../../js/TCPDF/tcpdf_import.php');
$html=$_POST['html'];//lo traigo del html 
$titulo=$_POST['Formulario']; // lo traigo del html

// Creacion del pdf
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// Informacion del documento
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Franco Sanchez');
$pdf->SetTitle('Taller de Progamación ');
$pdf->SetSubject('TCPDF Tutorial');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// Contenido de la cabecera
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, "Integrador - Taller de Progamación Avanzada", "Franco Nicolas Sanchez");

//fuentes de la cabecera y del pie de pagina
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// Margenes
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// Saltos de pagina automaticos
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// Fuente
$pdf->SetFont('times', 'BI', 10);

// Se añade la pgina
$pdf->AddPage();
$html='<h2> Registo de la tabla '.$titulo.':</h2>'.'<table border="1" cellspacing="3" cellpadding="4">'.$html.'</table>';



//se escribe el html
$pdf->writeHTML($html, $ln=true, $fill=false, $reseth=false, $cell=false, $align='');
//cerrar y exportar el archivo
$pdf->Output('Ejercicio-pdf','I');
