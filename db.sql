CREATE DATABASE alunos;

USE alunos;

CREATE TABLE alunos(
    id int NOT NULL AUTO_INCREMENT,                                                                                   
    primeiro_nome varchar(64) NOT NULL,                                                                              
    ultimo_nome varchar(64) NOT NULL,                                                                                 
    email varchar(64) NOT NULL,                                                                                      
    PRIMARY KEY (id)
) DEFAULT CHARSET=utf8mb4;

INSERT INTO alunos VALUES(id,"Tomás","Simpósito","tommysi@gmail.com");
INSERT INTO alunos VALUES(id,"Ricardo","Alexandria","ricas_alex213@hotmail.com");
INSERT INTO alunos VALUES(id,"Juliana","Silva","silju22@yahoo.com");
INSERT INTO alunos VALUES(id,"Fernando","Magalhães","maga590@gmail.com");
INSERT INTO alunos VALUES(id,"Inês","Santos","nes.santos1988@hotmail.com");
INSERT INTO alunos VALUES(id,"Catarina","Ferreira","catfer0908@hotmail.com");
INSERT INTO alunos VALUES(id,"Marcos","Carolino","marco543@gmail.com");
INSERT INTO alunos VALUES(id,"Julio","Caetano","jujucaetano@yahoo.com");
INSERT INTO alunos VALUES(id,"Magda","Trajouce","marco543@gmail.com");
INSERT INTO alunos VALUES(id,"Felipe","Patrício","jujucaetano@yahoo.com");