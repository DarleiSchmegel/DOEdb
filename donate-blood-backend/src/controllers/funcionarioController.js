
import { Client } from "../database/index.js";
class FuncionarioController {
  
  async register(req, res){
   const { ssn, nome, funcao, id_hospital } = req.body;
    try {
      const query = `INSERT INTO funcionario 
        ( ssn, nome, funcao, id_hospital ) 
        VALUES 
          ( '${ssn}',
            '${nome}', 
            '${funcao}',
            '${id_hospital}'
          );`
    console.log(query);

    await Client.query(query)
    res.status(200).send({message: 'Cadastro realizado com sucesso.'});
    } catch (error) {
      console.log(error)
      res.status(500).send({message: 'Falha ao realizar registro.'})
    }
  }


  async show(req, res){
    console.log(req.params.key, " = ",req.params.value);
    //res.status(200).send({message: req.params.cpf});
    try {
      const query = `SELECT * FROM funcionario WHERE ${req.params.key}='${req.params.value}';`;
      console.log(query);

      const data = (await Client.query(query)).rows
      
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({message: 'Falha ao carregar Doadores.'})
    }

  }

  async index(req, res){
   
    try {
      const query = 'SELECT * FROM funcionario;';
    
      const data = (await Client.query(query)).rows
      
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({message: 'Falha ao carregar Doadores.'})
    }
  }


}

export { FuncionarioController };
