CREATE DATABASE reto2024;
use reto2024;

CREATE TABLE users(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
    documento VARCHAR(15) NOT NULL,
    estrato VARCHAR(2) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    tipo VARCHAR(6)
);

CREATE TABLE bikes(
	bike_id INT AUTO_INCREMENT PRIMARY KEY,
	marca VARCHAR(100),
    color VARCHAR(10),
    estado BOOLEAN,
    precio_h INT,
    precio_D INT,
    regional VARCHAR(20)
);