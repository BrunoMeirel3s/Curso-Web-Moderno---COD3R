--update devemos informar o campo a ser atualizado e informar o novo valor
--não podemos esquecer de usar o where para filtrar a linha que queremos atualizar
update estados
set nome = 'Maranhão' where sigla = 'MA';

select nome from estados where sigla = 'MA';

--update atualizando dois campos ao mesmo tempo
update estados
set nome = 'Paraná', populacao = 11.32
where sigla = 'PR';

--lembrando que podemos definir apelidos para as tabelas como abaixo
--onde estados vira 'est'
select est.nome, sigla, populacao 
from estados est where sigla = 'PR';