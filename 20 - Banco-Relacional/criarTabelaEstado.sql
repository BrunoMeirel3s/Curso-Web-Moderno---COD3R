-- Criando a tabela estado
-- ENUM nos permite criar uma coluna com valores pré-definidos
-- UNIQUE ajusta o campo para que o mesmo não possua valores repetidos na tabela
create table estados(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5, 2) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);