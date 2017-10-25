CREATE DATABASE cx4u3sii96vba3rz;

USE cx4u3sii96vba3rz;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    date TIMESTAMP,
    PRIMARY KEY (id)
);