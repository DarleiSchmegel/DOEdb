import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import { useDasboardMenu } from '../../../context/contextDasboard';

import Home from '../../../components/hospital/Home';
import Agenda from '../../../components/hospital/Agenda';
import Banco from '../../../components/hospital/Banco';
import Doadores from '../../../components/hospital/Doadores';
import Settings from '../../../components/hospital/Settings';
import Funcionarios from '../../../components/hospital/Funcionarios';

import Coleta from '../../../components/hospital/Coleta';
import Salas from '../../../components/hospital/Salas';

const Dashboard: React.FC = () => {
  //const [menuSelected, setMenuSelected] = useState("home");
  const { whatIsOpen } = useDasboardMenu()
  return (
      <>
        <Navbar />
        <section>
          {whatIsOpen == "home" &&
            <Home />
          }
          {whatIsOpen == "agenda" &&
            <Agenda />
          }
          {whatIsOpen == "banco" &&
            <Banco />
          }
          {whatIsOpen == "doadores" &&
            <Doadores />
          }
          {whatIsOpen == "settings" &&
            <Settings />
          }
          {whatIsOpen == "funcionarios" &&
            <Funcionarios />
          }
          {whatIsOpen == "salas" &&
            <Salas />
          }
          {whatIsOpen == "coleta" &&
            <Coleta />
          }          
        </section>
      </>
  )
}
export default Dashboard;
