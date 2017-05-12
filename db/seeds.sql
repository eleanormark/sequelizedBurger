--run in command line: mysql.server start
--Start MySQL command line tool and login: mysql -u root -p.
--Without password: mysql -u root
--With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
--Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.
--Close out of the MySQL command line tool: exit.

create database if not exists burger_db;

use burger_db;

create table if not exists burgers (
   id INT( 11 ) AUTO_INCREMENT NOT NULL,
   burger_name VARCHAR( 255) NOT NULL,
   devoured BOOLEAN NOT NULL DEFAULT false,
   removed BOOLEAN NOT NULL DEFAULT false,
   created_at TIMESTAMP NOT NULL,
   PRIMARY KEY ( id )
);

insert into burgers (burger_name)
values
('sweet potato burger'),
('portobello mushroom burger'),
('tofu burger'),
('black bean burger');


--select * from burgers;