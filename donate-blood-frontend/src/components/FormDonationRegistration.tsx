import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react';
// formDonationRegistration 
import styles from '../styles/components/FormDonationRegistration.module.css'



export function FormDonationRegistration() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [phone, setPhone] = useState('');
  const [hospital, setHospitar] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(name, CPF, bloodType)

    //Lógica pra iserir na tabela de usuários aqui

    router.push('/admin/donor/dashboard')
  
  
  }
  return (
    <div className={styles.formDonationRegistration}>
    <h2>Entre na lista de doadores</h2>
    <form onSubmit={handleSubmit}>

              <input
                type="name"
                id="name"
                placeholder="Nome instituição"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              <input
                type="cpf"
                id="cpf"
                placeholder="CPF"
                value={CPF}
                onChange={event => setCPF(event.target.value)}
              />   
              <input
                type="bloodType"
                id="bloodType"
                placeholder="Tipo sanguíneo"
                value={bloodType}
                onChange={event => setBloodType(event.target.value)}
              />

              <input  
                type="phone"
                id="phone"
                placeholder="Telefone"
                value={phone}
                onChange={event => setPhone(event.target.value)}

              />

              <input  
                type="hospital"
                id="hospital"
                placeholder="Hospital onde doar"
                value={hospital}
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
        <button>Cadastrar</button>
    </form>

</div>
  )
}