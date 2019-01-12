<?php

/*
 * Description of Ruteador
 *
 * @author Franco
 */
$formulario = $_GET['Formulario']; //Atrapo lo que viene en la url en el campo formulario
$accion = $_GET['accion']; // atrapo lo que viene en accion
 //controlador es una variable dinamica para poder crear el controlador que corresponda segun el formulario
$controlador = 'Controlador' . $formulario;

require_once '../controladoresEspecificos/'. $controlador . '.php'; //importo el controlador

$datosFormulario = $_POST; //recupero los datos enviados desde js
$refControlador = new $controlador($datosFormulario); //creo instancia del controaldor y paso los datos
$resultado = $refControlador->$accion($datosFormulario);// llamo a la accion del controlador correspondiente

echo json_encode($resultado); //devuelvo los datos al js en formato json
