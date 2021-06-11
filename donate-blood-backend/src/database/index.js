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
  const query = `
      DROP TABLE IF EXISTS vinculacao;
      DROP TABLE IF EXISTS funcionario;
      DROP TABLE IF EXISTS estoque;
      DROP TABLE IF EXISTS hospital;

      CREATE TABLE hospital ( id serial PRIMARY KEY, nome VARCHAR(50) NOT NULL, telefone VARCHAR(13), cidade VARCHAR(50) NOT NULL, endereco VARCHAR(70), email VARCHAR(50) UNIQUE NOT NULL, senha VARCHAR(50) NOT NULL);
      INSERT INTO hospital ( nome, telefone, cidade, endereco, email, senha) VALUES ('Nossa Senhora', '51998388868', 'Camaquã', 'R. Cel, R. Cristóvão Gomes de Andrade, 665, Camaquã - RS, 96180-000', 'nossasenhora@gmail.com', '0000');
      INSERT INTO hospital ( nome, telefone, cidade, endereco, email, senha) VALUES ('Santa Casa de Misericórdia', '53998300068', 'Pelotas', 'Praça Piratinino de Almeida, 53 - Centro', 'santacasa@gmai.com', '1111');
      
      DROP TABLE IF EXISTS doador;
      CREATE TABLE doador ( cpf VARCHAR(15) NOT NULL PRIMARY KEY, nome VARCHAR(50) NOT NULL, tipo_sangue VARCHAR(3) NOT NULL, telefone VARCHAR(13), email VARCHAR(50) UNIQUE NOT NULL, senha VARCHAR(50) NOT NULL, qtd_doacoes INTEGER default 0);
      INSERT INTO doador ( cpf, nome, tipo_sangue, telefone, email, senha ) VALUES ( '03329452003', 'Darlei Matheus Schmegel', 'O+', '5189007766', 'darlei@gmail.com', '0000');
      INSERT INTO doador ( cpf, nome, tipo_sangue, telefone, email, senha ) VALUES ( '01123698702', 'Bernardo Ribeiro Beling', 'AB+', '539076566', 'bernardo@gmail.com', '1111');    
      
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
        "o+"  NUMERIC ( 10 , 3 ) default 0, 
        "o-"  NUMERIC ( 10 , 3 ) default 0, 
        "a+"  NUMERIC ( 10 , 3 ) default 0,  
        "a-"  NUMERIC ( 10 , 3 ) default 0,  
        "ab+" NUMERIC ( 10 , 3 ) default 0,  
        "b+"  NUMERIC ( 10 , 3 ) default 0,  
        "b-"  NUMERIC ( 10 , 3 ) default 0,
        id_hospital INTEGER NOT NULL,
        FOREIGN KEY (id_hospital) REFERENCES hospital (id)
          ON DELETE CASCADE
      );
      INSERT INTO estoque ("o+", "o-", id_hospital) 
        VALUES ( 0.300, 1.590, 1);

      INSERT INTO estoque ("o+", "a-", id_hospital) 
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
        VALUES (1,'03329452003');
      INSERT INTO vinculacao (id, cpf) 
        VALUES (2,'01123698702');

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



