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
    descripcion VARCHAR(400),
    url_img VARCHAR(170),
    precio_d INT,
    regional VARCHAR(20)
);

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

CREATE TABLE eventos(
event_id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
location VARCHAR(100),
regional VARCHAR(20),
fecha VARCHAR(40),
n_inscritos INT
);




INSERT INTO users (nombre, documento, estrato, correo, contrasena, tipo)
VALUES
("Sena", "1234567891", 1, "sena@sena.edu.co", "ecosena@", "Admin"),
("Juan Perez", "123456789", "3", "juan.perez@gmail.com", "password123@", "user"),
("María García", "987654321", "4", "maria.garcia@gmail.com", "password123@", "user"),
("Carlos López", "456789123", "2", "carlos.lopez@gmail.com", "password123@", "user"),
("Laura Martínez", "321654987", "3", "laura.martinez@gmail.com", "password123@", "user"),
("Andrés Díaz", "654123789", "3", "andres.diaz@gmail.com", "password123@", "user"),
("Sofía Ramírez", "789456123", "2", "sofia.ramirez@gmail.com", "password123@", "user"),
("Miguel Torres", "147258369", "3", "miguel.torres@gmail.com", "password123@", "user"),
("Ana Gómez", "369258147", "4", "ana.gomez@gmail.com", "password123@", "user"),
("David Castro", "258147369", "3", "david.castro@gmail.com", "password123@", "user"),
("Mónica Hernández", "741852963", "2", "monica.hernandez@gmail.com", "password123@", "user"),
("Jorge Ruiz", "852963741", "3", "jorge.ruiz@gmail.com", "password123@", "user"),
("Elena Ortiz", "963741852", "4", "elena.ortiz@gmail.com", "password123@", "user"),
("Ricardo Vargas", "123987456", "3", "ricardo.vargas@gmail.com", "password123@", "user"),
("Patricia Gómez", "654789321", "2", "patricia.gomez@gmail.com", "password123@", "user"),
("Luis Mendoza", "789321654", "3", "luis.mendoza@gmail.com", "password123", "user"),
("Claudia Acosta", "321987654", "4", "claudia.acosta@gmail.com", "password123@", "user"),
("Alberto Pardo", "987321654", "3", "alberto.pardo@gmail.com", "password123@", "user"),
("Natalia Peña", "741963852", "2", "natalia.pena@gmail.com", "password123@", "user"),
("Gabriel Rojas", "852741963", "3", "gabriel.rojas@gmail.com", "password123@", "user"),
("Daniela Rivera", "963852741", "4", "daniela.rivera@gmail.com", "password123@", "user");
 

INSERT INTO rentals (price, regional, month, estado)
VALUES
(104000, "Quindio", "Enero", TRUE),
(101500, "Quindio", "Febrero", TRUE),
(230000, "Quindio", "Marzo", TRUE),
(100000, "Quindio", "Abril", TRUE),
(620000, "Quindio", "Mayo", TRUE),
(720000, "Quindio", "Junio", TRUE),
(720000, "Quindio", "Julio", TRUE),
(104000, "Quindio", "Agosto", TRUE),
(101500, "Quindio", "Septiembre", TRUE),
(124500, "Antioquia", "Enero", TRUE),
(57300, "Antioquia", "Febrero", TRUE),
(233000, "Antioquia", "Marzo", TRUE),
(568000, "Antioquia", "Abril", TRUE),
(342000, "Antioquia", "Mayo", TRUE),
(123000, "Antioquia", "Junio", TRUE),
(235000, "Antioquia", "Julio", TRUE),
(262000, "Antioquia", "Agosto", TRUE),
(353500, "Antioquia", "Septiembre", TRUE),
(234000, "Valle", "Enero", TRUE),
(432500, "Valle", "Febrero", TRUE),
(234000, "Valle", "Marzo", TRUE),
(723000, "Valle", "Abril", TRUE),
(235000, "Valle", "Mayo", TRUE),
(234000, "Valle", "Junio", TRUE),
(231000, "Valle", "Julio", TRUE),
(142000, "Valle", "Agosto", TRUE),
(428500, "Valle", "Septiembre", TRUE),
(132000, "Caldas", "Enero", TRUE),
(122500, "Caldas", "Febrero", TRUE),
(125000, "Caldas", "Marzo", TRUE),
(623000, "Caldas", "Abril", TRUE),
(141000, "Caldas", "Mayo", TRUE),
(152000, "Caldas", "Junio", TRUE),
(512000, "Caldas", "Julio", TRUE),
(231000, "Caldas", "Agosto", TRUE),
(132500, "Caldas", "Septiembre", TRUE),
(234000, "Cundinamarca", "Enero", TRUE),
(723500, "Cundinamarca", "Febrero", TRUE),
(536000, "Cundinamarca", "Marzo", TRUE),
(364000, "Cundinamarca", "Abril", TRUE),
(823000, "Cundinamarca", "Mayo", TRUE),
(723000, "Cundinamarca", "Junio", TRUE),
(572000, "Cundinamarca", "Julio", TRUE),
(238000, "Cundinamarca", "Agosto", TRUE),
(810500, "Cundinamarca", "Septiembre", TRUE);



INSERT INTO eventos (name, location, regional, fecha, n_inscritos)
 VALUES 
 ("Ciclada por la paz", "Calle 24 # 2-80, Armenia, Quindio", "Quindio", "2024-10-05", 0),
 ("BiciFest Quindio", "Parque de la Vida, Av. Bolívar, Armenia", "Quindio", "2024-11-10", 0),
 ("Ruta Verde", "Calle 5 # 10-25, Montenegro, Quindio", "Quindio", "2024-12-15", 0),
 ("Ciclovia Nocturna", "Parque Sucre, Armenia, Quindio", "Quindio", "2024-09-20", 0),
 ("Encuentro Bicicletero", "Calle 3 # 6-30, Quimbaya, Quindio", "Quindio", "2024-10-30", 0),
 ("Reto MTB", "Calle 1 # 9-10, Filandia, Quindio", "Quindio", "2024-11-05", 0),
 ("Antioquia Bike Tour", "Parque Arví, Medellín, Antioquia", "Antioquia", "2024-11-15", 0),
 ("Pedalea Antioquia", "Calle 19 # 30-40, Envigado, Antioquia", "Antioquia", "2024-09-25", 0),
 ("Desafío en la montaña", "Parque Principal, Rionegro, Antioquia", "Antioquia", "2024-10-20", 0),
 ("Rodada Nocturna", "Calle 70 # 36-10, Medellín, Antioquia", "Antioquia", "2024-12-10", 0),
 ("Ruta del Café", "Plaza de Jericó, Jericó, Antioquia", "Antioquia", "2024-11-28", 0),
 ("Bici Valle Fest", "Parque del Perro, Cali, Valle", "Valle", "2024-12-05", 0),
 ("Rodada Valle", "Calle 12 # 3-45, Buga, Valle", "Valle", "2024-10-10", 0),
 ("Ruta Pacífica", "Malecón, Buenaventura, Valle", "Valle", "2024-11-15", 0),
 ("BiciTour", "Parque de la Vida, Palmira, Valle", "Valle", "2024-09-18", 0),
 ("Desafío del Valle", "Calle 5 # 10-25, Cali, Valle", "Valle", "2024-11-20", 0),
 ("Rodada Capital", "Calle 26 # 15-50, Bogotá, Cundinamarca", "Cundinamarca", "2024-10-15", 0),
 ("BiciFest Bogotá", "Parque Simón Bolívar, Bogotá, Cundinamarca", "Cundinamarca", "2024-11-22", 0),
 ("Desafío Monserrate", "Calle 12 # 2-50, Bogotá, Cundinamarca", "Cundinamarca", "2024-09-27", 0),
 ("Ruta del Tequendama", "Calle 1 # 5-30, Soacha, Cundinamarca", "Cundinamarca", "2024-12-12", 0),
 ("Rodada Andina", "Calle 10 # 10-50, Zipaquirá, Cundinamarca", "Cundinamarca", "2024-10-05", 0),
 ("Caldas Bike Tour", "Calle 65 # 10-20, Manizales, Caldas", "Caldas", "2024-11-10", 0),
 ("Rodada Eje Cafetero", "Calle 12 # 6-30, Chinchiná, Caldas", "Caldas", "2024-09-15", 0),
 ("Ruta del Nevado", "Parque de los Fundadores, Villamaría, Caldas", "Caldas", "2024-12-01", 0),
 ("Desafío del Café", "Calle 25 # 12-15, Manizales, Caldas", "Caldas", "2024-10-20", 0),
 ("Encuentro MTB Caldas", "Calle 3 # 2-10, Neira, Caldas", "Caldas", "2024-11-05", 0);
drop table eventos;

INSERT INTO bikes (marca, color, estado, descripcion, url_img, precio_d, regional)
VALUES
-- Bicicletas de Quindio
("Trek FX 3 Disc", "Negro", TRUE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Quindio"),
("Cannondale Quick 4", "Rojo", TRUE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Quindio"),
("Specialized Sirrus", "Gris", TRUE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Quindio"),
("Brompton M6L", "Negro", TRUE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Quindio"),
("Giant Escape 3", "Azul", TRUE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Quindio"),
("Orbea Carpe 10", "Blanco", TRUE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Quindio"),
("Scott Sub Cross 40", "Verde", TRUE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Quindio"),
("Bianchi C-Sport 1", "Gris", TRUE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Quindio"),
("Merida Crossway 100", "Negro", TRUE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Quindio"),
("Cube Town Pro", "Rojo", TRUE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Quindio"),
("Ghost Square Cross 1.8", "Negro", TRUE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Quindio"),
("Kalkhoff Endeavour", "Gris", TRUE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Quindio"),
("Kona Dew", "Blanco", TRUE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Quindio"),
("Norco Indie 3", "Verde", TRUE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Quindio"),
("Lapierre Shaper 100", "Negro", TRUE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Quindio"),
("Trek FX 3 Disc", "Negro", FALSE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Quindio"),
("Cannondale Quick 4", "Rojo", FALSE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Quindio"),
("Specialized Sirrus", "Gris", FALSE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Quindio"),
("Brompton M6L", "Negro", FALSE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Quindio"),
("Giant Escape 3", "Azul", FALSE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Quindio"),
("Orbea Carpe 10", "Blanco", FALSE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Quindio"),
("Scott Sub Cross 40", "Verde", FALSE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Quindio"),
("Bianchi C-Sport 1", "Gris", FALSE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Quindio"),
("Merida Crossway 100", "Negro", FALSE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Quindio"),
("Cube Town Pro", "Rojo", FALSE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Quindio"),
("Ghost Square Cross 1.8", "Negro", FALSE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Quindio"),
("Kalkhoff Endeavour", "Gris", FALSE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Quindio"),
("Kona Dew", "Blanco", FALSE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Quindio"),
("Norco Indie 3", "Verde", FALSE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Quindio"),
("Lapierre Shaper 100", "Negro", FALSE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Quindio"),
("Trek FX 3 Disc", "Negro", TRUE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Antioquia"),
("Cannondale Quick 4", "Rojo", TRUE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Antioquia"),
("Specialized Sirrus", "Gris", TRUE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Antioquia"),
("Brompton M6L", "Negro", TRUE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Antioquia"),
("Giant Escape 3", "Azul", TRUE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Antioquia"),
("Orbea Carpe 10", "Blanco", TRUE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Antioquia"),
("Scott Sub Cross 40", "Verde", TRUE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Antioquia"),
("Bianchi C-Sport 1", "Gris", TRUE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Antioquia"),
("Merida Crossway 100", "Negro", TRUE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Antioquia"),
("Cube Town Pro", "Rojo", TRUE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Antioquia"),
("Ghost Square Cross 1.8", "Negro", TRUE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Antioquia"),
("Kalkhoff Endeavour", "Gris", TRUE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Antioquia"),
("Kona Dew", "Blanco", TRUE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Antioquia"),
("Norco Indie 3", "Verde", TRUE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Antioquia"),
("Lapierre Shaper 100", "Negro", TRUE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Antioquia"),
("Trek FX 3 Disc", "Negro", FALSE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Antioquia"),
("Cannondale Quick 4", "Rojo", FALSE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Antioquia"),
("Specialized Sirrus", "Gris", FALSE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Antioquia"),
("Brompton M6L", "Negro", FALSE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Antioquia"),
("Giant Escape 3", "Azul", FALSE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Antioquia"),
("Orbea Carpe 10", "Blanco", FALSE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Antioquia"),
("Scott Sub Cross 40", "Verde", FALSE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Antioquia"),
("Bianchi C-Sport 1", "Gris", FALSE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Antioquia"),
("Merida Crossway 100", "Negro", FALSE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Antioquia"),
("Cube Town Pro", "Rojo", FALSE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Antioquia"),
("Ghost Square Cross 1.8", "Negro", FALSE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Antioquia"),
("Kalkhoff Endeavour", "Gris", FALSE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Antioquia"),
("Kona Dew", "Blanco", FALSE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Antioquia"),
("Norco Indie 3", "Verde", FALSE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Antioquia"),
("Lapierre Shaper 100", "Negro", FALSE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Antioquia"),
("Trek FX 3 Disc", "Negro", TRUE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Valle"),
("Cannondale Quick 4", "Rojo", TRUE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Valle"),
("Specialized Sirrus", "Gris", TRUE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Valle"),
("Brompton M6L", "Negro", TRUE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Valle"),
("Giant Escape 3", "Azul", TRUE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Valle"),
("Orbea Carpe 10", "Blanco", TRUE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Valle"),
("Scott Sub Cross 40", "Verde", TRUE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Valle"),
("Bianchi C-Sport 1", "Gris", TRUE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Valle"),
("Merida Crossway 100", "Negro", TRUE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Valle"),
("Cube Town Pro", "Rojo", TRUE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Valle"),
("Ghost Square Cross 1.8", "Negro", TRUE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Valle"),
("Kalkhoff Endeavour", "Gris", TRUE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Valle"),
("Kona Dew", "Blanco", TRUE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Valle"),
("Norco Indie 3", "Verde", TRUE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Valle"),
("Lapierre Shaper 100", "Negro", TRUE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Valle"),
("Trek FX 3 Disc", "Negro", FALSE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Valle"),
("Cannondale Quick 4", "Rojo", FALSE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Valle"),
("Specialized Sirrus", "Gris", FALSE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Valle"),
("Brompton M6L", "Negro", FALSE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Valle"),
("Giant Escape 3", "Azul", FALSE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Valle"),
("Orbea Carpe 10", "Blanco", FALSE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Valle"),
("Scott Sub Cross 40", "Verde", FALSE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Valle"),
("Bianchi C-Sport 1", "Gris", FALSE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Valle"),
("Merida Crossway 100", "Negro", FALSE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Valle"),
("Cube Town Pro", "Rojo", FALSE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Valle"),
("Ghost Square Cross 1.8", "Negro", FALSE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Valle"),
("Kalkhoff Endeavour", "Gris", FALSE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Valle"),
("Kona Dew", "Blanco", FALSE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Valle"),
("Norco Indie 3", "Verde", FALSE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Valle"),
("Lapierre Shaper 100", "Negro", FALSE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Valle"),
("Trek FX 3 Disc", "Negro", TRUE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Caldas"),
("Cannondale Quick 4", "Rojo", TRUE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Caldas"),
("Specialized Sirrus", "Gris", TRUE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Caldas"),
("Brompton M6L", "Negro", TRUE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Caldas"),
("Giant Escape 3", "Azul", TRUE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Caldas"),
("Orbea Carpe 10", "Blanco", TRUE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Caldas"),
("Scott Sub Cross 40", "Verde", TRUE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Caldas"),
("Bianchi C-Sport 1", "Gris", TRUE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Caldas"),
("Merida Crossway 100", "Negro", TRUE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Caldas"),
("Cube Town Pro", "Rojo", TRUE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Caldas"),
("Ghost Square Cross 1.8", "Negro", TRUE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Caldas"),
("Kalkhoff Endeavour", "Gris", TRUE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Caldas"),
("Kona Dew", "Blanco", TRUE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Caldas"),
("Norco Indie 3", "Verde", TRUE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Caldas"),
("Lapierre Shaper 100", "Negro", TRUE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Caldas"),
("Trek FX 3 Disc", "Negro", FALSE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Caldas"),
("Cannondale Quick 4", "Rojo", FALSE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Caldas"),
("Specialized Sirrus", "Gris", FALSE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Caldas"),
("Brompton M6L", "Negro", FALSE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Caldas"),
("Giant Escape 3", "Azul", FALSE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Caldas"),
("Orbea Carpe 10", "Blanco", FALSE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Caldas"),
("Scott Sub Cross 40", "Verde", FALSE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Caldas"),
("Bianchi C-Sport 1", "Gris", FALSE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Caldas"),
("Merida Crossway 100", "Negro", FALSE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Caldas"),
("Cube Town Pro", "Rojo", FALSE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Caldas"),
("Ghost Square Cross 1.8", "Negro", FALSE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Caldas"),
("Kalkhoff Endeavour", "Gris", FALSE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Caldas"),
("Kona Dew", "Blanco", FALSE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Caldas"),
("Norco Indie 3", "Verde", FALSE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Caldas"),
("Lapierre Shaper 100", "Negro", FALSE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Caldas"),
("Trek FX 3 Disc", "Negro", TRUE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Cundinamarca"),
("Cannondale Quick 4", "Rojo", TRUE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Cundinamarca"),
("Specialized Sirrus", "Gris", TRUE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Cundinamarca"),
("Brompton M6L", "Negro", TRUE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Cundinamarca"),
("Giant Escape 3", "Azul", TRUE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Cundinamarca"),
("Orbea Carpe 10", "Blanco", TRUE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Cundinamarca"),
("Scott Sub Cross 40", "Verde", TRUE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Cundinamarca"),
("Bianchi C-Sport 1", "Gris", TRUE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Cundinamarca"),
("Merida Crossway 100", "Negro", TRUE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Cundinamarca"),
("Cube Town Pro", "Rojo", TRUE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Cundinamarca"),
("Ghost Square Cross 1.8", "Negro", TRUE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Cundinamarca"),
("Kalkhoff Endeavour", "Gris", TRUE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Cundinamarca"),
("Kona Dew", "Blanco", TRUE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Cundinamarca"),
("Norco Indie 3", "Verde", TRUE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Cundinamarca"),
("Lapierre Shaper 100", "Negro", TRUE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Cundinamarca"),
("Trek FX 3 Disc", "Negro", FALSE, "Bicicleta de ciudad con gran estabilidad", "https://todoparaciclismo.com/cdn/shop/files/IMG_8142-_1_300x.jpg?v=1709139473", 10500, "Cundinamarca"),
("Cannondale Quick 4", "Rojo", FALSE, "Ideal para recorridos en la ciudad y ejercicio", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 12000, "Cundinamarca"),
("Specialized Sirrus", "Gris", FALSE, "Diseño ergonómico y cómodo", "https://todoparaciclismo.com/cdn/shop/files/DSC_0395_300x.jpg?v=1708458276", 13000, "Cundinamarca"),
("Brompton M6L", "Negro", FALSE, "Bicicleta plegable ideal para transporte urbano", "https://todoparaciclismo.com/cdn/shop/files/DSC_0785_300x.jpg?v=1703783173", 13500, "Cundinamarca"),
("Giant Escape 3", "Azul", FALSE, "Bicicleta ligera para desplazamiento rápido", "https://todoparaciclismo.com/cdn/shop/files/PicsArt_04-25-05.14.42_786c5ccc-d865-421b-a07e-0684e0dea5a7_300x.png?v=1701879366", 14200, "Cundinamarca"),
("Orbea Carpe 10", "Blanco", FALSE, "Bicicleta versátil y rápida", "https://cdn.shopify.com/s/files/1/1685/1155/products/aspect_930_2_1_300x.jpg?v=1692203896", 11000, "Cundinamarca"),
("Scott Sub Cross 40", "Verde", FALSE, "Bicicleta todo terreno ideal para la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/products/Gw_Linx03_300x.jpg?v=1672100163", 14000, "Cundinamarca"),
("Bianchi C-Sport 1", "Gris", FALSE, "Diseño cómodo para largos trayectos", "https://todoparaciclismo.com/cdn/shop/products/gw-scorpion111_500x_0a965437-2ed4-48d9-9b61-be810915a5e9_300x.jpg?v=1633729808", 14500, "Cundinamarca"),
("Merida Crossway 100", "Negro", FALSE, "Estabilidad y comodidad garantizadas", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_1638_300x.jpg?v=1698437755", 15000, "Cundinamarca"),
("Cube Town Pro", "Rojo", FALSE, "Bicicleta con características premium", "https://cdn.shopify.com/s/files/1/1685/1155/products/HAMMER-NEGRO-ROJO-PRO_88c900b1-096e-4972-8b34-1fca9bc20b65_300x.jpg?v=1641420744", 10000, "Cundinamarca"),
("Ghost Square Cross 1.8", "Negro", FALSE, "Ideal para explorar la ciudad", "https://cdn.shopify.com/s/files/1/1685/1155/files/065851_300x.png?v=1719588672", 10000, "Cundinamarca"),
("Kalkhoff Endeavour", "Gris", FALSE, "Bicicleta eléctrica para distancias largas", "https://cdn.shopify.com/s/files/1/1685/1155/products/BICI-GW-SCORPION-NJ_300x.jpg?v=1633472560", 10000, "Cundinamarca"),
("Kona Dew", "Blanco", FALSE, "Ligera y cómoda para el día a día", "https://cdn.shopify.com/s/files/1/1685/1155/products/BI-PLAYERANG_300x.jpg?v=1679093147", 10000, "Cundinamarca"),
("Norco Indie 3", "Verde", FALSE, "Excelente maniobrabilidad", "https://cdn.shopify.com/s/files/1/1685/1155/files/IMG_4825_300x.jpg?v=1692311832", 10000, "Cundinamarca"),
("Lapierre Shaper 100", "Negro", FALSE, "Estilo y rendimiento en la ciudad", "https://todoparaciclismo.com/cdn/shop/files/WhatsAppImage2024-07-31at12.08.54PM_300x.jpg?v=1722446650", 10000, "Cundinamarca");












