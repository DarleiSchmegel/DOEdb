import { Client } from "../database/index.js";
class HospitalController {

  async register(req, res){
    const { nome, telefone, cidade, endereco, email, senha } = req.body;
     try {
      
        const query = `INSERT INTO hospital 
          ( nome, telefone, cidade, endereco, email, senha ) 
          VALUES 
            ( '${nome}',
              '${telefone}', 
              '${cidade}', 
              '${endereco}', 
              '${email}', 
              '${senha}'
            );`
        console.log(query);
    
        await Client.query(query)
        res.status(200).send({message: 'Cadastro realizado com sucesso.'});
      
     } catch (error) {
       console.log(error)
       //res.status(400).json({error})
       res.status(400).send({message: `Falha ao registrar Hospital. \n ${ error }`})
     }
   }

   async login(req, res){
    const { email, senha } = req.body;
     try {
      
        const query = `SELECT id, nome, telefone, cidade, endereco, email FROM hospital WHERE email='${email}' AND senha='${senha}';`;
        console.log(query);

        const data = (await Client.query(query)).rows
        
        if( data .length === 0 )
          return  res.status(400).json({message: 'Usuário ou senha incorretos.'});
        

        console.log(data);
        res.status(200).send(data);
      
     } catch (error) {
       console.log(error)
       res.status(500).send({message: 'Falha ao carregar Doadores.'})
     }
   }
};

export { HospitalController };
  