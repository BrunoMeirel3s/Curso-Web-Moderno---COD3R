create table if not exists prefeitos(
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary key (id),
    unique key (cidade_id), --unique não permite que esse campo se repita em diferentes linhas da tabela
    FOREIGN key(cidade_id) references cidades(id)
);