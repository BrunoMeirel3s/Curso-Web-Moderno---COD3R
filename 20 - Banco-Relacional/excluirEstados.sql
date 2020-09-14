--comando delete funciona de forma similiar ao update
--precisamos informar o where para que o SGBD aplique a exclusão
--na linha correta
delete from estados 
where sigla = 'MN';

select * from estados;

delete from estados
where id>=1000;