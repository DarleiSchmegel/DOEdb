//const pg = require('pg');
import pg from 'pg';

/*

*/
const config = {
  host: 'localhost',
  // Do not hard code your username and password.
  // Consider using Node environment variables.
  user: 'postgres',     
  password: 'DOEdb',
  database: "doedb",
  port: 5432,
};

const Client = new pg.Client(config);
Client.connect(err => {
  if (err) {
      throw err;
  } else {
      console.log("Conectou...");
      queryDatabase();
  }
});

function queryDatabase() {
  /*sql*/
  const query = `
      DROP TABLE IF EXISTS doacao;
      DROP TABLE IF EXISTS vinculacao;
      DROP TABLE IF EXISTS funcionario;
      DROP TABLE IF EXISTS estoque;
      DROP TABLE IF EXISTS sala_possui_funcionamento;
      DROP TABLE IF EXISTS sala;

      DROP TABLE IF EXISTS funcionamento;

      DROP TABLE IF EXISTS hospital;

      CREATE TABLE hospital ( id serial PRIMARY KEY, nome VARCHAR(100) NOT NULL, telefone VARCHAR(13), cidade VARCHAR(50) NOT NULL, endereco VARCHAR(150), email VARCHAR(50) UNIQUE NOT NULL, senha VARCHAR(50) NOT NULL);
      INSERT INTO hospital ( nome, telefone, cidade, endereco, email, senha) VALUES ('Nossa Senhora', '51998388868', 'Camaquã', 'R. Cel, R. Cristóvão Gomes de Andrade, 665, Camaquã - RS, 96180-000', 'nossasenhora@gmail.com', '0000');
      INSERT INTO hospital ( nome, telefone, cidade, endereco, email, senha) VALUES ('Santa Casa de Misericórdia', '53998300068', 'Pelotas', 'Praça Piratinino de Almeida, 53 - Centro', 'santacasa@gmai.com', '1111');
      
      DROP TABLE IF EXISTS doador;
      CREATE TABLE doador ( cpf VARCHAR(15) NOT NULL PRIMARY KEY, nome VARCHAR(50) NOT NULL, tipo_sangue VARCHAR(3) NOT NULL, telefone VARCHAR(13), email VARCHAR(50) UNIQUE NOT NULL, senha VARCHAR(50) NOT NULL, qtd_doacoes INTEGER default 0);
      INSERT INTO doador ( cpf, nome, tipo_sangue, telefone, email, senha ) 
        VALUES 
          ( '03329354003', 'Darlei Matheus Schmegel', 'O+', '5189007766', 'darlei@gmail.com', '0000');
      INSERT INTO doador ( cpf, nome, tipo_sangue, telefone, email, senha ) 
        VALUES 
          ( '03969000033', 'Bernardo Ribeiro Beling', 'O-', '53981012573', 'bernardo@gmail.com', 'senha');    
      
      CREATE TABLE funcionario ( 
        ssn VARCHAR(6) NOT NULL PRIMARY KEY, 
        nome VARCHAR(50) NOT NULL, 
        funcao VARCHAR(50) NOT NULL, 
        id_hospital INTEGER NOT NULL, 
        FOREIGN KEY (id_hospital) REFERENCES hospital (ID)
          ON DELETE CASCADE
      );
      INSERT INTO funcionario ( ssn, nome, funcao, id_hospital) 
        VALUES ( '123456', 'João Neves', 'Enfermeiro', 1);

      INSERT INTO funcionario ( ssn, nome, funcao, id_hospital) 
        VALUES ( '654321', 'Maria Neves', 'Enfermeiro', 2);

      
      CREATE TABLE  estoque ( 
        id serial PRIMARY KEY,
        "O+"  NUMERIC ( 10 , 3 ) default 0, 
        "O-"  NUMERIC ( 10 , 3 ) default 0, 
        "A+"  NUMERIC ( 10 , 3 ) default 0,  
        "A-"  NUMERIC ( 10 , 3 ) default 0,  
        "aAB+" NUMERIC ( 10 , 3 ) default 0,  
        "B+"  NUMERIC ( 10 , 3 ) default 0,  
        "B-"  NUMERIC ( 10 , 3 ) default 0,
        id_hospital INTEGER NOT NULL,
        FOREIGN KEY (id_hospital) REFERENCES hospital (id)
          ON DELETE CASCADE
      );
      INSERT INTO estoque ("O+", "O-", id_hospital) 
        VALUES ( 0.300, 1.590, 1);

      INSERT INTO estoque ("O+", "A-", id_hospital) 
        VALUES ( 0.300, 2.590, 2);

      CREATE TABLE vinculacao (
        id INTEGER NOT NULL,
        cpf VARCHAR(15) NOT NULL,
        PRIMARY KEY (id, cpf),
        FOREIGN KEY (id) REFERENCES hospital (id)
          ON DELETE CASCADE,
        FOREIGN KEY (cpf) REFERENCES doador (cpf)
          ON DELETE CASCADE 
      );

      INSERT INTO vinculacao (id, cpf) 
        VALUES (1,'03329354003');
      INSERT INTO vinculacao (id, cpf) 
        VALUES (2,'03969000033');

      CREATE TABLE  sala ( 
        numero INTEGER NOT NULL,
        id_hospital INTEGER NOT NULL,

        PRIMARY KEY (numero, id_hospital),
        FOREIGN KEY (id_hospital) REFERENCES hospital (id)
          ON DELETE CASCADE
      );

      INSERT INTO sala( numero, id_hospital) 
        VALUES
          (1, 1),
          (2,1),
          (3,1),
          (1,2),
          (2,2),
          (3,2);
          
      CREATE TABLE  funcionamento ( 
        id serial PRIMARY KEY,
        dia_semana VARCHAR(15) NOT NULL,
        hora_inicio time NOT NULL,
        hora_fim time NOT NULL
      );

      INSERT INTO funcionamento ( dia_semana, hora_inicio, hora_fim) 
        VALUES
          ('segunda', '13:00','13:59'),
          ('segunda', '14:00','14:59'),
          ('segunda', '15:00','15:59'),
          ('segunda', '16:00','16:59'),
          ('segunda', '17:00','17:59'),
          ('terca', '13:00','13:59'),
          ('terca', '14:00','14:59'),
          ('terca', '15:00','15:59'),
          ('terca', '16:00','16:59'),
          ('terca', '17:00','17:59');
      
      CREATE TABLE sala_possui_funcionamento  ( 
        numero_sala INTEGER NOT NULL,
        id_hospital INTEGER NOT NULL,
        id_funcionamento INTEGER NOT NULL,

        PRIMARY KEY (numero_sala, id_hospital, id_funcionamento),
        FOREIGN KEY (numero_sala,id_hospital) REFERENCES sala (numero,id_hospital)
          ON DELETE CASCADE,
        FOREIGN KEY (id_funcionamento) REFERENCES funcionamento (id)
          ON DELETE CASCADE
      ); 
      
      INSERT INTO sala_possui_funcionamento 
        ( numero_sala , id_hospital, id_funcionamento)
        VALUES
          (1,2,1),
          (1,2,2),
          (1,2,3),
          (1,2,4),
          (1,2,5),
          (2,2,6),
          (2,2,7),
          (2,2,8),
          (2,2,9),
          (2,2,10),
          
          (3,2,1),
          (3,2,2),
          (3,2,3),

          (3,2,5),
          (3,2,6),
          (3,2,7),

          (1,1,1),
          (1,1,2),
          (1,1,3),
          (1,1,4),
          (1,1,5),
          (2,1,6),
          (2,1,7),
          (2,1,8),
          (2,1,9),
          (2,1,10),
          
          (3,1,1),
          (3,1,2),
          (3,1,3),

          (3,1,5),
          (3,1,6),
          (3,1,7)
          ;
      CREATE TABLE doacao (
        id_doacao serial PRIMARY KEY,
        tipo_sangue VARCHAR(3) NOT NULL,
        qtde_doado NUMERIC ( 10 , 3 ) default 0,
        _data DATE NOT NULL,
        hora time NOT NULL,
        numero_sala INTEGER NOT NULL,
        id_hospital INTEGER NOT NULL,
        cpf_doador VARCHAR(15) NOT NULL,
        ssn_funcionario VARCHAR(6) NOT NULL,

        FOREIGN KEY (numero_sala,id_hospital) REFERENCES sala (numero,id_hospital)
          ON DELETE CASCADE,
        FOREIGN KEY (cpf_doador) REFERENCES doador (cpf)
          ON DELETE CASCADE,
        FOREIGN KEY (ssn_funcionario) REFERENCES funcionario (ssn)
          ON DELETE CASCADE
      );
        
      INSERT INTO doacao 
        ( tipo_sangue, _data, hora, numero_sala , id_hospital, cpf_doador, ssn_funcionario)
          VALUES
            ( 'O+', '2021-06-17','13:00:00',1, 1, '03329354003', '123456');

  `;

  Client
      .query(query)
      .then(() => {
          console.log('Table created successfully!');
          //Client.end(console.log('Closed client connection'));
      })
      .catch(err => console.log(err))
      .then(() => {
          console.log('Finished execution, exiting now');
          //process.exit();
      });
}

export { Client };
//module.exports = Client;



