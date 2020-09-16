--alter table abaixo é utilizado para atualizar o campo de uma tabela
--modificando o tipo de dados que ela recebe
alter table empresas modify cnpj varchar(14);

insert into empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Cielo', 015983317000134);

--comando desc é utilizado para observarmos a estrutura dos dados
--de uma tabela, para inserirmos os valores corretamente;
desc empresas;
desc prefeitos;

--observe que a tabela empresas_unidades recebe somente o id de empresas e `cidades`
--quando realizarmos a busca que iremos resolver o nome da cidade e da empresa com base no id
insert into empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);