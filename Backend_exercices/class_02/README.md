# Exercícios Backend | Aula 2 | 09/07 

###### tags: `backend` `exercícios` `fullstackprogram`

### Schema

```sql
CREATE TABLE notas_alunos (
matricula SERIAL,
nome TEXT,
nota REAL,
disciplina TEXT
);

INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123456, 'Marcelo Montenegro', 10, 'Matemática');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123457, 'Lidiane Lima', 6, 'Geografia');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123458, 'Leonel Brizola de Souza', 9, 'Políticas Econômicas');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123459, 'Dejanira Martins', 8, 'Banco de Dados I');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123460, 'Eleonor Batista', 9, 'Química');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123461, 'Greg Lestrade', 10, 'Inglês');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123462, 'Irene Adler', 9, 'Geografia');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123463, 'Alan Turing', 10, 'Lógica de Programação');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123464, 'Larry Page', 9, 'Matemática');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123465, 'Lando Calrissian', 9, 'Ed. Física');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123466, 'Pavel Chekov', 10, 'Física');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123467, 'John von Neumann', 10, 'Matemática');
INSERT INTO notas_alunos (matricula, nome, nota, disciplina) VALUES (123468, 'Alberto Santos Dumont', 0, 'Física');
```

### Perguntas 

#### 1. Encontre os alunos que tiraram nota 10 em alguma matéria:

```sql
SELECT * FROM notas_alunos WHERE nota = 10;
```
###### `link`: http://sqlfiddle.com/#!9/8e1663/83
____

#### 2. O primeiro passo para listar todas as disciplinas com notas:

```sql
SELECT Disciplina, Nota FROM notas_alunos; 
```
###### `link`: http://sqlfiddle.com/#!9/8e1663/92

___

#### 3. Verificar a listagem de todos os alunos apenas com seus nomes:

```sql
SELECT Nome FROM notas_alunos;
```
###### `link`: http://sqlfiddle.com/#!9/8e1663/93
___

#### 4. Atualizar a nota do Alberto Santos Dumont para 5:

```sql
UPDATE notas_alunos
SET nota = 5
WHERE matricula = 123468;

SELECT * FROM notas_alunos;
```
###### `link`: http://sqlfiddle.com/#!17/8e166/560

____

#### 5. Remover por completo a entrada do Larry Page:

```sql
DELETE FROM notas_alunos 
WHERE matricula = 123464;

SELECT * FROM notas_alunos;
```
###### `link`: http://sqlfiddle.com/#!17/8e166/561
____
