-- sintax básica para inserção de estados
insert into estados
    (nome, sigla, regiao, populacao)
VALUES 
    ('Acre', 'AC', 'Norte', 0.83);

-- inserindo vários valores ao mesmo tempo
insert into estados(nome, sigla, regiao, populacao)
values 
    ('Amapá', 'AP', 'Norte', 0.8),
    ('Amazonas', 'AM', 'Norte', 4.06);