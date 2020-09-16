--consulta abaixo seleciona os dados da tabela empresa_unidades
--utilizamos para isso o where para buscar os dados onde o id da cidade
--seja igual ao id da cidade informado em empresas_unidades assim como id da empresa

select e.nome as Empresa, c.nome as Cidade
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id;