import Head from 'next/head'
import { useState } from 'react'

import styles from '../styles/pages/Home.module.css'
import { IntroBox } from '../components/IntroBox'
import { LastDonors } from '../components/LastDonors'


export default function Home() {
  const [showForm, setShowForm] = useState(false);
  



  return (
    <div className={styles.container}>
      {/* Corpo do HTML: aqui vem todo o conteudo visivel para o usuário dentro 
      de uma certa página  */}
      

        <section>
          <IntroBox/>
            {/* <FormDonationRegistration/> */}
          <LastDonors/>
        </section>
      



        <footer>
            Com ❤ DMSchmegel
        </footer>
    </div>
  )
}
