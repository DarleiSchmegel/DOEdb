import React, { useState } from 'react';
//import { useHistory, Link } from 'react-router-dom';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from '../../../styles/pages/Login.module.css';

import { api } from '../../../services/api';
// export default function Login({ history }) 
const Register: React.FC = () => {
  //const history = useHistory();
  const router = useRouter();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();

    //Lógica pra iserir na tabela de usuários aqui
    try {
      
      const response = await api.post("/hospital/register",{
        nome: name,
        telefone: phone,
        cidade: city,
        endereco: address,
        email,
        senha: password,
      });
      console.log("Response",response.data);
      alert(response.data.message)
      
      router.push('/admin/hospital/dashboard')
    } catch (error) {
      console.log(error.response.data.message)
      alert(`Ocorreu um ao fazer o cadastro : ${ error.response.data.message }`);
    }
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
                placeholder="Nome instituição"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              <input
                type="city"
                id="city"
                placeholder="Cidade"
                value={city}
                onChange={event => setCity(event.target.value)}
              />   
              <input
                type="address"
                id="address"
                placeholder="Endereço"
                value={address}
                onChange={event => setAddress(event.target.value)}
              />

              <input  
                type="phone"
                id="phone"
                placeholder="Telefone"
                value={phone}
                onChange={event => setPhone(event.target.value)}

              />

              <input
                type="email"
                id="email"
                placeholder="E-Mail"
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
  
              

              <button className={styles.btn} type="submit">CADASTRAR</button>

            </form>
            <div className={styles.registerBtn}>

              {/* <button id="auth-primary" onClick={() => { history.push('./register') }} >Registrar-se<FiArrowRight size={16} color="0000bb" /></button> */}
              
              {/* <FiArrowRight className="arrow-right"   /> */}
              <Link href='/admin/hospital/login'>Voltar</Link> 

            </div>

          </div>

          {/* <Loading /> */}

        </div>
    </div>
  );
}
export default Register;
