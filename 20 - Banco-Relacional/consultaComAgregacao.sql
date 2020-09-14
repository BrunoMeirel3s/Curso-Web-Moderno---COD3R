--group by é utilizado para agrupar campos como no exemplo
--abaixo onde iremos juntas regiões
select
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc;


select
    sum(populacao) as Total
from estados

SELECT
    avg(populacao) as Total
FROM estados


