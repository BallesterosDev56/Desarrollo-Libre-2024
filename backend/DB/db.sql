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
    url_img VARCHAR(170),
    precio_h INT,
    precio_d INT,
    regional VARCHAR(20)
);

insert into bikes (marca, color, estado, url_img, precio_h, precio_d, regional) values("Bicicleta de Ruta Roca Everest Carbono", "Negro", false, "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=170913947", 10000, 70000,"Antioquia"),
("Bicicleta Optimus Tucana Shimano", "Azul", false, "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 20000, 100000,"Antioquia"),
("Bicicleta de Ruta Roca Everest Carbono", "Negro", false, "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=170913947", 10000, 70000,"Antioquia"),
("Bicicleta Optimus Tucana Shimano", "Azul", false, "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 20000, 100000,"Antioquia");


CREATE TABLE rentals(
   rent_id INT AUTO_INCREMENT PRIMARY KEY,
   price INT,
   regional VARCHAR(20),
   month VARCHAR(20)
);

insert into rentals(price, regional,month) values(20, "Antioquia", "Enero"),(30, "Antioquia", "Enero"),(20, "Antioquia", "Febrero"),(80, "Antioquia", "Febrero")