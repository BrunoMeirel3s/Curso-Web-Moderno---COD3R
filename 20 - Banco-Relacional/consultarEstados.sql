-- select simples, selecionando todos os dados
select * from estados;

--select exibindo apenas a sigla e o nome, onde regiao = sul
select Sigla, nome as 'Nome do Estado' from estados
 where regiao = 'Sul';

--order by ordena a busca de acordo com o campo escolhido
 select nome, regiao, populacao from estados
 where populacao >= 10
 order by populacao desc;