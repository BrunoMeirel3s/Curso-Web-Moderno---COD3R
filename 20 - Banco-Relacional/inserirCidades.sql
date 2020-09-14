select * from estados;

insert into cidades(nome, area, estados_id)
values ('Campinas', 795, 26)

insert into cidades(nome, area, estados_id)
values('Niterói', 133.9, 20)

--podemos realizar consultas dentro de consultas
--como abaixo onde pesquisamos o id do estado
--de acordo com a sua sigla para incluir na tabela de cidades
insert into cidades (nome, area, estados_id)
values (
    'Caruaru', 
    920.6, 
    (select id from estados where sigla = 'PE')
)

insert into cidades
    (nome, area, estados_id)
values(
    'Juazeiro do Norte', 
    248.2, 
    (select id from estados where sigla = 'CE')
)

select * from cidades;