import React, { useState } from 'react';
//import { useHistory, Link } from 'react-router-dom';
import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from '../../../styles/pages/Login.module.css'
// export default function Login({ history }) 
const Login: React.FC = () => {
  //const history = useHistory();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();
    router.push('/admin/donor/dashboard')
  }

  return (
    <div className={styles.containerLogin}>
        <div className={styles.login}>
          <header className={styles.headerSubscription}>
          <img 
          className="logo" 
          src="/logo.png" 
          alt="Imagem de DOE"
          />
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
              {/* <Link href='/admin/hospital/register'>Registrar-se</Link>  */}

            </div>

          </div>

          {/* <Loading /> */}

        </div>
    </div>
  );
}
export default Login;
