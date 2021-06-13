
import styles from '../styles/components/LastDonors.module.css';
import  { api }  from "../services/api";
import { useEffect, useState } from 'react';

const LastDonors: React.FC = () => {
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

  
  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.get("/donors");
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
  <div className={styles.lastDonorsContainer}>
    
    
    <h2>Veja quem já é <span>doador</span></h2>
    
    <div className={styles.donors}>
      {items.map((doador) => (

        <div  key={doador.cpf} className={styles.donor}>
          <div className={styles.blood}>{doador.tipo_sangue}</div>
          <p>{doador.nome}</p>
        </div>
        
      ))}
      </div>

  </div>
  )
}
export default LastDonors;