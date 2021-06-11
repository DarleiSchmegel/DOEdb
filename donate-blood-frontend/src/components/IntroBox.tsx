import { useState } from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'; 

import styles from '../styles/components/IntroBox.module.css';


import { FormDonationRegistration } from './FormDonationRegistration'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    container: {
      transition: 'all 3000ms',
    },

  }),
);

export function IntroBox() {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  const classes = useStyles();
  //const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  // function ShowHideFormDonationRegistrationOpen() {
  //   if(!isFormOpen){
  //     setIsFormOpen(true)
  //   }else{
  //     setIsFormOpen(false)
  //   }
  // }
  return (
    <>
      <div className={styles.introBoxConatainer}>
        <img 
          className="logo" 
          src="logo.png" 
          alt="Imagem de DOE"
        />
        <h2>A sua doação importa</h2>
        <p>Até 3 vidas com1 doação</p>
        <p>Mais de 38.000 doações são necessárias todos os dias</p>
        <p>Apenas 1,9% da população brasileira doa sangue</p>
        {!checked ?
          <button onClick={handleChange}>Quero ajudar</button> :
          <button onClick={handleChange}>Não quero ajudar</button>
        }
      </div>
      <Collapse in={checked}>
        <div className={classes.container}>

          <FormDonationRegistration/>
        </div>
      </Collapse>
      {/* //{isFormOpen && <FormDonationRegistration/>} */}
    </> 
  );
}