# Exercícios Backend | Aula 3 | 11/07

###### tags: `backend` `exercícios` `fullstackprogram`

#### Parte 1: Sublinguagens do SQL: Linguagem de Definição de Dados

##### // Sistema de Aluguel de Imóveis

##### Schema

```sql
CREATE TABLE imoveis (
  codigo INTEGER,
  tipo_imovel TEXT,
  tamanho REAL,
  valor REAL,
  qtd_quartos INTEGER,
  qtd_banheiros INTEGER,
  vagas_garagem INTEGER,
  varanda BOOLEAN
);
  
  INSERT INTO imoveis (codigo, tipo_imovel, tamanho, valor, qtd_quartos, qtd_banheiros, vagas_garagem, varanda) VALUES (200201,'kitnet', 45, 800, 1, 1, 0, FALSE);
  INSERT INTO imoveis (codigo, tipo_imovel, tamanho, valor, qtd_quartos, qtd_banheiros, vagas_garagem, varanda) VALUES (200202, 'apartamento', 80, 2000, 3, 2, 2, TRUE);
  INSERT INTO imoveis (codigo, tipo_imovel, tamanho, valor, qtd_quartos, qtd_banheiros, vagas_garagem, varanda) VALUES (200203, 'casa', 150, 2500, 4, 2, 2, FALSE);
  INSERT INTO imoveis (codigo, tipo_imovel, tamanho, valor, qtd_quartos, qtd_banheiros, vagas_garagem, varanda) VALUES (200204, 'apartamento', 60, 1300, 2, 2, 1, FALSE);
  INSERT INTO imoveis (codigo, tipo_imovel, tamanho, valor, qtd_quartos, qtd_banheiros, vagas_garagem, varanda) VALUES (200205, 'apartamento', 75, 2200, 2, 3, 1, TRUE);
  INSERT INTO imoveis (codigo, tipo_imovel, tamanho, valor, qtd_quartos, qtd_banheiros, vagas_garagem, varanda) VALUES (200206, 'duplex', 70, 3, 2800, 2, 1, TRUE);

  CREATE TABLE proprietario (
  nome_sobrenome VARCHAR(40),
  email VARCHAR (40),
  telefone TEXT
);
  
  INSERT INTO proprietario (nome_sobrenome, email, telefone) VALUES ('Clarice Lispector', 'clarice@planetaterra.com.br', '889724954');
  INSERT INTO proprietario (nome_sobrenome, email, telefone) VALUES ('Machado de Assis', 'machado@planetaterra.com.br', '986543278');
  INSERT INTO proprietario (nome_sobrenome, email, telefone) VALUES ('Hugo Mae', 'hugo@planetaterra.com.br', '888267598');
  INSERT INTO proprietario (nome_sobrenome, email, telefone) VALUES ('Cora Coralina', 'cora@planetaterra.com.br', '896752184');
  INSERT INTO proprietario (nome_sobrenome, email, telefone) VALUES ('Hilda Hilst', 'hilda@planetaterra.com.br', '892145276');
  
```
###### `link to work`: http://sqlfiddle.com/#!17/c6844/1

---

### Parte 2:  Sublinguagens do SQL - Linguagem de Manipulação de Dados (DML)

##### // Cardápio Digital

###### Schema

```sql
CREATE TABLE cardapio (
  nome TEXT,
  preco REAL, 
  porcao TEXT, 
  ingredientes TEXT,
  tempo_preparo TIME
  );
  
  CREATE TABLE combos (
  nome TEXT,
  preco REAL, 
  porcao TEXT,
  tempo_preparo TIME
  );
  
  INSERT INTO cardapio (nome, preco, porcao, ingredientes, tempo_preparo) VALUES ('falafel', 15, 'seis bolinhos', 'grao de bico e especiarias', '00:20:00');
  INSERT INTO cardapio (nome, preco, porcao, ingredientes, tempo_preparo) VALUES ('mini wraps de couve', 26, 'cinco mini wraps', 'couve, abobrinha, brocolis, cenoura e especiarias', '00:20:00');
  INSERT INTO cardapio (nome, preco, porcao, ingredientes, tempo_preparo) VALUES ('hummus', 18, '200 ml', 'grao de bico, tahine e especiarias', '00:20:00');
  INSERT INTO cardapio (nome, preco, porcao, ingredientes, tempo_preparo) VALUES ('tabule', 35, 'bowl individual', 'trigo, tomate, pepino, cebola e especiarias', '00:20:00');
  
  
  INSERT INTO combos (nome, preco, porcao, tempo_preparo) VALUES ('combo mini wraps', 40, 'mini wraps, suco natural, salada do dia', '00:20:00');
  INSERT INTO combos (nome, preco, porcao, tempo_preparo) VALUES ('combo falafel', 40, 'bolinhos de falafel, suco natural, salada de tabule', '00:20:00');
  INSERT INTO combos (nome, preco, porcao, tempo_preparo) VALUES ('combo completo', 50, 'mini wraps, tabule, hummus, porçao falafel, suco natural', '00:20:00');
  
```
###### `link to work`: http://sqlfiddle.com/#!17/47d28


#### Atualização

```
UPDATE cardapio
SET preco = 32
WHERE nome = 'tabule';

SELECT * FROM cardapio
```
###### `link to work`: http://sqlfiddle.com/#!17/47d28/15

#### Deleção

```
DELETE FROM cardapio
WHERE nome = 'hummus';

SELECT * FROM cardapio
```

###### `link to work`: http://sqlfiddle.com/#!17/47d28/21

### Parte 3:  Sublinguagens do SQL - Linguagem de Consulta de Dados

##### // Exercício 1 - Cardápio Virtual


```sql
SELECT * FROM cardapio WHERE preco <= 10
AND tempo_preparo <= '00:10:00'
```
###### `link to work`: http://sqlfiddle.com/#!17/47d28/23

##### // Exercício 2 - Lista de imóveis


```sql
SELECT * FROM imoveis WHERE tipo_imovel = 'casa'
AND qtd_quartos >= 2
AND vagas_garagem >= 1
AND qtd_banheiros >=2;
```
###### `link to work`: http://sqlfiddle.com/#!9/c6844b/9

##### // Exercício 3 - Estudantes 

```sql
  SELECT * FROM  estudantes
  WHERE materia_favorita = 'Backend'
  AND idade > 25
  AND idade < 45
  OR nome <> 'Bruce Wayne';
```
###### `link to work`: http://sqlfiddle.com/#!9/b90689/1

##### // Exercício 4 - Estudantes 2


```sql
  SELECT * FROM estudantes
  WHERE idade >= 18
  OR  materia_favorita <> 'Frontend';
```
###### `link to work`: http://sqlfiddle.com/#!9/b90689/16

* nao consegui completar todos os requisitos desse último exercício. Eu nao soube como selecionar as três variáveis: nome, cidade e profissão de pessoas entre 18 e 98 anos, excluindo as que têm entre 21 e 24 anos.!

* [Uploading file..._qtw16k6np]()
