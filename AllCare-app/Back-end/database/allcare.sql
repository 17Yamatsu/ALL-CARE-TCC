CREATE DATABASE ALLCARE COLLATE utf8mb4_unicode_ci;
alter database allcare char set utf8mb4 collate utf8mb4_unicode_ci;
use ALLCARE;

CREATE TABLE usuario (
	usr_id int primary key auto_increment,
	usr_name VARCHAR(120) not null,
    usr_mail VARCHAR(120) not null,
    usr_phonenumber int not null,
    usr_birhday date not null,
    usr_cpf int not null,
    usr_address_country varchar(300) not null,
    usr_address_state enum("AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","TO") not null,
    usr_address_city varchar(300) not null,
    usr_adress_streetname varchar(600) not null,
    usr_adress_cep int not null,
    usr_address_number int,
    usr_address_type enum("Casa","Apartamento/Condomínio") default("Casa") not null,
    usr_address_neighborhood varchar(300) not null,
    usr_type ENUM("Paciente", "Usuário") default("Usuário"),
    usr_pwd VARCHAR(16) not null,
    usr_photo mediumblob,
    usr_medicalinfo varchar(700) not null
);

create table paciente (
	pac_id int primary key auto_increment,
	pac_name varchar(120) not null,
    pac_address_country varchar(300) not null,
    pac_address_state enum("AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","TO") not null,
    pac_address_city varchar(300) not null,
    pac_adress_streetname varchar(600) not null,
    pac_adress_cep int not null,
    pac_address_number int,
    pac_address_type enum("Casa","Apartamento/Condomínio") default("Casa") not null,
    pac_address_neighborhood varchar(300) not null,
    pac_cpf int not null,
    pac_birthday date not null,
    pac_medicalinfo varchar(700) not null,
    pac_photo mediumblob
);


create table profissional (
	pro_id int primary key auto_increment,
    pro_name varchar(300) not null,
    pro_mail varchar(300) not null,
    pro_pwd varchar(16) not null,
    pro_address_country varchar(300) not null,
    pro_address_state enum("AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","TO") not null,
    pro_address_city varchar(300) not null,
    pro_adress_streetname varchar(600) not null,
    pro_adress_cep int not null,
    pro_address_number int,
    pro_address_type enum("Casa","Apartamento/Condomínio") default("Casa") not null,
    pro_address_neighborhood varchar(300) not null,
    pro_birthday date not null,
    pro_cpf int not null,
    pro_phonenumber int not null,
    pro_formations varchar(2455) not null,
    pro_certifications mediumblob not null,
    pro_photo mediumblob not null
);

create table pac_usr (
	FK_usr int,
    FK_pac int,
    primary key (FK_usr, FK_pac),
    foreign key (FK_usr) references usuario(usr_id),
    foreign key (FK_pac) references paciente(pac_id)
);

create table usr_pro (
	FK_pro int,
    FK_usr int,
    primary key (FK_pro, FK_usr),
    foreign key (FK_pro) references profissional(pro_id),
    foreign key (FK_usr) references usuario(usr_id)
);


#drop table usuario;
#drop table pac_usr;
#drop table paciente;