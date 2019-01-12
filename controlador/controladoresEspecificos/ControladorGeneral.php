<?php
/**
 * Description of ControladorGeneral
 *
 * @author Franco
 */
require_once '../persistencia/DbSentencias.php';
require_once '../persistencia/ControladorPersistencia.php';

abstract class ControladorGeneral implements DbSentencias{
    
    protected $refControladorPersistencia;
    
    
    function __construc(){
        $this->refControladorPersistencia = ControladorPersistencia::obtenerCP();
    }
    
    public abstract function agregar($datos);
    public abstract function modificar($datos);
    public abstract function eliminar($datos);
    public abstract function listar($datos);
}
