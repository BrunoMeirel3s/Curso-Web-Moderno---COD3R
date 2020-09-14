--apesar de id ser auto_increment podemos forçar o id que quisermos
--porém novos valores serão inseridos no banco com o id a partir do último
--que inserimos, sendo assim podemos ter espaços vázios entre os campos de id
insert into estados(id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'Sul', 2.54);

select * from estados;

insert into estados(nome, sigla, regiao, populacao)
values ('Mais Novo', 'MN', 'Norte', 2.51);