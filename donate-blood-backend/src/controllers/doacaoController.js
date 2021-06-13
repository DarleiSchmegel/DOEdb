
import { Client } from "../database/index.js";
class DoacaoController {
  
  async store(req, res){
   const { tipo_sangue, _data, hora, numero_sala , id_hospital, cpf_doador, ssn_funcionario } = req.body;
    try {

      const query = `INSERT INTO doacao 
      ( tipo_sangue, _data, hora, numero_sala , id_hospital, cpf_doador, ssn_funcionario) 
        VALUES 
          ( '${tipo_sangue}',
            '${_data}', 
            '${hora}',
            '${numero_sala}',
            '${id_hospital}',
            '${cpf_doador}',
            '${ssn_funcionario}'
          );`
    console.log(query);

    await Client.query(query)
    res.status(200).send({message: 'Doação cadastrada realizado com sucesso.'});
    } catch (error) {
      console.log(error)
      res.status(500).send({message: 'Falha ao cadastrar doação.'})
    }
  }


  async show(req, res){
    console.log(req.params.key, " = ",req.params.value);
    //res.status(200).send({message: req.params.cpf});
    try {
      const query = `SELECT * FROM doacao WHERE ${req.params.key}='${req.params.value}';`;
      console.log(query);

      const data = (await Client.query(query)).rows
      
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      console.log(error)
      res.status(500).send({message: 'Falha ao carregar Doacão/Doaçoes.'})
    }

  }

  async index(req, res){
   
    try {
      const query = 'SELECT * FROM doacao;';
    
      const data = (await Client.query(query)).rows
      
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({message: 'Falha ao carregar Doações.'})
    }
  }


}

export { DoacaoController };
