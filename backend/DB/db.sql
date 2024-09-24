CREATE DATABASE reto2024;
CREATE TABLE users(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(100),
    documento VARCHAR(15),
    correo VARCHAR(100),
    contrasena VARCHAR(100),
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