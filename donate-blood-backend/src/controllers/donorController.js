
import { Client } from "../database/index.js";
class DonorController {
  
  async register(req, res){
   const { cpf, nome, tipo_sangue, telefone, email, senha } = req.body;
    try {
      const query = `INSERT INTO doador 
        ( cpf, nome, tipo_sangue, telefone, email, senha ) 
        VALUES 
          ( '${cpf}',
            '${nome}', 
            '${tipo_sangue}', 
            '${telefone}', 
            '${email}', 
            '${senha}'
          );`
    console.log(query);

    await Client.query(query)
    res.status(200).send({message: 'Cadastro realizado com sucesso.'});
    } catch (error) {
      console.log(error)
      res.status(500).send({message: 'Falha ao realizar registro.'})
    }
  }

  async login(req, res){
    const { email, senha } = req.body;
     try {
      
        const query = `SELECT cpf, nome, tipo_sangue, telefone, email, email FROM doador WHERE email='${email}' AND senha='${senha}';`;
        console.log(query);

        const data = (await Client.query(query)).rows
        


        if( data .length === 0 )
          return  res.status(400).json({message: 'Usuário ou senha incorretos.'});
        

        console.log(data);
        res.status(200).send(data);
      
     } catch (error) {
       console.log(error)
       res.status(500).send({message: 'Falha ao fazer login.'})
     }
   }


  async show(req, res){
    console.log(req.params.key, " = ",req.params.value);
    //res.status(200).send({message: req.params.cpf});
    try {
      const query = `SELECT * FROM doador WHERE ${req.params.key}='${req.params.value}';`;
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
      const query = 'SELECT * FROM doador;';
    
      const data = (await Client.query(query)).rows
      
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({message: 'Falha ao carregar Doadores.'})
    }
  }


}

export { DonorController };
