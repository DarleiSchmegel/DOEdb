import React, { useState } from 'react';
//import { useHistory, Link } from 'react-router-dom';
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from '../../../styles/pages/Login.module.css'
// export default function Login({ history }) 

import { api } from "../../../services/api";

interface ItemHospital {
  id: string,
  nome: String,
  cidade: String,
  endereco: String,
  telefone: String,
  email: String,
  senha: String,
  qtd_doacoes: String
}
const Login: React.FC = () => {
  //const history = useHistory();
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();
    //<ItemHospital[]>
    console.log(email)
  console.log(password)
  const headers = {
    email,
    senha:password
  };
    try {
      const  response = await api.get("/hospital/login",{
        headers
      });
      console.log(response.data[0])
      console.log("storage",response.data[0].id)
      localStorage.setItem('hospital_id', response.data[0].id);
      localStorage.setItem('hospital_name', response.data[0].nome);
      router.push('/admin/hospital/dashboard');

    } catch (error) {
      console.log("error",error.response.data.message);
      alert(error.response.data.message);
      //console.log()
    }


    //router.push('/admin/hospital/dashboard')


  }

  return (
    <div className={styles.containerLogin}>
        <div className={styles.login}>
          <header className={styles.headerSubscription}>
            <h1>DB Donors</h1>
          </header>
          <div className={styles.sectionSubscription}>

            <form onSubmit={handleSubmit}>

              <input
                type="name"
                id="name"
                placeholder="E-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={event => setPassword(event.target.value)}

              />

              <button className={styles.btn} type="submit">Entrar</button>

            </form>
            <div className={styles.registerBtn}>

              {/* <button id="auth-primary" onClick={() => { history.push('./register') }} >Registrar-se<FiArrowRight size={16} color="0000bb" /></button> */}
              
              {/* <FiArrowRight className="arrow-right"   /> */}
              <Link href='/admin/hospital/register'>Registrar-se</Link> 

            </div>

          </div>

          {/* <Loading /> */}

        </div>
    </div>
  );
}
export default Login;
