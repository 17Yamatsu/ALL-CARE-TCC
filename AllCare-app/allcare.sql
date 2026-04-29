CREATE DATABASE ALLCARE COLLATE utf8mb4_unicode_ci;
alter database allcare char set utf8mb4 collate utf8mb4_unicode_ci;
use ALLCARE;

CREATE TABLE usuario (
	usr_id int primary key auto_increment,
	usr_name VARCHAR(120) not null,
    usr_mail VARCHAR(120) not null,
    usr_birhday date not null,
    usr_cpf int not null,
    usr_address varchar(300) not null,
    usr_cep int not null,
    usr_type ENUM("Paciente", "Usuário") default("Usuário"),
    usr_pwd VARCHAR(16) not null,
    usr_photo mediumblob,
    usr_medicalinfo varchar(700) not null
);

create table paciente (
	pac_id int primary key auto_increment,
	pac_name varchar(120) not null,
    pac_address varchar(300) not null,
    pac_cpf int not null,
    pac_birthday date not null,
    pac_medicalinfo varchar(700) not null
);


create table pac_usr (
	FK_usr int,
    FK_pac int,
    primary key (FK_usr, FK_pac),
    foreign key (FK_usr) references usuario(usr_id),
    foreign key (FK_pac) references paciente(pac_id)
);

drop table usuario;