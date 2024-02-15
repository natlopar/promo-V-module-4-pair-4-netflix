SELECT * FROM movies;
USE netflix;
SELECT * FROM movies WHERE year >= 1990;
SELECT * FROM movies WHERE category = 'Top 10';

UPDATE movies  SET year = 1997 WHERE idMovies = 2;

SELECT * FROM actors;
SELECT * FROM actors WHERE birthday between '1950-01-01' and '1954-12-31';
SELECT * FROM actors WHERE birthday >= '1950-01-01' and birthday <= '1954-12-31';
SELECT * FROM actors WHERE name = 'Tom';
SELECT name, lastname FROM actors WHERE country = 'Estados Unidos';

SELECT * FROM users;
SELECT * FROM users WHERE plan_details = 'Standard';
usersusersproducts
USE actors;

DELETE FROM users WHERE name LIKE 'm%';

ALTER TABLE actors ADD picture VARCHAR(1000);

USE almacen;
SELECT * FROM products;
DROP TABLE
products



