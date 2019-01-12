<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ConexionDB
 *
 * @author Franco
 */
class ConexionDB {
   private $_conexion = null;
   private $_usuario = 'root';
   private $_clave = '';
   
   public function __construct() {
       //establecer la conexion
       $this->_conexion = new PDO("mysql:dbname=integradorfranco;host=localhost", $this->_usuario, $this->_clave);
       $this->_conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   }
   
   public function get_conexion(){
       return $this->_conexion;
   }
}
