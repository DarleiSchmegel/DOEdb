// import Navbar from '../../../components/Navbar'

import { useState } from "react";
import styles from '../../styles/components/hospital/Doadores.module.css';
import stylesForm from '../../styles/components/FormDashboard.module.css';
import styleCardes from '../../styles/components/CardsDashboard.module.css';

import { api } from "../../services/api";
const Doadores: React.FC = () => {
  interface Item {
    cpf: string,
    nome: String,
    tipo_sangue: String,
    telefone: String,
    email: String,
    senha: String,
    qtd_doacoes: String
  }
  const [items, setItems] = useState<Item[]>([]);
  const [key, setKey] = useState('cpf');
  const [value, setValue] = useState('');
  
  async function handleSubmit(event: any) {
    try {
      event.preventDefault();
      //alert(`${key} = ${value}`);
      const response = await api.get(`/donors/${key}/${value}`);
      //alert(`${key} = ${value} \n ${response.data}`);
      const { data } = response;

      if( data.length === 0  )
        alert("Não foram encontrados doadores com esses valores.")
      console.log(data)
      setItems(data);
    } catch (error) {
      alert(error.data.message)
    }
    

  }
  return (

    <>
      {/* <Navbar/> */}
      <div className={styles.donationRegistration}>

        <form onSubmit={handleSubmit} className={stylesForm.formDashboard}>
          <label>Pesquisar doador por atributo.</label>
          <select value={key} onChange={event => setKey(event.target.value)}>
            <option value="cpf">CPF</option>
            <option value="nome">Nome</option>
            <option value="tipo_sangue">Tipo sangue</option>
            <option value="email">E-Mail</option>
          </select>

          <input
            type="name"
            id="name"
            placeholder={`Digite o ${key}`}
            value={value}
            onChange={event => setValue(event.target.value)}
          />

          <button className="btn" type="submit">Buscar</button>
        </form>
        <div className={styleCardes.containerCards}>
          <div className={styleCardes.cards}>
            {items.map((doador) => (
              <div key={doador.cpf} className={styleCardes.card}>
                <p><strong>NOME          :</strong> {doador.nome}</p>
                <p><strong>CPF           :</strong> {doador.cpf}</p>
                <p><strong>TIPO SANGUINEO:</strong> {doador.tipo_sangue}</p>
                <p><strong>TELEFONE      :</strong> {doador.telefone}</p>
                <p><strong>E-AMIL        :</strong> {doador.email}</p>
                <p><strong>Nº DOCAÇOES   :</strong> {doador.qtd_doacoes}</p>
                {/* <p>{doador.senha}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>


    </>

  )
}
export default Doadores;