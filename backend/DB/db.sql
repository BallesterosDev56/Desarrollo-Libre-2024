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
select * from rentals;
CREATE TABLE bikes(
	bike_id INT AUTO_INCREMENT PRIMARY KEY,
	marca VARCHAR(100),
    color VARCHAR(10),
    estado BOOLEAN,
    descripcion VARCHAR(400),
    url_img VARCHAR(170),
    precio_d INT,
    regional VARCHAR(20),
);
SELECT *from bikes;
insert into bikes (marca, color, estado, url_img, precio_d, regional, descripcion) values("Bicicleta de Ruta Roca Everest Carbono", "Negro", false, "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=170913947", 70000,"Antioquia", "Una cicla hiper chevere mejor dicho una berraquera de bicicleta dios mio santo que cosa tan preciosa y bonita"),
("Bicicleta Optimus Tucana Shimano", "Azul", false, "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 100000,"Antioquia", "Una cicla hiper chevere mejor dicho una berraquera de bicicleta dios mio santo que cosa tan preciosa y bonita"),
("Bicicleta de Ruta Roca Everest Carbono", "Negro", false, "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=170913947", 70000,"Antioquia", "Una cicla hiper chevere mejor dicho una berraquera de bicicleta dios mio santo que cosa tan preciosa y bonita"),
("Bicicleta Optimus Tucana Shimano", "Azul", false, "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276",  10000,"Antioquia", "Una cicla hiper chevere mejor dicho una berraquera de bicicleta dios mio santo que cosa tan preciosa y bonita");
select * from bikes;

CREATE TABLE rentals(
   rent_id INT AUTO_INCREMENT PRIMARY KEY,
   price INT,
   regional VARCHAR(20),
   month VARCHAR(20),
   estado BOOLEAN,
   id_user INT,
   id_bike INT,
   FOREIGN KEY (id_user) REFERENCES users(user_id),
   FOREIGN KEY (id_bike) REFERENCES bikes(bike_id)
   );
drop table rentals;
insert into rentals(price, regional,month,estado, id_user, id_bike) values(20, "Antioquia", "Enero", false, 2, 2),(30, "Antioquia", "Enero",false,1,1),(20, "Antioquia", "Febrero",false,1,1),(80, "Antioquia", "Febrero",false,1,1),(20, "Cundinamarca", "Enero",false,1,1),(20, "Valle", "Enero", false,1,1),(20, "Caldas", "Enero", false,1,1),(20, "Atlantico", "Enero", false,1,1);