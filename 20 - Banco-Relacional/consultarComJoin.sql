--no exemplo abaixo criamos a junção entre duas tabelas
--direto no from chamando as duas tabelas e depois no where
--especificando o que une estas duas
select 
    e.nome as Estado, 
    c.nome as Cidade, 
    e.regiao as Regiao
    from estados e, cidades c
where e.id = c.estados_id;

--abaixo criamos a junção entre a tabela cidades e `estados`
--usando o inner JOIN que permite especificar no on
--o que une as duas tabelas
select
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
from estados e
inner join cidades c on e.id = c.estados_id