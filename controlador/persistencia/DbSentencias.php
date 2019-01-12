<?php


/**
 * Description of DbSentencias
 *
 * @author Franco
 */
interface DbSentencias {
    
    //PERRO
const INSERTAR_PERRO= "INSERT INTO `perro` (`nombre_perro`,`raza_perro`,`edad_perro`) VALUES (?,?,?)";
const ELIMINAR_PERRO= "DELETE FROM `perro` WHERE id_perro = ?";
const ACTUALIZAR_PERRO= "UPDATE `perro` SET `nombre_perro`=?, `raza_perro`=?,`edad_perro`=? WHERE id_perro = ?";
const BUSCAR_PERRO= "SELECT * FROM `perro` WHERE ? = ? ";
const LISTAR_TODOS= "SELECT * FROM `perro`";
const BUSCAR_ULTIMO_PERRO= "SELECT * FROM perro WHERE id_perro=(SELECT MAX(id_perro) FROM `perro`)";
    
    
    
}
