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
const Agenda: React.FC = () => {
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
  // const [key, setKey] = useState('cpf');
  // const [value, setValue] = useState('');
  
  const [items, setItems] = useState<Item[]>([]);

  
  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.get("/doacao");

        setItems(data);
        
        console.log(data);
        console.log("items", items)
      } catch (error) {
        console.log(error)
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();
  }, []);

  return (

    <>
      {/* <Navbar/> */}
      {/* <div >className={styles.donationRegistration} */}
      <div>
        <div className={styleCardes.containerCards}>
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
                <div>
                <button className="btn-edit"><FontAwesomeIcon icon="edit" id="icons"/> Editar</button>
                <button className="btn-delete"><FontAwesomeIcon icon="trash-alt" id="icons"/> Deletar</button>
                </div>
              </div>

              
            ))}
          </div>
        </div>
      </div>


    </>

  )
}
export default Agenda;