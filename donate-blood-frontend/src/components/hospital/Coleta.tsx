// import Navbar from '../../../components/Navbar'

import { useEffect, useState } from "react";
//import styles from '../../styles/components/hospital/Agenda.module.css';
import stylesForm from '../../styles/components/FormDashboard.module.css';
import styleCardes from '../../styles/components/CardsDashboard.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


import { api } from "../../services/api";
const Coleta: React.FC = () => {
  interface Item {
    id_doacao: number,
    tipo_sangue: string,
    qtde_doado: string,
    _data: string,
    hora: string,
    numero_sala: number,
    id_hospital: number,
    cpf_doador: string,
    ssn_funcionario: number
  }
  // const [items, setItems] = useState<Item[]>([]);
  const [key, setKey] = useState('cpf');
  const [value, setValue] = useState('');
  
  const [items, setItems] = useState<Item[]>([]);
  const [coleta, setColeta] = useState<Item>(null);
  const [atualiza, setAtualiza] = useState<boolean>(true);
  async function handleSubmit(event: any) {
    try {
      event.preventDefault();
      //alert(`${key} = ${value}`);
      console.log(coleta, value);
      const response = await api.post(`/doacao/collect`, {
        coleta,
        value
      });
      console.log(response)
      alert(`resposta \n ${response.data.message}`);

      setAtualiza(!atualiza)
      //setItems(data);
    } catch (error) {
      alert(error.data.message)
    }
  }

  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.get(`/doacao/${localStorage.getItem("hospital_id")}`);

        setItems(data);
        
        console.log(data);
        console.log("items", items)
      } catch (error) {
        console.log(error)
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();
  }, [atualiza]);

  async function getColeta(c:Item) {
    await setColeta(c)
    console.log(coleta)
  }

  return (

    <>
      {/* <Navbar/> */}
      {/* <div >className={styles.donationRegistration} */}
      <div>

        <div className={styleCardes.containerCards}>
          {items.length === 0 && (
            <h1>Não há nenhuma coleta para ser realizada.</h1>
          )}
          <div className={styleCardes.cards}>
            {items.map((doador) => (
              <div key={doador.id_doacao} className={styleCardes.card}>
                <p><strong>ID Doação:</strong> {doador.id_doacao}</p>
                <p><strong>TIPO SANGUINEO:</strong> {doador.tipo_sangue}</p>
                <p><strong>DATA:</strong> {doador._data.substr(0,10)}</p>
                <p><strong>HORA:</strong> {doador.hora}</p>
                <p><strong>Nº SALA:</strong> {doador.numero_sala}</p>
                {/* <p><strong>           :</strong> {doador.id_hospital}</p> */}
                <p><strong>CPF DOADOR:</strong> {doador.cpf_doador}</p>
                <p><strong>SSN FUNCIONARIO:</strong> {doador.ssn_funcionario}</p>
                <p><strong>QUANTIDADE DOADO:</strong> {doador.qtde_doado}</p>

                {/* <p>{doador.senha}</p> */}
                

                <form onSubmit={handleSubmit} className={stylesForm.formDashboard}>
                <input
                  type="name"
                  id="name"
                  placeholder={`Digite a quantidade sangue coletada.`}
                  value={value}
                  onChange={event => setValue(event.target.value)}
                />

                  {/* <button className="btn" type="submit">Buscar</button> */}
                  <button className="btn-confirm" type="submit" onClick={async()=> await setColeta(doador)} ><FontAwesomeIcon icon="cloud-upload-alt" id="icons"/> Registrar Coleta</button>
                </form>
                <div>

                    </div>
              </div>

              
            ))}
          </div>
        </div>
      </div>


    </>

  )
}
export default Coleta;