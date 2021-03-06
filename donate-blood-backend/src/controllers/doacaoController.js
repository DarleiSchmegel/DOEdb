
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
  async collect (req, res) {//qtde_doado
    const { id_doacao, tipo_sangue, id_hospital, cpf_doador } = req.body.coleta;
    const { value } = req.body; 
    console.log(req.body);
    try {

     
      let query = `UPDATE doacao SET qtde_doado='${value}' 
                      WHERE id_doacao='${id_doacao}';`
      console.log(query);

      await Client.query(query);
      query = `UPDATE estoque SET "${tipo_sangue}"='${value}' 
                      WHERE id_hospital='${id_hospital}';`
      console.log(query);
      await Client.query(query);

      query = `UPDATE doador SET qtd_doacoes = qtd_doacoes + 1 
                      WHERE cpf='${cpf_doador}';`
      console.log(query);
      await Client.query(query);
      

    res.status(200).send({message: 'coleta realizado com sucesso.'});
    } catch (error) {
      console.log(error)
      res.status(500).send({message: 'Falha ao realizar coleta.'})
    }  }

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
  async update(req, res){
    //console.log(req.params.key, " = ",req.params.value);
    const { key, value, id_doacao} = req.body;

    try {
     
      let query = `UPDATE doacao SET ${key}=${value} WHERE id_doacao=${id_doacao};`
      console.log(query)
      await Client.query(query);
      //console.log(query);
      query = `SELECT * FROM doacao WHERE id_doacao='${id_doacao}';`;
      
      const data = (await Client.query(query)).rows
      
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      console.log(error)
      res.status(400).send({message: 'Falha ao registrar quantidade se sangue doada.'})
    }
  }

  async index(req, res){
    const { id_hospital } = req.params;
    try {
      const query = `SELECT * FROM doacao WHERE id_hospital=${id_hospital};`;
    
      const data = (await Client.query(query)).rows
      
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      console.log(error)
      res.status(500).send({message: 'Falha ao carregar Doações.'})
    }
  }


}

export { DoacaoController };
