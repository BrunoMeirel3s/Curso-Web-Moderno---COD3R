--podemos usar o if not exists para criar a tabela
--apenas caso ela não exista, evitando erros na aplicação
--pois se tentarmos criar uma tabela que já existe receberemos um erro
create table if not exists cidades (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    estados_id int unsigned not null,
    area decimal(10, 2),
    primary key(id),
    FOREIGN key (estados_id) references estados(id)
);

create table if not exists teste (
    id int unsigned not null auto_increment PRIMARY KEY
);

--if exists no caso realiza neste exemplo o delete apenas se a tabela existir
--evitando tentar realizar o drop e receber um erro
drop table if exists teste;