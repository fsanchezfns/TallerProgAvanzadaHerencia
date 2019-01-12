
/**
 * Author:  Franco
 * Created: 17/10/2018
 */

CREATE DATABASE `integradorfranco`

USE `integradorfranco`

DROP TABLE IF EXISTS  `perro`;

CREATE TABLE `perro`(
`id_perro` int(11) NOT NULL AUTO_INCREMENT,
`nombre_perro` varchar(40) DEFAULT NULL,
`raza_perro` varchar(40) DEFAULT NULL,
`edad_perro` int(3) DEFAULT NULL,
PRIMARY KEY (`id_perro`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

insert into `perro` (`id_perro`,`nombre_perro`,`raza_perro`,`edad_perro`) values ('','luna','coli',34)

	DROP TABLE IF EXISTS  `perro2`;

CREATE TABLE `perro2`(
`id_perro` int(11) NOT NULL AUTO_INCREMENT,
`nombre_perro` varchar(40) DEFAULT NULL,
`raza_perro` varchar(40) DEFAULT NULL,
`edad_perro` int(3) DEFAULT NULL,
`otro` int(3) DEFAULT NULL,
PRIMARY KEY (`id_perro`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

insert into `perro` (`id_perro`,`nombre_perro`,`raza_perro`,`edad_perro`) values ('','luna','coli',34)